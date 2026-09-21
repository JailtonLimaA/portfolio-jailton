import React from "react";
import ReactDOM from "react-dom/client";

import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

import App from "./App";
import UnderConstruction from "./pages/UnderConstruction";

import "./styles.css";

// Rota raiz
const rootRoute = createRootRoute();

// Home
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

// Página em construção
const constructionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/em-construcao",
  component: UnderConstruction,
});

// Árvore de rotas
const routeTree = rootRoute.addChildren([homeRoute, constructionRoute]);

// Router
const router = createRouter({
  routeTree,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
