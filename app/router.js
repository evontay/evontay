import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  // this.route('projects', function () {
  //   this.route('show', {path: '/:id'})
  // })
  this.route('projects')
  this.route('educations')
  this.route('works')
})

export default Router
