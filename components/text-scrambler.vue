<template>
  <span class="scrambled-text">
    <span class="scrambled-text__letters" v-html="animatedText" />
  </span>
</template>

<script>
  /*
    This script is based heavily on a pen by Justine Windle:
    https://codepen.io/soulwire/pen/mErPAK
  */

  export default {
    props: ['text'],
    data: function () {
      return {
        clutterChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        animatedText: '',
        nextTick: null,
        tickFrame: null
      };
    },
    watch: {
      text: {
        immediate: true,
        handler: function (newValue, oldValue) {
          this.haltTween();

          // Only in contexts where there are both new and old values (the client) will the `requestAnimationFrame` be avaialable:
          if (oldValue) {
            this.tween(newValue);
          } else {
            this.animatedText = newValue;
          }
        }
      }
    },
    methods: {
      tween (newText) {
        const oldText = this.text;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);

        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 15);
          const end = start + Math.floor(Math.random() * 15);
          this.tickQueue.push({ from, to, start, end })
        }

        this.tickFrame = 0;
        this.tickText();

        return promise;
      },
      haltTween () {
        if (this.nextTick) {
          window.cancelAnimationFrame(this.nextTick);
        }

        this.tickQueue = [];
      },
      tickText () {
        let output = '';
        let complete = 0;

        for (let i = 0, n = this.tickQueue.length; i < n; i++) {
          let { from, to, start, end, char } = this.tickQueue[i];
          if (this.tickFrame >= end) {
            complete++;
            output += to;
          } else if (this.tickFrame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.tickQueue[i].char = char;
            }

            output += `<span class="scrambled-text__animated-character">${char}</span>`;
          } else {
            output += from;
          }
        }

        this.animatedText = output;

        if (complete === this.tickQueue.length) {
          // this.resolve();
        } else {
          this.nextTick = window.requestAnimationFrame(this.tickText);
          this.tickFrame++;
        }
      },
      randomChar () {
        return this.clutterChars[Math.floor(Math.random() * this.clutterChars.length)];
      }
    }
  }
</script>
