<template>
  <div
    class="modal fade show d-block"
    tabindex="-1"
    style="background-color: rgba(0, 0, 0, 0.5)"
    role="dialog"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Customer</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="form.name"
                disabled
                required
              />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Address</label>
              <textarea
                class="form-control"
                id="address"
                rows="3"
                v-model="form.address"
                required
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="form.email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                v-model="form.phone"
                required
              />
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
import { ref, watch } from "vue";

const emit = defineEmits(["close", "update"]);

const props = defineProps({
  customerData: Object,
});

const form = ref({
  name: "",
  address: "",
  email: "",
  phone: "",
});

watch(
  () => props.customerData,
  (newData) => {
    form.value = { ...newData };
  },
  { immediate: true }
);

const closeModal = () => {
  emit("close");
};

const submitForm = () => {
  emit("update", form.value);
  closeModal();
};
</script>
  
  <style scoped>
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  max-width: 50%;
  margin-top: 3%;
}
</style>
  