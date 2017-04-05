var React = require('react');
// const MongoClient = require('mongodb').MongoClient;


function Person(name, gender){

   // Add object properties like this
   this.name = name;
   this.gender = gender;
}

var people = []

// var person = new Person("Bob", "Male");

people.push(new Person("Bob", "Male"))
people.push(new Person("Dana", "Female"))
people.push(new Person("joe", "male"))
people.push(new Person("kelly", "female"))

console.log("XXXXXXXXXXXXXXXXXXXXX")
console.log(people[0].name)

// module.exports = person.name
var fuck ="fuuuuuck";
var hello="hello";

// // testing .map (equevlent to) .each do
// var numbers = [4, 9, 16, 5];

// function myFunction(item, index) {
//   console.log('startXXXXXXXXXXXXX ${item}')
//     return item
//     console.log("endXXXXXXXXXXXXX")

// }

// var bunchOfNumbers=numbers.map(myFunction)
// // testing .map (equevlent to) .each do
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

var listPeople = people.map((person)=>
  <li>{person.name}</li>
  );


module.exports = React.createClass({
  render: function() {
    return (


      <div className="Bio">
          <p className="Bio-text">{people[0].name}</p>
          <p className="Bio-text">{fuck}</p>
          <p className="Bio-text">{fuck}</p>
          <ul>{listItems}</ul>
          <ul>{listPeople}</ul>


          <p className="Bio-text">{2+2}</p>
      </div>

    )
  }
});