<template>
  <div id="new-employee">
    <ul class="collection with-header">
        <li class="collection-header"><h4>{{name}}</h4></li>
        <li class="collection-item">Employee ID#: {{employee_id}}</li>
        <li class="collection-item">Department: {{department}}</li>
        <li class="collection-item">Position: {{position}}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteEmployee" class="btn red" >Delete</button>

    <div class="fixed-action-btn">
        <router-link v-bind:to="{name: 'edit-employee', params: {employee_id: employee_id}}" class="btn-floating btn-large red">
          <i class="fa fa-pencil"></i>
        </router-link>
    </div>

  </div>
</template>

<script>
import db from './firebaseInit'
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

  // Load data before loading the page
  beforeRouteEnter(to, from, next) {
      db.collection('employee').where(
          'employee_id', "==", to.params.employee_id).get()
          .then(querySnapsot => {
              querySnapsot.forEach(doc => {
                  next(vm => {
                      vm.employee_id = doc.data().employee_id
                      vm.name = doc.data().name
                      vm.department = doc.data().department
                      vm.position = doc.data().position
                  })
              })
          })
  },

  // watcher for a specific route data
  watch: {
      '$route': 'fetchData'
  },

  // Custom methods for a specific route
  methods: {
      // Get data fot the current specific view
      fetchData() {
          db.collection('employee').where(
              'employee_id', "==", this.$route.params.employee_id).get()
              .then(querySnapsot => {
                  querySnapsot.forEach(doc => {
                      this.employee_id = doc.data().employee_id
                      this.name = doc.data().name
                      this.department = doc.data().department
                      this.position = doc.data().position
                  })
              })
      },

      deleteEmployee() {
          if(confirm('Are you sure?')) {
              db.collection('employee').where(
                  'employee_id', "==", this.$route.params.employee_id).get()
                  .then(querySnapsot => {
                      querySnapsot.forEach(doc => {
                          doc.ref.delete()
                          this.$router.push('/')
                      })
                  })
          }
      }
  }
}
</script>

