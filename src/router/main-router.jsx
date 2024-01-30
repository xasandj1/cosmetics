import { About } from "../pages/About";
import { Brends } from "../pages/Brands";
import { Contact } from "../pages/Contact";
import { Faq } from "../pages/Faq";
import { Products } from "../pages/Products";
import { WhereBuy } from "../pages/WheretoBuy";
import { Home } from "../pages/home";

export const main_pages = [
  {
    component: <Home />,
  },
  {
    component: <Products />,
    path: "products",
  },
  {
    component: <Brends />,
    path: "brands",
  },
  {
    component: <About />,
    path: "about",
  },
  {
    component: <Faq />,
    path: "faq",
  },
  {
    component: <Contact />,
    path: "contact",
  },
  {
    component: <WhereBuy />,
    path: "wherebuy",
  },
];
