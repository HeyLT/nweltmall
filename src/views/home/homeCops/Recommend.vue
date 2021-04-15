<template>
  <div id="recommend">
    <ul class="recommend_cotent">
      <li v-for="item in datas">
        <a :href="item.link">
          <!-- <img src="" alt=""> -->
          <div>1</div>
          <div class="rec_titil">{{ item.title }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Recommend',
    data() {
      return {};
    },
    props: {
      datas: {
        type: Array,
        default() {
          return [];
        },
      },
    },
  };
</script>
<style scoped>
  .recommend_cotent {
    display: flex;
    padding: 10px 0 10px;
    border-bottom: 15px solid #eeeeee;
  }
  .recommend_cotent li {
    flex: 1;
    text-align: center;
    margin: 5px 5px 10px;
    background-color: purple;

    font-size: 14px;
  }
  .rec_titil {
    color: #fff;
  }
</style>
