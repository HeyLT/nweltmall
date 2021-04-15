<template>
  <div id="backup">
    <img src="~assets/images/backup.png" alt="" />
  </div>
</template>
<script>
  export default {
    name: 'BackUp',
    data() {
      return {};
    },
  };
</script>
<style scoped>
  #backup {
    position: fixed;
    bottom: 60px;
    right: 12px;
    border-radius: 50%;
    overflow: hidden;
  }
  #backup img {
    width: 36px;
    height: 36px;
  }
</style>
