import Ember from 'ember'

export default Ember.Component.extend({
  didInsertElement: function () {
    console.log('hello')

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        console.log('scrolled past 100')
        $('#header').fadeIn()
      } else {
        $('#header').fadeOut()
      }
    })
  }
})
