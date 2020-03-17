import securePage from '../hocs/securePage'
import CustomFields from '../components/CustomFields'

const Customize = props => {
  return (
    <CustomFields />
  )
}

export default securePage(Customize)