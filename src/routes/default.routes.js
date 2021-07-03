
// @material-ui/icons
import ShoppingCartIcon from "@material-ui/icons/Dashboard";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';


// core components/views for Public layout
import Cart from "views/Public/Cart.js";
import Messages from "views/Public/Messages.js";



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
];

export default Routes;
