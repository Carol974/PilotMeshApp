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

var services = new Vue({
  el: '#services',
  name: 'Layouts',
  methods: {
    sendMessage () {
      window.alert('Send a message...')
    },
    doACall () {
      window.alert('Calling someone...')
    }
  }
})

var services2 = new Vue({
  el: '#services2',
  name: 'Layouts',
  methods: {
    sendMessage () {
      window.alert('Send a message...')
    },
    doACall () {
      window.alert('Calling someone...')
    }
  }
})


var consumptionbar = new Vue({
  el: '#consumptionbar',
  name: 'ProgressBarBuffer',
  data: () => ({
    others: 25,
    you: 40
})
})


var bar = new Vue({
  el: '#bar',
  name: 'BarRouter'
})
// var layout = new Vue({
//   el:'.md-layout'
//   name: 'LayoutHorizontalColumns'
// })
