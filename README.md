# Chatbot with Node.js & OpenRouter API

A simple and interactive chatbot, powered by a Node.js backend to securely handle API requests to the OpenRouter AI service.

![Chatbot Preview](https://i.ibb.co/whgkbfmY/image.png)

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
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    cd your-repository-name
    ```

2.  **Install NPM Packages**
    Install the required dependencies for the server.
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**
    Replace "API_KEY_HERE" with your actual OpenRouter API key.
    ```
    # .env file
    OPENROUTER_API_KEY="API_KEY_HERE" 
    ```

4.  **Run the Server**
    Start the backend server.
    ```bash
    node server.js
    ```

5.  **Open in Browser**
    Navigate to `http://localhost:3000` in your web browser to see the application live.

---

## 👤 Author

**Aditya**

-   **GitHub**: `[@AdityaLF](https://github.com/AdityaLF)`
-   **Discord**: `[@05.07am](https://discordapp.com/users/786163564205047839)`
-   **Instagram**: `[@adityaa_df](https://www.instagram.com/adityaa_df)`