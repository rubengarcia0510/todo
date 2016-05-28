Template.celulle.helpers({  items: function() {
      var str = Router.current().url;
      var url = str.split("/");
      var indus = url[4];
      return Posts.find({"tn":indus});
    }
});