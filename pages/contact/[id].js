import { useRouter } from 'next/router'
import securePage from '../../hocs/securePage'

const Contact = (props) => {
  const router = useRouter()

  return (
    <div>
      <h1>{router.query.id}</h1>
      <p>Soy contacto</p>
    </div>
  );
}

export default securePage(Contact)
