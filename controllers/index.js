angular.module('OSToolsApp')
    .controller('indexCtrl',
        function ($scope, $rootScope, $location, $state, $interval) {

            $rootScope.APIOrigin = 'http://192.168.0.103/api/';

            $scope.currentPage = "Index";
            $rootScope.SearchText = '';

            $rootScope.CurrentUserSession = {
                UserId: 0,
                FirstName: '',
                MiddleName: '',
                LastName: '',
                Birthdate: new Date()
            };

            $rootScope.GetCurrentUserSession = function () {
                //console.log(localStorage.getItem("user"));
                if (localStorage.getItem("user") == null) {
                    $rootScope.CurrentUserSession = null;
                    return null;
                }
                else {
                    var x = localStorage.getItem("user").toString().split('|||');
                    $rootScope.CurrentUserSession = {};
                    $rootScope.CurrentUserSession.UserId = x[0];
                    $rootScope.CurrentUserSession.FirstName = x[1];
                    $rootScope.CurrentUserSession.MiddleName = x[2];
                    $rootScope.CurrentUserSession.LastName = x[3];
                    $rootScope.CurrentUserSession.Birthdate = x[4];

                    return $rootScope.CurrentUserSession;
                }
            }

            $rootScope.HasActiveSession = function () {
                if ($rootScope.GetCurrentUserSession() == null)
                    return false;
                return true;
            }

            $rootScope.RedirectIfInvalidSession = function () {
                if ($rootScope.GetCurrentUserSession() == null) {
                    $window.location.assign('#/LogIn');
                    $window.location.reload();
                    //$location.path('/LogIn');
                    //$state.go("LogIn", {});
                }
            }

            $scope.LogOut = function () {
                localStorage.removeItem("user");
                $rootScope.GetCurrentUserSession();
                $state.go("LogIn", {});
                //$location.path('/LogIn');
            }
        });



