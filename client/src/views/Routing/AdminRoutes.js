import Dashboard from "views/Admin/Dashboard";

import WebsiteSetting from "views/Admin/Settings/WebsiteSetting";
import SocialSetting from "views/Admin/Settings/SocialSetting";

const AdminRoutes = [
  { path: "/admin", exact: true, name: "Dashboard", component: Dashboard },
  {
    path: "/admin/settings",
    exact: true,
    name: "Website Settings",
    component: WebsiteSetting,
  },
  {
    path: "/admin/social-settings",
    exact: true,
    name: "Social Settings",
    component: SocialSetting,
  },
];

export default AdminRoutes;
