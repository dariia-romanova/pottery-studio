import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainPage } from "./modules/first-page/main-page";
import { WorkshopsPage } from "./modules/classes-page/worksops-page";
import { LongTermsPage } from "./modules/classes-page/long-terms-page";
import { CoworkingPage } from "./modules/coworking-page/coworking-page";
import { workshopsList } from "./constants/workshops";
import { longTermsList } from "./constants/long-terms";
import { ClassPage } from "./modules/class-page/class-page";
import { Layout } from "./modules/layout/layout";


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
      {workshopsList.map((workshop) => (
        <Route
            key={workshop.link}
            path = {`/workshops/${workshop.link}`}
            element={<ClassPage card={workshop} />}
        />
      ))}

      <Route
        path = "/long-term-classes"
        element={<LongTermsPage />}
      />
      {longTermsList.map((course) => (
        <Route
            key={course.link}
            path = {`/long-term-classes/${course.link}`}
            element={<ClassPage card={course} />}
        />
      ))}
      <Route
          path = "/coworking"
          element={<CoworkingPage />}
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

