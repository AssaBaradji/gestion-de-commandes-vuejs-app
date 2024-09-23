<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid mx-4">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav px-4">
          <div class="d-flex align-items-center mx-4">
            <i class="fa-solid fa-users"></i>
            <router-link
              :class="['nav-link' , { active: activeRoute === '/customers'}]"
              :to="{ name: 'customers' }" @click="setActiveRoute('/customers')"
              exact-active-class="active"
            >
              Customers
            </router-link>
          </div>

          <div class="d-flex align-items-center mx-4">
            <i class="fa-solid fa-box-open"></i>
            <router-link
              :class="['nav-link' , { active: activeRoute === '/products'}]"
              :to="{ name: 'products' }" @click="setActiveRoute('/products')"
              exact-active-class="active"
            >
              Products
            </router-link>
          </div>

          <div class="d-flex align-items-center mx-4">
            <i class="fa-solid fa-cart-shopping"></i>
            <router-link
              :class="['nav-link' , { active: activeRoute === '/orders'}]"
              :to="{ name: 'orders' }" @click="setActiveRoute('/orders')"
              exact-active-class="active"
            >
              Orders
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
.active {
  color: blue !important;
}
</style>
<script setup>
import { ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const activeRoute = ref("");
const route = useRoute();

const setActiveRoute = (path) => {
  activeRoute.value = path;
};

activeRoute.value = route.path;
</script>
