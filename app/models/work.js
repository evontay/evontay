import DS from 'ember-data'

export default DS.Model.extend({
  company: DS.attr('string'),
  role: DS.attr('string'),
  description: DS.attr('string'),
  period: DS.attr('string')
})
