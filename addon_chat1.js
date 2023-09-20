const chat__root = document.createElement("div");
chat__root.id = "chat__root";
chat__root.style.zIndex = "99999";
chat__root.innerHTML += `
<div class="chat__wrapper">
      <div id="chat__popup" style="transform: scale(0)">
        <div class="chat__head">
          <span>ChatBot</span>
          <span onclick="toggleChat()" class="chat__cancel___btn" id="cancel">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8782 11.9998L19.606 6.28455C20.1283 5.76215 20.1283 4.91517 19.606 4.39278C19.0837 3.87038 18.2368 3.87038 17.7145 4.39278L12 10.1214L6.28552 4.39278C5.7632 3.87038 4.91634 3.87038 4.39402 4.39278C3.87169 4.91517 3.87169 5.76215 4.39402 6.28455L10.1218 11.9998L4.39402 17.7151C4.14184 17.9653 4 18.3058 4 18.661C4 19.0162 4.14184 19.3568 4.39402 19.6069C4.64413 19.8591 4.9846 20.001 5.33977 20.001C5.69494 20.001 6.03541 19.8591 6.28552 19.6069L12 13.8783L17.7145 19.6069C17.9646 19.8591 18.3051 20.001 18.6602 20.001C19.0154 20.001 19.3559 19.8591 19.606 19.6069C19.8582 19.3568 20 19.0162 20 18.661C20 18.3058 19.8582 17.9653 19.606 17.7151L13.8782 11.9998Z"
                fill="#FFFFFF"
              />
            </svg>
          </span>
        </div>
        <div id="chat__body">
          <div id="demo_image">
            <img
              src="https://raw.githubusercontent.com/brainstationrandd/chatbot-widget/main/assets/chat_body2.svg"
              style="width: 100%"
              alt="logo"
            />
            <h2 class="chat__title">
              Welcome to the chatBot! How can I help you??
            </h2>
          </div>
        </div>

        <form onsubmit="addMessage(event)" class="chat___form">
          <input
            type="text"
            id="chatbox"
            class="chat__input"
            placeholder="Send a message"
            autocomplete="off"
          />
          <button type="submit" class="chat__submit">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20.000000pt"
              height="20.000000pt"
              viewBox="0 0 60.000000 60.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)"
                fill="inherit"
                stroke="none"
              >
                <path
                  d="M84 527 c-3 -8 0 -43 6 -78 10 -63 10 -64 -16 -85 l-26 -21 33 -6
                        c19 -3 100 -11 182 -18 81 -7 147 -16 147 -19 0 -3 -66 -12 -148 -19 -81 -7
                        -162 -15 -181 -18 l-33 -6 26 -21 c26 -21 26 -22 15 -90 -8 -48 -8 -71 0 -79
                        14 -14 466 212 466 233 0 10 -82 56 -225 128 -123 61 -228 112 -232 112 -5 0
                        -11 -6 -14 -13z"
                />
              </g>
            </svg>
          </button>
        </form>
      </div>

      <div onclick="toggleChat()" class="chat__bubble">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2.00098C10.6868 2.00098 9.38641 2.25963 8.17315 2.76218C6.9599 3.26473 5.85751 4.00132 4.92892 4.92991C3.05356 6.80527 1.99999 9.34881 1.99999 12.001C1.99125 14.3101 2.79078 16.5495 4.25999 18.331L2.25999 20.331C2.12123 20.4716 2.02723 20.6502 1.98986 20.8442C1.95249 21.0382 1.97341 21.2389 2.04999 21.421C2.13305 21.6009 2.26769 21.7521 2.43683 21.8554C2.60598 21.9586 2.80199 22.0093 2.99999 22.001H12C14.6522 22.001 17.1957 20.9474 19.0711 19.072C20.9464 17.1967 22 14.6531 22 12.001C22 9.34881 20.9464 6.80527 19.0711 4.92991C17.1957 3.05454 14.6522 2.00098 12 2.00098ZM12 20.001H5.40999L6.33999 19.071C6.52624 18.8836 6.63078 18.6302 6.63078 18.366C6.63078 18.1018 6.52624 17.8483 6.33999 17.661C5.03057 16.353 4.21516 14.6315 4.03268 12.7898C3.8502 10.948 4.31193 9.09998 5.33922 7.5605C6.3665 6.02102 7.89578 4.88534 9.6665 4.34695C11.4372 3.80856 13.3398 3.90078 15.0502 4.60789C16.7606 5.315 18.1728 6.59325 19.0464 8.22487C19.92 9.85648 20.2009 11.7405 19.8411 13.556C19.4814 15.3714 18.5033 17.006 17.0735 18.1812C15.6438 19.3564 13.8508 19.9995 12 20.001Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
`;

