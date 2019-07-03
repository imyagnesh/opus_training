import React from "react";
import loadable from "@loadable/component";
import NoMatch from "./Screens/NoMatch";

const AsyncHome = loadable(() => import("./Screens/Home"), {
  fallback: <div>Loading...</div>
});
const AsyncAbout = loadable(() => import("./Screens/About"), {
  fallback: <div>Loading...</div>
});
const AsyncDetails = loadable(() => import("./Screens/Details"), {
  fallback: <div>Loading...</div>
});

const AsyncUser = loadable(() => import("./Screens/User"), {
  fallback: <div>Loading...</div>
});

const routes = [
  {
    id: 0,
    path: "/",
    exact: true,
    component: AsyncHome
  },
  {
    id: 1,
    path: "/about/",
    component: AsyncAbout
  },
  {
    id: 2,
    path: "/details/",
    component: AsyncDetails,
    routes: [
      {
        id: 21,
        path: "/details/yagnesh",
        component: AsyncUser
      }
    ]
  },
  {
    id: 3,
    component: NoMatch
  }
];

export default routes;
