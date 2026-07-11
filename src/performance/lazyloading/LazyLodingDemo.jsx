import React, { useState, lazy, Suspense } from "react";
import Home from "./Home";
const Dashboard = lazy(() => import("./Dashboard"));
const LazyLodingDemo = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  return (
    <div>
      <h1>Lazy Loading Demo</h1>
      <button onClick={() => setShowDashboard(!showDashboard)}>
        ToggleDashboard
      </button>
      <Home />
      <Suspense fallback={<h2>Loading..</h2>}>{showDashboard && <Dashboard />}</Suspense>
    </div>
  );
};

export default LazyLodingDemo;
