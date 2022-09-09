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
import AdvisorPage from "@/pages/admin/AdvisorPage";
import AboutPage from "@/pages/admin/AboutPage";
import UpdateProduct from "@/pages/admin/UpdateProduct";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/products'},
        {path: '/products', component: ProductList},
        {
            path: '/products/:id', component: ProductDetail, children: [
                {path: 'contactAdvisor', component: ContactAdvisor},
            ]
        },
        {path: '/cart', component: CartList},  // Product page
        {path: '/about', component: AboutPage},
        {path: '/registerUser', component: RegisterUser}, // user folder
        {path: '/registerAdvisor', component: RegisterAdvisor},  // admin
        {path: '/advisorPage', component: AdvisorPage},
        // Not found page
        {path: '/:notFound(.*)', component: NotFound},
        {path: '/registerProduct', component: RegisterProduct},
        {path: '/updateProduct/:id', component: UpdateProduct},

    /// much more later'
    // path login page
    // main lage page
    // path login user
    // path login admin
    //  a ddashboard page  -- firebase backend

    ]
});



export default router;
