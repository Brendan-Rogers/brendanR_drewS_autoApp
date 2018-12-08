// SEAF
(function(){ console.log("JS Initialized");

const vm = new Vue({

	el : "#app",

	data : {
		carName : "",
		carManufacturer : ""
	},


	methods : {

		loadCars : function () {
			const url = 'includes/car.php'

			fetch(url)
			.then(res => res.json())
			.then(data => {
				this.carName = data[0].car_name;
				this.carManufacturer = data[0].car_manufacturer;
			});
		}
		
	}

});
// END OF VUE APP

}) ();