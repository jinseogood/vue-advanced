import bus from '../utils/bus.js'

export default {
  // 인스턴스가 화면에 로딩되었을 때
  mounted() {
    bus.$emit("end:spinner");
  },
  // 재 사용할 컴포넌트 옵션 & 로직
  // created() {
  //   bus.$emit("start:spinner");
  //   this.$store
  //     .dispatch("FETCH_LIST", this.$route.name)
  //     .then(() => {
  //       bus.$emit("end:spinner");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
