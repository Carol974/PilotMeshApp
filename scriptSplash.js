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

var services = new Vue({
  el: '#services',
  name: 'MediaCover',
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
