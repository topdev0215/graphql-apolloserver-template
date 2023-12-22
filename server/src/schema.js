const gql = require('graphql-tag')

const typeDefs = gql`
type Query {
  "Get tracks array for homepage grid"
  tracksForHome: [Track!]!
  track(id: ID!): Track
}

type Mutation {
  incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
}

type IncrementTrackViewsResponse {
  "Similar to HTTP status code, represents the status"
  code: Int!
  "Indicates the wether the mutation was successful"
  success: Boolean!
  "Human-readible message for the UI"
  message: String!
  "Newly updated track after a succssful mutation"
  track: Track
}

"A track is a group of Modules that teaches about a specific topic"
type Track {
  id: ID
  title: String!
  author: Author!
  thumbnail: String
  length: Int
  modulesCount: Int
  "The track's complete description, can be in Markdown format"
  description: String
  "The number of times a track has been viewed"
  numberOfViews: Int
  "The track's complete array of Modules"
  modules: [Module!]!
}

"Author of a complete Track or a Module"
type Author {
  id: ID!
  name: String!
  photo: String
}

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
  id: ID!
  "The Module's title"
  title: String!
  "The Module's length in minutes"
  length: Int
  }


`;

module.exports = typeDefs;

