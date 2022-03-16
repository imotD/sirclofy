import axios from "axios";
// import VueAxios from "vue-axios";

const apiClient = axios.create({
  baseURL: "https://ws.audioscrobbler.com/2.0",
  withCredentials: false,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

const apiKey = "68459665473b2bbde3b815086020419b";

// axios.defaults.headers.common["Authorization"] =
//   "68459665473b2bbde3b815086020419b";

export default {
  getTopArtist() {
    return apiClient.get(
      `?method=chart.gettopartists&api_key=${apiKey}&format=json`
    );
  },
  getTopTrack() {
    return apiClient.get(
      `?method=chart.gettoptracks&api_key=${apiKey}&format=json`
    );
  }
};
