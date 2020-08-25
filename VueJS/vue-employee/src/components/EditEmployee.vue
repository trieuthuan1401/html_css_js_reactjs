<template>
  <form @submit.prevent="clickSave()">
    <div class="form-group">
      <label for="Name">Name: </label>
      <input
        type="text"
        class="form-control"
        id="nameInput"
        v-model="employee.name"
      />
    </div>
    <div class="form-group">
      <label for="Address">Address: </label>
      <input
        type="text"
        class="form-control"
        id="addressInput"
        v-model="employee.address"
      />
    </div>
    <div class="form-group">
      <label for="PhoneNumber">Phone Number: </label>
      <input
        type="text"
        class="form-control"
        id="phoneInput"
        v-model="employee.phone"
      />
    </div>
    <button type="submit" class="btn btn-primary">
      Save
    </button>
  </form>
</template>

<script>
export default {
  name: "editEmployee",
  props: {
    employee: Object,
  },
  methods: {
    clickSave() {
      
      this.$emit("save", this.employee);
    },
  },
};
</script>

<style lang="scss" scoped></style>
