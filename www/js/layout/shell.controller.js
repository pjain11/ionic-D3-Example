(function () {
  'use strict';

  angular
    .module('ionicD3Example.layout')
    .controller('ShellController', ShellController);

  /* @ngInject */
  function ShellController($scope) {
      var vm = this;
      loadData();

      function loadData() {
          var data = [{revenue: 30000, unitsSold: 100, label: 'CategoryA'},
            {revenue: 50000, unitsSold: 10, label: 'Category B'},
            {revenue: 60000, unitsSold: 30, label: 'Category C'},
            {revenue: 70000, unitsSold: 40, label: 'Category D'},
            {revenue: 20000, unitsSold: 20, label: 'Category E'}];

           vm.data = data;

          var data2 = [{revenue: 20000, unitsSold: 80, label: 'CategoryA'},
            {revenue: 30000, unitsSold: 20, label: 'Category B'},
            {revenue: 40000, unitsSold: 30, label: 'Category C'},
            {revenue: 80000, unitsSold: 10, label: 'Category D'},
            {revenue: 50000, unitsSold: 30, label: 'Category E'}];

          vm.data2 = data2;
      }

  }
})();
