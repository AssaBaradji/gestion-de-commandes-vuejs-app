<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between mb-4">
      <h1>Add Order</h1>
      <div>
        <button type="button" class="btn btn-secondary me-2" @click="goHome">
          Return to Orders
        </button>
        <button type="submit" class="btn btn-primary" @click="submitForm">
          Submit
        </button>
      </div>
    </div>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="date" class="form-label">Date</label>
              <input
                type="date"
                class="form-control"
                id="date"
                v-model="form.date"
                required
              />
            </div>
            <div class="mb-3">
              <label for="customer" class="form-label">Customer</label>
              <input
                type="text"
                class="form-control"
                id="customer"
                v-model="form.customer"
                required
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="mb-3">
              <label for="deliveryAddress" class="form-label"
                >Delivery Address</label
              >
              <input
                type="text"
                class="form-control"
                id="deliveryAddress"
                v-model="form.deliveryAddress"
                required
              />
            </div>
            <div class="mb-3">
              <label for="trackNumber" class="form-label">Track Number</label>
              <input
                type="text"
                class="form-control"
                id="trackNumber"
                v-model="form.trackNumber"
                required
              />
            </div>
            <div class="mb-3">
              <label for="status" class="form-label">Status</label>
              <select
                class="form-select"
                id="status"
                v-model="form.status"
                required
              >
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Processing">Processing</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <h5>Order Details</h5>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in form.details" :key="index">
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="detail.product"
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  class="form-control"
                  v-model="detail.quantity"
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  class="form-control"
                  v-model="detail.price"
                  required
                />
              </td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="removeDetail(index)"
                >
                  Remove
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="addDetail"
                >
                  Add New Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const form = ref({
  date: "",
  customer: "",
  deliveryAddress: "",
  trackNumber: "",
  status: "Shipped",
  details: [{ product: "", quantity: 0, price: 0 }],
});

const router = useRouter();

const goHome = () => {
  router.push("/orders");
};

const addDetail = () => {
  form.value.details.push({ product: "", quantity: 0, price: 0 });
};

const removeDetail = (index) => {
  form.value.details.splice(index, 1);
};

const submitForm = () => {
  if (
    form.value.details.some(
      (detail) => !detail.product || detail.quantity <= 0 || detail.price <= 0
    )
  ) {
    alert("Veuillez remplir tous les champs avant de soumettre le formulaire.");
    return;
  }
  console.log("Order submitted:", form.value);
};
</script>

<style scoped>
</style>
