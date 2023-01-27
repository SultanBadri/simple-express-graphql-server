# simple-express-graphql-server
A simple Express.js and GraphQL server with recipes.

## How to run

First, the repository.

```env
git clone https://github.com/SultanBadri/simple-express-graphql-server.git
```

Now run these commands to start the GraphQL server at http://localhost:4000/graphql.

```env
cd simple-express-graphql-server
npm install
node index.js
```

## To search in GraphiQL

#### To get all of the recipes.

```graphql
{
  recipes {
    id
    title
    description
    instructions
    cookTime
    ingredients
  }
}
```

#### To get recipe with id 1.

```graphql
{
  recipe(id : 1) {
    id
    title
    description
    instructions
    cookTime
    ingredients
  }
}
```

#### Using a query variable to get a certain recipe via its id.

```graphql
query getRecipe($recipeId: ID!) {
  recipe(id: $recipeId) {
    id
    title
    description
    instructions
    cookTime
    ingredients
  }
}
```

NOTE: Make sure to declare a variable `$recipleId` in the Query Variables panel of GraphiQL. 
```graphql
{
  "recipeId": 3
}
```
