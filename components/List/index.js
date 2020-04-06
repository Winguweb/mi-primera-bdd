import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Alert from '../Alert'
import Header from './Header'
import Searchbar from './Searchbar'
import Table from './Table'

const List = ({ cta,  title, data, handleSearch, ...props }) => {
  const [showAlert, toggleAlert] = useState(false)
  const router = useRouter()
  const { success } = router.query

  useEffect(() => {
    if (success && success === "true") {
     toggleAlert(true)
    }
  }, [])

  return (
    <div className="p-2">
      { showAlert &&
        <Alert mode="success"></Alert>
      }
      <Header name={title} cta={cta} />
      <Searchbar handleSearch={handleSearch} />
      <Table info={data} {...props} />
    </div>
  )
}

export default List