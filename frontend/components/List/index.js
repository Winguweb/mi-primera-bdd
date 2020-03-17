import Header from './Header'
import Searchbar from './Searchbar'
import Table from './Table'
import Pagination from './Pagination'

const List = ({ cta, data, fields, title }) => {
  return (
    <div className="p-2">
      <Header name={title} cta={cta} />
      <Searchbar />
      <Table fields={fields} data={data} />
      <Pagination />
    </div>
  )
}

export default List