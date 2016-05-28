Template.addList.events({
    'submit form': function(event){
      event.preventDefault();
      var listName = $('[name=listName]').val();
      Posts.insert({
        title: listName,
        bu: '',
        ne: '',
        cpi: '',
        mepp: '',
        mep: ''
      });
      $('[name=listName]').val('');
    }
});