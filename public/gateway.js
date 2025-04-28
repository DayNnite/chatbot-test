// gateway.js

(function() {
    const clientId = "client123"; // <-- expected client ID
    const accessToken = "abc123"; // <-- expected access token
  
    const params = new URLSearchParams(window.location.search);
    const providedClientId = params.get('clientId');
    const providedAccessToken = params.get('accessToken');
  
    if (providedClientId === clientId && providedAccessToken === accessToken) {
      // Client is valid - inject the real widget
      const script = document.createElement('script');
      script.src = 'https://testmyprompt.com/widget.js'; // <-- real widget
      document.head.appendChild(script);
    } else {
      console.error("Unauthorized access. Widget not loaded.");
    }
  })();
  
