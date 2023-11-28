const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

const microphoneIcon = document.querySelector('.fa-microphone');
let isSpeechRecognitionActive = false;

function toggleSpeechRecognition() {
    if (isSpeechRecognitionActive) {
        recognition.stop();
        document.querySelector('.pulse-ring').classList.remove('active');
        microphoneIcon.style.color = 'rgb(38, 189, 176)';
    } else {
        recognition.start();
        document.querySelector('.pulse-ring').classList.add('active');
        microphoneIcon.style.color = 'red';
    }
}

recognition.onstart = () => {
    console.log('Speech recognition started.');
    isSpeechRecognitionActive = true;
};

recognition.onend = () => {
    console.log('Speech recognition ended.');
    isSpeechRecognitionActive = false;
    document.querySelector('.pulse-ring').classList.remove('active');
    microphoneIcon.style.color = 'rgb(38, 189, 176)';
};

recognition.onresult = (event) => {
  const message = event.results[0][0].transcript;
  const chatbox = document.getElementById('chatbox');
  console.log(message);

  if (event.results[0].isFinal) {
    chatbox.value = message;
    // ResponsiveVoice.speak(message, 'US English Female', { volume: 1 });



    console.log('Final Result:', message);
    setTimeout(() => {
      addMessage(event);
      chatbox.value = ''; 

    }, 1000);
  } else {
    console.log('Interim Result:', message);
  }
};

;

const chat__root = document.createElement("div");
chat__root.id = "chat__root";
chat__root.style.zIndex = "99999";

let styleSheet = document.createElement("style");
styleSheet.innerText = cssstyles;
document.head.appendChild(styleSheet);
document.body.appendChild(chat__root);
function scrollToBottom() {
  const chatBody = document.getElementById("chat__body");
  chatBody.scrollTop = chatBody.scrollHeight;
}
scrollToBottom();

function toggleChat() {
  var chatPopup = document.getElementById("chat__popup");

  if (chatPopup.style.transform === "scale(0)") {
    chatPopup.style.transform = "scale(1)";
    document.getElementById("chat__bubble___close").style.display = "block";
    document.getElementById("chat__bubble___open").style.display = "none";
    chatPopup.style.height = "100%";

    if (window.innerWidth <= 768) {
      chatPopup.style.width = "100%";
    } else {
      chatPopup.style.width = "400px";
    }
    chatPopup.style.transformOrigin = "right bottom"; // Set the transform-origin
    const chatBody = document.getElementById("chat__body");
    chatBody.scrollTop = chatBody.scrollHeight;
  } else {
    document.getElementById("chat__bubble___open").style.display = "block";
    document.getElementById("chat__bubble___close").style.display = "none";

    chatPopup.style.height = "0";
    chatPopup.style.width = "0";
    chatPopup.style.transform = "scale(0)";
  }
}

function addMessage(e) {
  e.preventDefault();
  const chatbox = document.getElementById("chatbox");
  const chatBody = document.getElementById("chat__body");
  const message = chatbox.value;
  if (message) {
    const demo_image = document.getElementById("demo_image");
    if (demo_image) {
      demo_image.remove();
    }

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message__wrapper");
    messageDiv.innerHTML = `

        <div class="sender_message__container">

          <div
            class="sender__message "
          >
            <div>${message}</div>
          </div>
        </div>
      `;

    chatBody.appendChild(messageDiv);

    const headers = new Headers();
    headers.append("Content-Type", "application/json"); // Set the Content-Type header

    const LoadingDiv = document.createElement("div");

    LoadingDiv.classList.add("bot__message___wrapper");
    LoadingDiv.id = "loading";
    LoadingDiv.innerHTML = `
          <div class="loading__wrapper ">
            <div
          class="bot__avater"
        >
          <img style="width: 25px" src="https://raw.githubusercontent.com/brainstationrandd/chatbot-widget/main/assets/bot.png" />
        </div>
        <div
          class="loading__message"
        >
        <div >
    <div class="snippet" data-title="dot-pulse">
      <div class="stage">
        <div class="dot-pulse"></div>
      </div>
    </div>
  </div>
        </div>
      </div>
          `;
    chatBody.appendChild(LoadingDiv);
    scrollToBottom();

    fetch("https://chatbot-backend.sense-23.com/generate", {
      method: "POST", // Specify the HTTP method as POST
      headers: headers, // Pass the headers object
      body: JSON.stringify({
        prompt: message,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const botDiv = document.createElement("div");
        botDiv.classList.add("bot__message___wrapper");
        botDiv.innerHTML = `
          <div class="bot__wrapper">
        <div
          class="bot__avater"
        >
        <img style="width: 25px" src="https://raw.githubusercontent.com/brainstationrandd/chatbot-widget/main/assets/bot.png" />
        </div>
        <div
          class="bot___message"
        >
          <p>
            ${data.response}
          </p>
        </div>
      </div>
          `;
        chatBody.appendChild(botDiv);
        scrollToBottom();
        document.getElementById("loading").remove();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        document.getElementById("loading").remove();
      });

    chatbox.value = "";
    scrollToBottom();
  }
}
