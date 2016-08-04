import DS from 'ember-data'

export default DS.Model.extend({
  school: DS.attr('string'),
  qualifications: DS.attr('string'),
  period: DS.attr('string')
})
