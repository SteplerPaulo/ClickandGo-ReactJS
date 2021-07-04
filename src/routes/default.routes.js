
// @material-ui/icons
import ShoppingCartIcon from "@material-ui/icons/Dashboard";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import MenuBookIcon from '@material-ui/icons/MenuBook';


// core components/views for Public layout
import Cart from "views/Public/Cart.js";
import Messages from "views/Public/Messages.js";
import Catalog from "views/Public/Catalog.js";



const Routes = [
  {
    path: "/cart",
    name: "Cart",
    icon: ShoppingCartIcon,
    component: Cart,
    layout: "/public"
  },
  {
    path: "/messages",
    name: "Messages",
    icon: QuestionAnswerIcon,
    component: Messages,
    layout: "/public"
  },
  {
    path: "/catalog",
    name: "Catalog",
    icon: MenuBookIcon,
    component: Catalog,
    layout: "/catalog"
  },
];

export default Routes;
