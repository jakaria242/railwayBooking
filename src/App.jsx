import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home";
import ShowTicket from "./pages/showTicket/ShowTicket";
import ErrorPage from "./pages/errorPage/ErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route>
      <Route path="/" element={<Login/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/showticket" element={<ShowTicket/>}/>
      <Route path="*" element={<ErrorPage/>}/>
     </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
  )
}

export default App
