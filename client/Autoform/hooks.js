var hooksObject = {
  before: {
    method: function(doc) {
      var user = Meteor.user();
      doc.userId = user._id;
      doc.author = user.username;

      doc.submitted = new Date();
      this.result(doc);
    }
  }
};

AutoForm.addHooks(['exerciseSubmit'], hooksObject);

AutoForm.debug();
