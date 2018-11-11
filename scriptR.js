Vue.use(VueMaterial.default)

var buttons = new Vue({
  el: '#buttons',
  name: 'IconButtons',
  data: {
    showModal: false
  }
})

var form = new Vue({
  el: '#form',
  name: 'TextFields',
  data: () => ({
    initial: 'Initial Value',
    type: null,
    withLabel: null,
    inline: null,
    number: null,
    textarea: null,
    autogrow: null,
    disabled: null
  })
})

var avatar = new Vue({
  el: '#avatar',
  name: 'Regular'
})

var bar = new Vue({
  el: '#bar',
  name: 'BarRouter'
})

var plans = new Vue({
  el: '#plans',
  name: 'RegularRadio',
  data: () => ({
    radio: 'accent'
  })
})
