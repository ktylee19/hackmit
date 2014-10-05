Template.select.events({
    'submit form': function(e) {
        e.preventDefault();
        syncCode = $(e.target).find('[name=sync-code').val();
        Router.go('waiting', syncCode);
  }
});