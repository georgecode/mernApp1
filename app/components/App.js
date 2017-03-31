var React = require('react');

// var suckIT = {
// deathtoCodecademy:
// React.render(
//   "FUCK YOU AND DIE"
//   );}

function Person(name, gender){

   // Add object properties like this
   this.name = name;
   this.gender = gender;
}

var person = new Person("Bob", "Male");

// module.exports = person.name

module.exports = React.createClass({
  render: function() {
    return (
      <div className="Bio">
          <p className="Bio-text">{person.name}</p>
      </div>
    )
  }
});