/**
 * Created by Donut on 7/20/16.
 */
var app = angular.module('addApp', []);

app.controller('modifyCtrl', ['$scope', function($scope){
  $scope.tabelsData= [
    {name:'Greys Anatomy',country:'USA',type:'Medical',genre:'Drama',year:'1999',runningTime: '105', IMDBrating: '8.5', IMDBvote:'230,000'},
    {name:'Orange is the New Black',country:'USA',type:'Prison',genre:'Drama',year:'2008',runningTime: '95', IMDBrating: '7.6', IMDBvote:'350,570'},
    {name:'Everybody Loves Raymond',country:'USA',type:'Family',genre:'Comedy',year:'1992',runningTime: '85', IMDBrating: '7.8', IMDBvote:'290,000'},
    {name:'Bones',country:'USA',type:'Medical',genre:'Crime',year:'2003',runningTime: '125', IMDBrating: '6.5', IMDBvote:'160,700'},
    {name:'Fuller House',country:'USA',type:'Family',genre:'Comedy',year:'2016',runningTime: '135', IMDBrating: '4.5', IMDBvote:'89,004'},
    {name:'FRIENDS',country:'USA',type:'Youth',genre:'Comedy',year:'1987',runningTime: '76', IMDBrating: '9.7', IMDBvote:'1,290,498'},
    {name:'How I Met Your Mother',country:'USA',type:'Youth',genre:'Comedy',year:'2005',runningTime: '89', IMDBrating: '7.5', IMDBvote:'350,489'},
    {name:'The Big Bang Theory',country:'USA',type:'Youth',genre:'Comedy',year:'2001',runningTime: '94', IMDBrating: '8.3', IMDBvote:'720,290'},
    {name:'The Rebound',country:'USA',type:'Adult',genre:'Comedy',year:'2009',runningTime: '75', IMDBrating: '5.4', IMDBvote:'70,389'},
    {name:'The Minions',country:'USA',type:'Children',genre:'Cartoon',year:'2012',runningTime: '84', IMDBrating: '8.2', IMDBvote:'463,736'},
    {name:'Roman Holiday',country:'Italy',type:'Adult',genre:'Drama',year:'1975',runningTime: '126', IMDBrating: '6.2', IMDBvote:'73,025'},
    {name:'Piku',country:'India',type:'Family',genre:'Drama',year:'2015',runningTime: '133', IMDBrating: '8.9', IMDBvote:'576,839'},
    {name:'House of Cards',country:'UK',type:'Political',genre:'Drama',year:'2010',runningTime: '92', IMDBrating: '9.2', IMDBvote:'938,467'},
    {name:'Charade',country:'Australia',type:'Adult',genre:'Thriller',year:'1982',runningTime: '123', IMDBrating: '3.8', IMDBvote:'39,478'}
  ];

  $scope.editingData = {};

  for (var i = 0, length = $scope.tabelsData.length; i < length; i++) {
    $scope.editingData[$scope.tabelsData[i].id] = false;
  }


  $scope.modify = function(tableData){
    $scope.editingData[tableData.id] = true;
  };


  $scope.update = function(tableData){
    $scope.editingData[tableData.id] = false;
  };

}]);
