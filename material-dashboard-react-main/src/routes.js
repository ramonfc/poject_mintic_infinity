/*!

=========================================================
* INFINITY WAS HERE
=========================================================

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/add-products",
    name: "Agregar Productos",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/list-products",
    name: "Listar Productos",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/create-sale",
    name: "Crear Venta",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/list-sales",
    name: "Listar Venta",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/manage-users",
    name: "Administrar usuarios",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notificaciones",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/logout",
    name: "Cerrar Sesion",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    path: "/profile",
    name: "Mi Perfil",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin",
  },
];

export default dashboardRoutes;
