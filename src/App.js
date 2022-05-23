import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const loading = (
    <div className="loading_container">
      <div className="sk-spinner sk-spinner-pulse loading_spinner">
        <CircularProgress size={35} />
      </div>
    </div>
  );
  const HOME = lazy(() => import("./pages/home/index"));

  return (
    <div className="app">
      <Router>
        <Suspense fallback={loading}>
          <Routes>
            <Route path={ROUTES.HOME} element={<HOME />} exact={true} />
          </Routes>
        </Suspense>
      </Router>

    </div>
  );
}

export default App;
