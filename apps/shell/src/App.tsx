import { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteManager } from './components/RouteManager.tsx';
import { Home } from './components/Home.tsx';

const Dashboard = lazy(() =>
  import('./components/Dashboard.tsx').then(({ Dashboard }) => ({
    default: Dashboard,
  }))
);

const VuePage = lazy(() =>
  import('./components/VuePage.tsx').then(({ VuePage }) => ({
    default: VuePage,
  }))
);

const AngularPage = lazy(() =>
  import('./components/AngularPage.tsx').then(({ AngularPage }) => ({
    default: AngularPage,
  }))
);

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard/*"
            element={
              <Suspense fallback={<div>loading dashboard</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/vue/*"
            element={
              <Suspense fallback={<div>loading vue</div>}>
                <VuePage />
              </Suspense>
            }
          />
          <Route
            path="/angular/*"
            element={
              <Suspense fallback={<div>loading angular</div>}>
                <AngularPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
