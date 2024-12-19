// Firebase config
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};

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
       
