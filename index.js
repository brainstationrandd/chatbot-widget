let tailwindcss = document.createElement("script");
tailwindcss.src = "https://cdn.tailwindcss.com/";
document.head.appendChild(tailwindcss);

const chat__root = document.createElement("div");
chat__root.id = "chat__root";
chat__root.innerHTML += `
<div
      class="fixed right-0 bottom-0 md:bottom-8 md:right-8 flex flex-col items-end"
    >
      <div
        id="chat__popup"
        class="fixed md:relative scale-0 max-md:top-0 md:my-2 flex h-[100%] w-screen md:w-[400px] flex-col bg-white shadow-xl ring-1 ring-gray-900/5 md:rounded-lg"
      >
        <div
          class="flex items-center justify-between md:justify-center md:rounded-t-lg bg-indigo-500 p-3 text-2xl font-semibold text-white"
        >
          <span>ChatBot</span>
          <span
            onclick="toggleChat()"
            class="md:hidden p-2 rounded-full"
            id="cancel"
          >
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
        <div
          id="chat__body"
          class="flex-grow relative items-end p-3 overflow-auto"
        >
          <div
            id="demo_image"
            class="flex flex-col gap-2 h-full justify-center items-center p-20"
          >
            <img src="https://raw.githubusercontent.com/brainstationrandd/chatbot-widget/main/assets/chat_body2.svg" class="w-full" alt="logo" />
            <h2 class="font-semibold w-full text-center text-indigo-500">
              Welcome to the chatBot! How can I help you??
            </h2>
          </div>
        </div>

        <form onsubmit="addMessage(event)" class="relative flex items-center">
          <input
            type="text"
            id="chatbox"
            class="block w-full rounded-b-lg border-b border-gray-300 bg-gray-50 px-3 py-4 pr-10 text-sm text-gray-600 focus:outline-0 focus:ring-0"
            placeholder="Send a message"
            autocomplete="off"
          />
          <button type="submit" class="absolute right-2 fill-gray-600">
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

      <div
        onclick="toggleChat()"
        class="flex h-16 w-16 max-md:m-5 cursor-pointer items-center justify-center rounded-full bg-indigo-500 shadow-2xl"
      >
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

document.body.appendChild(chat__root);

var cssstyles = `::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #6d6d96;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  #cancel {
    background: rgba(255, 255, 255, 0.2);
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
  }`;

let styleSheet = document.createElement("style");
styleSheet.innerText = cssstyles;
document.head.appendChild(styleSheet);

function scrollToBottom() {
  const chatBody = document.getElementById("chat__body");
  chatBody.scrollTop = chatBody.scrollHeight;
}
scrollToBottom();

function toggleChat() {
  var chatPopup = document.getElementById("chat__popup");

  if (chatPopup.classList.contains("scale-0")) {
    chatPopup.classList.remove("scale-0");
    const chatBody = document.getElementById("chat__body");
    chatBody.scrollTop = chatBody.scrollHeight;
  } else {
    chatPopup.classList.add("scale-0");
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
    messageDiv.classList.add(
      "col-start-1",
      "col-end-8",
      "rounded-lg",
      "p-1.5",
      "ml-10"
    );
    messageDiv.innerHTML = `

        <div class="flex flex-row-reverse items-end justify-start">

          <div
            class="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow"
          >
            <div>${message}</div>
          </div>
        </div>
      `;

    chatBody.appendChild(messageDiv);

    const headers = new Headers();
    headers.append("Content-Type", "application/json"); // Set the Content-Type header

    const LoadingDiv = document.createElement("div");

    LoadingDiv.classList.add(
      "col-start-1",
      "col-end-8",
      "rounded-lg",
      "p-1.5",
      "pl-0"
    );
    LoadingDiv.id = "loading";
    LoadingDiv.innerHTML = `
          <div class="flex flex-row items-center ">
            <div
          class="flex p-3 flex-wrap h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACG0lEQVR4nO2awUobURSGj4sG251YKn2Bght37gTBjfgA3fQBBOlW3LmzqKBiu3ErFUpDFtKNLqSLFnRRH0FX1YioC2kXCsZ+5ZqTdriZiTOTmXBvMh+EMCf57/3/3GTm3CEiOQGUgGXgTB9rQL/4BvUQNqviG9RXweZcfAM4CQlyIr4BvAsJsiS+ATwJCVISH8FCfIVuCVKQJTiK9HwQcQTaXRFxBIogijgCaf0UQXKCnlkRoAJcAe+BgdjC5u1s1bTpcTrcNDosP8Yr8EG9l02h1ngTsJ0wiDGQeM+RRkdzkC8Bbc1uRW4SBjGfpk01RpDEOpqD3AbFka12G0FOUwZpqYvyl1WQsK/IYowgiXXkHKSkpqopfuyJdOQZpJNQBFHEEbD8NI7/1ZtOYxFCx4Pc2BeWuyhhggn3eZzvGQSpBcbbNoXnwBZwAXzKIMgU8KdFiHtgIoMgn9XzR2AwtjDhpHMtQrxNOeYDnRP+148Be8Bv4BewC4y2Md4DnRPmBGn9FEFygmJFFHEE0vrpuiAZY67G34ChiDmfAZum5YgawJUgDdZC5nsJHD4mFBcAXqufilUfAX7qa8fAsLgMMKNmNwK1SeBa6wfAC3EdYF4NL+jxtOm4tVYGnooPAOtqelZvCKKdstmz94kvaMttuNRns6l7I74B7AROQOZW57j4CPBDQxwBr8RXqJ9avwZvlnsJsGL+o5LH4H8B8sVQbx1ACWsAAAAASUVORK5CYII=">
        </div>
        <div
          class="max-w-[80%]  break-words ml-5 rounded-xl bg-white px-4 py-2 text-sm "
        >
        <div class="col-3">
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
        botDiv.classList.add(
          "col-start-1",
          "col-end-8",
          "rounded-lg",
          "p-1.5",
          "pl-0"
        );
        botDiv.innerHTML = `
          <div class="flex flex-row items-end">
        <div
          class="flex p-3 flex-wrap h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACG0lEQVR4nO2awUobURSGj4sG251YKn2Bght37gTBjfgA3fQBBOlW3LmzqKBiu3ErFUpDFtKNLqSLFnRRH0FX1YioC2kXCsZ+5ZqTdriZiTOTmXBvMh+EMCf57/3/3GTm3CEiOQGUgGXgTB9rQL/4BvUQNqviG9RXweZcfAM4CQlyIr4BvAsJsiS+ATwJCVISH8FCfIVuCVKQJTiK9HwQcQTaXRFxBIogijgCaf0UQXKCnlkRoAJcAe+BgdjC5u1s1bTpcTrcNDosP8Yr8EG9l02h1ngTsJ0wiDGQeM+RRkdzkC8Bbc1uRW4SBjGfpk01RpDEOpqD3AbFka12G0FOUwZpqYvyl1WQsK/IYowgiXXkHKSkpqopfuyJdOQZpJNQBFHEEbD8NI7/1ZtOYxFCx4Pc2BeWuyhhggn3eZzvGQSpBcbbNoXnwBZwAXzKIMgU8KdFiHtgIoMgn9XzR2AwtjDhpHMtQrxNOeYDnRP+148Be8Bv4BewC4y2Md4DnRPmBGn9FEFygmJFFHEE0vrpuiAZY67G34ChiDmfAZum5YgawJUgDdZC5nsJHD4mFBcAXqufilUfAX7qa8fAsLgMMKNmNwK1SeBa6wfAC3EdYF4NL+jxtOm4tVYGnooPAOtqelZvCKKdstmz94kvaMttuNRns6l7I74B7AROQOZW57j4CPBDQxwBr8RXqJ9avwZvlnsJsGL+o5LH4H8B8sVQbx1ACWsAAAAASUVORK5CYII=">
        </div>
        <div
          class="max-w-[82%] break-words ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow"
        >
          <div>
            ${data.response}
          </div>
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