TodoList.TodoController = Ember.ObjectController.extend({
    isCompleted: function(key, value) {
        var todo = this.get('model');

        if(value === undefined) {
            return todo.get('isCompleted');
        } else {
            todo.set('isCompleted', value);
            todo.save();

            return value;
        }
    }.property('model.isCompleted')
});
