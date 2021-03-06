import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      profiles: this.store.findAll('profile'),
      projects: this.store.findAll('project'),
      educations: this.store.findAll('education'),
      works: this.store.findAll('work')
    })
  }
})
//
// import Ember from 'ember'
//
// export default Ember.Route.extend({
//   model() {
//     return Ember.RSVP.hash({
//       profiles: this.store.findAll('profile'),
//       projects: this.store.findAll('project'),
//       educations: this.store.findAll('education'),
//       skills: this.store.findAll('skill')
//     })
//   }
// })
