TodoList.TodosRoute = Ember.Route.extend({
  modeL: function() {
    return this.store.find('todo');
  }
});
