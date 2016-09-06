function StaffController() {
	var vm = this;
	this.name = 'brad';
	this.phone = '8888888888';
	this.email = 'brad@microsoft.com';

	this.changeName = function () {
	    vm.name = 'Something else!'
	  }
}

angular
	.module('app')
	.controller('StaffController', StaffController);