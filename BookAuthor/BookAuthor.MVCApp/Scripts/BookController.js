var app = angular.module("myApp", ["ui.bootstrap"]);
app.controller("myCtrl", function ($scope, $http) {

    $scope.book = {};

    // This property will be bound to checkbox in table header
    $scope.book.allItemsSelected = false;

    $scope.GetAllData = function () {
        $http({
            method: "get",
            url: "/api/BookApi/"
        }).then(function(response) {
            $scope.book.authors = response.data;
            },
            function() {
                alert("Error Occur");
            });
    };  
    $scope.GetSearchData = function () {
        $http({
            method: "get",
            url: "/api/Search/"
        }).then(function (response) {
                $scope.book = response.data;
            },
            function () {
                alert("Error Occur");
            });
    };  

    $scope.selectAll = function () {
        // Loop through all the entities and set their isChecked property
        for (var i = 0; i < $scope.book.authors.length; i++) {
            $scope.book.authors[i].isChecked = $scope.book.allItemsSelected;
        }
    };
    // This executes when entity in table is checked
    $scope.selectEntity = function () {
        // If any entity is not checked, then uncheck the "allItemsSelected" checkbox
        for (var i = 0; i < $scope.book.authors.length; i++) {
            if (!$scope.book.authors[i].isChecked) {
                $scope.book.allItemsSelected = false;
                return;
            }
        }

        //If not the check the "allItemsSelected" checkbox
        $scope.model.allItemsSelected = true;
    };


    $scope.InsertData = function () {
        var Action = document.getElementById("btnSave").getAttribute("value");
        if (Action == "Submit") {
           // $scope.books = {};
            $scope.book.title = $scope.Title;
            $scope.book.editiondate = Date.now();// $scope.Edition;

            $scope.book.authors = $scope.book.authors.filter(function (author) {
                return (author.isChecked == true);
            });

           /* var promisePost = bookService.postInfo(JSON.stringify($scope.book));
            promisePost.then(function (d) {
                $scope.id = d.data.id;
            }, function (err) {
                alert("Some Error Occured ");
            });*/

            $http({
                method: "post",
                url: "/api/BookApi/",
                datatype: "json",
                data: JSON.stringify($scope.book)
            }).then(function(response) {
                alert(response.data);
                $scope.GetAllData();
                $scope.EmpName = "";
                $scope.EmpCity = "";
                $scope.EmpAge = "";
            });
        } else {
            $scope.book = {};
            $scope.book.title = $scope.Title;
            $scope.book.editiondate = $scope.Edition;
         
            $scope.book.id = document.getElementById("EmpID_").value;
            $http({
                method: "post",
                url: "http://localhost:39209/Employee/Update_Employee",
                datatype: "json",
                data: JSON.stringify($scope.Employe)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData();
                $scope.EmpName = "";
                $scope.EmpCity = "";
                $scope.EmpAge = "";
                document.getElementById("btnSave").setAttribute("value", "Submit");
                document.getElementById("btnSave").style.backgroundColor = "cornflowerblue";
                document.getElementById("spn").innerHTML = "Add New Employee";
            })
        }
    } 

})