/**
 * Created by hxsd on 2016/8/5.
 */
angular.module("myapp").controller("tourCtrl",function($scope,$ionicSlideBoxDelegate){
    $scope.products=[
        {img:"images/car.jpg"},
        {img:"images/cc.jpg"},
        {img:"images/dd.jpg"}
    ];

    $scope.change=false;

    $scope.Show=function(){
        if($ionicSlideBoxDelegate.currentIndex()==$ionicSlideBoxDelegate.slidesCount()-1){
            $scope.change=true;
        }else{
            $scope.change=false;
        }
    };
});
