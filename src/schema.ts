export const typeDefs = `#graphql
 
  type Asteroid {
    name: String
  }
 
  type AsteroidList {
    asteroids: [Asteroid]
  }
 
  type ActionView {
    id: String
    name: String
    asteroidList: AsteroidList
    cost: Int
  }

  type Query {
    actionViews: [ActionView]
  }
`;