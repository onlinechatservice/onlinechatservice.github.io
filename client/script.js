// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBS9pLlq1tleHklw1VCn6qFPxYMKVhWgX0",
  authDomain: "onlinechatservice-7f34b.firebaseapp.com",
  databaseURL: "https://onlinechatservice-7f34b-default-rtdb.firebaseio.com",
  projectId: "onlinechatservice-7f34b",
  storageBucket: "onlinechatservice-7f34b.firebasestorage.app",
  messagingSenderId: "5116237850",
  appId: "1:5116237850:web:4692b07ef4dee2ad6559a3",
  measurementId: "G-JRB99MYG1G"

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// DOM elements
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const chatBox = document.getElementById('chat-box');

// Send message to Firestore
sendBtn.addEventListener('click', async () => {
    const message = messageInput.value;
    if (message) {
        await db.collection('messages').add({
            text: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        messageInput.value = ''; // Clear the input field
    }
});

// Display messages in real-time
db.collection('messages').orderBy('timestamp')
    .onSnapshot(snapshot => {
        chatBox.innerHTML = ''; // Clear previous messages
        snapshot.forEach(doc => {
            const message = doc.data().text;
            const div = document.createElement('div');
            div.textContent = message;
            chatBox.appendChild(div);
       