var cssstyles = `

#cancel {
  /* background: rgba(255, 255, 255, 0.2); */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

#cancel:hover {
  transition: 0.5s ease;
  background: rgba(255, 255, 255, 0.3);
}

.dot-pulse {
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  box-shadow: 9999px 0 0 -5px;
  animation: dot-pulse 1.5s infinite linear;
  animation-delay: 0.25s;
}
.dot-pulse::before,
.dot-pulse::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
}
.dot-pulse::before {
  box-shadow: 9984px 0 0 -5px;
  animation: dot-pulse-before 1.5s infinite linear;
  animation-delay: 0s;
}
.dot-pulse::after {
  box-shadow: 10014px 0 0 -5px;
  animation: dot-pulse-after 1.5s infinite linear;
  animation-delay: 0.5s;
}

@keyframes dot-pulse-before {
  0% {
    box-shadow: 9984px 0 0 -5px;
  }
  30% {
    box-shadow: 9984px 0 0 2px;
  }
  60%,
  100% {
    box-shadow: 9984px 0 0 -5px;
  }
}
@keyframes dot-pulse {
  0% {
    box-shadow: 9999px 0 0 -5px;
  }
  30% {
    box-shadow: 9999px 0 0 2px;
  }
  60%,
  100% {
    box-shadow: 9999px 0 0 -5px;
  }
}
@keyframes dot-pulse-after {
  0% {
    box-shadow: 10014px 0 0 -5px;
  }
  30% {
    box-shadow: 10014px 0 0 2px;
  }
  60%,
  100% {
    box-shadow: 10014px 0 0 -5px;
  }
}

@media screen and (min-width: 720px) {
  #chat__body {
    height: calc(80vh - 150px);
  }
}

.chat__wrapper {
  display: flex;
  position: fixed;
  right: 0;
  bottom: 0;
  flex-direction: column;
  align-items: flex-end;
}

#chat__popup {
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: column;
  box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.12),
    0px 0px 2px 0px rgba(145, 158, 171, 0.2);
  width: 100vw;
  background-color: #ffffff;
  --transform-scale-x: 0;
  --transform-scale-y: 0;
  /* box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  0 10px 10px -5px rgba(0, 0, 0, 0.04); */
  height: 100%;
  transform-origin: right bottom;
  transition: 0.2s ease-out;
}

.chat__head {
  display: flex;
  padding: 0.75rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #6366f1;
}

.chat__cancel___btn {
  padding: 0.5rem;
  border-radius: 9999px;
}

#chat__body {
  overflow: auto;
  position: relative;
  padding: 0.75rem;
  flex-grow: 1;
  align-items: flex-end;
}

#demo_image {
  display: flex;

  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.chat__title {
  width: 100%;
  font-weight: 600;
  text-align: center;
  color: #6366f1;
}

.chat___form {
  display: flex;
  position: relative;
  align-items: center;
}
*:focus {
  outline: none;
}
.chat__input {
  display: block;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 2.5rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-width: 1px;
  border: solid 1px #e5e7eb;
  width: 100%;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #4b5563;
  background-color: #f9fafb;
  outline: none;
}

.chat__submit {
  position: absolute;
  right: 0.5rem;
  border: none;
  background: none;
  fill: rgb(77, 78, 78);
}
.chat__submit:focus {
  outline: none;
}

.chat__bubble {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  width: 4rem;
  height: 4rem;
  margin-bottom: 20px;
  margin-right: 20px;
  background-color: #6366f1;
  cursor: pointer;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.message__wrapper {
  padding: 0.375rem;
  margin-left: 2.5rem;
  grid-column-start: 1;
  grid-column-end: 8;
  border-radius: 0.5rem;
}
.bot__message___wrapper {
  padding: 0.375rem;
  padding-left: 0;
  grid-column-start: 1;
  grid-column-end: 8;
  border-radius: 0.5rem;
}
.sender_message__container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: flex-end;
}
.sender__message {
  position: relative;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: 0.75rem;
  border-radius: 0.75rem;
  border-end-end-radius: 0;
  line-height: 1.25rem;
  background-color: #e0e7ff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.loading__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.bot__avater {
  display: flex;
  padding: 0.25rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  width: 40px;
  height: 40px;
  background-color: #6366f1;
}

.loading__message {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1.25rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  overflow-wrap: break-word;
  background-color: #ffffff;
  max-width: 80%;
}

.bot__wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.bot___message {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 0.75rem;
  border-radius: 0.75rem;
  border-end-start-radius: 0;
  line-height: 1.25rem;
  overflow-wrap: break-word;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
  max-width: 70%;
  min-height: 37px;

  /* display: flex;
  flex-wrap: wrap;
  align-items: center; */
}
p {
  display: block;
  margin-block-start: 0.4em;
  margin-block-end: 0.4em;
}

@media (min-width: 768px) {
  .chat__wrapper {
    right: 2rem;
    bottom: 2rem;
  }
  .chat__bubble {
    margin-bottom: 0;
    margin-right: 0;
  }
  #chat__popup {
    position: relative;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    width: 0;
    box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.12),
      0px 0px 2px 0px rgba(145, 158, 171, 0.2);
  }
  #demo_image {
    padding-right: 5rem;
    padding-left: 5rem;
  }

  .chat__head {
    justify-content: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  #cancel {
    display: none;
  }
}`;

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

    if (window.innerWidth <= 768) {
      chatPopup.style.width = "100%";
    } else {
      chatPopup.style.width = "400px";
    }
    chatPopup.style.transformOrigin = "right bottom"; // Set the transform-origin
    const chatBody = document.getElementById("chat__body");
    chatBody.scrollTop = chatBody.scrollHeight;
  } else {
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
            class="sender__message"
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
          <img style="width: 25px" src="./assets/bot.png" />
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
        <img style="width: 25px" src="./assets/bot.png" />
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
