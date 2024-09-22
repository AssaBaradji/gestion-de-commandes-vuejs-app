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
          <h5 class="modal-title">Order Details for {{ form.customer }}</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Order Date:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.date"
                  disabled
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Customer:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.customer"
                  disabled
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Delivery Address:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.deliveryAddress"
                  disabled
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Track Number:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.trackNumber"
                  disabled
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Order Status:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.status"
                  disabled
                />
              </div>
            </div>
          </div>

          <div class="mb-4">
            <h5>Order Details</h5>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(detail, index) in form.details" :key="index">
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="detail.product"
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="detail.quantity"
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="detail.price"
                      disabled
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  orderData: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const isVisible = ref(true);

const form = ref({ ...props.orderData });

const closeModal = () => {
  emit("close");
  isVisible.value = false;
};
</script>

<style scoped>
.modal-dialog.modal-md {
  max-width: 80%; 
  margin-top: 3%; 
}

.modal-content {
  border-radius: 0.3rem;
}

.table th,
.table td {
  text-align: center;
  vertical-align: middle;
}

.form-control {
  margin-bottom: 1rem;
}
</style>
