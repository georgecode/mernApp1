var React = require('react');
// const MongoClient = require('mongodb').MongoClient;


function Person(name, gender){

   // Add object properties like this
   this.name = name;
   this.gender = gender;
}

var person = new Person("Bob", "Male");

// module.exports = person.name
var fuck ="fuuuuuck";

module.exports = React.createClass({
  render: function() {
    return (


      <div className="Bio">
          <p className="Bio-text">{person.name}</p>
          <p className="Bio-text">{fuck}</p>
          <p className="Bio-text">{fuck}</p>
      </div>

    )
  }
});