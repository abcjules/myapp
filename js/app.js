/**
 * Created by hxsd on 2016/8/4.
 */
//创建模块
var myapp=angular.module("myapp",["ionic"]);

    myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
        $ionicConfigProvider.backButton.text("");
        $ionicConfigProvider.backButton.previousTitleText("");

        //-----------tour----------------
        $stateProvider.state("tour",
            {
                url:"/tour",
                templateUrl:"views/tour/tour.html",
                controller:"tourCtrl"
            });

        //-----------home----------------
        $stateProvider.state("home",
            {
                url:"/home",
                abstract:true,
                templateUrl:"views/home/home.html"
            });

        //-----------travel----------------
        $stateProvider.state("home.travel",
            {
                url:"/travel",
                views:{"travel":{templateUrl:"views/travel/travel.html",controller:"travelCtrl"}},

            });

        //-----------content----------------
        $stateProvider.state("home.content",
            {
                url:"/content",
                views:{"travel":{templateUrl:"views/content/content.html",controller:"contentCtrl"}},
            });

        //-----------strategy----------------
        $stateProvider.state("home.strategy",
            {
                url:"/strategy",
                views:{"strategy":{templateUrl:"views/strategy/strategy.html",controller:"strategyCtrl"}},
            });

        //-----------recommend----------------
        $stateProvider.state("home.recommend",
            {
                url:"/recommend",
                views:{"strategy":{templateUrl:"views/recommend/recommend.html",controller:"recommendCtrl"}},
            });
        //-----------recommend2----------------
        $stateProvider.state("home.recommend2",
            {
                url:"/recommend2",
                views:{"strategy":{templateUrl:"views/recommend2/recommend2.html",controller:"recommend2Ctrl"}},
            });
        //-----------recommend3----------------
        $stateProvider.state("home.recommend3",
            {
                url:"/recommend3",
                views:{"strategy":{templateUrl:"views/recommend3/recommend3.html",controller:"recommend3Ctrl"}},
            });

        //-----------map----------------
        $stateProvider.state("home.map",
            {
                url:"/map",
                views:{"map":{templateUrl:"views/map/map.html",controller:"mapCtrl"}},
            });

        //-----------weather----------------
        $stateProvider.state("home.weather",
            {
                url:"/weather",
                views:{"weather":{templateUrl:"views/weather/weather.html",controller:"weatherCtrl"}},
            });

        //-----------restaurant----------------
        $stateProvider.state("home.restaurant",
            {
                url:"/restaurant",
                views:{"restaurant":{templateUrl:"views/restaurant/restaurant.html",controller:"restaurantsCtrl"}},
            });


        $urlRouterProvider.otherwise("/tour");
    });