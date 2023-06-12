import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainPage } from "./modules/first-page/main-page";
import { WorkshopsPage } from "./modules/classes-page/worksops-page";
import { LongTermsPage } from "./modules/classes-page/long-terms-page";


const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route
      path = "/"
      element={<MainPage />}
    />
    <Route
        path = "/workshops"
        element={<WorkshopsPage />}
    />
    <Route
      path = "/long-term-classes"
      element={<LongTermsPage />}
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

