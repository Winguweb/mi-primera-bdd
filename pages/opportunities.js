import { useState } from 'react'
import { Query } from 'react-apollo'
import { getIdFromLocalCookie } from '../lib/auth'
import { GET_OPPORTUNITIES } from '../graphql/opportunity/query/getOpportunities'
import { DELETE_OPPORTUNITY } from '../graphql/opportunity/mutation/deleteOpportunity'
import securePage from '../hocs/securePage'
import List from '../components/List'

const Opportunities = props => {
  const [search, setSearch] = useState('') 
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
    link: "/opportunity/new"
  }
  return (
    <Query query={GET_OPPORTUNITIES} variables={{
      organization: getIdFromLocalCookie(),
      search: search
      }}>
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
          workspace="opportunity"
          delete={DELETE_OPPORTUNITY}
          refetch={GET_OPPORTUNITIES}
          handleSearch={setSearch} />
      )}}
    </Query>
  )
}

export default securePage(Opportunities)