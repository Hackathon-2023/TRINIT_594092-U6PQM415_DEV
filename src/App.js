import React, { useRef, useState } from 'react';
import './App.css';
import Chat from './components/Chat';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';

// import SearchBar from './components/SearchBar'
// import BookData from "./Data.json"
// // import 'firebase/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyD75cOSNcjRCtjoaGcB6e9IiiImIiXeSEI",
//   authDomain: "chatapp-203c3.firebaseapp.com",
//   projectId: "chatapp-203c3",
//   storageBucket: "chatapp-203c3.appspot.com",
//   messagingSenderId: "935936150123",
//   appId: "1:935936150123:web:0c7fb5a44b1a19b176ff2e"
// })

// const auth = getAuth(app);
// const firestore = firebase.firestore();
// // const analytics = firebase.analytics();


function App() {

  // const [user] = useAuthState(auth);

  return (
//     <div className="App">
//       <header>
//         <h1><span class="material-symbols-outlined">
// local_florist
// </span> GreenWay</h1>
//         <SignOut />
//       </header>

//       <section>
//         {user ? <ChatRoom /> : <SignIn />}
//       </section>
      
//     </div>
    <Chat/>
  );
}

// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth,provider);
    
//   }

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p className='sign-in-text'>Chat, Share, Ask from Community of fellow Farmers and Enthusiasts</p>
//     </>
//   )

// }

// function SignOut() {
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }


// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);

//   const [messages] = useCollectionData(query, { idField: 'id' });

//   const [formValue, setFormValue] = useState('');


//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL
//     })

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   return (<>
//     <main>

//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

//       <span ref={dummy}></span>

//     </main>

//     <form onSubmit={sendMessage}>

//       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Share/Ask from Community" />

//       <button type="send" disabled={!formValue}><span class="material-symbols-outlined">
// send
// </span></button>

//     </form>
//   </>)
// }


// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//       <p>{text}</p>
//     </div>
//   </>)
// }


export default App;