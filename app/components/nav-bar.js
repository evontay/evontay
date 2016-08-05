import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    console.log('hello')
    $('#nav-bar').hide()
  }
})
