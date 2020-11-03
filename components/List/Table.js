import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import moment from 'moment'
import _ from 'lodash'
import Link from 'next/link'
import Router from 'next/router'
import Pagination from './Pagination'
import TableHeader from './TableHeader'
import {
  Edit,
  Delete
} from '../Icons'

const comparison = (field1, field2, isDate = false) => {  
  if (isDate) {
    return field1.isSameOrAfter(field2) ? 1 : -1
  }

  return field1 < field2 ? 1 : -1
}

const sortInfo = (info, order) => {
  const infoType = info[0] ? (info[0][order.orderField] || info[info.length - 1][order.orderField]) : null
  if (!infoType) {
    return info
  }

  if (typeof infoType === 'object') {    
    return info.sort((objA, objB) => { 
      let lowerA = objA[order.orderField] ? _.lowerCase(objA[order.orderField].name) : ''
      let lowerB = objB[order.orderField] ? _.lowerCase(objB[order.orderField].name) : ''
      return order.orderType === 'asc' ? comparison(lowerA, lowerB) : comparison(lowerB, lowerA)      
    })
  } else if (moment(infoType).isValid()) {    
    return info.sort((objA, objB) => { 
      let lowerA = moment(objA[order.orderField])
      let lowerB = moment(objB[order.orderField])
      return order.orderType === 'asc' ?   comparison(lowerA, lowerB, true) : comparison(lowerB, lowerA, true)      
    })    
  } else if (typeof infoType === 'string') {  
    return info.sort((objA, objB) => { 
      let lowerA = _.lowerCase(objA[order.orderField])
      let lowerB = _.lowerCase(objB[order.orderField])
      return order.orderType === 'asc' ? comparison(lowerA, lowerB) : comparison(lowerB, lowerA)      
    })    
  }
  return info
}

const Table = ({ fields, info, workspace, ...props }) => {
  const [deleteItem, { data }] = useMutation(props.delete, {    
    onCompleted: () => {
      console.log('on table delete')
      window.location.reload()
      // Router.reload(window.location.pathname)
    }
  })
  
  const size = 10

  const [currentPage, changeCurrentPage] = useState(1)

  const [min, changeMin] = useState(Math.min(info.length, 1))

  const [max, changeMax] = useState(Math.min(info.length, 10))

  const [parsedInfo, handleInfo] = useState(info)

  const [{ orderType, orderField }, handleOrder] = useState({
    orderType: null,
    orderField: null
  })

  useEffect(() => {
    //check if has order
    handleInfo(parsedInfo)
  }, [info])
  

  const moveForward = () => {
    changeCurrentPage(currentPage +1)
    changeMin(min + 10)
    changeMax(Math.min((max + 10), parsedInfo.length))
  }

  const moveBackward = () => {
    changeCurrentPage(currentPage - 1)
    changeMin(min - 10)
    changeMax(Math.min((max - 10), parsedInfo.length))
  }


  const nestedFields = [
    'state', 'origin', 'account_type', 'contact_type', 'opportunity_type', 'account'
  ]

  return (
    <div className="w-full mx-auto">
      <div className="bg-white shadow-md my-6">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              { fields && fields.map((field, i) => (
                <TableHeader
                  key={i}
                  field={field}
                  order={orderField === field.key && orderType}
                  handleOrder={(field, type) => {
                    const order = {
                      orderType: !type || type === 'asc' ? 'desc' : 'asc',
                      orderField: field
                    }
                    handleOrder(order)
                    handleInfo(sortInfo(info, order))
                  }}
                />
              ))}
              <th className="py-4 px-6 bg-purple-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"></th>
            </tr>
          </thead>
          <tbody>
            { parsedInfo && parsedInfo
                .slice((currentPage - 1) * size, currentPage * size)
                .map((item, i) => (
                <tr className="bg-grey-lighter cursor-pointer"  key={i}>
                    { fields && fields
                      .map((field, j) => {
               
                      return (
                        <td className="py-4 px-6 border-b border-grey-light" key={j}>
                          <Link href={`/${workspace}/[id]`} as={`/${workspace}/${item.id}`}>
                            <span>
                              { (item[field.key] && item[field.key].name)
                                ? item[field.key].name
                                : item[field.key]
                              }
                            </span>
                          </Link>
                        </td>
                      )
                    })}
                  <td className="px-6 border-b border-grey-light">
                    <div className="flex">
                      <Link href={`/${workspace}/[id]`} as={`/${workspace}/${item.id}`}>
                        <a className="button w-4 h-4 mr-2 text-green-700">
                          <Edit />
                        </a>
                      </Link>
                      <button
                        type='button'
                        className="button w-4 h-4 text-red-600"
                        onClick={e => {
                          e.preventDefault();
                          deleteItem({ variables: { id: item.id } })
                        }}>
                        <Delete />
                      </button>
                    </div>
                  </td>
                </tr>

            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        min={min}
        max={max}
        total={parsedInfo.length}
        moveBackward={moveBackward}
        moveForward={moveForward} />
    </div>
  )
}

export default Table