<template>
  <div class="amap-page-container">
    <el-amap class="amap-demo">
    </el-amap>

    <div class="toolbar">
      <button @click="getMap()">get map</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    getMap () {
      // amap vue component
      // console.log(amapManager._componentMap)
      // // gaode map instance
      // console.log(amapManager._map)
    }
  },
  created () {
  },
  mounted () {
  },
  updated () {
  }
}
</script>

<style lang="scss" scoped>
  .amap-demo {
    height: 300px;
  }
</style>
