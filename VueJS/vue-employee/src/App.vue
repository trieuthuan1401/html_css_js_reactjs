<template>
  <div id="app">
    <div class="container">
      <div class="row title">
        <span>Employee Details</span>
        <div class="float-right">
          <button class="btn btn-primary mb-3" @click="clickAdd">Add New</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-10 offset-1 employee-list">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employee, index) in employeeList" :key="employee.id" :index="index">
              <th scope="row">{{ index }}</th>
              <td>{{ employee.name }}</td>
              <td>{{ employee.address }}</td>
              <td>{{ employee.phone }}</td>
              <td class="th-actions">
                <button class="btn btn-warning" type="button" @click="editClick(employee)">Edit</button>
                <button
                  class="btn btn-danger ml-2"
                  type="button"
                  @click="deleteEmployee(employee.id)"
                >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container edit">
      <EditEmployee :employee="employee" @save="clickSave" v-if="isEdit" />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import EditEmployee from "./components/EditEmployee";
export default {
  name: "App",
  components: {
    EditEmployee,
  },
  data() {
    return {
      employeeList: [
        {
          id: uuidv4(),
          name: "lieutrieuthuan",
          address: "tuyhoa",
          phone: "12345",
        },
        {
          id: uuidv4(),
          name: "lieutrieuthuannn",
          address: "tuyhoaaa",
          phone: "123456",
        },
        {
          id: uuidv4(),
          name: "lieutrieuthuannnnn",
          address: "tuyhoaaaaa",
          phone: "12345678",
        },
      ],
      employee: null,
      isEdit: false,
    };
  },
  methods: {
    clickAdd() {
      this.employee = {
        id: uuidv4(),
        name: "",
        address: "",
        phone: "",
      };
      this.isEdit = true;
    },
    clickSave(employee) {
      if (
        employee.name === "" ||
        employee.address === "" ||
        employee.phone === ""
      ) {
        this.isEdit = false;
        return;
      }

      let index = this.employeeList.findIndex(
        (item) => item.id === employee.id
      );
      if (index >= 0) {
        this.employeeList = this.employeeList.map((item) =>
          item.id === employee.id
            ? {
                ...item,
                name: employee.name,
                address: employee.address,
                phone: employee.phone,
              }
            : item
        );
      } else if (index < 0) {
        this.employeeList.unshift(employee);
      }
      this.isEdit = false;
    },

    editClick(employee) {
      this.employee = JSON.parse(JSON.stringify(employee));
      // this.employee = employee;
      this.isEdit = true;
    },

    deleteEmployee(id) {
      this.employeeList = this.employeeList.filter(
        (employee) => employee.id !== id
      );
    },
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row.title {
  justify-content: space-between;
}
.container.edit {
  width: 600px;
}
</style>
