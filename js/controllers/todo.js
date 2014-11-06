TodoList.TodoController = Ember.ObjectController.extend({

    isEdit: false,
    editedTitle: null,

    isCompleted: function(key, value) {
        var todo = this.get('model');

        if(value === undefined) {
            return todo.get('isCompleted');
        } else {
            todo.set('isCompleted', value);
            todo.save();

            return value;
        }
    }.property('model.isCompleted'),

    actions: {
        setEdit: function () {
            var is_edit = this.get('isEdit');
            this.set('isEdit', !is_edit);
        },
        editTitle: function () {
            var title = this.get('editedTitle'),
                todo = this.model;
            todo.set('title', title);
            todo.save();

            this.set('isEdit', false);
        },
        destroyTodo: function () {
            this.model.deleteRecord();
        }
    }
});
