import { createRouter, createWebHistory } from 'vue-router';
import Home from "../components/Customers/customerList.vue";
import ProductList from '../components/Products/ProductList.vue';
import OrderList from '../components/Orders/OrderList.vue';
import OrderAdd from '../components/Orders/OrderAdd.vue';

const routes = [
    { path: '/', component: Home, name: 'customers' },
    { path: '/products', component: ProductList, name: 'products' },
    { path: '/orders', component: OrderList, name: 'orders' },
    { path: '/add-order', component: OrderAdd },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
