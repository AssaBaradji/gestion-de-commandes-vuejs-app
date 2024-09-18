import { createRouter, createWebHistory } from 'vue-router';
import Home from "../components/Customers/customerList.vue";
import ProductList from '../components/Products/ProductList.vue';
import OrderList from '../components/Orders/OrderList.vue';

const routes = [
    { path: '/', component: Home, name: 'customers' },
    { path: '/products', component: ProductList, name: 'products' },
    { path: '/orders', component: OrderList, name: 'orders' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
