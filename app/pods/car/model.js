import DS from 'ember-data';
const Car = DS.Model.extend({
  make: DS.attr('string')
});
Car.reopenClass({
    FIXTURES: [
        {id: 1, make: 'Honda', roadworthy: true},
        {id: 2, make: 'Volkswagen', roadworthy: true},
        {id: 3, make: 'Fiat', roadworthy: true}
    ]
});
export default Car;
