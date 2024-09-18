<script setup>

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid mx-4">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav px-4" >
        <div class="d-flex align-items-center mx-4">
            <i class="fa-solid fa-users"></i>
            <a class="nav-link active" aria-current="page" href="#">Customers</a>
        </div>
        <div class="d-flex align-items-center mx-4">
            <i class="fa-solid fa-box-open"></i>
            <a class="nav-link" href="#">Products</a>
        </div>
        <div class="d-flex align-items-center mx-4">
            <i class="fa-solid fa-cart-shopping"></i>
            <a class="nav-link" href="#">Orders</a>
        </div>
      </div>
    </div>
  </div>
</nav>
    <!-- <h1>Bienvenu Dans l'application de gestion de commandes</h1> -->
  <RouterView />
</template>

<style scoped>

</style>
