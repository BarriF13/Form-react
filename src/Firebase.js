import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyD5T-Ikuq3ADCDN3jX1TP6we3PdWO0_RWc",
  authDomain: "form-react-2020.firebaseapp.com",
  databaseURL: "https://form-react-2020.firebaseio.com",
  projectId: "form-react-2020",
  storageBucket: "form-react-2020.appspot.com",
  messagingSenderId: "1001695002182",
  appId: "1:1001695002182:web:94c3ed64afc20fb6a31447",
  measurementId: "G-GBX1ZL0DQX"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
//
//firebaseDB.ref('eyes').remove()--remove a data
//firebaseDB.ref('eyes').update()--update a data
//firebaseDB.ref('eyes').set('black)--add data
//firebaseDB.ref().set()-- if ref is empty change happens to all the database _BE CAREFUL

//once happens only once it will returning a promise which is data 
// firebaseDB.ref().once('value')
// .then((snapshot)=>{
//   console.log(snapshot.val());
// })
// .catch((e)=>{
//   console.log(e);
// })
//  on is always listening for the changes
// firebaseDB.ref('skills').on('value',(snapshot)=>{
//   console.log(snapshot.val());
// })
// setTimeout(() => {
//   firebaseDB.ref('name').set('name 1')
// },3000)

// setTimeout(()=>{
//   firebaseDB.ref().off();
// },4000)
// setTimeout(()=>{
//   firebaseDB.ref('name').set('name 2');
// },5000)
//----------method for giving us back report any changes from database to us
// firebaseDB.ref().on('child_removed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
// })
// // firebaseDB.ref().on('child_changed',(snapshot)=>{
  // console.log(snapshot.key,snapshot.val());
// })
firebaseDB.ref().on('child_added',(snapshot)=>{
  console.log(snapshot.key,snapshot.val());
})