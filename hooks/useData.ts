import gql from "graphql-tag"
import { useQuery, UseQueryResponse } from "urql"

type Data = {
  projects: [
    {
      createdBy: string,
      id: number,
      name: string,
    }
  ]
}

export const useData = () => {
  return useQuery<Data>({
    query: gql`
      query {
        projects {
          id
          name
          createdBy
        }
      }
    `,
  });
}