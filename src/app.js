import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      object:{},
      selectedCurrency:0,
      amountToExchange:0
    },
    mounted(){
      this.getcurrency()
    },
    computed: {
      exchange: function() {
        return (this.selectedCurrency * this.amountToExchange).toFixed(2);
      },
      reverse: function() {
        return (this.amountToExchange * this.selectedCurrency).toFixed(2);
      }

    },
    methods:{
      getcurrency: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(object => this.object = object)
      }


    }
  }
)
});
