Template.taskList.helpers({  tasks: function() {
        var currentList = this.lista;
        if (currentList){
          return Tasks.find({"lista":currentList});
        }else{
          return Tasks.find();
        }


   }
});