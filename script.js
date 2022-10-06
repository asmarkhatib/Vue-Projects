// Vue.createApp({
//   data() {
//     return {
//       courseGoalA: "Learn Vue Js!",
//       courseGoalB: "Learn Vue Js concept",
//       vueLink: "https://google.com",
//     };
//   },

//   methods: {
//     outPutGoal() {
//       const randomNumber = Math.random();
//       if (randomNumber < 0.5) {
//         return this.courseGoalA;
//       } else {
//         return this.courseGoalB;
//       }
//     },
//   },
// }).mount(".content");

Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
    };
  },

  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxA = !this.boxA;
      } else if (box === "B") {
        this.boxB = !this.boxB;
      } else if (box === "C") {
        this.boxC = !this.boxC;
      }
    },
  },
}).mount("#list");
