const { ref, computed, onMounted } = Vue

const generateAnnounce = () => {
  const trackNumber = Math.floor(Math.random() ** 2.5 * 20) + 1

  const messages = [
    `まもなく、${trackNumber}番線に、通勤快速、成東行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この列車は、10両です。`,
    `まもなく、${trackNumber}番線に、快速、蘇我行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この列車は、10両です。`,
    `まもなく、${trackNumber}番線に、東京、上野方面行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。次は、高輪ゲートウェイ、に止まります。`,
    `まもなく、${trackNumber}番線に、新宿、渋谷方面行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。次は、新宿、に止まります。`,
    `まもなく、${trackNumber}番線に、各駅停車、桜木町行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、各駅停車、大宮行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、快速、大船行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、各駅停車、武蔵浦和行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、りんかい線直通、各駅停車、新木場行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、りんかい線直通、快速、新木場行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。次は、武蔵浦和に止まります。北戸田、戸田、浮間舟渡、北赤羽、には、停車いたしません。`,
    `まもなく、${trackNumber}番線に、上野東京ライン、東海道線直通、普通、沼津行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、15両です。`,
    `まもなく、${trackNumber}番線に、上野東京ライン、宇都宮線直通、普通、宇都宮行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、15両です。`,
    `まもなく、${trackNumber}番線に、上野東京ライン、高崎線直通、普通、高崎行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、15両です。`,
    `まもなく、${trackNumber}番線に、湘南新宿ライン、横須賀線直通、普通、逗子行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、10両です。`,
    `まもなく、${trackNumber}番線に、快速、土浦行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、15両です。次は、松戸に止まります。`,
    `まもなく、${trackNumber}番線に、各駅停車、千葉行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、快速、青梅行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、中央特快、高尾行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、久里浜行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、11両です。`,
    `まもなく、${trackNumber}番線に、快速、君津行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、15両です。`,
    `まもなく、${trackNumber}番線に、快速、成田空港、成東行きが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、15両です。`,
  ]

  return messages[Math.floor(Math.random() * messages.length)]
}

const SCube = {
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    z: {
      type: Number,
      default: 0
    },
    xl: {
      type: Number,
      default: 0
    },
    yl: {
      type: Number,
      default: 0
    },
    zl: {
      type: Number,
      default: 0
    }
  },
  template: `
    <div style="transform-style: preserve-3d;">
      <div :style="{position: 'absolute', top: \`calc(50vh - \${yl/2}px)\`, left: \`calc(50vw - \${xl/2}px)\`, width: \`\${xl}px\`, height: \`\${yl}px\`, transform: \`translate3d(\${x}px, \${y}px, \${z}px) rotateY(  0deg)                 translateZ(\${zl/2}px)\`}"><slot name="top"/></div>
      <div :style="{position: 'absolute', top: \`calc(50vh - \${yl/2}px)\`, left: \`calc(50vw - \${xl/2}px)\`, width: \`\${xl}px\`, height: \`\${yl}px\`, transform: \`translate3d(\${x}px, \${y}px, \${z}px) rotateY(180deg)                 translateZ(\${zl/2}px)\`}"><slot name="bottom"/></div>
      <div :style="{position: 'absolute', top: \`calc(50vh - \${zl/2}px)\`, left: \`calc(50vw - \${xl/2}px)\`, width: \`\${xl}px\`, height: \`\${zl}px\`, transform: \`translate3d(\${x}px, \${y}px, \${z}px) rotateX(-90deg)                 translateZ(\${yl/2}px)\`}"><slot name="front"/></div>
      <div :style="{position: 'absolute', top: \`calc(50vh - \${zl/2}px)\`, left: \`calc(50vw - \${xl/2}px)\`, width: \`\${xl}px\`, height: \`\${zl}px\`, transform: \`translate3d(\${x}px, \${y}px, \${z}px) rotateX(-90deg) rotateY(180deg) translateZ(\${yl/2}px)\`}"><slot name="back"/></div>
      <div :style="{position: 'absolute', top: \`calc(50vh - \${zl/2}px)\`, left: \`calc(50vw - \${yl/2}px)\`, width: \`\${yl}px\`, height: \`\${zl}px\`, transform: \`translate3d(\${x}px, \${y}px, \${z}px) rotateX(-90deg) rotateY( 90deg) translateZ(\${xl/2}px)\`}"><slot name="right"/></div>
      <div :style="{position: 'absolute', top: \`calc(50vh - \${zl/2}px)\`, left: \`calc(50vw - \${yl/2}px)\`, width: \`\${yl}px\`, height: \`\${zl}px\`, transform: \`translate3d(\${x}px, \${y}px, \${z}px) rotateX(-90deg) rotateY(-90deg) translateZ(\${xl/2}px)\`}"><slot name="left"/></div>
    </div>
  `
}

