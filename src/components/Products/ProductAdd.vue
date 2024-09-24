<template>
  <div
    class="modal fade show d-block"
    tabindex="-1"
    style="background-color: rgba(0, 0, 0, 0.5)"
    role="dialog"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create New Product</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="name" class="form-label">Product Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="form.name"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="price" class="form-label">Price</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    v-model="form.price"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="barcode" class="form-label">Barcode</label>
                  <input
                    type="text"
                    class="form-control"
                    id="barcode"
                    v-model="form.barcode"
                    required
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label for="category" class="form-label">Category</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    v-model="form.category"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="stock" class="form-label">Stock Quantity</label>
                  <input
                    type="number"
                    class="form-control"
                    id="stock"
                    v-model="form.stock"
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
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea
                class="form-control"
                id="description"
                rows="3"
                v-model="form.description"
                required
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="submitForm">
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  category: "",
  price: 0,
  stock: 0,
  barcode: "",
  status: "Active",
  description: "",
});

const emit = defineEmits(["close", "submit"]);

const closeModal = () => {
  emit("close");
};

const submitForm = () => {
  if (
    form.value.name.trim() === "" ||
    form.value.category.trim() === "" ||
    form.value.price <= 0 ||
    form.value.stock < 0 ||
    form.value.barcode.trim() === "" ||
    form.value.description.trim() === ""
  ) {
    alert("Please fill out all fields before submitting the form.");
    return;
  }
  emit("submit", form.value);
  closeModal();
};
</script>
  
  <style scoped>
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  margin-top: 3%; 
}
</style>
  