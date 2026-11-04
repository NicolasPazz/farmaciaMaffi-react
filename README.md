# Farmacia Maffi – E-commerce

Online store for a pharmacy built with React, with the product catalog and orders stored in Firebase Firestore. Final project of the Coderhouse React course (2022).

## Features

- Product catalog loaded from Firestore, with category filter (`/categoria/:categoryId`).
- Product detail page with a quantity selector limited by stock.
- Global cart with React Context: add, remove, clear and total.
- Checkout that creates an order in Firestore and decreases the stock of each product.
- Toast notifications and alerts.

## Tech stack

- React 18 + Vite
- React Router
- Firebase Firestore
- React-Bootstrap, MUI and Styled-Components

## Run locally

1. Copy `.env.example` to `.env.local` and fill in the configuration of a Firebase project with `products` and `orders` collections.
2. Run:

```bash
npm install
npm run dev
```
