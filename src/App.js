import { useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  signInWithEmailAndPassword, 
  signInWithPopup 
} from "firebase/auth";
import { auth, provider } from './firebase-config';
import './App.css';

function App() {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      setRegisterEmail('');
      setRegisterPassword('');
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setLoginEmail('');
      setLoginPassword('');
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      })
  };

  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input
          type="email"
          placeholder='Email...'
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password...'
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Create User</button>
      </div>

      <div>
        <h3>Login</h3>
        <input
          type="email"
          placeholder='Email...'
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password...'
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
      <br />
      <button onClick={signInWithGoogle}>Sign In With Google</button>

      <h4>User Logged In: </h4>
      {user ? user.email : "Not Logged In"}


      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

export default App;
