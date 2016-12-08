angular.module('starter.controllers', [])

  .controller('HomeController', function($scope, $rootScope, $cordovaBarcodeScanner, $ionicPlatform) {
        var vm = this;

        $scope.scan = function(){
          
           /* $ionicPlatform.ready(function() {
                $cordovaBarcodeScanner
                    .scan()
                    .then(function(result) {
                      alert('i am inside scn')
                        // Success! Barcode data is here
                        vm.scanResults = "We got a barcode\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Cancelled: " + result.cancelled;
                    }, function(error) {
                        // An error occurred
                        vm.scanResults = 'Error: ' + error;
                    });
            });
        };

        vm.scanResults = '';*/
         document.addEventListener("deviceready", function () {

    $cordovaBarcodeScanner
      .scan()
      .then(function(result) {
         
                        // Success! Barcode data is here
                        $scope.scanResults = 
                        result.text ;
           
              
      }, function(error) {
        $scope.scanResults='Error: ' +error;
      });


    // NOTE: encoding not functioning yet
    $cordovaBarcodeScanner
      .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
      .then(function(success) {
        // Success!
      }, function(error) {
        // An error occurred
      });

  }, false);
   $scope.scanResults = '';
    }
  });
   