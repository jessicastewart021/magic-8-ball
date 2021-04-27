<template>
  <div id="app">
    <h1 class="heading">Jess' Magic 8 Ball</h1>
    <v-col class="field-button-column">
      <v-text-field
        color="black"
        label="Enter a question"
        outlined
        v-model="question"
      ></v-text-field>
      <v-btn x-large class="ma-2" outlined color="green" @click="shakeMagicBall">
        Ask Question
      </v-btn>
    </v-col>
    <div class="container">
    <img
      src="../assets/images/Magic_eight_ball.png"
      alt="bowling ball"
      height="500px"
      v-bind:class="{ testShake: isActive }"
      class="magic-ball"
    />
      <div class="centered response-text-colour">{{ response }}</div>
    </div>
      <h3 class="font-italic">{{ lastQuestion }}</h3>
  </div>
</template>

<script>
export default {
  name: "MagicEightBall",
  data() {
    return {
      isActive: false,
      magic8BallResponses: [
        "As I see it, yes.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "It is certain.",
        "It is decidedly so.",
      ],
      response: null,
      question: null,
      lastQuestion: null
    };
  },
  methods: {
    async shakeMagicBall() {
      this.response = null
      this.isActive = true
      await setTimeout(() => this.askQuestion(), 3000);
          },
    askQuestion() {
      this.isActive = false
      const random = Math.floor(
        Math.random() * this.magic8BallResponses.length
      );
      this.lastQuestion = `"` + this.question + `"`
      this.response = this.magic8BallResponses[random];
      this.question = null
    }
  },
};
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
  color: white;
}

.heading {
  padding: 2% 0 0 0;
}

.field-button-column {
  padding: 2% 20% 2% 20%;
}

.magic-ball {
      padding: 0 0 3% 0;
}

.centered {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.response-text-colour {
  color: white;
  font-size: 20px;
}

.testShake {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
