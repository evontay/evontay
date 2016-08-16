import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    console.log('hello')
    // $('#nav-bar').hide()
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $('#nav-bar').fadeIn()
      } else {
        $('#nav-bar').fadeOut()
      }
    })
  }
})
