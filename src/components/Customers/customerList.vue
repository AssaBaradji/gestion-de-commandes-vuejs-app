<template>
  <div class="container d-flex-column justify-content-center mt-5">
    <h1 class="mb-4 font-weight-bold">List of customers</h1>

    <button @click="showModal = true" class="btn btn-primary mb-4 float-end">
      Add New Customer
    </button>

    <CustomerAdd
      v-if="showModal"
      @close="showModal = false"
      @submit="addCustomer"
    />

    <CustomerEdit
      v-if="showEditModal"
      :customerData="currentCustomer"
      @close="showEditModal = false"
      @update="updateCustomer"
    />

    <CustomerDetails
      v-if="showDetailsModal"
      :customerData="currentCustomer"
      @close="showDetailsModal = false"
    />

    <table class="table table-striped table-bordered">
      <thead>
        <tr class="table-primary">
          <th>Nom</th>
          <th>Adresse</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <td>{{ customer.nom }}</td>
          <td>{{ customer.adresse }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.telephone }}</td>
          <td>
            <button
              class="btn btn-sm btn-primary me-2"
              @click="viewCustomerDetails(customer)"
            >
              <i class="fa-solid fa-eye"></i>
            </button>
            <button
              class="btn btn-sm bg-warning me-2"
              @click="editCustomer(customer)"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              class="btn btn-sm btn-outline-danger"
              @click="confirmDelete(customer)"
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
import CustomerAdd from "./CustomerAdd.vue";
import CustomerEdit from "./CustomerEdit.vue";
import CustomerDetails from "./CustomerDetails.vue";

const showModal = ref(false);
const showEditModal = ref(false);
const currentCustomer = ref(null);
const showDetailsModal = ref(false);

const customers = ref([
  {
    nom: "John Doe",
    adresse: "123 Main St, New York, NY",
    email: "johndoe@example.com",
    telephone: "123-456-7890",
  },
  {
    nom: "Jane Smith",
    adresse: "456 Oak St, Los Angeles, CA",
    email: "janesmith@example.com",
    telephone: "987-654-3210",
  },
  {
    nom: "David Johnson",
    adresse: "789 Pine St, Chicago, IL",
    email: "davidjohnson@example.com",
    telephone: "555-555-5555",
  },
  {
    nom: "Emily Davis",
    adresse: "321 Cedar St, San Francisco, CA",
    email: "emilydavis@example.com",
    telephone: "111-222-3333",
  },
  {
    nom: "Michael Brown",
    adresse: "654 Walnut St, Houston, TX",
    email: "michaelbrown@example.com",
    telephone: "444-555-6666",
  },
  {
    nom: "Olivia Williams",
    adresse: "987 Maple St, Miami, FL",
    email: "oliviawilliams@example.com",
    telephone: "777-888-9999",
  },
  {
    nom: "Sophia Miller",
    adresse: "101 Elm St, Seattle, WA",
    email: "sophiamiller@example.com",
    telephone: "222-333-4444",
  },
  {
    nom: "James Wilson",
    adresse: "303 Birch St, Boston, MA",
    email: "jameswilson@example.com",
    telephone: "555-666-7777",
  },
  {
    nom: "Charlotte Anderson",
    adresse: "505 Redwood St, Denver, CO",
    email: "charlotteanderson@example.com",
    telephone: "888-999-0000",
  },
  {
    nom: "Liam Martinez",
    adresse: "707 Spruce St, Phoenix, AZ",
    email: "liammartinez@example.com",
    telephone: "123-987-6543",
  },
]);

const addCustomer = (newCustomer) => {
  customers.value.push(newCustomer);
};
const editCustomer = (customer) => {
  currentCustomer.value = customer;
  showEditModal.value = true;
};

const updateCustomer = (updatedCustomer) => {
  const index = customers.value.findIndex(
    (c) => c.email === updatedCustomer.email
  );
  if (index !== -1) {
    customers.value[index] = updatedCustomer;
  }
};

const viewCustomerDetails = (customer) => {
  currentCustomer.value = customer;
  showDetailsModal.value = true;
};
const confirmDelete = (customer) => {
  if (window.confirm(`Are you sure you want to delete ${customer.nom}?`)) {
    deleteCustomer(customer);
  }
};

const deleteCustomer = (customer) => {
  const index = customers.value.findIndex((c) => c.email === customer.email);
  if (index !== -1) {
    customers.value.splice(index, 1);
  }
};
</script>

<style scoped>
</style>
