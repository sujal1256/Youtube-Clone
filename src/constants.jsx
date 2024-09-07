export const API_KEY = "AIzaSyB6AHPTwhvH75mfViyfytbjzPfFH3dbBW0";

export const VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=${API_KEY}`;

export const SEARCH_SUGGESTIONS =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_RESULT_API_FIRST_HALF = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=`;
export const SEARCH_RESULT_API_SECOND_HALF = `&type=video&key=${API_KEY}`;

export const VIDEO_DATA_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`;

export const LIVE_CHAT_COUNT = 20;

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
export const firstNames = [
  "Alice",
  "Bob",
  "Charlie",
  "Dave",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack",
  "Kenny",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Paul",
  "Quinn",
  "Ruby",
  "Sam",
  "Tina",
];

export const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
];

export const chatMessages = [
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
  "See you later!",
];

// Function to generate a random name
