<template>
  <div id="app">
    <music-player
      top="200px"
      left="200px"
      :songlist="songlist"
    >
    </music-player>
  </div>
</template>

<script>
import songlist from "./components/songlist";

export default {
  name: 'App',
  data(){
    return {
      songlist: songlist,
    }
  },
  components: {
  }
}
</script>

<style lang="less">

</style>
