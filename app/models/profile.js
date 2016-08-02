import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  description: DS.attr('string'),
  github: DS.attr('string'),
  linkedin: DS.attr('string'),
  twitter: DS.attr('string'),
  dribbble: DS.attr('string'),
  behance: DS.attr('string'),
  medium: DS.attr('string')
})
