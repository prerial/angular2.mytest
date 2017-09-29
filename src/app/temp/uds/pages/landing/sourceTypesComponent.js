/**
 * Created by U160964 on 5/16/2017.
 */

(function() {
    "use strict";

    angular.module('app.uds').component('sourceTypes', {
        templateUrl: 'uds/views/sourceTypesView.html',
        controller: 'SourceTypesController'

    });
    angular.module('app.uds').controller('SourceTypesController', ['$scope',

          function($scope) {
              var sourceFile, targetFile,  sourceJson = {}, targetJson = {};
              $scope.sourceKeyArray = [];
              $scope.targetKeyArray = [];

               $scope.reconcile = function(){
                    $('#result').addClass('capitalize');
                };
              $scope.map = [];
              $scope.addKeys = function(){
                  var src = $('#srcSelect').val();
                  var src1 = $('#srcTarget').val();
                  if(src !== '' && src1 !== ''){
                      $scope.map.push({'source':{'name':src}, 'target':{'name':src1}})
                  }
              };
              $scope.showSelectionPage = function () {
                  sourceFile = $("#sourceFile").val();
                  targetFile = $("#targetFile").val();
                  sourceFile = 'C:/FAST/development/hackathone.angular.compare/uds/source.csv';
                  targetFile = 'C:/FAST/development/hackathone.angular.compare/uds/target.csv';

                  $scope.sourceArray = [];

                  getKeyArray('data/source.csv','sourceArray');
                  $scope.targetArray = [];
                  getKeyArray('data/target.csv', 'targetArray');
              };


              function getKeyArray(source,key) {
                  $.ajax({
                      url: source,
                      dataType: 'text'
                  }).done(function (data) {

                      var allRows = data.split(/\r?\n|\r/);
                      var headers = allRows[0].split(',');
                      $scope[key] = allRows[0].split(',');
                      var data = {};
                      headers.forEach(function(head, i, array){
                          if (!data[head]){
                              data[head] = []
                          }
                          allRows.forEach(function(item, idx, arr){
                              if(idx > 0){
                                  var row = item.split(',');
                                  data[head].push(row[i]);
                              }
                          });
                      });
                      if(key === 'sourceArray'){
                          $scope.sourceKeyArray = data['Acct_ref_nb'];
                      }else{
                          $scope.targetKeyArray = data['NPV_score'];
                      }
                      $scope.$apply();

               });

              }
/*
              $.ajax({
                  url: 'data/source.csv',
                  dataType: 'text',
              }).done(function (data) {
                  debugger
                  var allRows = data.split(/\r?\n|\r/);
                  var aaaa = allRows[0].split(',');
                  debugger
              });
/*
              function successFunction(data) {
                  var allRows = data.split(/\r?\n|\r/);
                  var table = '<table>';
                  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
                      if (singleRow === 0) {
                          table += '<thead>';
                          table += '<tr>';
                      } else {
                          table += '<tr>';
                      }
                      var rowCells = allRows[singleRow].split(',');
                      for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
                          if (singleRow === 0) {
                              table += '<th>';
                              table += rowCells[rowCell];
                              table += '</th>';
                          } else {
                              table += '<td>';
                              table += rowCells[rowCell];
                              table += '</td>';
                          }
                      }
                      if (singleRow === 0) {
                          table += '</tr>';
                          table += '</thead>';
                          table += '<tbody>';
                      } else {
                          table += '</tr>';
                      }
                  }
                  table += '</tbody>';
                  table += '</table>';
                  $('body').append(table);
              }

              $scope.formSubmit = function() {
                  if(loginService.login($scope.username, $scope.password)) {
                      $scope.error = '';
                      $scope.username = '';
                      $scope.password = '';
                      $location.url('/sorEntities');
                  } else {
                      $scope.error = "Incorrect username/password !";
                  }
              };
*/
        }]);

})();
