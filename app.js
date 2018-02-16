angular.module('OSToolsApp', ['ui.router', 'ngAnimate', 'ngSanitize'])

.config([
    '$stateProvider',
    '$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        })

        .state('index', {
            url: '/index',
            templateUrl: 'index.html',
            controller: 'indexCtrl'
        })

        .state('tools', {
            url: '/tools',
            templateUrl: 'views/tools.html',
            controller: 'toolsCtrl',
            resolve: {
                fixTypesPromise: ['fixTypes', function (fixTypes) {
                    return fixTypes.getFixTypes();
                }]
            }
        })

        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        })

        .state('UserDetails', {
            url: '/UserDetails',
            templateUrl: 'views/UserDetails.html',
            controller: 'usersCtrl',
            resolve: {
                gendersPromise: ['genders', function (genders) {
                    return genders.getGenders();
                }],
                statusesPromise: ['statuses', function (statuses) {
                    return statuses.getStatuses();
                }],
                userTypesPromise: ['userTypes', function (userTypes) {
                    return userTypes.getUserTypes();
                }],
                usersPromise: ['users', function (users) {
                    return users.currentUser = {};
                }]
            }
        })

        .state('UserDetailsEdit', {
            url: '/UserDetailsEdit/{UserId}',
            templateUrl: 'view/UserDetails.html',
            controller: 'usersCtrl',
            resolve: {
                sessionPromise: ['$rootScope', function ($rootScope) {
                    return $rootScope.RedirectIfInvalidSession();
                }],
                usersPromise: ['users', '$stateParams', function (users, $stateParams) {
                    return users.get($stateParams.UserId).success(function (response) {

                    }).error(function (response) {

                    });
                }],
                gendersPromise: ['genders', function (genders) {
                    return genders.getGenders();
                }],
                statusesPromise: ['statuses', function (statuses) {
                    return statuses.getStatuses();
                }],
                userTypesPromise: ['userTypes', function (userTypes) {
                    return userTypes.getUserTypes();
                }]
            }
        })
        ;

    $urlRouterProvider.otherwise('login');
}])