(function() {
	function HomeCtrl(Task, $scope) {
		this.tasks = Task.all;
		this.taskStatus = function (task) {
			Task.completeTask(task);
	}

	this.hide = function(task) {
		return task.created < (moment().dayOfYear() - 7) || task.completed == true
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
		.controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();