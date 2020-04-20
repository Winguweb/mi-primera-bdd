import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import Link from 'next/link'
import Router from 'next/router'
import Pagination from './Pagination'
import {
  Edit,
  Delete
} from '../Icons'

const Table = ({ fields, info, workspace, ...props }) => {
  const [deleteItem, { data }] = useMutation(props.delete, {
    onCompleted: () => Router.reload()
  })

  const size = 10

  const [currentPage, changeCurrentPage] = useState(1)

  const [min, changeMin] = useState(Math.min(info.length, 1))

  const [max, changeMax] = useState(Math.min(info.length, 10))

  const moveForward = () => {
    changeCurrentPage(currentPage +1)
    changeMin(min + 10)
    changeMax(Math.min((max + 10), info.length))
  }

  const moveBackward = () => {
    changeCurrentPage(currentPage - 1)
    changeMin(min - 10)
    changeMax(Math.min((max - 10), info.length))
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
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light" key={i}>{field.name}</th>
              ))}
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"></th>
            </tr>
          </thead>
          <tbody>
            { info && info
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
        total={info.length}
        moveBackward={moveBackward}
        moveForward={moveForward} />
    </div>
  )
}

export default Table