import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  
];

export default AppRoutes;
