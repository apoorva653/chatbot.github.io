import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import random
import json
import os

# Download required NLTK data
try:
    nltk.data.find('tokenizers/punkt')
    nltk.data.find('corpora/stopwords')
    nltk.data.find('corpora/wordnet')
except LookupError:
    nltk.download('punkt')
    nltk.download('stopwords')
    nltk.download('wordnet')

class Chatbot:
    def __init__(self):
        self.lemmatizer = WordNetLemmatizer()
        self.knowledge_base = {
            'greeting': ['hello', 'hi', 'hey', 'greetings'],
            'farewell': ['goodbye', 'bye', 'see you', 'take care'],
            'thanks': ['thank you', 'thanks', 'appreciate it'],
            'how_are_you': ['how are you', 'how do you feel', 'what\'s up'],
            'name': ['what is your name', 'who are you', 'tell me about yourself'],
            'capabilities': ['what can you do', 'help', 'abilities'],
            'default': ['I\'m not sure I understand.', 'Could you rephrase that?', 'I don\'t have enough information to answer that.']
        }
        
        self.responses = {
            'greeting': ['Hello! How can I help you today?', 'Hi there! What can I do for you?', 'Hey! How may I assist you?'],
            'farewell': ['Goodbye! Have a great day!', 'See you later!', 'Take care!'],
            'thanks': ['You\'re welcome!', 'No problem!', 'Glad I could help!'],
            'how_are_you': ['I\'m doing well, thank you! How about you?', 'I\'m great! How are you today?'],
            'name': ['I\'m ChatBot, your friendly AI assistant!', 'You can call me ChatBot, I\'m here to help!'],
            'capabilities': ['I can help you with general questions, basic conversations, and provide information from my knowledge base. Feel free to ask me anything!']
        }

    def preprocess_text(self, text):
        # Tokenize the text
        tokens = word_tokenize(text.lower())
        
        # Remove stopwords
        stop_words = set(stopwords.words('english'))
        tokens = [token for token in tokens if token not in stop_words]
        
        # Lemmatize tokens
        tokens = [self.lemmatizer.lemmatize(token) for token in tokens]
        
        return tokens

    def get_response(self, user_input):
        # Preprocess the user input
        tokens = self.preprocess_text(user_input)
        
        # Check for matches in knowledge base
        for category, keywords in self.knowledge_base.items():
            if any(keyword in tokens for keyword in keywords):
                return random.choice(self.responses[category])
        
        # If no match is found, return a default response
        return random.choice(self.responses['default'])

def main():
    chatbot = Chatbot()
    print("ChatBot: Hello! I'm your AI assistant. How can I help you today?")
    print("(Type 'quit' to exit)")
    
    while True:
        user_input = input("You: ").strip()
        
        if user_input.lower() in ['quit', 'exit', 'bye']:
            print("ChatBot: Goodbye! Have a great day!")
            break
            
        if not user_input:
            continue
            
        response = chatbot.get_response(user_input)
        print("ChatBot:", response)

if __name__ == "__main__":
    main() 