function ContactController() {
	var vm = this;
	this.name = 'Bill Gates';
	this.phone = '8888888888';
	this.email = 'bill@microsoft.com';

	this.changeName = function () {
	    vm.name = 'Something else!'
	  }
}

angular
	.module('app')
	.controller('ContactController', ContactController);