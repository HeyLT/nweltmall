<template>
  <!-- vue会对组件进行复用，导致渲染错误，所以遍历元素一般会加key值 -->
  <div :key="goodsitem.price" class="goodsitem">
    <ul>
      <li>
        <div class="goodsimage">{{ goodsitem.image }}</div>
        <p class="jieshao">{{ goodsitem.title }}</p>
        <span class="cvgc">收藏：{{ goodsitem.price }}</span>
        <span class="price">价格：{{ goodsitem.cvfg }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'HomeGoodsItem',
    props: {
      goodsitem: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    data() {
      return {};
    },
  };
</script>
<style scoped>
  .goodsitem {
    width: 48%;
    text-align: center;
    background-color: #007acc;
    border-radius: 8px;
    margin: 5px 0;
  }
  .goodsimage {
    height: 150px;
    line-height: 150px;
    color: #fff;
  }

  .jieshao {
    font-size: 14px;
    color: #fff;
  }

  .cvgc,
  .price {
    font-size: 14px;
    color: #fff;
    padding: 0 5px;
  }
</style>
