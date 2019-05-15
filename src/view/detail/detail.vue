<template>
  <div class="s-detail">
       详情页
  </div>
</template>

<script>
  import '../../assets/css/detail.scss'
  export default {
    data () {
      return {
        dataCart:''
      }
    },
    components: {
      
    },
    created () {
      this.$store.dispatch('updateHeader', '商品详情页');
      this.getDataCart();
    },
    computed: {},
    methods: {
      getDataCart () {
        this.$http.get('../../static/data/cart.json').then((response) => {
        	console.log(response)
          this.dataCart = response.data.data;
          this.carts = this.dataCart.data.carts
        }, (response) => {
          // error
        })
      }
     
    }
  }
</script>

<style lang="scss" scope>
</style>