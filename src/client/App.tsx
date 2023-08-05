import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainPage } from "./modules/first-page/main-page";
import { WorkshopsPage } from "./modules/classes-page/worksops-page";
import { LongTermsPage } from "./modules/classes-page/long-terms-page";
import { CoworkingPage } from "./modules/coworking-page/coworking-page";
// import { workshopsList } from "./constants/workshops";
// import { longTermsList } from "./constants/long-terms";
import { ClassPage } from "./modules/class-page/class-page";
import { Layout } from "./modules/layout/layout";
import { Login } from "./modules/auth/login";

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route
      element={<Layout />}
    >
      <Route
        path = "/"
        element={<MainPage />}
      />
      <Route
          path = "/workshops"
          element={<WorkshopsPage />}
      />
        <Route
            path = {`/workshops/:slug`}
            element={<ClassPage />}
        />

      <Route
        path = "/long-term-classes"
        element={<LongTermsPage />}
      />
      <Route
          path = {`/long-term-classes/:slug`}
          element={<ClassPage />}
      />
      <Route
          path = "/coworking"
          element={<CoworkingPage />}
      />
      <Route
        path = "/login"
        element={<Login />}
      />
      <Route
        path = "/signin"
        element={<></>}
      />
    </Route>
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

