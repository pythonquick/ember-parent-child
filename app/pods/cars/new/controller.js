import Ember from 'ember';
export default Ember.Controller.extend({
    needs: 'cars',
    actions: {
        addCar: function() {
            const car = this.store.createRecord('car', {
                make: this.get('make'),
                roadworthy: true
            });
            var cars = this.get('controllers.cars.model');
            // Uncommenting the following will add the new model to the parent
            // route's model. Is there a better way than using the private 
            // member "_internalModel" ?
            cars.addObject(car._internalModel);
            window.history.back(); // return to the parent 'cars' route
        }
    }
});
