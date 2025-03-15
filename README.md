# Simple Chatbot

A basic chatbot implementation using Python and NLTK that can handle various queries and engage in simple conversations.

## Features

- Natural Language Processing using NLTK
- Basic knowledge base system
- Command-line interface
- Predefined responses for common queries
- Text preprocessing (tokenization, stopword removal, lemmatization)

## Setup

1. Make sure you have Python 3.7+ installed on your system.

2. Install the required dependencies:
```bash
pip install -r requirements.txt
```

3. Run the chatbot:
```bash
python chatbot.py
```

## Usage

- Start a conversation by typing your message
- The chatbot will respond based on its knowledge base
- Type 'quit', 'exit', or 'bye' to end the conversation

## Knowledge Base Categories

The chatbot can handle queries related to:
- Greetings
- Farewells
- Thanks
- How are you
- Name
- Capabilities

## Customization

You can extend the chatbot's knowledge base by modifying the `knowledge_base` and `responses` dictionaries in the `Chatbot` class. 