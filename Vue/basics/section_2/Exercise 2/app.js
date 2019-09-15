new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            buttonAlert: function() {
                alert('Watch out!');
            },
            getInput: function(event) {
                this.value = event.target.value;
            }
        }
    });