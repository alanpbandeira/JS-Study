new Vue({
	el:'#exercise',
	
	data: {
      name: "Alan",
      age: "27",
      imageLink: 'https://i2.wp.com/lisaboerum.com/wp-content/uploads/2018/02/Python-Programming-Language-Logo-350.png?fit=350%2C350&ssl=1',
	  link: 'https://google.com',
	  finishedLink: '<a href="http://google.com"> Google.com </a>'
	},
	
	methods: {
      ageTimesThree: function() {
          return this.age * 3;
      }
	}
    });