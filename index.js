import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const recipes = [
  {
    id: 1,
    title: "Spaghetti",
    description: "Italian dish of thin, round pasta.",
    instructions:
      "Cook spaghetti according to package instructions. Serve with your favorite sauce.",
    cookTime: 20,
    ingredients: ["spaghetti", "water", "salt"],
  },
  {
    id: 2,
    title: "Lasagna",
    description: "Italian dish of wide, flat pasta.",
    instructions:
      "Preheat oven to 375 degrees F (190 degrees C). In a large pot, bring water to a boil. Cook lasagna noodles for 8 to 10 minutes, or until al dente. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese, beaten egg, parsley, and 1/2 cup grated Parmesan cheese. In a separate mixing bowl, place ground beef, and mix in 1/4 cup grated Parmesan cheese, 1/4 cup milk, salt, and pepper. In a 9x13 inch baking dish, spread a small amount of meat sauce. Arrange 3 noodles lengthwise over meat sauce. Spread with one half of the cheese mixture. Spoon meat sauce over cheese mixture. Repeat layers, and top with mozzarella cheese. Bake in preheated oven for 25 minutes. Let stand 10 minutes before serving.",
    cookTime: 45,
    ingredients: [
      "lasagna noodles",
      "ricotta cheese",
      "egg",
      "parsley",
      "parmesan cheese",
      "ground beef",
      "milk",
      "salt",
      "pepper",
      "mozzarella cheese",
    ],
  },
  {
    id: 3,
    title: "Pizza",
    description: "Italian dish of a round, open, baked dough.",
    instructions:
      "Preheat oven to 425 degrees F (220 degrees C). Roll out dough on a lightly floured surface to a thickness of 1/4 inch. Spread tomato sauce over dough, leaving a 1/2 inch border around the edge. Sprinkle with mozzarella cheese, and top with desired toppings. Bake in preheated oven for 12 to 15 minutes, or until crust is golden brown.",
    cookTime: 15,
    ingredients: ["pizza dough", "tomato sauce", "mozzarella cheese"],
  },
];

const schema = buildSchema(`
  type Recipe {
    id: ID!
    title: String!
    description: String!
    instructions: String!
    cookTime: Int!
    ingredients: [String!]!
  }
  type Query {
    recipes: [Recipe!]!
    recipe(id: ID!): Recipe!
  }
`);

const root = {
  recipes: () => recipes,
  recipe: ({ id }) => recipes.filter((recipe) => recipe.id == id)[0],
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Running a GraphQL API server at localhost:4000/graphql");
});
