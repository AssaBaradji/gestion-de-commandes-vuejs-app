<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid mx-4">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav px-4">
          <div class="d-flex align-items-center mx-4">
            <i class="fa-solid fa-users"></i>
            <router-link
              class="nav-link"
              :to="{ name: 'customers' }"
              active-class="active"
              exact-active-class="active"
            >
              Customers
            </router-link>
          </div>
          <div class="d-flex align-items-center mx-4">
            <i class="fa-solid fa-box-open"></i>
            <router-link
              class="nav-link"
              :to="{ name: 'products' }"
              active-class="active"
              exact-active-class="active"
            >
              Products
            </router-link>
          </div>
          <div class="d-flex align-items-center mx-4">
            <i class="fa-solid fa-cart-shopping"></i>
            <router-link
              class="nav-link"
              :to="{ name: 'orders' }"
              active-class="active"
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
/* Ajouter ici les styles spécifiques */
</style>
