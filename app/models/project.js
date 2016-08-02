import DS from 'ember-data'

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  github: DS.attr('string'),
  website: DS.attr('string'),
  image1: DS.attr('string'),
  image2: DS.attr('string')
})
