import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}
function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchCommentItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

// 3. 다른 곳에서 사용하기 위해 export
export {
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
};
