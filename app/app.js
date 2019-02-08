var app = angular.module('app', ['ui.router']);



app.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function() {
        document.title = $state.current.title;
        
    });
}]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/page-home.html',
            controller: 'homeCtrl'
        })

        // HCS
        .state('layanan-hcs', {
            url: '/layanan-hcs',
            templateUrl: 'views/page-hcs.html',
            controller: 'hcsCtrl'
        })
        .state('layanan-detail-hcs',{
            url: '/layanan-detail-hcs',
            templateUrl : 'views/page-detail-hcs.html',
            controller : 'hcsCtrl'
        })
        .state('layanan-detail-hasil-hcs',{
            url: '/layanan-detail-hasil-hcs',
            templateUrl : 'views/page-tentang-hasil.html',
            controller : 'hcsCtrl'
        })

        // BRCA

        .state('layanan-brca',{
            url: '/layanan-brca',
            templateUrl : 'views/page-brca.html',
            controller : 'brcaCtrl'
        })

        // SMA
        .state('layanan-sma', {
            url : '/layanan-sma',
            templateUrl : 'views/page-sma.html',
            controller : 'smaCtrl'
        })

        .state('layanan-detail-sma',{
            url: '/layanan-detail-sma',
            templateUrl : 'views/page-detail-sma.html',
            controller : 'smaCtrl'
        })

        //contact
        .state('contact',{
            url : '/contact',
            templateUrl : 'views/page-contact.html',
            controller : "contactCtrl"
        })

        // blog
        .state('blog',{
            url : '/blog',
            templateUrl : 'views/page-blog.html',
            controller : 'blogCtrl'
        });

        $locationProvider.html5Mode(true);





        // .state('edit', {
        //     url: '/edit/{member:json}',
        //     templateUrl: 'partials/edit.html',
        //     controller: 'editCtrl'
        // })
        // .state('editOne', {
        //     url : 'editOne/{member:json}',
        //     templateUrl : 'partials/editOne.html',
        //     controller : 'editCtrl'
        // })
        // .state('delete', {
        //     url: '/delete/{member:json}',
        //     templateUrl: 'partials/delete.html',
        //     controller: 'deleteCtrl'
        // })
      
});
