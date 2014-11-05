TodoList.TodoController = Ember.ObjectController.extend({
    isCompleted: function(key, value) {
        console.log(value);
        console.log(key);
        var todo = this.get('model');

        if(value === undefined) {
            return todo.isCompleted;
        } else {
            todo.set('isCompleted', value);
            todo.save();

            return value;
        }
    }.property('model.isCompleted')
});
