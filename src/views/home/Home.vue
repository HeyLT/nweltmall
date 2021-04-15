<template>
  <div id="home">
    <tabbar class="home_tab">
      <div slot="center">购 物 车</div>
    </tabbar>
    <tab-contrl
      :tabcontrl_titil="['流行', '新款', '精选']"
      @contrlClick="contrlclick"
      ref="contrltab2"
      class="fixed"
      v-show="isfexd"
    ></tab-contrl>
    <b-scroll class="content" ref="scroll" @scroll="scroll" @pullingUp="upload">
      <HomeSwiper :images="images" @swiperimgload="imgload"></HomeSwiper>
      <Recommend :datas="datas" />
      <fluture-view></fluture-view>
      <tab-contrl
        :tabcontrl_titil="['流行', '新款', '精选']"
        @contrlClick="contrlclick"
        ref="contrltab1"
      ></tab-contrl>
      <home-goods :goods="homegoods[currenttype].list"></home-goods>
    </b-scroll>
    <!-- 监听组件点击事件，要用修饰符.native -->
    <back-up @click.native="backup" v-show="upflag"></back-up>
  </div>
</template>
<script>
  import { getHomeNetData, getHomeGoods } from 'network/home';
  import tabbar from 'conponents/common/tabbar/Tabbar';
  import TabContrl from 'conponents/content/tabcontrl/TabContrl';
  import HomeGoods from 'conponents/content/homegoods/HomeGoods';
  import BackUp from 'conponents/content/backup/BackUp';

  import HomeSwiper from './homeCops/HomeSwiper';
  import Recommend from './homeCops/Recommend';
  import FlutureView from './homeCops/FlutureView';

  import BScroll from 'conponents/common/scroll/BScroll';
  export default {
    name: 'home',
    data() {
      return {
        //从接口获取的数据
        images: [
          'https://img01.yzcdn.cn/vant/apple-1.jpg',
          'https://img01.yzcdn.cn/vant/apple-2.jpg',
        ],
        datas: [
          {
            link: 'http://www.baidu.com',
            title: '十分抢券',
          },
          {
            link: 'http://www.baidu.com',
            title: '好物特卖',
          },
          {
            link: 'http://www.baidu.com',
            title: '内购福利',
          },
          {
            link: 'http://www.baidu.com',
            title: '初秋上新',
          },
        ],
        homegoods: {
          //存放流行数据
          pop: {
            page: 1,
            list: [
              {
                image: '流行1',
                title: '产品介绍',
                price: 250,
                cvfg: 80,
              },
              {
                image: '流行1',
                title: '产品介绍',
                price: 250,
                cvfg: 80,
              },
              {
                image: '流行1',
                title: '产品介绍',
                price: 250,
                cvfg: 80,
              },
              {
                image: '流行1',
                title: '产品介绍',
                price: 250,
                cvfg: 80,
              },
              {
                image: '流行1',
                title: '产品介绍',
                price: 250,
                cvfg: 80,
              },
              {
                image: '流行1',
                title: '产品介绍',
                price: 250,
                cvfg: 80,
              },
              {
                image: '流行1',
                title: '产品介绍',
                price: 250,
                cvfg: 80,
              },
              {
                image: '流行1',
                title: '产品介绍',
                price: 250,
                cvfg: 80,
              },
              {
                image: '流行1',
                title: '产品介绍',
                price: 250,
                cvfg: 80,
              },
              {
                image: '流行1',
                title: '产品介绍',
                price: 250,
                cvfg: 80,
              },
            ],
          },
          //存放新款数据
          new: {
            page: 1,
            list: [
              {
                image: '新款2',
                title: '产品介绍',
                price: 500,
                cvfg: 800,
              },
              {
                image: '新款2',
                title: '产品介绍',
                price: 500,
                cvfg: 800,
              },
              {
                image: '新款2',
                title: '产品介绍',
                price: 500,
                cvfg: 800,
              },
              {
                image: '新款2',
                title: '产品介绍',
                price: 500,
                cvfg: 800,
              },
              {
                image: '新款2',
                title: '产品介绍',
                price: 500,
                cvfg: 800,
              },
              {
                image: '新款2',
                title: '产品介绍',
                price: 500,
                cvfg: 800,
              },
              {
                image: '新款2',
                title: '产品介绍',
                price: 500,
                cvfg: 800,
              },
              {
                image: '新款2',
                title: '产品介绍',
                price: 500,
                cvfg: 800,
              },
              {
                image: '新款2',
                title: '产品介绍',
                price: 500,
                cvfg: 800,
              },
              {
                image: '新款2',
                title: '产品介绍',
                price: 500,
                cvfg: 800,
              },
              {
                image: '新款2',
                title: '产品介绍',
                price: 500,
                cvfg: 800,
              },
              {
                image: '新款2',
                title: '产品介绍',
                price: 500,
                cvfg: 800,
              },
            ],
          },
          //存放精选数据
          sell: {
            page: 1,
            list: [
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
              {
                image: '精选3',
                title: '产品介绍',
                price: 5000,
                cvfg: 800,
              },
            ],
          },
        },
        currenttype: 'pop',
        upflag: false,
        tabcontrlTop: 0,
        isfexd: false,
      };
    },
    components: {
      tabbar,
      TabContrl,
      HomeSwiper,
      Recommend,
      FlutureView,
      HomeGoods,
      BScroll,
      BackUp,
    },
    created() {
      //生命周期hook，创建home组件即发送网络请求，渲染到组件内
      //home网络请求
      //将主要操作抽取到methods中，在此调用即可
      this.getHomeNetData();
      //homegoods数据请求
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    // mounted() {
    //   // let refresh = this.debounce(this.$refs.scroll.scroll.refresh, 50);
    //   // // ---图片加载事件监听，可以用vuex,和事件总线传过来--------
    //   // refresh();
    // },
    methods: {
      //防抖函数(防止某些事件执行多次，但没必要)
      debounce(func, delay) {
        let timer = null;
        return function(args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            func.apply(this, args);
          }, delay);
        };
      },

      //节流函数
      throttle(fn, delay) {
        var timer;
        return function() {
          var _this = this;
          var args = arguments;
          if (timer) {
            return;
          }
          timer = setTimeout(function() {
            fn.apply(_this, args);
            timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
          }, delay);
        };
      },
      //网络请求相关的
      getHomeNetData() {
        //home网络请求操作
        getHomeNetData().then((res) => {
          console.log('数据获取成功');
          console.log(res);
        });
      },
      // getHomeGoods(type) {
      //   //homegoods数据请求
      //   //page默认为0，所以让传入的page+1
      //   const page = this.homegoods[type].page + 1;
      //   getHomeGoods(type, page).then((res) => {
      //     //将请求到的对应类型的数据放到goods对应的变量当中
      //     this.homegoods[type].list.push(...res.data.list);
      //     //拿到数据之后，让变量中的page+1
      //     this.homegoods[type].page += 1;
      //     this.$refs.scroll.finishup();
      //   });
      // },

      //事件监听
      //1.contrltab点击事件
      contrlclick(index) {
        switch (index) {
          case 0:
            this.currenttype = 'pop';
            break;
          case 1:
            this.currenttype = 'new';
            break;
          case 2:
            this.currenttype = 'sell';
            break;
        }
        //让两个tabcontrl点击同步
        this.$refs.contrltab1.currentindex = index;
        this.$refs.contrltab2.currentindex = index;
      },
      // 2.回到顶部点击
      backup() {
        this.$refs.scroll.scrollto(0, 0);
      },
      // 3.滚动事件
      // 回到顶部按钮
      scroll(position) {
        // 1.回到顶部判断
        this.upflag = position.y <= -400;
        // 2.tabcontrl吸顶切换
        this.isfexd = -position.y > this.tabcontrlTop;
      },
      //上拉加载更多
      upload() {
        // 一上拉就请求当前type的page+1的数据，展示
        // this.getHomeGoods(this.currenttype);
        console.log(this.currenttype);
        //如果有接口，finishup应该写在网络请求里
        this.$refs.scroll.finishup();
        this.$refs.scroll.scroll.refresh();
      },

      // swiper中的图片加载监听，因为会影响contrltab1.$el.offsetTop
      imgload() {
        this.tabcontrlTop = this.$refs.contrltab1.$el.offsetTop;
        console.log(this.tabcontrlTop);
        
      },
    },
  };
</script>
<style scoped>
  #home {
    height: 100vh;
  }
  .home_tab {
    background-color: purple;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 44px;
    right: 0;
    left: 0;
    overflow: hidden;
  }
  .backupactive {
    display: none;
  }
  .fixed {
    position: relative;
    z-index: 9;
  }
</style>
