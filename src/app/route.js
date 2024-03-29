import React from "react";

const AuthenticationPage = React.lazy(() =>
  import("../pages/AuthenticationPage/AuthenticationPage")
);
const LoginForm = React.lazy(() =>
  import("../components/Authentication/LoginForm/LoginForm")
);
const RegisterForm = React.lazy(() =>
  import("../components/Authentication/RegisterForm/RegisterForm")
);

const LayoutUserPage = React.lazy(() =>
  import("../pages/UserPage/LayoutUserPage")
);
const DashboardPage = React.lazy(() =>
  import("../pages/UserPage/DashboardPage")
);
const TasksPage = React.lazy(() => import("../pages/UserPage/TasksPage"));
const ViewTaskPage = React.lazy(() => import("../pages/UserPage/ViewTaskPage"));
const CreateTaskPage = React.lazy(() =>
  import("../pages/UserPage/CreateTaskPage")
);
const EditTaskPage = React.lazy(() => import("../pages/UserPage/EditTaskPage"));

const RecordsPage = React.lazy(() => import("../pages/UserPage/RecordsPage"));
const TaskRecords = React.lazy(() =>
  import("../pages/UserPage/SubRecordsPage/TaskRecords")
);
const WeightRecords = React.lazy(() =>
  import("../pages/UserPage/SubRecordsPage/WeightRecords")
);

const routes = [
  {
    path: "/",
    element: <AuthenticationPage />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutUserPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/tasks",
        element: <TasksPage />,
      },
      {
        path: "/tasks/:_id",
        element: <ViewTaskPage />,
      },
      {
        path: "/tasks/edit/:_id",
        element: <EditTaskPage />,
      },
      {
        path: "/create_task",
        element: <CreateTaskPage />,
      },
      {
        path: "/records",
        element: <RecordsPage />,
        children: [
          {
            index: true,
            element: <TaskRecords />,
          },
          {
            path: "weight",
            element: <WeightRecords />,
          },
        ],
      },
    ],
  },
];

export default routes;
