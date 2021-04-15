<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core';
  import Pullup from '@better-scroll/pull-up';
  BScroll.use(Pullup);
  export default {
    name: 'BScroll',
    data() {
      return {
        scroll: null,
      };
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
        pullUpLoad: true,
      });

      //监听滑动事件
      this.scroll.on('scroll', (position) => {
        //将滚动事件传入home组件内操作
        this.$emit('scroll', position);
      });

      //监听上拉事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
      });
    },
    methods: {
      //点击回到顶部方法
      scrollto(x, y, time) {
        this.scroll && this.scroll.scrollTo(x, y, (time = 300));
      },
      //多次上拉加载，没有只能上拉一次
      finishup() {
        this.scroll && this.scroll.finishPullUp();
      },
      //解决滚动不到底部的bug，一般为图片没有加载完，一般要监听图片加载，每次加载都重新刷新高度
      refresh() {
        this.scroll && this.scroll.refresh();
      },
    },
  };
</script>
<style scoped></style>
