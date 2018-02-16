angular.module('OSToolsApp')
    .factory('users',
        function ($http, $rootScope) {
            var o = {
                loggedInUser: {},
                userList: [],
                currentUser: {},
                genderList: [],
                userTypesList: []
            };

            o.get = function (userId) { 
                return $http.get($rootScope.APIOrigin + 'api/Users/GetUserById/' + userId).success(function (response) {
                    angular.copy(response, o.currentUser);
                }).error(function (error) {
                    console.log(error);
                });
            };

            o.verify = function (username, password) {
                return $http.get($rootScope.APIOrigin + 'api/Users/GetUserByUserNameAndPassword/' + username + '/' + password).success(function (response) {
                    angular.copy(response, o.loggedInUser);
                }).error(function (error) {
                    console.log(error);
                });
            };

            o.getAll = function () {
                return $http.get($rootScope.APIOrigin + 'api/Users').success(function (response) {
                    angular.copy(response, o.userList);
                }).error(function (error) {
                    console.log(error);
                });
            };

            o.create = function (currentUser) {
                return $http.post($rootScope.APIOrigin + 'api/Users/InsertUser', currentUser).success(function (response) {
                    //console.log(response);
                }).error(function (response) { 
                    console.log(response);
                });
            };

            o.update = function (id, currentUser) {
                return $http.put($rootScope.APIOrigin + 'api/Users/EditUser/' + id, currentUser).success(function (response) {
                    //console.log(response);
                }).error(function (response) {
                    console.log(response);
                });
            };

            return o;
        })