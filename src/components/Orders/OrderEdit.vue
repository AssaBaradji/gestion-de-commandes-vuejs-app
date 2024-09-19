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

            <div class="mb-4">
              <h5>Order Details</h5>
              <div
                v-for="(detail, index) in form.details"
                :key="index"
                class="mb-3 row"
              >
                <div class="col-md-6">
                  <label class="form-label">Product</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="detail.product"
                    required
                  />
                </div>

                <div class="col-md-3">
                  <label class="form-label">Quantity</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="detail.quantity"
                    required
                  />
                </div>
                <div class="col-md-3">
                  <label class="form-label">Price</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="detail.price"
                    required
                  />
                </div>
                <div class="col-md-1 d-flex align-items-center mt-3">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="removeDetail(index)"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="addDetail"
                >
                  Add New Detail
                </button>
              </div>
            </div>
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
  form.value.details.splice(index, 1);
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
  max-width: 50%;
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
