import Header from './Header'
import Searchbar from './Searchbar'
import Table from './Table'
import Pagination from './Pagination'

const List = ({ cta,  title, data, ...props }) => {
  return (
    <div className="p-2">
      <Header name={title} cta={cta} />
      <Searchbar />
      <Table info={data} {...props} />
      <Pagination />
    </div>
  )
}

export default List