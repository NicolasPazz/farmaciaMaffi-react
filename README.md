# Farmacia Maffi – E-commerce

Tienda online de una farmacia hecha en React, con catálogo y órdenes guardados en Firebase Firestore. Proyecto final del curso de React de Coderhouse (2022).

## Funcionalidades

- Catálogo de productos traído de Firestore, con filtro por categoría (`/categoria/:categoryId`).
- Vista de detalle de cada producto con selector de cantidad según el stock.
- Carrito global con React Context: agregar, quitar y vaciar productos, y total de la compra.
- Checkout que genera una orden en Firestore y descuenta el stock de cada producto.
- Notificaciones con toasts y alertas.

## Tecnologías

- React 18 + Vite
- React Router
- Firebase Firestore
- React-Bootstrap, MUI y Styled-Components
- React Icons, React Hot Toast, SweetAlert

## Correr localmente

```bash
npm install
npm run dev
```

## Autor

- [Nicolas Paz](https://github.com/NicolasPazz)
