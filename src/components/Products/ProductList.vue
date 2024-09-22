<template>
  <div class="container d-flex-column justify-content-center mt-5">
    <h1 class="mb-4 font-weight-bold">List of Products</h1>

    <button @click="showModal = true" class="btn btn-primary mb-4 float-end">
      Add New Product
    </button>

    <ProductAdd
      v-if="showModal"
      @close="showModal = false"
      @submit="addProduct"
    />

    <ProductEdit
      v-if="showEditModal"
      :productData="currentProduct"
      @close="showEditModal = false"
      @update="updateProduct"
    />

    <ProductDetails
      v-if="showDetailsModal"
      :productData="currentProduct"
      @close="showDetailsModal = false"
    />

    <table class="table table-striped table-bordered">
      <thead>
        <tr class="table-primary">
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>category</th>
          <th>Barcode</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.barcode }}</td>
          <td>{{ product.status }}</td>
          <td>
            <button
              class="btn btn-sm btn-primary me-2"
              @click="viewProductDetails(product)"
            >
              <i class="fa-solid fa-eye"></i>
            </button>
            <button
              class="btn btn-sm bg-warning me-2"
              @click="editProduct(product)"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              class="btn btn-sm btn-outline-danger"
              @click="confirmDelete(product)"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import ProductAdd from "./ProductAdd.vue";
import ProductEdit from "./ProductEdit.vue";
import ProductDetails from "./ProductDetails.vue";

const showModal = ref(false);
const showEditModal = ref(false);
const currentProduct = ref(null);
const showDetailsModal = ref(false);

const products = ref([
  {
    name: "Product 001",
    description: "High-quality product.",
    price: 100,
    stock: 50,
    category: "Electronics",
    barcode: "123456789012",
    status: "Active",
  },
  {
    name: "Product 002",
    description: "Affordable product.",
    price: 50,
    stock: 100,
    category: "Home Appliances",
    barcode: "987654321098",
    status: "Inactive",
  },
  {
    name: "Product 003",
    description: "Durable product.",
    price: 75,
    stock: 75,
    category: "Sports",
    barcode: "234567890123",
    status: "Active",
  },
]);

const addProduct = (newProduct) => {
  products.value.push(newProduct);
};

const editProduct = (product) => {
  currentProduct.value = product;
  showEditModal.value = true;
};

const updateProduct = (updatedProduct) => {
  const index = products.value.findIndex(
    (p) => p.barcode === updatedProduct.barcode
  );
  if (index !== -1) {
    products.value[index] = updatedProduct;
  }
};

const viewProductDetails = (product) => {
  currentProduct.value = product;
  showDetailsModal.value = true;
};

const confirmDelete = (product) => {
  if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
    deleteProduct(product);
  }
};

const deleteProduct = (product) => {
  const index = products.value.findIndex((p) => p.barcode === product.barcode);
  if (index !== -1) {
    products.value.splice(index, 1);
  }
};
</script>
  
  <style scoped>
</style>
  