var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {

    $scope.model = {};

    // This property will be bound to checkbox in table header
    $scope.model.allItemsSelected = false;

    $scope.GetAllData = function () {
        $http({
            method: "get",
            url: "/api/BookApi/"
        }).then(function(response) {
                $scope.model.authors = response.data;
            },
            function() {
                alert("Error Occur");
            });
    };  
    $scope.selectAll = function () {
        // Loop through all the entities and set their isChecked property
        for (var i = 0; i < $scope.model.authors.length; i++) {
            $scope.model.authors[i].isChecked = $scope.model.allItemsSelected;
        }
    };
    // This executes when entity in table is checked
    $scope.selectEntity = function () {
        // If any entity is not checked, then uncheck the "allItemsSelected" checkbox
        for (var i = 0; i < $scope.model.authors.length; i++) {
            if (!$scope.model.authors[i].isChecked) {
                $scope.model.allItemsSelected = false;
                return;
            }
        }

        //If not the check the "allItemsSelected" checkbox
        $scope.model.allItemsSelected = true;
    };
})