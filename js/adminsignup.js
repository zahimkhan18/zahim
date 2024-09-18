 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
 import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
 import { getFirestore,doc,setDoc,addDoc,getDoc,collection } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyD4Cgs5V_eiZBkl97Gn1q9ywGD9xskz2EM",
   authDomain: "hackathon-a6232.firebaseapp.com",
   projectId: "hackathon-a6232",
   storageBucket: "hackathon-a6232.appspot.com",
   messagingSenderId: "234751755604",
   appId: "1:234751755604:web:51202bf504ab124dc434c1",
   measurementId: "G-ERTJF7EVKB"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth()
 const db = getFirestore()

let name = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
let password = document.getElementById("Password")
let cnic = document.getElementById("cnic")

window.register = () =>{
  const obj ={
    name : name.value,
    lastname : lastname.value,
    email : email.value,
    cnic : cnic.value,
    password : password.value,
  }
  console.log(obj)


  name.value = ""
  lastname.value = ""
  email.value = ""
  cnic.value = ""
  password.value = ""

  createUserWithEmailAndPassword(auth ,obj.email,obj.password)
  .then(async(res)=>{
    console.log(res)
    obj.id = res.user.uid
    const docRef = await addDoc(collection(db, "admin"), obj);
    console.log("Document written with ID: ", docRef.id);
    alert("data regesterd")
  })
  .catch((error)=>{
    console.log(error)
  })

}
