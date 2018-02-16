angular.module('OSToolsApp')
    .controller('toolsCtrl',
        function ($scope, $rootScope, $location, $state, $interval,
            //factories
            fixTypes)
        {
            $scope.fixTypesList = fixTypes.fixTypeList;
            $scope.currentPage = "Tools";
            $scope.currentFixTransaction = {};
           
            $scope.clearSubjournal = function () {
                if (!$scope.currentFixTransaction.UseSubjournal) {
                    $scope.currentFixTransaction.Subjournal = "";
                }
            };
        });



