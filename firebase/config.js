import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'YOUR_KEY_HERE_AIzaSyAOWH',
//   authDomain: 'your-auth-domain-b1234.firebaseapp.com',
//   databaseURL: 'https://your-database-name.firebaseio.com',
//   projectId: 'your-project-id-1234',
//   storageBucket: 'your-project-id-1234.appspot.com',
//   messagingSenderId: '12345-insert-yourse',
//   appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
// };
const firebaseConfig = {
  apiKey: "AIzaSyDscPviqsLHbG7JpRFsdz3OYASGxxTJMgU",
  authDomain: "foodtech-app.firebaseapp.com",
  projectId: "foodtech-app",
  storageBucket: "foodtech-app.appspot.com",
  messagingSenderId: "873676096582",
  appId: "1:873676096582:web:ddc8c22a855f942a793647",
  measurementId: "G-TXZJYGR272"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };