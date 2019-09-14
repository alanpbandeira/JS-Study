<template>
  <div id="new-employee">
      <h3> New Employee </h3>
      <div class="row">
          <form @submit.prevent="saveEmployee" class="col s12">
              <div class="row">
                  <div class="input-field col s12">
                      <input type="text" v-model="employee_id" required>
                      <label>Employee ID#</label>
                  </div>
              </div>
              <div class="row">
                  <div class="input-field col s12">
                      <input type="text" v-model="name" required>
                      <label>Name</label>
                  </div>
              </div>
              <div class="row">
                  <div class="input-field col s12">
                      <input type="text" v-model="department" required>
                      <label>Department</label>
                  </div>
              </div>
              <div class="row">
                  <div class="input-field col s12">
                      <input type="text" v-model="position" required>
                      <label>Position</label>
                  </div>
              </div>
              <button type="submit" class="btn">Submit</button>
              <router-link to="/" class="btn grey">Cancel</router-link>
          </form>
      </div>
  </div>
</template>

<script>
import db from "./firebaseInit"
export default {
  name: 'new-employee',
  data () {
      return {
        name: null,
        position: null,
        department: null,
        employee_id: null
      }
  },
  methods: {
      saveEmployee() {
        db.collection('employee').add({
            name: this.name,
            position: this.position,
            department: this.department,
            employee_id: this.employee_id
        })
        .then(docRef => this.$router.push("/"))
        .catch(error => console.log("Deu ruim"))
      }
  }
}
</script>

