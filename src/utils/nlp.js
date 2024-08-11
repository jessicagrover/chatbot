import nlp from 'compromise';

export const getBotResponse = (message) => {
  const doc = nlp(message);
  const topics = doc.topics().out('array');

  if (topics.includes('hello')) {
    return "Hi there! How can I help you today?";
  } else if (doc.has('how are you')) {
    return "I'm just a bot, but I'm doing well! How about you?";
  } else {
    return "I'm not sure how to respond to that. Can you rephrase?";
  }
};
