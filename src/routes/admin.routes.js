
// @material-ui/icons
import DashBoardIcon from "@material-ui/icons/Dashboard";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CategoryIcon from '@material-ui/icons/Category';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import PeopleIcon from '@material-ui/icons/People';





// core components/views for Admin layout
import Dashboard from "views/Admin/Dashboard.js";
import Inquiries from "views/Admin/Inquiries.js";
import Products from "views/Admin/Products.js";
import Categories from "views/Admin/Categories.js";
import Manufaturers from "views/Admin/Manufaturers.js";
import News from "views/Admin/News.js";
import Users from "views/Admin/Users.js";



const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashBoardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/inquiries",
    name: "Inquiries",
    icon: QuestionAnswerIcon,
    component: Inquiries,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: ListAltIcon,
    component: Products,
    layout: "/admin"
  },
  {
    path: "/categories",
    name: "Categories",
    icon: CategoryIcon,
    component: Categories,
    layout: "/admin"
  },
  {
    path: "/manufacturers",
    name: "Manufacturers",
    icon: LocalShippingIcon,
    component: Manufaturers,
    layout: "/admin"
  },
  {
    path: "/news",
    name: "News",
    icon: ViewCarouselIcon,
    component: News,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    icon: PeopleIcon,
    component: Users,
    layout: "/admin"
  },
 
];

export default dashboardRoutes;
