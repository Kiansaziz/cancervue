// app.js

// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute','ngAnimate']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
        
    });
}]);


animateApp.config(['$routeProvider'  ,function($routeProvider) {
   
    $routeProvider

        // home page
        .when('/', {
            title : 'Canservue | Home',
            templateUrl: 'views/page-home.html',
            controller:'homeController'
            
         
        })

        // Blog page
        .when('/blog', {
            title: 'Canservue | Blog',
            templateUrl: 'views/page-blog.html',
            controller: 'blogController'
           
        })

        // HCS page
        .when('/layanan-hcs', {
            title : 'Cancervue | Layanan HCS',
            templateUrl: 'views/page-hcs.html',
            controller: 'hcsController'
        })
        //HCS detail
        .when('/layanan-detail-hcs',{
            title : 'Cancervue | Layanan Detail HCS',
            templateUrl: 'views/page-detail-hcs.html',
            controller  : 'hcsController'
        })
        //HCS hasil
        .when('/layanan-detail-hasil-hcs', {
            title : 'Cancervue | Layanan Hasil HCS',
            templateUrl: 'views/page-tentang-hasil.html',
            controller : 'hcsController'
        })
        //layanan-brca
        .when('/layanan-brca',{
            title : 'Cancervue | Layanan BRCA',
            templateUrl : 'views/page-brca.html',
            controller: 'brcaController'
        })

        //layanan-sma
        .when('/layanan-sma', {
            title : 'Cancervue | Layanan SMA',
            templateUrl : 'views/page-sma.html',
            controller : 'smaController'
        })

        //layanan-detail-sma
        .when('/layanan-detail-sma',{
            title : 'Cancervue | Layanan Detail SMA',
            templateUrl :"views/page-detail-sma.html",
            controller : 'smaController'
        })


        //contact
        .when('/contact',{
            title : 'Cancervue | Contact',
            templateUrl : 'views/page-contact.html',
            controller : 'contactController'
        })
        .otherwise({ 
            redirectTo : '/'
        });

}]);