const SDoor = {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    console.log(props.isOpen)
    const leftCss = computed(() => props.isOpen ? 'translate3d(-12px, 0, -0.5px)' : 'translate3d(0, 0, 0)')
    const rightCss = computed(() => props.isOpen ? 'translate3d(12px, 0, -0.5px)' : 'translate3d(0, 0, 0)')

    return {
      leftCss,
      rightCss
    }
  },
  template: `
    <div class="flex">
      <div class="transition-2s" style="height: 36px; width: 12px; border: 1px solid #989590;" :style="{ transform: leftCss }">
        <div style="height: 21px">
          <div style="border-color: #827f7b; border-style: solid; border-top-width: 2px; border-left-width: 2px; border-right-width: 2px; border-bottom-width: 4px; height: 100%; width: 100%;  background: rgba(0,0,0,0.7);"></div>
        </div>
        <div style="height: 7px; background: var(--line-color);"></div>
        <div style="height: 6px; background: #827f7b;"></div>
      </div>
      <div class="transition-2s" style="height: 36px; width: 12px; border: 1px solid #989590;" :style="{ transform: rightCss }">
        <div style="height: 21px">
          <div style="border-color: #827f7b; border-style: solid; border-top-width: 2px; border-left-width: 2px; border-right-width: 2px; border-bottom-width: 4px; height: 100%; width: 100%;  background: rgba(0,0,0,0.7);"></div>
        </div>
        <div style="height: 7px; background: var(--line-color);"></div>
        <div style="height: 6px; background: #827f7b;"></div>
      </div>
    </div>
  `
}

const SWindow = {
  template: `
  <div style="position: static;backface-visibility: hidden;">
    <div style="position: absolute; top: 0; right: 0; bottom: 0px; left: 0;">
      <div style="height: 28px;">
        <div style="border-color: #827f7b; border-style: solid; border-top-width: 8px; border-left-width: 8px; border-right-width: 8px; border-bottom-width: 4px; height: 100%; width: 100%;  background: rgba(0,0,0,0.7);"></div>
      </div>
      <div style="height: 7px; background: var(--line-color);"></div>
      <div style="height: 7px; background: #827f7b;"></div>
    </div>
    <div style="position: absolute; top: 0; right: 0; bottom: 0px; left: 0;transform: rotateY(180deg) translateZ(1px)">
      <div style="height: 28px;">
        <div style="border-color: #d8d8d8; border-style: solid; border-top-width: 8px; border-left-width: 8px; border-right-width: 8px; border-bottom-width: 4px; height: 100%; width: 100%; background: transparent"></div>
      </div>
      <div style="height: 14px; background: #d8d8d8"></div>
    </div>
  </div>
  `
}

const App = {
  components: {
    SCube,
    SDoor,
    SWindow
  },
  setup() {
    const cameraDeg = ref(-20)
    const cameraDeg2 = ref(80)
    const trainPos = ref(0)

    const frontDoorOpen = ref(false)
    const backDoorOpen = ref(false)
    const lineColor = ref('#ff0000')
    const cameraTransform = computed(() => `rotateX(${cameraDeg2.value}deg) rotateZ(${cameraDeg.value}deg)`)

    const voices = ref(window.speechSynthesis.getVoices())
    const selectedVoiceName = ref('')
    onMounted(() => {
      setTimeout(() => {
        voices.value = window.speechSynthesis.getVoices()
        // selectedVoiceName.value = (voices.value.find(v => v.name === 'Google 日本語') || voices.value[0]).name
        selectedVoiceName.value = voices.value[0].name
        window.speechSynthesis.cancel()
      }, 1000)
    })
    const voiceNames = computed(() => voices.value.map(v => v.name))
    const voiceVolume = ref(0.9)

    const announceText = ref('まもなく、1番線に、通勤快速、成東行きが、参ります。。危ないですから、黄色い点字ブロックまで、お下がりください。。この列車は、10両です。。')
    const playAnnounce = () => {
      window.speechSynthesis.cancel()
      const uttr = new SpeechSynthesisUtterance(announceText.value)
      uttr.voice = voices.value.find(v => v.name === selectedVoiceName.value)
      uttr.volume = voiceVolume.value
      window.speechSynthesis.speak(uttr)
    }

    const stopAnnounce = () => {
      window.speechSynthesis.cancel()
    }

    const randomAnnounce = () => {
      announceText.value = generateAnnounce()
    }

    return {
      cameraDeg,
      cameraDeg2,
      trainPos,
      frontDoorOpen,
      backDoorOpen,
      lineColor,
      announceText,
      voices,
      voiceNames,
      voiceVolume,
      selectedVoiceName,
      playAnnounce,
      stopAnnounce,
      randomAnnounce,
      cameraTransform
    }
  }
}

Vue.createApp(App).mount('#app')