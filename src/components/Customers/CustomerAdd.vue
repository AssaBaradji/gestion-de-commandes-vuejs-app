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
          <h5 class="modal-title">Create new customer </h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="nom" class="form-label">Customer Name</label>
              <input
                type="text"
                class="form-control"
                id="nom"
                v-model="form.nom"
                required
              />
            </div>
            <div class="mb-3">
              <label for="adresse" class="form-label">Address</label>
              <input
                type="text"
                class="form-control"
                id="adresse"
                v-model="form.adresse"
                required
              />
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
              <label for="telephone" class="form-label">phone</label>
              <input
                type="text"
                class="form-control"
                id="telephone"
                v-model="form.telephone"
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
import { ref } from "vue";

const form = ref({
  nom: "",
  adresse: "",
  email: "",
  telephone: "",
});

const emit = defineEmits(["close", "submit"]);

const closeModal = () => {
  emit("close");
};

const submitForm = () => {
  if (
    form.value.nom.trim() === "" ||
    form.value.adresse.trim() === "" ||
    form.value.email.trim() === "" ||
    form.value.telephone.trim() === ""
  ) {
    alert("Veuillez remplir tous les champs avant de soumettre le formulaire.");
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
</style>
  