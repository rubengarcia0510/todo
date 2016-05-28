Template.taskItem.events({

  'click .toggle-checked'() {

    // Set the checked property to the opposite of its current value

    Tasks.update(this._id, {

      $set: { status: "done" },

    });

  },

  'click .delete'() {

    Tasks.remove(this._id);

  },

});