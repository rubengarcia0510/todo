Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'postsList'});
Router.route('/tasks', {name: 'taskList'});
Router.route('/proyectos', {name: 'proyectos'});
Router.route('/tasks/:lista', {
    template: 'taskList',
    data: function(){
        var currentList = this.params.lista;
        return Tasks.findOne({ lista: currentList });
    }
});
Router.route('/celulle/:celula', {
    template: 'celulle',
    data: function(){
        var currentCell = this.params.celula;
        return Posts.find({tn:currentCell});
    }
});
if (Meteor.isClient) {
    Template.registerHelper('currentUrl', function() {
        var str = Router.current().url;
        var url = str.split("/");
        return url[4];
    });
}

