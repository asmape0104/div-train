const { ref, computed } = Vue

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
    cameraDeg: {
      type: Number,
      default: 0
    }
  },
  template: `
    <div style="transform-style: preserve-3d;">
      <div :style="{position: 'absolute', top: \`calc(50vh - \${yl/2}px)\`, left: \`calc(50vw - \${xl/2}px)\`, width: \`\${xl}px\`, height: \`\${yl}px\`, transform: \`rotateX(85deg) rotateZ(\${cameraDeg}deg) translate3d(\${x}px, \${y}px, \${z}px) rotateY(  0deg)                 translateZ(\${zl/2}px)\`}"><slot name="top"/></div>
      <div :style="{position: 'absolute', top: \`calc(50vh - \${yl/2}px)\`, left: \`calc(50vw - \${xl/2}px)\`, width: \`\${xl}px\`, height: \`\${yl}px\`, transform: \`rotateX(85deg) rotateZ(\${cameraDeg}deg) translate3d(\${x}px, \${y}px, \${z}px) rotateY(180deg)                 translateZ(\${zl/2}px)\`}"><slot name="bottom"/></div>
      <div :style="{position: 'absolute', top: \`calc(50vh - \${zl/2}px)\`, left: \`calc(50vw - \${xl/2}px)\`, width: \`\${xl}px\`, height: \`\${zl}px\`, transform: \`rotateX(85deg) rotateZ(\${cameraDeg}deg) translate3d(\${x}px, \${y}px, \${z}px) rotateX(-90deg)                 translateZ(\${yl/2}px)\`}"><slot name="front"/></div>
      <div :style="{position: 'absolute', top: \`calc(50vh - \${zl/2}px)\`, left: \`calc(50vw - \${xl/2}px)\`, width: \`\${xl}px\`, height: \`\${zl}px\`, transform: \`rotateX(85deg) rotateZ(\${cameraDeg}deg) translate3d(\${x}px, \${y}px, \${z}px) rotateX(-90deg) rotateY(180deg) translateZ(\${yl/2}px)\`}"><slot name="back"/></div>
      <div :style="{position: 'absolute', top: \`calc(50vh - \${zl/2}px)\`, left: \`calc(50vw - \${yl/2}px)\`, width: \`\${yl}px\`, height: \`\${zl}px\`, transform: \`rotateX(85deg) rotateZ(\${cameraDeg}deg) translate3d(\${x}px, \${y}px, \${z}px) rotateX(-90deg) rotateY( 90deg) translateZ(\${xl/2}px)\`}"><slot name="right"/></div>
      <div :style="{position: 'absolute', top: \`calc(50vh - \${zl/2}px)\`, left: \`calc(50vw - \${yl/2}px)\`, width: \`\${yl}px\`, height: \`\${zl}px\`, transform: \`rotateX(85deg) rotateZ(\${cameraDeg}deg) translate3d(\${x}px, \${y}px, \${z}px) rotateX(-90deg) rotateY(-90deg) translateZ(\${xl/2}px)\`}"><slot name="left"/></div>
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
    const cameraDeg = ref(10)
    const frontDoorOpen = ref(false)
    const backDoorOpen = ref(false)
    const lineColor = ref('#ff0000')
    return {
      cameraDeg,
      frontDoorOpen,
      backDoorOpen,
      lineColor
    }
  }
}

Vue.createApp(App).mount('#app')