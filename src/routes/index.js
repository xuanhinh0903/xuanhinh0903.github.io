import Home from '../pages/Home/index';
import Products from '../components/Products/Products';
import Cart from '../components/Cart/Cart';
import React from 'react';
const publicRouter = [
    { path: '/', component: Home },
    { path: '/products/:productId', component: Products },
    { path: '/cart', component: Cart },
];

export { publicRouter };
