angular.
  module('percentageForm').
  component('percentageForm', {
  	//templateUrl: 'percentage-form/percentage-form.template.html',
  	template: '<li ng-repeat="inputCtrl in $ctrl.inputCntrls">{{inputCtrl.label}} <input type="text" value="{{inputCtrl.value}}"></li>',
  	controller: function percentageFormController() { 
  		this.inputCntrls = [
  			{
  				label: "Input 1",
  				value: 20
  			}, {
  				label: "Input 2",
  				value: 20
  			}, {
  				label: "Input 3",
  				value: 20 
  			}, {
  				label: "Input 4",
  				value: 20 
  			}, {
  				label: "Inpiut 5",
  				value: 20
  			}
  		]
  	}

  });