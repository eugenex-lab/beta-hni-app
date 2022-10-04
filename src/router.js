import {createRouter, createWebHistory} from "vue-router";
// import all components from ./pages
import RegisterProduct from "@/pages/admin/RegisterProduct";
import RegisterAdvisor from "@/pages/admin/RegisterAdvisor";
import CartList from "@/pages/product/CartList";
import ProductList from "@/pages/product/ProductList";
import ProductDetail from "@/pages/product/ProductDetail";
import ContactAdvisor from "@/pages/product/ContactAdvisor";
import RegisterUser from "@/pages/user/RegisterUser";
import NotFound from "@/pages/NotFound";
import AdvisorList from "@/pages/admin/AdvisorList";
import AboutPage from "@/pages/admin/AboutPage";
import UpdateProduct from "@/pages/admin/UpdateProduct";
import UserRequests from "@/pages/admin/UserRequests";
import AdvisorDetails from "@/pages/admin/AdvisorDetails";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/products' },
        {path: '/products', component: ProductList , name: 'products'},
        {
            path: '/products/:id', component: ProductDetail, children: [
                {path: 'contactAdvisor', component: ContactAdvisor},
                // {path: 'cartList', component: CartList}
            ]
        },
        {path: '/cart', component: CartList},  // Product page
        {path: '/about', component: AboutPage},
        {path: '/registerUser', component: RegisterUser}, // user folder
        {path: '/registeradvisor', component: RegisterAdvisor},  // admin
        {path: '/userRequests', component: UserRequests},  // admin
        {path: '/advisors', component: AdvisorList},
        {
            path: '/advisors/:id',
            component: AdvisorDetails,
            props: true,
            children : [
                {path: 'contact', component: ContactAdvisor}
            ]

        },

        // Not found page
        {path: '/:notFound(.*)', component: NotFound},
        {path: '/registerProduct', component: RegisterProduct},
        {path: '/updateProduct/:id', component: UpdateProduct},



    ]
});



export default router;
