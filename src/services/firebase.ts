import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBub0RjPWkXQlkrsPOdpN73vYuzbhrv71M',
  authDomain: 'twitter-29bf6.firebaseapp.com',
  projectId: 'twitter-29bf6',
  storageBucket: 'twitter-29bf6.appspot.com',
  messagingSenderId: '429791074625',
  appId: '1:429791074625:web:60ced03392e1ace96b29c0'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
