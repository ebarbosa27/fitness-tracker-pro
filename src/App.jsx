import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import ActivityItem from "./activities/ActivityItem.jsx";
import Error404 from "./Error404.jsx";
import { Routes, Route } from "react-router";
import Layout from "./layout/Layout.jsx";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  // const { page } = usePage();

  // if (page === "register") return <Register />;
  // if (page === "login") return <Login />;
  // if (page === "activities") return <ActivitiesPage />;

  // return <Error404 />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ActivitiesPage />} />
          <Route path="/activity/:activityId" element={<ActivityItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}
