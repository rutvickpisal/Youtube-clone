const API_KEY = "AIzaSyB2lCUtlZAz4n3gr54yPpb0KuLgQv_ExTc"

const VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`

export const VIDEO_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=SEARCHHERE&type=video&key=${API_KEY}`

export default VIDEO_API