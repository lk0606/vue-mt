<template>
  <footer>
    <ul>
      <li>
        <router-link to="/">
          <img src="img/img-index/ft1.png" />首页
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <img src="img/img-index/ft2.png" />闪购
        </router-link>
      </li>
      <li>
        <router-link to="/ord">
          <img src="img/img-index/ft3.png" />订单
        </router-link>
      </li>
      <li>
        <router-link to="/me">
          <img src="img/img-index/ft-4.png" />我的
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Foot',
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
  //footer
  footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    background: #e4e4e4;
    padding: .06rem .1rem .04rem;
    ul{
      display: flex;
      justify-content: space-around;
      align-items: center;
      li{
        display: flex;
        flex-direction: column;
        a{
          font-size: .1rem;
          color: #a9a9a9;
        }

        img{
          width: .22rem;
          height: .22rem;
          margin-bottom: .09rem;
        }
      }
      li:nth-of-type(1) a{
        color: #333333;
      }

    }
  }
</style>
