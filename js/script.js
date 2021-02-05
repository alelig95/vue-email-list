new Vue({
  el: '#app',
  data: {
    listaEmail: []
  },
  mounted() {
    for (let index = 0; index < 10; index++) {
      const self = this;
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(resp) {
        self.listaEmail.push(resp.data.response)
      });
    }

  }

});
Vue.config.devtools = true;
