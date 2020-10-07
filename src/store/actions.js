import { fetchList, fetchUserInfo, fetchCommentItem } from "../api/index.js";

export default {
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // Promise
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(({ data }) => {
  //       commit("SET_LIST", data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  // async
  // 어떠한 값을 return 해도 return 값은 Promise 형식이다.
  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit("SET_LIST", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
