(function () {
    'use strict';

    var nameApp = angular.module('chatApp', []);

    nameApp.controller('getCtrl', function ($scope, $http) {
//============ GET =========
        var getFunc = function () {
            $http.get('models/seeMessages.php').success(function (data) {

                var clear = data.trim();
                var cnt = clear.split('/');
                var arr = [];

                for (var n = 0; n < cnt.length - 1; n++) {

                    var str = cnt[n].split('-');
                    arr.push(str);
                }

                $scope.messages = arr;

            }).error(function () {
                console.log("Get error");
            });
        };

        setInterval(function () {
            $scope.$apply(getFunc);
        }, 1000);
    });
//============== POST =======
    nameApp.controller('postCtrl', function ($scope, $http) {
/*
        $scope.addMessage = function () {

            $http.post('models/newMessages.php', {
                name: $scope.enteredName, text: $scope.enteredMessage
            }).success(function (data) {

                $scope.enteredMessage = '';
                $scope.enteredName = '';

            }).error(function () {
                console.log("Post error");
            });
        };
*/
        $scope.addMessage = function () {

            $.ajax({
                url: "models/newMessage.php",
                type: "POST",
                data: {name: $scope.enteredName, text: $scope.enteredMessage},
                success: function (data) {
                    $scope.enteredMessage = '';
                    $scope.enteredName = '';
                }
            });
        };
    });
//============== THE END =======
})();