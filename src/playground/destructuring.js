//
// Object Destructuring
//

// const Person = {
//     name: "Taylor",
//     age: 22,
//     location: {
//         city: "Toronto",
//         temp: -1
//     }
// };

// const { name: firstName = 'Anonymous', age } = Person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = Person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const Book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const { name: publisherName = "Self-Publsihed" } = Book.publisher;
// console.log(publisherName);


//
// Array Destructuring
//


const address = ['1299 S Juniper Street', 'Philidelphia', 'Pencilvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`you are in ${city}, ${state}`);

const item = ["Hot Coffee", "$2.00", "$2.50", "2.75"]
const [itemName, , medium] = item;
console.log(`A ${itemName} costs ${medium}`)




