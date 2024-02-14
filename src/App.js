import React from "react";
import "./index.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// Pages
import {
  AreaChartPage,
  BarChartPage,
  Calendar,
  CreateUser,
  FAQ,
  Home,
  Invoices,
  LineChartPage,
  PieChartPage,
  Team,
} from "./pages";
// Components
import { Nav, Header } from "./component";
const App = () => {
  const Layout = () => {
    return (
      <>
        <Header />
        <Nav />
        <div className="mainContent">
          <Outlet />
        </div>
      </>
    );
  };
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/invoices",
          element: <Invoices />,
        },
        {
          path: "/addUser",
          element: <CreateUser />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        },
        {
          path: "/FAQ",
          element: <FAQ />,
        },
        {
          path: "/barChart",
          element: <BarChartPage />,
        },
        {
          path: "/areaChart",
          element: <AreaChartPage />,
        },
        {
          path: "/lineChart",
          element: <LineChartPage />,
        },
        {
          path: "/pieChart",
          element: <PieChartPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};
export default App;
