<script>
import { h } from 'vue'

export default {
  name: 'MarqueeText',
  props: {
    duration: {
      type: Number,
      default: 15
    },
    repeat: {
      type: Number,
      default: 2,
      validator(val) {
        return val > 0
      }
    },
    paused: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  render({
    $slots, $style, $props: {
      duration, repeat, paused, reverse
    }
  }) {
    return h('div', { class: [$style.wrap] }, [
      h('div', {
        class: [
          paused
            ? $style.paused
            : undefined,
          $style.content
        ]
      }, Array(repeat).fill(
        h('div', {
          class: $style.text,
          style: {
            animationDuration: `${duration}s`,
            animationDirection: reverse
              ? 'reverse'
              : undefined
          }
        }, $slots.default())
      ))
    ])
  }
}
</script>

<style module>
.vue3-marquee .marquee{
  --duration: 100s;
  --delay: 0s;
  --direction: normal;
  --pauseOnHover: paused;
  --pauseOnClick: running;
  --loops: infinite;
  --gradient-color: rgba(255, 255, 255, 1), rgba(255, 255, 255, 0);
  --gradient-width: 100%;
  --min-width: 100%;
  width: 100%;
}

.wrap {
  overflow: hidden;
}

.content {
  width: 100000px;
}

.text {
  animation-name: animation;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  float: left;
  color: #28a745;
}

.paused .text {
  animation-play-state: paused
}

@keyframes animation {
  0% { transform:translateX(0); }
  100% { transform:translateX(-100%); }
}



</style>
