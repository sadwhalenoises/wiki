var myApp = angular.module('myApp', []);
myApp.controller("simpleController", function($scope, $http){
  
  $scope.search = function(){
  var $search = $scope.searchTxt;
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    dataType: 'jsonp',
    data:{
      action: 'opensearch',
      format: 'json',
      search: $search,
    },
    success: function(data){
      var $result = $('#result')
      for (var i = 0; i < data[1].length; i++){
        $result.append('<div id="text">' + '<a href=' + data[3][i] + 'target ="_blank">' + '<h1>'  + data[1][i] +'</h1>' + '<p>' + data[2][i] + '</p>' + '</div>');
      }
      
    }
  })
  }
})
                 