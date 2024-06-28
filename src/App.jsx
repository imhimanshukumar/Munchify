import React, { lazy, Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Category from "./Category";
import Header from "./Header";
import TopRestraunt from "./TopRestraunt";
import OnlineDelivery from "./OnlineDelivery";
import Footer from "./Footer";
import Cart from "./Cart";
import Help from "./Help";
import Error from "./Error";
import About from "./About";
import RestaurantMenu from "./RestaurantMenu";
import Contact from "./Contact";
import AboutDeveloper from "./AboutDeveloper";
import { Provider } from "react-redux";
import appStore from "./appStore";
import Delivery from "./Delivery";
import Payment from "./Payment";
import OrderSuccess from "./OrderSuccess";

const Grocery = lazy(() => import("./Grocery"));

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Category />
            <TopRestraunt />
            <OnlineDelivery />
            <Footer />
          </>
        ),
      },
      {
        path: "/Help",
        element: <Help />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/AboutDeveloper",
        element: <AboutDeveloper />,
      },
      {
        path: "/Delivery",
        element: <Delivery />,
      },
      {
        path: "/Payment",
        element: <Payment />,
      },
      {
        path: "/OrderSuccess",
        element: <OrderSuccess />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
