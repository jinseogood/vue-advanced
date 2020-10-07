// 하이 오더 컴포넌트 (HOC)

import ListView from "./ListView.vue";
import bus from "../utils/bus.js";

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    created() {
      bus.$emit("start:spinner");
      setTimeout(() => {
        this.$store
          .dispatch("FETCH_LIST", this.$route.name)
          .then(() => {
            bus.$emit("end:spinner");
          })
          .catch((error) => {
            console.log(error);
          });
      }, 3000);
    },
    // render 함수를 통해 컴포넌트 로딩
    render(createElement) {
      return createElement(ListView);
    },
  };
}
