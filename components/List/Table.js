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
                <tr className="bg-grey-lighter cursor-pointer" key={i}>
                    { fields && fields
                      .map((field, j) => {
                      return (
                        <td className="py-4 px-6 border-b border-grey-light" key={j}>
                          <Link href={`/${workspace}/[id]`} as={`/${workspace}/${item.id}`}>
                            <span>{item[field.key]}</span>
                          </Link>
                        </td>
                      )
                    })}
                  <td className="py-4 px-6 border-b border-grey-light">
                    <Link href={`/${workspace}/[id]`} as={`/${workspace}/${item.id}`}>
                      <a className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">
                        Editar
                      </a>
                    </Link>
                    <button
                      className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark"
                      onClick={e => {
                        e.preventDefault();
                        deleteItem({ variables: { id: item.id } })
                      }}>
                      Eliminar
                    </button>
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