import {
  firstNames,
  lastNames,
  chatMessages,
  VIDEO_DATA_API,
  API_KEY,
} from "./constants";

export const getValidNum = (a) => {
  if (a > Math.pow(10, 9)) {
    return Math.floor(a / Math.pow(10, 9)) + "B";
  } else if (a > Math.pow(10, 6)) {
    return Math.floor(a / Math.pow(10, 6)) + "M";
  } else if (a > Math.pow(10, 3)) {
    return Math.floor(a / Math.pow(10, 3)) + "K";
  }
  return Math.floor(a);
};

export function timeSinceUpload(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(weeks / 52);

  if (years >= 1) {
    return `${years} year${years > 1 ? "s" : ""}`;
  } else if (months >= 1) {
    return `${months} month${months > 1 ? "s" : ""}`;
  } else if (weeks >= 1) {
    return `${weeks} week${weeks > 1 ? "s" : ""}`;
  } else if (days >= 1) {
    return `${days} day${days > 1 ? "s" : ""}`;
  } else if (hours >= 1) {
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  } else {
    return `${minutes} minute${minutes > 1 ? "s" : ""}`;
  }
}

// Function to get a random element from an array
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function generateRandomName() {
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  return `${firstName} ${lastName}`;
}

export function generateRandomChatMessage() {
  return getRandomElement(chatMessages);
}
