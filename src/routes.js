/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "1번 메뉴",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "2번 메뉴",
    icon: "design_image",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "3번 메뉴",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "4번 메뉴",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "5번 메뉴",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/extended-tables",
    name: "6번 메뉴",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "7번 메뉴",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin",
  },
];
export default dashRoutes;
