<template>
  <div
    class="modal fade show d-block"
    tabindex="-1"
    style="background-color: rgba(0, 0, 0, 0.5)"
    role="dialog"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content" style="background-color: #fff; color: #333">
        <div class="modal-header">
          <h5 class="modal-title">View Product</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="name" class="form-label">Product Name</label>
                  <input
                    type="text"
                    class="form-control p-sm-2 form-control-plaintext"
                    id="name"
                    :value="productData.name"
                    readonly
                  />
                </div>

                <div class="mb-3">
                  <label for="price" class="form-label">Price</label>
                  <input
                    type="text"
                    class="form-control p-sm-2 form-control-plaintext"
                    id="price"
                    :value="productData.price"
                    readonly
                  />
                </div>

                <div class="mb-3">
                  <label for="barcode" class="form-label">Barcode</label>
                  <input
                    type="text"
                    class="form-control p-sm-2 form-control-plaintext"
                    id="barcode"
                    :value="productData.barcode"
                    readonly
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label for="category" class="form-label">Category</label>
                  <input
                    type="text"
                    class="form-control p-sm-2 form-control-plaintext"
                    id="category"
                    :value="productData.category"
                    readonly
                  />
                </div>

                <div class="mb-3">
                  <label for="stock" class="form-label">Stock</label>
                  <input
                    type="text"
                    class="form-control p-sm-2 form-control-plaintext"
                    id="stock"
                    :value="productData.stock"
                    readonly
                  />
                </div>

                <div class="mb-3">
                  <label for="status" class="form-label">Statut</label>
                  <input
                    type="text"
                    class="form-control p-sm-2 form-control-plaintext"
                    id="status"
                    :value="productData.status"
                    readonly
                  />
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea
                class="form-control p-sm-2 form-control-plaintext"
                id="description"
                rows="3"
                :value="productData.description"
                readonly
              ></textarea>
            </div>
          </form>
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
import { defineProps } from "vue";

const props = defineProps({
  productData: Object,
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>
    
  <style scoped>
.modal-content {
  border-radius: 0.3rem;
}

.form-control-plaintext {
  background-color: #f1f1f1;
  border: 1px solid #ced4da;
  color: #495057;
  cursor: not-allowed;
}
</style>
  