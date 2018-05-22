(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    var confirmedCompleted = function (task) {
      task.completed = true;
      tasks.$save(task)
    }

    var confirmedIncompleted = function (task) {
      task.completed = false;
      tasks.$save(task)
    }

    var dayOfYearToDate = function dateFromDay(day){
      var year = moment().year()
      var date = new Date(year, 0);
      return new Date(date.setDate(day)); 
    }

    return {
      all: tasks,
      addTask: function(newTask) {
        tasks.$add(newTask);
      },
      completeTask: confirmedCompleted,
      incompleteTask: confirmedIncompleted
    }
  };

  angular
    .module('blocitoff')
    .factory('Task', ['$firebaseArray', Task]);
})();
