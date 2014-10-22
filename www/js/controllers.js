angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('TasksCtrl', function($scope, $ionicModal, Tasks) {
    // No need for testing data anymore
    $scope.tasks = Tasks.all();

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('new-task.html', function (modal) {
        $scope.taskModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createTask = function (task) {
        $scope.tasks.push({
            title: task.title
        });
        $scope.taskModal.hide();
        task.title = "";
    };

    // Open our new task modal
    $scope.newTask = function () {
        $scope.taskModal.show();
    };

    // Close the new task modal
    $scope.closeNewTask = function () {
        $scope.taskModal.hide();
    };
})

.controller('ComponentsCtrl', function($scope, $ionicModal, Components) {
    // No need for testing data anymore
    $scope.components = Components.all();

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('new-component.html', function (modal) {
        $scope.componentModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createTask = function (component) {
        $scope.components.push({
            description: component.description
        });
        $scope.componentModal.hide();
        component.description = "";
    };

    // Open our new component modal
    $scope.newComponent = function () {
        $scope.componentModal.show();
    };

    // Close the new task modal
    $scope.closeNewComponent = function () {
        $scope.componentModal.hide();
    };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
