# Chatbot with Node.js & OpenRouter API

A simple and interactive chatbot, powered by a Node.js backend to securely handle API requests to the OpenRouter AI service.

<img src="https://i.ibb.co/whgkbfmY/image.png" width="400" />

---

## ✨ Features

-   **Toggleable Chat Window**: Show or hide the chatbot interface with a click.
-   **AI Responses**: Send messages and receive replies instantly via the OpenRouter API.
-   **Secure API Handling**: Uses a Node.js and Express server to protect the API Key, ensuring it is never exposed on the client-side.
-   **Markdown Support**: The chatbot can respond with styled text, lists, and even code blocks.

---

## 🚀 Tech Stack

-   **Frontend**: HTML, CSS, JavaScript
-   **Backend**: Node.js, Express.js
-   **API**: [OpenRouter.ai](https://openrouter.ai/models?q=deepseek) (using the DeepSeek: R1 (free) Model)
-   **Libraries**:
    -   `dotenv` For managing environment variables.
    -   `marked.js` To render markdown in chat responses

---

## 📁 Folder Structure

    ├── public/        
    │   ├── index.html
    │   └── script.js
    ├── server.js           # Main server
    ├── .env                # Environment variables
    ├── package.json
    └── README.md

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and `npm` installed on your system.

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/AdityaLF/ChatBot.git
    cd ChatBot
    ```

2.  **Install NPM Packages**
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**
      * Open the template file, `.env.example`
      * Fill it out by replacing `API_KEY_HERE` with your actual API KEY.
      * Save your changes, then rename the file from `.env.example` to `.env`

4.  **Run the Server**
    Start the backend server.
    ```bash
    node server.js
    ```

5.  **Open in Browser**
    Navigate to `http://localhost:3000` in your web browser to see the application live.

---

## 👤 Author

* **GitHub**: [@AdityaLF](https://github.com/AdityaLF)
* **Discord**: [@05.07am](https://discordapp.com/users/786163564205047839)
* **Support Me**: [ko-fi.com/adityaf](https://ko-fi.com/adityaf)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).