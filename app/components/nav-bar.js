import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    console.log('hello')
    // $('#nav-bar').hide()
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $('#nav-bar').fadeIn()
      }

      else if ($(this) === $('#contact')) {
        $('#nav-bar').fadeOut()
      } else {
        $('#nav-bar').fadeOut()
      }
    })
  }
})
