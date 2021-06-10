import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyDgwuhcuZdeHp9JIuYV-IX-5w4R45DCPr4",
      authDomain: "fir-pj-afeb2.firebaseapp.com",
      projectId: "fir-pj-afeb2",
      storageBucket: "fir-pj-afeb2.appspot.com",
      messagingSenderId: "1029794209750",
      appId: "1:1029794209750:web:9e16254b391a30ea4cce77",
      measurementId: "G-EFVH88LQ1L"
    }
  )
}

export default firebase