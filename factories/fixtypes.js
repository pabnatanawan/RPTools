angular.module('OSToolsApp')
    .factory('fixTypes',
        function ($http, $rootScope) {
            var o = {
                fixType: {},
                fixTypeList: []
            };

            o.getFixTypes = function (userId) {
                //return $http.get($rootScope.APIOrigin + 'api/FixTypes/GetAll').success(function (response) {
                //    angular.copy(response, o.fixTypes);
                //}).error(function (error) {
                //    console.log(error);
                //});

                var fixTypes = '[{"FixTypeId": 1, "FixTypeName" : "Bad lease"}, {"FixTypeId": 2, "FixTypeName" : "Force apply open ledger entries"}, {"FixTypeId": 3, "FixTypeName" : "Reset resident balances"}, {"FixTypeId": 4, "FixTypeName" : "Missing guest card info"}]';

                angular.copy(JSON.parse(fixTypes), o.fixTypeList);
            };

            return o;
        })