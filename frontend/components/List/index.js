import Header from './Header'
import Searchbar from './Searchbar'
import Table from './Table'
import Pagination from './Pagination'

const List = ({ name }) => {
  return (
    <div className="p-2">
      <Header name={name} />
      <Searchbar />
      <Table />
      <Pagination />
    </div>
  )
}

export default List