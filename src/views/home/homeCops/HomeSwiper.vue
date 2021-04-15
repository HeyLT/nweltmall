<template>
  <div>
    <van-swipe :autoplay="3000" class="swiper_w">
      <van-swipe-item v-for="(image, index) in images" :key="index" class="swiper_itemss">
        <a href="http://www.baidu.com">
          <img v-lazy="image" @load="swiperimgload" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
  export default {
    name: 'HomeSwiper',
    props: {
      images: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    data() {
      return {
        loadflag: false,
      };
    },
    methods: {
      swiperimgload() {
        //只需要判断加载一次图片
        if (!this.loadflag) {
          this.$emit('swiperimgload');
          this.loadflag = true;
        }
      },
    },
  };
</script>
<style scoped>
  .swiper_w {
    width: 100%;
    height: 200px;
  }
  .swiper_itemss {
    width: 100%;
    height: 100%;
  }
  .swiper_itemss img {
    width: 100%;
    height: 100%;
  }
</style>
