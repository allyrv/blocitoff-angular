(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    return {
      all: tasks,
      addTask: function(newTask) {
        tasks.$add(newTask);
      }
    }
  };

  angular
    .module('blocitoff')
    .factory('Task', ['$firebaseArray', Task]);
})();