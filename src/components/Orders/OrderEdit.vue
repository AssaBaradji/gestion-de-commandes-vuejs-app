<template>
  <div
    v-if="isVisible"
    class="modal fade show d-block"
    tabindex="-1"
    style="background-color: rgba(0, 0, 0, 0.5)"
    role="dialog"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content" style="background-color: #fff; color: #333">
        <div class="modal-header">
          <h5 class="modal-title">Edit Order</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Date</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="form.date"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Customer</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.customer"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Delivery Address</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.deliveryAddress"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Track Number</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.trackNumber"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <select class="form-select" v-model="form.status" required>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Processing">Processing</option>
                  </select>
                </div>
              </div>
            </div>
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
                    <select class="form-control" required>
                      <option disabled value="" selected>
                        Select a product
                      </option>
                      <option value="Product 001">Product 001</option>
                      <option value="Product 002">Product 002</option>
                      <option value="Product 003">Product 003</option>
                      <!-- <option
                        v-for="product in products"
                        :key="product.id"
                        :value="product.name"
                      >
                        {{ detail.product }}
                      </option> -->
                    </select>
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
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            Close
          </button>
          <button type="submit" class="btn btn-primary" @click="submitForm">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  orderData: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close", "update"]);

const isVisible = ref(true);

const form = ref({ ...props.orderData });

const closeModal = () => {
  emit("close");
  isVisible.value = false;
};

const submitForm = () => {
  emit("update", form.value);
  closeModal();
};

const addDetail = () => {
  form.value.details.push({ product: "", quantity: 0, price: 0 });
};

const removeDetail = (index) => {
  if (form.value.details.length == 1) {
    alert("At least one item must be present.");
  } else {
    form.value.details.splice(index, 1);
  }
};

watch(
  () => props.orderData,
  (newOrder) => {
    form.value = { ...newOrder };
  }
);
</script>

<style scoped>
.modal-dialog.modal-md {
  max-width: 80%;
  margin-top: 3%;
}

.modal-content {
  border-radius: 0.3rem;
}

.form-control {
  margin-bottom: 1rem;
}

.text-center {
  margin-top: 10px;
}
</style>
