const API_KEY = "AIzaSyANDpYVtOHG-gL5-u5BRJvp0zYWqPtFkI8";

export const VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`

export const SEARCH_SUGGESTIONS = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="