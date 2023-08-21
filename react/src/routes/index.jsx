import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components import
import { BottomNavigation } from "../components";

import { PrivateRoute } from "./PrivateRoute";

// Pages import
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { ChooseLevel } from "../pages/ChooseLevel";
import { Dashboard } from "../pages/Dashboard";
import { Ranking } from "../pages/Ranking";
import { NotFoundPage404 } from "../pages/NotFoundPage404";
import { Profile } from "../pages/Profile";
import { IpoStore } from "../pages/IpoStore";
import { Lesson } from "../pages/Lesson";
import { Exercise } from "../pages/Exercise";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SignIn />} />
        <Route path="*" element={<NotFoundPage404 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/choose-level"
          element={
            <PrivateRoute>
              <ChooseLevel />
            </PrivateRoute>
          }
        />
        <Route
          path="/ranking"
          element={
            <PrivateRoute>
              <Ranking />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/ipo-store"
          element={
            <PrivateRoute>
              <IpoStore />
            </PrivateRoute>
          }
        />

        <Route
          path="/lesson"
          element={
            <PrivateRoute>
              <Lesson />
            </PrivateRoute>
          }
        />

        <Route
          path="/exercise"
          element={
            <PrivateRoute>
              <Exercise />
            </PrivateRoute>
          }
        />
      </Routes>

      <BottomNavigation />
      <ToastContainer />
    </BrowserRouter>
  );
}
