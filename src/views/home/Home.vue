<template>
  <div id="home">
    <tabbar class="home_tab">
      <div slot="left"></div>
      <div slot="center">购 物 车</div>
      <div slot="right"></div>
    </tabbar>
    <van-swipe :autoplay="2000" class="swiper_w">
      <van-swipe-item v-for="(image, index) in images" :key="index" class="swiper_itemss">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
  import { getHomeNetData } from 'network/home';
  import tabbar from 'conponents/common/tabbar/Tabbar';
  export default {
    name: 'home',
    data() {
      return {
        images: [
          'https://img01.yzcdn.cn/vant/apple-1.jpg',
          'https://img01.yzcdn.cn/vant/apple-2.jpg',
        ],
      };
    },
    components: {
      tabbar,
    },
    created() {
      getHomeNetData().then((res) => {
        console.log('数据获取成功');

        console.log(res);
      });
    },
  };
</script>
<style scoped>
  .home_tab {
    background-color: purple;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
  .swiper_w {
    width: 100%;
    height: 250px;
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
