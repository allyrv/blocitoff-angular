(function() {
  function ArchiveCtrl(Task, $scope) {
    this.tasks = Task.all;
    this.taskStatus = function (task) {
      Task.incompleteTask(task);
    };

    this.show = function(task) {
     return task.created > (moment().dayOfYear() - 7) && task.completed == false
    };

    this.addTask = function(messageTitle, taskPriority) {
      if (messageTitle) {
        var newTask = {
          title: messageTitle,
          priority: taskPriority,
          created: moment().dayOfYear(),
          completed: false
        };
        Task.addTask(newTask);
      }
      $scope.clearfunction = function(event){
        event.messageTitle = null;
        event.taskPriority = "3";
      }
    }

  }

  angular
    .module('blocitoff')
    .controller('ArchiveCtrl', ['Task', '$scope', ArchiveCtrl]);
})();