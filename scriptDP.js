Vue.use(VueMaterial.default)

var buttons = new Vue({
  el: '#buttons',
  name: 'IconButtons',
  data: {
    showModal: false
  }
})

var avatar = new Vue({
  el: '#avatar',
  name: 'Regular'
})

var consumptionbar = new Vue({
  el: '#consumptionbar',
  name: 'ProgressBarBuffer',
  data: () => ({
    others: 25,
    you: 40
})
})

var tabs = new Vue({
  el: '#tabs',
  name: 'TabContent'
})


//
var bar = new Vue({
  el: '#bar',
  name: 'BarRouter'
})
