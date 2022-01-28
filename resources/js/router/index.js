import {createWebHistory, createRouter} from "vue-router";

import Home from '../pages/Home';
import About from '../pages/About';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import products from '../components/Products';
import AddProduct from '../components/AddProduct';
import EditProduct from '../components/EditProduct';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
        name: 'products',
        path: '/products',
        component: products
    },
    {
        name: 'addProduct',
        path: '/products/add',
        component: AddProduct
    },
    {
        name: 'editProduct',
        path: '/products/edit/:id',
        component: EditProduct
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
