<template>
  <div id="tabcontrl">
    <span
      v-for="(item, index) in tabcontrl_titil"
      :class="{ contrl_active: currentindex === index }"
      @click="contrlClick(index)"
    >
      {{ item }}
    </span>
  </div>
</template>
<script>
  export default {
    name: 'TabContrl',
    props: {
      //通用组件，通常通过props暴露属性，使用户在使用的组件内传入
      tabcontrl_titil: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    data() {
      return {
        currentindex: 0,
      };
    },
    methods: {
      contrlClick(index) {
        this.currentindex = index;
        //通过监听tabcontrl的点击事件，来判断展示数据的类型
        this.$emit('contrlClick', index);
      },
    },
  };
</script>
<style scoped>
  #tabcontrl {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  #tabcontrl span {
    flex: 1;
    margin: 0 40px;
  }
  .contrl_active {
    color: #ff5777;
    border-bottom: 2px solid #ff5777;
  }
</style>
