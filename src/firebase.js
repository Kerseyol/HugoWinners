// <!-- The core Firebase JS SDK is always required and must be listed first -->
import firebase from 'firebase/app';
import 'firebase/database';
import react from 'react';
{/* <script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js"></script> */}

// <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

{/* <script> */}
  {/* // Your web app's Firebase configuration */}
  const firebaseConfig = {
    apiKey: "AIzaSyD1-iNBvb3cBxDEguuS_6U8P7fPEjChxyA",
    authDomain: "hugo-winners.firebaseapp.com",
    databaseURL: "https://hugo-winners.firebaseio.com",
    projectId: "hugo-winners",
    storageBucket: "hugo-winners.appspot.com",
    messagingSenderId: "214416997516",
    appId: "1:214416997516:web:e25b392e53d1ce67ab8fa9"
  };
  {/* // Initialize Firebase */}
  firebase.initializeApp(firebaseConfig);
// </script>

  export default firebase;