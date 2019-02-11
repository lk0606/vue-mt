<template>
  <div class="cheap-box">
    <h2>优惠专区</h2>
    <div class="cheap1">
      <div>
        <img src="img/img-index/cheap1.jpg" />
      </div>
      <div>
        <img src="img/img-index/cheap2.jpg" />
      </div>
    </div>
    <div class="cheap2">
      <div>
        <img src="img/img-index/cheap3.jpg" />
      </div>
      <div>
        <img src="img/img-index/cheap4.jpg" />
      </div>
      <div>
        <img src="img/img-index/cheap5.jpg" />
      </div>
      <div>
        <img src="img/img-index/cheap6.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  data () {
    return {}
  },
  methods: {},
  created () {
  },
  mounted () {
  },
  updated () {
  }
}
</script>

<style lang="scss" scoped>
  // 优惠专区
  .cheap-box{
    //background: skyblue;
    margin-top: .25rem;
    h2{
      font-size: .19rem;
      line-height: .19rem;
      padding: .12rem 0rem;
    }
    // 大图片
    .cheap1{
      display: flex;
      justify-content: space-between;
      div{
        img{
          width: 1.75rem;
          height: 1.1rem;
        }
      }
    }
    .cheap2{
      display: flex;
      justify-content: space-between;
      div{
        img{
          width: .85rem;
          height: 1.1rem;
        }
      }
    }
  }
</style>
