<template>
  <!--为你优选-->
  <div class="comm">
    <h2>为你优选</h2>
    <ul>
      <li>
        <a href="javascript:void(0);">
          <img src="img/img-index/comm1.jpg" />
        </a>
      </li>
      <li>
        <a href="javascript:void(0);">
          <img src="img/img-index/comm1.jpg" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Comm',
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
  //为你优选
  .comm{
    margin-top: .25rem;
    h2{
      font-size: .19rem;
      line-height: .19rem;
      padding: .12rem 0rem;
      color: #333;
    }
    ul{
      display: flex;
      justify-content: space-between;
      li{
        a{
          img{
            width: 1.72rem;
            height: 1.19rem;
          }
        }
      }
    }
  }
</style>
