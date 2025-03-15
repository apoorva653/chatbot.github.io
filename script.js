class Chatbot {
    constructor() {
        this.knowledgeBase = {
            'greeting': ['hello', 'hi', 'hey', 'greetings'],
            'farewell': ['goodbye', 'bye', 'see you', 'take care'],
            'thanks': ['thank you', 'thanks', 'appreciate it'],
            'how_are_you': ['how are you', 'how do you feel', 'what\'s up'],
            'name': ['what is your name', 'who are you', 'tell me about yourself'],
            'capabilities': ['what can you do', 'help', 'abilities'],
            'weather': ['weather', 'temperature', 'forecast'],
            'jokes': ['joke', 'funny', 'humor', 'laugh'],
            'time': ['time', 'clock', 'schedule'],
            'default': ['I\'m not sure I understand.', 'Could you rephrase that?', 'I don\'t have enough information to answer that.']
        };
        
        this.responses = {
            'greeting': ['Hello! How can I help you today?', 'Hi there! What can I do for you?', 'Hey! How may I assist you?'],
            'farewell': ['Goodbye! Have a great day!', 'See you later!', 'Take care!'],
            'thanks': ['You\'re welcome!', 'No problem!', 'Glad I could help!'],
            'how_are_you': ['I\'m doing well, thank you! How about you?', 'I\'m great! How are you today?'],
            'name': ['I\'m ChatBot, your friendly AI assistant!', 'You can call me ChatBot, I\'m here to help!'],
            'capabilities': ['I can help you with general questions, basic conversations, weather information, jokes, and time-related queries. Feel free to ask me anything!'],
            'weather': ['I can tell you about the weather! What location would you like to know about?', 'I can help you with weather information. Which city are you interested in?'],
            'jokes': ['Why don\'t programmers like nature? It has too many bugs!', 'What do you call a bear with no teeth? A gummy bear!', 'Why did the chatbot go to therapy? It had too many processing issues!'],
            'time': ['The current time is ' + new Date().toLocaleTimeString(), 'It\'s ' + new Date().toLocaleTimeString() + ' right now!']
        };
    }

    preprocessText(text) {
        return text.toLowerCase().trim();
    }

    getResponse(userInput) {
        const processedInput = this.preprocessText(userInput);
        
        // Check for matches in knowledge base
        for (const [category, keywords] of Object.entries(this.knowledgeBase)) {
            if (keywords.some(keyword => processedInput.includes(keyword))) {
                const responses = this.responses[category];
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
        
        // If no match is found, return a default response
        const defaultResponses = this.responses['default'];
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
}

// Initialize chatbot and UI elements
const chatbot = new Chatbot();
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

// Add message to chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle form submission
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    
    if (message) {
        // Add user message
        addMessage(message, true);
        
        // Get and add bot response
        const response = chatbot.getResponse(message);
        setTimeout(() => addMessage(response), 500);
        
        // Clear input
        userInput.value = '';
    }
});

// Handle enter key
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        chatForm.dispatchEvent(new Event('submit'));
    }
}); 