const API_KEY = "AIzaSyANDpYVtOHG-gL5-u5BRJvp0zYWqPtFkI8";

export const VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`;

export const SEARCH_SUGGESTIONS =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

  
export const comments = [
  {
    name: "Alice",
    comment: "This is a comment at level 1",
    replies: [
      {
        name: "Bob",
        comment: "This is a comment at level 2",
        replies: [
          {
            name: "Charlie",
            comment: "This is a comment at level 3",
            replies: [],
          },
          {
            name: "Dave",
            comment: "This is a comment at level 3",
            replies: [],
          },
        ],
      },
      {
        name: "Eve",
        comment: "This is a comment at level 2",
        replies: [
          {
            name: "Frank",
            comment: "This is a comment at level 3",
            replies: [],
          },
          {
            name: "Grace",
            comment: "This is a comment at level 3",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Hannah",
    comment: "This is a comment at level 1",
    replies: [
      {
        name: "Ivy",
        comment: "This is a comment at level 2",
        replies: [
          {
            name: "Jack",
            comment: "This is a comment at level 3",
            replies: [],
          },
          {
            name: "Kenny",
            comment: "This is a comment at level 3",
            replies: [],
          },
        ],
      },
      {
        name: "Liam",
        comment: "This is a comment at level 2",
        replies: [
          {
            name: "Mia",
            comment: "This is a comment at level 3",
            replies: [],
          },
          {
            name: "Noah",
            comment: "This is a comment at level 3",
            replies: [],
          },
        ],
      },
    ],
  },
];

// Arrays of first names and last names
const firstNames = [
  "Alice", "Bob", "Charlie", "Dave", "Eve", 
  "Frank", "Grace", "Hannah", "Ivy", "Jack",
  "Kenny", "Liam", "Mia", "Noah", "Olivia",
  "Paul", "Quinn", "Ruby", "Sam", "Tina"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", 
  "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
  "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
  "Thomas", "Taylor", "Moore", "Jackson", "Martin"
];

// Function to get a random element from an array
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const chatMessages = [
  "Hello! How are you?",
  "What's up?",
  "Have you seen the latest movie?",
  "I just finished my homework.",
  "Let's play a game!",
  "Did you hear about the news today?",
  "I'm so excited for the weekend!",
  "Can you help me with this problem?",
  "What are you doing right now?",
  "I love this song!",
  "Do you want to meet up later?",
  "I'm going to the park.",
  "Did you enjoy your vacation?",
  "Let's go out for dinner.",
  "I can't wait to show you something!",
  "I'm feeling a bit tired today.",
  "What's your favorite book?",
  "I'm learning to code in JavaScript!",
  "That sounds like a great idea.",
  "See you later!"
];

// Function to generate a random name
export function generateRandomName() {
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  return `${firstName} ${lastName}`;
}

export function generateRandomChatMessage() {
  return getRandomElement(chatMessages);
}
