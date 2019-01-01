Vue.use(VueMaterial.default)

var buttons = new Vue({
  el: '#buttons',
  name: 'IconButtons',
  data: {
    showModal: false
  }
})


var plans = new Vue({
  el: '#plans',
  name: 'RegularRadio',
  data: () => ({
    radio: 'accent'
  })
})


var bar = new Vue({
  el: '#bar',
  name: 'BarRouter'
})


var switchsetp = new Vue({
  el: '#switchsetp',
   name: 'RegularSwitch',
   data: () => ({
     boolean: true,
   })
 })
