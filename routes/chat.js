document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('chatForm');
    const messageInput = document.getElementById('messageInput');
    const messagesDiv = document.getElementById('messages');
  
    // Establish an SSE connection
    const sse = new EventSource('/sse');
    sse.onmessage = function(event) {
      const data = JSON.parse(event.data);
      messagesDiv.innerHTML += `<div>${data.message}</div>`;
    };
  
    // Send a message to the server
    form.onsubmit = function(e) {
      e.preventDefault();
      fetch(`/chat?message=${encodeURIComponent(messageInput.value)}`);
      messageInput.value = '';
    };
  });
  