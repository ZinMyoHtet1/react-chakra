// import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="create" element={<Create />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
