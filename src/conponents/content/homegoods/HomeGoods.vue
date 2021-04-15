<template>
  <div class="homegoods">
    <home-goods-item v-for="item in goods" :goodsitem="item" ></home-goods-item>
  </div>
</template>
<script>
  import HomeGoodsItem from './HomeGoodsItem';
  export default {
    name: 'HomeGoods',
    props: {
      goods: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    components: {
      HomeGoodsItem,
    },
    data() {
      return {};
    },
  };
</script>
<style scoped>
    .homegoods {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
