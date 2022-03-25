import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-c6912/us-central1/api", // cloud function

  // THE API (cloud function) URL
  // baseURL: "https://us-central1-challenge-4b2b2.cloudfunctions.net/api",
  // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;
