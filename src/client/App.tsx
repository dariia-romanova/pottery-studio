import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainPage } from "./modules/first-page/main-page";


const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route
      path = "/"
      element={<MainPage />}
    />
    <Route
        path = "/coworking"
        element={<>wqwqw</>}
    />
  </>
));


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

