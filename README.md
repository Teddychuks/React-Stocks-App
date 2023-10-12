# Project Title

React Stocks App

## Projects Description

- The react stocks app is a stocks information application that displays live prices and technicals of four stocks mainly: AAPL,GOOGL,MSFT,NVDA
- It displays 15minutes live trading volume chart and current fear and greed index of the generals market
- It displays in a tabular format the top 50 most actively traded stocks in the us together with various information for the stocks: price,technicals,fundamentals,performance
- It also displays various current market news and economy news for traders to make informed decisions
- It displays in a tabular format the top 50 major indices around the world together with various information for the indices: price,technicals,fundamentals,performance

## Recommendation

- Utilize custom hooks for better code organization
- Define types for all components and data structures
- Write clear and concise comments to explain complex logic or functionality

## PokeAPI

Retrieve Pokémon list data from https://pokeapi.co/api/v2/pokemon. Implement pagination by adding the `limit` and `offset` query parameters to the API call.

## Getting Started

To set up the app locally, run the following commands:

```shell
$ yarn install
$ yarn dev
```

OR

```shell
$ npm install
$ npm run dev
```

Open http://localhost:3000 to view the project in the browser.

## Development Tips

- Update App.tsx and any other relevant files to implement the infinite scroll functionality
- Consider creating a custom hook to handle the logic for fetching data and managing the scroll state
- Be mindful of performance and avoid unnecessary re-renders

## Project Structure

This project was bootstrapped with [Vite](https://vitejs.dev/), a build tool and development server for lightning-fast development and optimized production builds.

For more information about Vite and its features, visit the [official documentation](https://vitejs.dev/guide/).
