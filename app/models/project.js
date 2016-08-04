import DS from 'ember-data'

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  github: DS.attr('string'),
  website: DS.attr('string'),
  image: DS.attr('string'),
  index: DS.attr('number'),

  isEven: Ember.computed('even', function () {
    console.log(this)
    return this.get('index') % 2 === 0
  })
})

// numberData: Ember.computed('model', function () {
//     return {
//       labels: this.get('skills').mapBy('name'),
//       datasets: [{
//         label: 'Skills',
//         data: this.get('skills').mapBy('score'),
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//         ],
//         borderWidth: 1
//       }]
//     }
//   })
