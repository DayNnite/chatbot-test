// widget.js
console.log("🤖 Chatbot is ready to assist you!");

// Show basic chatbot immediately
document.addEventListener('DOMContentLoaded', () => {
  const chatbotDiv = document.getElementById('chatbot');
  chatbotDiv.innerHTML = `
    <div style="border: 1px solid #ccc; padding: 10px; width: 300px;">
      <p>Loading chatbot...</p>
    </div>
  `;
});

// Load external chatbot widget after
(function() {
    var s = document.createElement('script');
    s.src = "https://testmyprompt.com/widget/6809b3a1523186af0b2c9933/widget.js";
    document.head.appendChild(s);
})();
