import { withData } from "next-apollo"
import { setContext } from "apollo-link-context"
import { createUploadLink } from "apollo-upload-client"
import Cookies from "js-cookie"

const uploadLink = createUploadLink({
  uri: `${process.env.API_URL || 'http://localhost:1337'}/graphql`,
  headers: {
    "keep-alive": "true"
  }
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("jwt")
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const config = {
  link: authLink.concat(uploadLink)
}
export default withData(config)