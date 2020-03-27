import { Query } from 'react-apollo'
import { GET_OPPORTUNITIES } from '../graphql/opportunity/query/getOpportunities'
import securePage from '../hocs/securePage'
import List from '../components/List'

const Opportunities = props => {
  const title = "Gestión de oportunidades"
  const fields = [
    { name: 'Nombre de la oportunidad',
      key: 'name'
    },
    { name: 'Estado',
      key: 'state.Name'
    },
    { name: 'Tipo',
      key: 'opportunity_type.Name'
    },
    { name: 'Cuenta',
      key: 'account.name'
    },
    { name: 'Fecha',
      key: 'date'
    },
  ]

  const cta = {
    title: "Nueva oportunidad",
    link: "/new-opportunity"
  }
  return (
    <Query query={GET_OPPORTUNITIES}>
      {({ loading, data, error }) => {

      if (loading || !data) {
        return <p>Cargando...</p>;
      }

      return (
        <List 
          cta={cta}
          data={data.opportunities}
          fields={fields}
          title={title}
          workspace="opportunity" />
      )}}
    </Query>
  )
}

export default securePage(Opportunities)