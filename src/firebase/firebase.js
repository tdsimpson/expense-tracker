import * as firebase from 'firebase';

// [INSERT FIREBASE CONFIG]


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();


//Expensify example

//Child removed - subscribing
database.ref('expense').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
});

//Child changed - subscribing
database.ref('expense').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
});

//Child added - subscribing
database.ref('expense').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
});

//Adding a new expense
database.ref('expense').push({
    description: "Rent",
    note: "",
    amount: 120000,
    createdAt: 470
})


//Updating based on given id
// database.ref('notes/-LtN5966KChYaAw2D_vE').update({
//     body: "Buy food"
// });

//Reading into the console - all of these expense in an array once
// database.ref('expense').once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         })
//         console.log(expenses);
//     })
//     .catch((e) => {
//         console.log('Error', e)
//     })


//Reading into the console - subscribing to all of these expense in an array
// database.ref('expense').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     })
//     console.log("Updated", expenses);
// })



//Firebase Example

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     const { name, job } = val;
//     console.log(`${name} is a ${job.title} at ${job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }, (e) => {
//     console.log('Error with data fetching. ', e);
// })

//Once
// database.ref('location/city').once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log("Error fetching data", e);
//     });


// database.ref().set({
//     name: "Taylor Simpson",
//     age: 22,
//     stressLevel: 6,
//     job: {
//         title: "Software Developer",
//         company: "Google"
//     },
//     location: {
//         city: "Toronto",
//         country: " "
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': "Amazon",
//     'location/city': "Seattle"

// });

// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('Data Removed');
//     }).catch((e) => {
//         console.log(e);
//     })