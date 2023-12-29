import {
    gql
} from '@apollo/client'
import {
    useQueryAds
} from '../../utils/useQuery'
// make a graphql query that gets all the sessions then logs them
const QUERY = gql `
  query GetSessions {
    sessions {
        clientId
        siteLocation
        siteReferrer
        source
        created
        updated
        actions {
          value
          key
          created
          updated
        }
      }
  }
`;





export default () => {
    // run the query
    console.log(QUERY)
    const result = useQueryAds(QUERY)
    console.log(result)
    return result

}