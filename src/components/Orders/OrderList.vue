<template>
  <div class="container d-flex-column justify-content-center mt-5">
    <h1 class="mb-4 font-weight-bold">List of Orders</h1>

    <router-link to="/add-order" class="btn btn-primary mb-4 float-end">
      Add New Order
    </router-link>

    <OrderEdit
      v-if="showEditOrderModal"
      :orderData="currentOrder"
      @close="showEditOrderModal = false"
      @update="updateOrder"
    />

    <OrderDetails
      v-if="showOrderDetailsModal"
      :orderData="currentOrder"
      @close="showOrderDetailsModal = false"
    />

    <table class="table table-striped table-bordered">
      <thead>
        <tr class="table-primary">
          <th>Date</th>
          <th>Customer</th>
          <th>Delivery Address</th>
          <th>Track Number</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.date }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.deliveryAddress }}</td>
          <td>{{ order.trackNumber }}</td>
          <td>{{ order.status }}</td>
          <td>
            <button
              class="btn btn-sm btn-primary me-2"
              @click="viewOrderDetails(order)"
            >
              <i class="fa-solid fa-eye"></i>
            </button>
            <button
              class="btn btn-sm bg-warning me-2"
              @click="editOrder(order)"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              class="btn btn-sm btn-outline-danger"
              @click="confirmDelete(order)"
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
import OrderEdit from "./OrderEdit.vue";
import OrderDetails from "./OrderDetails.vue";

const showEditOrderModal = ref(false);
const showOrderDetailsModal = ref(false);
const currentOrder = ref(null);

const orders = ref([
  {
    id: 1,
    date: "25/07/2024",
    customer: "John Doe",
    deliveryAddress: "123 Main St, New York, NY",
    trackNumber: "TN001",
    status: "Shipped",
    details: [{ product: "Headphones", quantity: 10, price: 150.0 }],
  },
  {
    id: 2,
    date: "26/07/2024",
    customer: "Jane Smith",
    deliveryAddress: "456 Oak St, Los Angeles, CA",
    trackNumber: "TN002",
    status: "Delivered",
    details: [
      { product: "Laptop", quantity: 3, price: 1200.5 },
      { product: "Smartphone", quantity: 5, price: 800.99 },
    ],
  },
  {
    id: 3,
    date: "27/07/2024",
    customer: "Alice Martin",
    deliveryAddress: "789 Pine St, Chicago, IL",
    trackNumber: "TN003",
    status: "Processing",
    details: [
      { product: "Keyboard", quantity: 7, price: 100.75 },
      { product: "Monitor", quantity: 4, price: 350.0 },
    ],
  },
]);

const editOrder = (order) => {
  currentOrder.value = { ...order };
  showEditOrderModal.value = true;
};

const updateOrder = (updatedOrder) => {
  const index = orders.value.findIndex((o) => o.id === updatedOrder.id);
  if (index !== -1) {
    orders.value[index] = updatedOrder;
  }
};

const viewOrderDetails = (order) => {
  currentOrder.value = { ...order };
  showOrderDetailsModal.value = true;
};

const confirmDelete = (order) => {
  if (window.confirm(`Are you sure you want to delete this order?`)) {
    deleteOrder(order);
  }
};

const deleteOrder = (order) => {
  const index = orders.value.findIndex((o) => o.id === order.id);
  if (index !== -1) {
    orders.value.splice(index, 1);
  }
};
</script>
  