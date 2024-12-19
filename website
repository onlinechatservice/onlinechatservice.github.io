<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Application</title>
    <style>
        #chat {
            border: 1px solid #ccc;
            padding: 10px;
            width: 300px;
            height: 400px;
            overflow-y: scroll;
        }
        #message {
            width: 200px;
        }
    </style>
</head>
<body>
    <div id="chat"></div>
    <input type="text" id="message" placeholder="Type a message...">
    <button onclick="sendMessage()">Send</button>

    <script>
        const ws = new WebSocket('ws://localhost:8080');
        const chat = document.getElementById('chat');

        ws.onmessage = (event) => {
            const message = document.createElement('div');
            message.textContent = event.data;
            chat.appendChild(message);
        };

        function sendMessage() {
            const messageInput = document.getElementById('message');
            ws.send(messageInput.value);
            messageInput.value = '';
        }
    </script>
</body>
</html>
