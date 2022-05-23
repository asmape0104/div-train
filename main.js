const { ref, computed, onMounted, watch } = Vue

const generateAnnounce = () => {
  const trackNumber = Math.floor(Math.random() ** 2.5 * 20) + 1

  const messages = [
    `まもなく、${trackNumber}番線に、通勤快速、成東ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この列車は、10両です。`,
    `まもなく、${trackNumber}番線に、快速、蘇我ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この列車は、10両です。`,
    `まもなく、${trackNumber}番線に、東京、上野方面ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。次は、高輪ゲートウェイ、に止まります。`,
    `まもなく、${trackNumber}番線に、新宿、渋谷方面ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。次は、新宿、に止まります。`,
    `まもなく、${trackNumber}番線に、各駅停車、桜木町ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、各駅停車、大宮ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、快速、大船ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、各駅停車、武蔵浦和ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、りんかい線直通、各駅停車、新木場ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、りんかい線直通、快速、新木場ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。次は、武蔵浦和に止まります。北戸田、戸田、浮間舟渡、北赤羽、には、停車いたしません。`,
    `まもなく、${trackNumber}番線に、上野東京ライン、東海道線直通、普通、沼津ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、15両です。`,
    `まもなく、${trackNumber}番線に、上野東京ライン、宇都宮線直通、普通、宇都宮ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、15両です。`,
    `まもなく、${trackNumber}番線に、上野東京ライン、高崎線直通、普通、高崎ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、15両です。`,
    `まもなく、${trackNumber}番線に、湘南新宿ライン、横須賀線直通、普通、逗子ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、10両です。`,
    `まもなく、${trackNumber}番線に、快速、土浦ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、15両です。次は、松戸に止まります。`,
    `まもなく、${trackNumber}番線に、各駅停車、千葉ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、快速、青梅ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、中央特快、高尾ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `まもなく、${trackNumber}番線に、久里浜ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、11両です。`,
    `まもなく、${trackNumber}番線に、快速、君津ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、15両です。`,
    `まもなく、${trackNumber}番線に、快速、成田空港、成東ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。この電車は、15両です。`,
    `まもなく、${trackNumber}番線に、府中本町ゆきが、参ります。危ないですから、黄色い点字ブロックまで、お下がりください。`,
    `Your attention please. The rapid train, bound for, Kazusa-Ichinomiya, is arriving at, track ${trackNumber}. For your safety, please stand behind the yellow warning blocks.`,
    `Your attention please. The local train, bound for, Odawara, is arriving at, track ${trackNumber}. For your safety, please stand behind the yellow warning blocks.`
  ]

  return messages[Math.floor(Math.random() * messages.length)]
}

const numberColors = {
  JT: {
    borderColor: '#FF9845',
  },
  JO: {
    borderColor: '#0074BE',
  },
  JK: {
    borderColor: '#00A7E3',
  },
  JH: {
    borderColor: '#85C023',
  },
  JN: {
    borderColor: '#FFE400',
  },
  JI: {
    borderColor: '#FFE500',
  },
  JY: {
    borderColor: '#85C023',
  },
  JC: {
    borderColor: '#EB5C01',
  },
  JB: {
    borderColor: '#FFE500',
  },
  JU: {
    borderColor: '#FF9845',
  },
  JA: {
    borderColor: '#00AC84',
  },
  JJ: {
    borderColor: '#00C18A',
  },
  JL: {
    borderColor: '#9E9E9F',
  },
  JE: {
    borderColor: '#CF1225',
  },
  JM: {
    borderColor: '#EB5C01',
  },
  JS: {
    borderColor: '#DE0515',
  },
  CO: {
    borderColor: '#0071C5',
  },
  G: {
    borderColor: 'rgb(242, 153, 56)',
    borderRadius: '9999px'
  },
  Z: {
    borderColor: 'rgb(139, 122, 208)',
    borderRadius: '9999px'
  },
  C: {
    borderColor: 'rgb(83, 184, 138)',
    borderRadius: '9999px'
  },
  N: {
    borderColor: 'rgb(76, 171, 157)',
    borderRadius: '9999px'
  },
  H: {
    borderColor: 'rgb(182, 182, 174)',
    borderRadius: '9999px'
  },
  M: {
    borderColor: 'rgb(227, 64, 61)',
    borderRadius: '9999px'
  },
  Mb: {
    borderColor: 'rgb(227, 64, 61)',
    borderRadius: '9999px'
  },
  T: {
    borderColor: 'rgb(66, 155, 188)',
    borderRadius: '9999px'
  },
  Y: {
    borderColor: 'rgb(191, 165, 118)',
    borderRadius: '9999px'
  },
  F: {
    borderColor: 'rgb(150, 96, 54)',
    borderRadius: '9999px'
  },
  E: {
    borderColor: '#ce045b',
    borderRadius: '9999px'
  },
  S: {
    borderColor: '#b0bf1e',
    borderRadius: '9999px'
  },
  I: {
    borderColor: '#006ab8',
    borderRadius: '9999px'
  },
  A: {
    borderColor: '#ec6e65',
    borderRadius: '9999px'
  },
  R: {
    borderColor: 'rgb(153, 199, 195)',
    background: 'rgb(21, 55, 130)',
    color: 'white',
    borderRadius: '9999px'
  },
  TS: {
    borderColor: 'rgb(53, 108, 179)',
  },
  TI: {
    borderColor: 'rgb(213, 56, 43)',
  },
  TN: {
    borderColor: 'rgb(235, 165, 58)',
  },
  TD: {
    borderColor: 'rgb(96, 178, 224)',
  },
  TJ: {
    borderColor: 'rgb(29, 67, 137)',
  },
  IZ: {
    borderColor: 'rgb(179, 169, 167)',
    borderWidth: '1px',
  },
  SR: {
    borderColor: 'rgb(66, 103, 171)',
    borderRadius: '9999px'
  },
  TY: {
    borderColor: 'rgb(202, 42, 70)',
    background: 'rgb(202, 42, 70)',
    color: 'white'
  },
  MG: {
    borderColor: 'rgb(65, 155, 206)',
    background: 'rgb(65, 155, 206)',
    color: 'white'
  },
  DT: {
    borderColor: 'rgb(75, 167, 143)',
    background: 'rgb(75, 167, 143)',
    color: 'white'
  },
  OM: {
    borderColor: 'rgb(228, 144, 82)',
    background: 'rgb(228, 144, 82)',
    color: 'white'
  },
  IK: {
    borderColor: 'rgb(224, 139, 166)',
    background: 'rgb(224, 139, 166)',
    color: 'white'
  },
  TM: {
    borderColor: 'rgb(159, 25, 118)',
    background: 'rgb(159, 25, 118)',
    color: 'white'
  },
  SG: {
    borderColor: 'rgb(245, 200, 68)',
    background: 'rgb(245, 200, 68)',
    color: 'rgb(89, 87, 87)'
  },
  KD: {
    borderColor: 'rgb(44, 113, 184)',
    background: 'rgb(44, 113, 184)',
    color: 'white'
  },
  MM: {
    borderColor: 'white',
    borderWidth: '1px',
    background: 'rgb(36, 85, 155)',
    color: 'white'
  },
  B: {
    borderColor: 'rgb(42, 112, 186)',
    background: 'rgb(42, 112, 186)',
    color: 'white',
    borderRadius: '9999px'
  },
  KK: {
    borderColor: 'rgb(78, 178, 270)',
    color: 'rgb(32, 46, 96)',
    borderRadius: '9999px'
  },
  TR: {
    borderColor: 'rgb(115, 178, 71)',
    borderRadius: '9999px'
  },
  KO: {
    borderColor: 'rgb(186, 42, 119)',
    subBackground: 'linear-gradient(rgb(186, 42, 119), rgb(186, 42, 119) 42.5%, white 42.5%, white 100%)',
    subColor: ['white', 'black'],
    borderRadius: '9999px',
    borderWidth: '2px',
    color: 'rgb(186, 42, 119)'
  },
  IN: {
    borderColor: 'rgb(24, 55, 113)',
    subBackground: 'linear-gradient(rgb(24, 55, 113), rgb(24, 55, 113) 42.5%, white 42.5%, white 100%)',
    subColor: ['white', 'black'],
    borderRadius: '9999px',
    borderWidth: '2px',
    color: 'rgb(24, 55, 113)'
  },
  SO: {
    borderColor: 'rgb(40, 106, 177)',
    subBackground: 'rgb(40, 106, 177)',
    color: 'white',
    subBorder: 'rgb(233, 163, 53)'
  },
  SI: {
    borderColor: '#EE7A00',
    subBackground: 'linear-gradient(#EE7A00, #EE7A00 42.5%, white 42.5%, white 100%)',
    subColor: ['white', 'black'],
    borderWidth: '2px',
  },
  SS: {
    borderColor: '#00A6BF',
    subBackground: 'linear-gradient(#00A6BF, #00A6BF 42.5%, white 42.5%, white 100%)',
    subColor: ['white', 'black'],
    borderWidth: '2px',
  },
  ST: {
    borderColor: '#F7AF0E',
    subBackground: 'linear-gradient(#F7AF0E, #F7AF0E 42.5%, white 42.5%, white 100%)',
    subColor: ['white', 'black'],
    borderWidth: '2px',
  },
  SK: {
    borderColor: '#1EAD4C',
    subBackground: 'linear-gradient(#1EAD4C, #1EAD4C 42.5%, white 42.5%, white 100%)',
    subColor: ['white', 'black'],
    borderWidth: '2px',
  },
  SY: {
    borderColor: '#E83E2F',
    subBackground: 'linear-gradient(#E83E2F, #E83E2F 42.5%, white 42.5%, white 100%)',
    subColor: ['white', 'black'],
    borderWidth: '2px',
  },
  SW: {
    borderColor: '#EF7A00',
    subBackground: 'linear-gradient(#EF7A00, #EF7A00 42.5%, white 42.5%, white 100%)',
    subColor: ['white', 'black'],
    borderWidth: '2px',
  },
  CA: {
    borderColor: '#FF7E1C',
    subBackground: 'linear-gradient(#FF7E1C, #FF7E1C 42.5%, white 42.5%, white 100%)',
    subColor: ['white', 'black'],
    borderRadius: '0px',
    borderWidth: '1px',
  },
}


const EditDiv = {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const innerText = ref(props.text)
    
    const changeText = () => {
      const newText = window.prompt('テキスト変更', innerText.value)

      if (newText) {
        innerText.value = newText
        emit('update', newText)
      }
    }

    return {
      innerText,
      changeText
    }
  },
  template: `
    <div @click="changeText">{{ innerText }}</div>
  `
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
    },
    degZ: {
      type: Number,
      default: 0
    }
  },
  template: `
    <div style="transform-style: preserve-3d;">
      <div class="transition-03s" :style="{position: 'absolute', top: \`calc(50vh - \${yl/2}px)\`, left: \`calc(50vw - \${xl/2}px)\`, width: \`\${xl}px\`, height: \`\${yl}px\`, transform: \`translate3d(\${x}px, \${y}px, \${z}px) rotateZ(\${degZ}deg) rotateY(  0deg)                 translateZ(\${zl/2}px)\`}"><slot name="top"/></div>
      <div class="transition-03s" :style="{position: 'absolute', top: \`calc(50vh - \${yl/2}px)\`, left: \`calc(50vw - \${xl/2}px)\`, width: \`\${xl}px\`, height: \`\${yl}px\`, transform: \`translate3d(\${x}px, \${y}px, \${z}px) rotateZ(\${degZ}deg) rotateY(180deg)                 translateZ(\${zl/2}px)\`}"><slot name="bottom"/></div>
      <div class="transition-03s" :style="{position: 'absolute', top: \`calc(50vh - \${zl/2}px)\`, left: \`calc(50vw - \${xl/2}px)\`, width: \`\${xl}px\`, height: \`\${zl}px\`, transform: \`translate3d(\${x}px, \${y}px, \${z}px) rotateZ(\${degZ}deg) rotateX(-90deg)                 translateZ(\${yl/2}px)\`}"><slot name="front"/></div>
      <div class="transition-03s" :style="{position: 'absolute', top: \`calc(50vh - \${zl/2}px)\`, left: \`calc(50vw - \${xl/2}px)\`, width: \`\${xl}px\`, height: \`\${zl}px\`, transform: \`translate3d(\${x}px, \${y}px, \${z}px) rotateZ(\${degZ}deg) rotateX(-90deg) rotateY(180deg) translateZ(\${yl/2}px)\`}"><slot name="back"/></div>
      <div class="transition-03s" :style="{position: 'absolute', top: \`calc(50vh - \${zl/2}px)\`, left: \`calc(50vw - \${yl/2}px)\`, width: \`\${yl}px\`, height: \`\${zl}px\`, transform: \`translate3d(\${x}px, \${y}px, \${z}px) rotateZ(\${degZ}deg) rotateX(-90deg) rotateY( 90deg) translateZ(\${xl/2}px)\`}"><slot name="right"/></div>
      <div class="transition-03s" :style="{position: 'absolute', top: \`calc(50vh - \${zl/2}px)\`, left: \`calc(50vw - \${yl/2}px)\`, width: \`\${yl}px\`, height: \`\${zl}px\`, transform: \`translate3d(\${x}px, \${y}px, \${z}px) rotateZ(\${degZ}deg) rotateX(-90deg) rotateY(-90deg) translateZ(\${xl/2}px)\`}"><slot name="left"/></div>
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
  /**
   * @param {{ isOpen: boolean; }} props
   */
  setup(props) {
    const leftCss = computed(() => props.isOpen ? 'translate3d(-12px, 0, -0.5px)' : 'translate3d(0, 0, 0)')
    const rightCss = computed(() => props.isOpen ? 'translate3d(12px, 0, -0.5px)' : 'translate3d(0, 0, 0)')

    return {
      leftCss,
      rightCss
    }
  },
  template: `
    <div class="flex">
      <div class="transition-2s relative" style="height: 36px; width: 12px; border: 1px solid #989590;" :style="{ transform: leftCss }">
        <div class="absolute parent-fit backface-hidden">
          <div style="height: 21px">
            <div style="border-color: #827f7b; border-style: solid; border-top-width: 2px; border-left-width: 2px; border-right-width: 2px; border-bottom-width: 4px; height: 100%; width: 100%;  background: rgba(0,0,0,0.7);"></div>
          </div>
          <div style="height: 7px; background: var(--line-color);"></div>
          <div style="height: 6px; background: #827f7b;"></div>
        </div>
        <div class="absolute parent-fit backface-hidden" style="transform: rotateY(180deg);">
          <div style="height: 21px">
            <div style="border-color: #827f7b; border-style: solid; border-top-width: 2px; border-left-width: 2px; border-right-width: 2px; border-bottom-width: 4px; height: 100%; width: 100%;  background: rgba(0,0,0,0.2);"></div>
          </div>
          <div style="height: 13px; background: #827f7b;"></div>
        </div>
      </div>
      <div class="transition-2s relative" style="height: 36px; width: 12px; border: 1px solid #989590;" :style="{ transform: rightCss }">
        <div class="absolute parent-fit backface-hidden">
          <div style="height: 21px">
            <div style="border-color: #827f7b; border-style: solid; border-top-width: 2px; border-left-width: 2px; border-right-width: 2px; border-bottom-width: 4px; height: 100%; width: 100%;  background: rgba(0,0,0,0.7);"></div>
          </div>
          <div style="height: 7px; background: var(--line-color);"></div>
          <div style="height: 6px; background: #827f7b;"></div>
        </div>
        <div class="absolute parent-fit backface-hidden" style="transform: rotateY(180deg);">
          <div style="height: 21px">
            <div style="border-color: #827f7b; border-style: solid; border-top-width: 2px; border-left-width: 2px; border-right-width: 2px; border-bottom-width: 4px; height: 100%; width: 100%;  background: rgba(0,0,0,0.2);"></div>
          </div>
          <div style="height: 13px; background: #827f7b;"></div>
        </div>
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

const SLcd = {
  components: {
    EditDiv
  },
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const colors = ref([numberColors['JK'], numberColors['JK'], numberColors['JK']])
    const numberStyles = computed(() => colors.value.map((c, i) => ({
      borderColor: c.borderColor,
      borderRadius: c.borderRadius || '4px',
      borderWidth: c.borderWidth || '3px',
      background: (i === 0 ? c.background : c.subBackground || c.background) || 'white',
      color: c.color || 'black'
    })))
    const updateColor = (i, newText) => {
      if (numberColors[newText]) {
        colors.value.splice(i, 1, numberColors[newText])
      }
    }

    return {
      colors,
      numberStyles,
      updateColor
    }
  },
  template: `
  <div class="lcd" :class="{reverse: reverse}">
    <div class="lcd-left">
      <div class="lcd-left-row row-colored">
        <div class="line">
          <div class="jk-icon" :style="numberStyles[0]">
            <edit-div class="jk-icon-text" text="JK" @update="updateColor(0, $event)"></edit-div>
          </div>
          <edit-div class="line-name" text="京浜東北線"></edit-div>
        </div>
        <edit-div class="forward" text="横浜・関内方面"></edit-div>
      </div>
      <div class="lcd-sep"></div>
      <div class="lcd-left-row">
        <edit-div class="type" text="各駅停車"></edit-div>
        <edit-div class="time" text="13:10"></edit-div>
        <div class="for">
          <div class="jk-icon-small" :style="numberStyles[1]">
          <edit-div :style="{color: colors[1].subColor?.[0]}" class="jk-text" text="JK" @update="updateColor(1, $event)"></edit-div>
          <edit-div :style="{color: colors[1].subColor?.[1], borderTop: colors[1].subBorder ? \`1px solid \${colors[1].subBorder}\` : null}" class="jk-number" text="01"></edit-div>
          </div>
          <edit-div class="for-text" text="大船"></edit-div>
        </div>
      </div>
      <div class="lcd-sep"></div>
      <div class="lcd-left-row">
        <edit-div class="type" text="各駅停車"></edit-div>
        <edit-div class="time" text="13:15"></edit-div>
        <div class="for">
          <div class="jk-icon-small" :style="numberStyles[2]">
            <edit-div :style="{color: colors[2].subColor?.[0]}" class="jk-text" text="JK" @update="updateColor(2, $event)"></edit-div>
            <edit-div :style="{color: colors[2].subColor?.[1], borderTop: colors[2].subBorder ? \`1px solid \${colors[1].subBorder}\` : null}" class="jk-number" text="06"></edit-div>
          </div>
          <edit-div class="for-text" text="磯子"></edit-div>
        </div>
      </div>
    </div>
    <edit-div class="lcd-right" :class="{reverse: reverse}" text="3"></edit-div>
  </div>
  `
}

const SClock = {
  setup() {
    const getRatio = (i) => {
      return (-Math.cos(Math.PI * i / 3) + 1) / 2
    }
    const getTimeTransform = (i) => {
      return `translate(-50%, -50%) translate(${((38 + 10 * getRatio(i)) * Math.sin(Math.PI * i / 6)).toFixed(3)}px, ${(-(38 + 10 * getRatio(i)) * Math.cos(Math.PI * i / 6)).toFixed(3)}px)`
    }

    const hour = ref(0)
    const minute = ref(0)

    onMounted(() => {
      window.setInterval(() => {
        const now = new Date()
        hour.value = now.getHours()
        minute.value = now.getMinutes()
      }, 1000)
    })

    return {
      getTimeTransform,
      hour,
      minute
    }
  },
  template: `
    <div class="relative" style="width: 132px; height: 96px; background: rgb(49, 80, 57); color: rgb(216, 250, 139); font-family: 'Noto Sans JP', sans-serif; font-size: 12px;">
      <div
        v-for="i in 12"
        class="absolute"
        style="top: 50%; left: 50%;"
        :style="{transform: getTimeTransform(i) }"
      >
        {{ i }}
      </div>
      <div class="absolute parent-fit" :style="{ transform: \`translateZ(2.5px) rotateZ(\${minute * 6}deg)\` }">
        <div class="absolute" style="background: rgb(216, 250, 139);top: 10px; left: calc(50% - 2px); width: 4px; height: 52px;"></div>
      </div>
      <div class="absolute parent-fit" :style="{ transform: \`translateZ(2px) rotateZ(\${(hour * 30) + (minute / 2)}deg)\` }">
        <div class="absolute" style="background: rgb(216, 250, 139);top: 20px; left: calc(50% - 2px); width: 4px; height: 42px;"></div>
      </div>
    </div>
  `
}

const App = {
  components: {
    SCube,
    SDoor,
    SWindow,
    SLcd,
    SClock
  },
  setup() {
    const cameraDeg = ref(-20)
    const cameraDeg2 = ref(80)
    const cameraScale = ref(1)
    const cameraX = ref(0)
    const cameraY = ref(0)
    const cameraZ = ref(0)
    const trainPos = ref(0)

    const frontDoorOpen = ref(false)
    const backDoorOpen = ref(false)
    const lineColor = ref('#ff0000')
    const cameraTransform = computed(() => `scale3d(${cameraScale.value}, ${cameraScale.value}, ${cameraScale.value}) rotateX(${cameraDeg2.value}deg) rotateZ(${cameraDeg.value}deg) translate3d(${cameraX.value}px, ${cameraY.value}px, ${cameraZ.value}px)`)

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

    const announceText = ref('まもなく、1番線に、通勤快速、成東ゆきが、参ります。。危ないですから、黄色い点字ブロックまで、お下がりください。。この列車は、10両です。。')
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

    const gateOpen = ref(true)
    const gateAudio = ref(new Audio('./sound/gate.mp3'))
    watch(gateOpen, () => {
        if (gateOpen.value && enableSound.value) {
          gateAudio.value.currentTime = 0
          gateAudio.value.play()
        }
    })

    const cameraMove = (x, y, z) => {
      cameraX.value += x * -Math.cos(cameraDeg.value * Math.PI / 180)
      cameraY.value += x * Math.sin(cameraDeg.value * Math.PI / 180)

      cameraZ.value += y * Math.cos((90 - cameraDeg2.value) * Math.PI / 180)
      cameraX.value += y * -Math.sin((90 - cameraDeg2.value) * Math.PI / 180) * Math.sin(cameraDeg.value * Math.PI / 180)
      cameraY.value += y * -Math.sin((90 - cameraDeg2.value) * Math.PI / 180) * Math.cos(cameraDeg.value * Math.PI / 180)

      cameraZ.value += z * -Math.sin((90 - cameraDeg2.value) * Math.PI / 180)
      cameraX.value += z * -Math.cos((90 - cameraDeg2.value) * Math.PI / 180) * Math.sin(cameraDeg.value * Math.PI / 180)
      cameraY.value += z * -Math.cos((90 - cameraDeg2.value) * Math.PI / 180) * Math.cos(cameraDeg.value * Math.PI / 180)


      cameraX.value = Math.max(-500, Math.min(cameraX.value, 500))
      cameraY.value = Math.max(-500, Math.min(cameraY.value, 500))
      cameraZ.value = Math.max(-500, Math.min(cameraZ.value, 500))
    }

    const resetCamera = () => {
      cameraX.value = 0;
      cameraY.value = 0;
      cameraZ.value = 0;
    }

    const enableSound = ref(false)

    VueUse.onKeyStroke('w', () => cameraMove(0, -10, 0))
    VueUse.onKeyStroke('a', () => cameraMove(-10, 0, 0))
    VueUse.onKeyStroke('d', () => cameraMove(10, 0, 0))
    VueUse.onKeyStroke('s', () => cameraMove(0, 10, 0))
    VueUse.onKeyStroke('z', () => { cameraScale.value *= 1.05 })
    VueUse.onKeyStroke('x', () => { cameraScale.value /= 1.05 })
    VueUse.onKeyStroke('q', () => { cameraDeg.value -= 5 })
    VueUse.onKeyStroke('e', () => { cameraDeg.value += 5 })
    VueUse.onKeyStroke('r', () => { cameraDeg2.value = Math.max(0, cameraDeg2.value - 5) })
    VueUse.onKeyStroke('f', () => { cameraDeg2.value = Math.min(90, cameraDeg2.value + 5) })

    const { connectHID, devices } = useHID()

    return {
      cameraDeg,
      cameraDeg2,
      cameraScale,
      cameraX,
      cameraY,
      cameraZ,
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
      cameraTransform,
      gateOpen,
      gateAudio,
      enableSound,
      cameraMove,
      resetCamera,
      connectHID,
      devices
    }
  }
}

Vue.createApp(App).mount('#app')