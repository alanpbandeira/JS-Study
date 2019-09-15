new Vue({
  el: '#exercise',
  data: {
    effectClass: {
      highlight: false,
      shrink: true,
    },

    float: 'float',

    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },

    progressBar: {
      width: '0px',
      backgroundColor: 'red',
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effectClass.highlight = !vm.effectClass.highlight;
        vm.effectClass.shrink = !vm.effectClass.shrink;
      }, 1000);
    },

    startProgress: function() {
      var vm = this;
      width = 0
      controlId = setInterval(function() {
        width = width + 10;
        width < 200 ? vm.progressBar.width = width + 'px' : clearInterval(controlId);
      }, 500);
    }
  }
});
