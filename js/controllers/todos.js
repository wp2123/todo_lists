TodoList.TodosController = Ember.ArrayController.extend({

    newTitle: null,

    actions: {
        createTodo: function () {
            console.log("I'm creating Toto");
            var title = this.get('newTitle');

            if(!title) {
                return false;
            }
            if(!title.trim()) {
                return;
            }

            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            this.set('newTitle');

            todo.save();
        },
        complete: function (todo) {
            console.log("I'm in complete");
            todo.isCompleted = !todo.isCompleted;
            todo.save();
        }
    }
});
