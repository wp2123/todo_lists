TodoList.TodosController = Ember.ArrayController.extend({

    newTitle: null,

    incompletedNumber: function () {
        return _(_(this.model.content).filter(function (todo) {
            return todo.get('isCompleted') == false;
        })).size();
    }.property('model.@each.isCompleted'),

    actions: {
        createTodo: function () {
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
            todo.isCompleted = !todo.isCompleted;
            todo.save();
        }
    }
});
