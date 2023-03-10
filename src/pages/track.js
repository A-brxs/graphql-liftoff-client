import React from "react"
import { gql, useQuery } from "@apollo/client"
import { QueryResult } from "../components"
import TrackDetail from "../components/track-detail"

export const GET_TRACK = gql`
  query GetTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    durationInSeconds
    modulesCount
    numberOfViews
    modules {
      id
      title
      durationInSeconds
    }
    description
    }
  }
`

const Track = ({ trackId }) => {

  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId }
  })

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <TrackDetail track={data?.track} />
    </QueryResult>
  )
}

export default Track