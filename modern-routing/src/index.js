import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Home";
// import AboutUs from "./AboutUs";
// import Cart from "./Cart";
// import ContactUs from "./ContactUs";
import { lazy, Suspense } from "react";
import Loader from "./Loader";
import CounterwithUseState from "./ConterwithUseState";

const Home = lazy(() => import("./Home"));
const AboutUs = lazy(() => import("./AboutUs"));

const Cart = lazy(() => import("./Cart"));

const ContactUs = lazy(() => import("./ContactUs"));

let a = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>Page is loading ....</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/counter",
        element: <CounterwithUseState />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: (
          <Suspense fallback={<p>Page is loading ....</p>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <h1>Page is in progress</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={a}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
