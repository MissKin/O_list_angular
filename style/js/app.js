
var app=angular.module('manageApp',['ui.router']);
app.controller('SelectCtrl',function($scope){
	$scope.jigou=['乐信付','梦支付','银安'];
	 $scope.selected=$scope.jigou[0];
});

app.controller('leftController',function($scope){
	$scope.leftnav=['广告导航','首页图标','启动页面','费率说明','帮助中心']
});

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
 $stateProvider
  .state('form',{
 url:'/form',
 templateUrl:'form.html',
 controller:'leftController' //指明控制器
 })
 .state('form.list',{
 url:'/list',
 templateUrl:'list.html',
 })
 .state('form.add',{
 url:'/add',
 templateUrl:'add.html'
 })
 .state('form.start',{
 url:'/start',
 templateUrl:'start.html'
 })
  .state('form.institution',{
 url:'/institution',
 templateUrl:'institution.html'
 })
 .state('form.fee',{
 url:'/fee',
 templateUrl:'fee.html'
 });
 $urlRouterProvider.otherwise('/form/list'); //匹配所有不在上面的路由
}]);





app.controller('FeeController',function($scope){});

app.controller('startController',function($scope){});

app.controller('ListController',function($scope){
    
});
app.controller('AddController',function($scope){
    // $scope.id = $routeParams.id;
});
