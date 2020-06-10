const app = new Vue({
  el: "#app",
  data: {
    textCalc: '',
    fio: "",
    day: "",
    month: "",
    year: "",
    chsDescription: [],
    yearDescription: [],
    missionDescription: [],
    taskDescription: [],
    inviteDescription: '',
  },
  created() {
    this.yearDescription = yearDescription,
    this.chsDescription = chsDescription
    this.missionDescription = missionDescription
    this.taskDescription = taskDescription
    this.inviteDescription = inviteDescription
  },
  computed: {
    chs() {
      return simplify(this.day)
    },
    mission() {
      return simplify(this.day + "" + this.month + "" + this.year)
    },
    selfYear() {
      return simplify(this.day + "" + this.month + "" + new Date().getFullYear())
    },
    selfMonth() {
      return simplify(this.selfYear + " " + new Date().getMonth() + 1)
    },
    selfDay() {
      return simplify(this.selfMonth + " " + new Date().getDate())
    },
    textCalcResult() {
      if (!this.textCalc) return 0
      return simplify(calculateLetterToNumber(this.textCalc))
    }
  }
});
