import React from 'react';
import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { App } from './components/App/index.jsx';
import { EmployeeSection } from './pages/EmployeeSection';
import { EmployerSection } from './pages/EmployerSection';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.css';
import { Interview } from './pages/Interview/index.jsx';
import { CompanyAssessement } from './pages/CompanyAssesement/index.jsx';

const ErrorPage = () => {
  return (
      <main>
        <h2>404: There`s nothing here</h2>
        <p>Return to <a src='./homepage'>Homepage</a></p>
      </main>
    );
  };

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: 'employer-section',
        element: <EmployerSection/>
      },
      {
        path: 'employee-section',
        element: <EmployeeSection/>
      },
      {
        path: 'test-your-company',
        element: <CompanyAssessement/>
      },
      {
        path: 'interview',
        element: <Interview/>
      },

    ]

  },
])

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router}/>);
