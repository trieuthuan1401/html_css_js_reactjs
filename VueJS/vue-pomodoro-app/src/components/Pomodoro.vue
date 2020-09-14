<template>
  <v-card class="mt-8">
    <v-tabs @change="changeCurrentTimer" v-model="timerType" grow>
      <v-tab v-for="timer in timers" :key="timer">{{ timer.name }}</v-tab>
      <v-tabs-items v-model="currentTimer">
        <v-tab-item>
          <v-card color="basil" flat class="pa-5 d-flex flex-column justify-center align-center">
            <h1 class="time">{{displayMinutes}}:{{displaySeconds}}</h1>
            <div class="button-group">
              <v-btn color="primary" @click="start">
                <v-icon left small>mdi-play-circle-outline</v-icon>Start
              </v-btn>
              <v-btn color="error" @click="stop">
                <v-icon left small>mdi-stop-circle-outline</v-icon>Stop
              </v-btn>
              <v-btn @click="reset" :disabled="isRunning">
                <v-icon left small>mdi-restart</v-icon>Stop
                Reset
              </v-btn>
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      timerInstace: null,
      totalSeconds: 25 * 60,
      currentTimer: 0,
      timers: [
        {
          name: "Pomodoro",
          minutes: 25,
        },
        {
          name: "Short Break",
          minutes: 5,
        },
        {
          name: "Long Break",
          minutes: 10,
        },
      ],
    };
  },
  computed: {
    //? Lấy phần nguyên
    displayMinutes() {
      const minutes = Math.floor(this.totalSeconds / 60);
      return this.formatTime(minutes);
    },
    //?Lấy phần dư
    displaySeconds() {
      const seconds = this.totalSeconds % 60;
      return this.formatTime(seconds);
    },
  },
  methods: {
    formatTime(time) {
      if (time < 10) {
        return "0" + time;
      }
      return time.toString();
    },
    start() {
      this.isRunning = true;
      this.timerInstace = setInterval(() => {
        this.totalSeconds -= 1;
      }, 1000);
    },
    stop() {
      this.isRunning = false;
      clearInterval(this.timerInstace);
    },
    reset() {
      this.stop();
      this.totalSeconds = 25 * 60;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  width: 600px;
  color: black;
  user-select: none;
}
.v-btn {
  margin: 0 2px;
}
.time {
  font-size: 80px;
  font-weight: 400;
  text-align: center;
}
</style>
