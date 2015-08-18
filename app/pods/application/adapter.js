import DS from 'ember-data';
export default DS.FixtureAdapter.extend({
    queryFixtures: function(fixtures) {
        return fixtures; // For now, return entire list of fixtures
    }
});
