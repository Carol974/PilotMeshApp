Vue.use(VueMaterial.default)

var buttons = new Vue({
  el: '#buttons',
  name: 'IconButtons',
  data: {
    showModal: false
  }
})

//
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
