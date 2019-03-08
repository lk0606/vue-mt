<template>
  <div class="container">
    <transition name="slide-fade" >
      <router-view/>
    </transition>
    <footer>
      <ul>
        <li>
          <router-link to="/index" active-class="ac">
            <img src="img/img-index/ft1.png" class="base"/>
            <img src="img/img-index/ft-1.png" class="active"/>
            首页
          </router-link>
        </li>
        <li>
          <router-link to="/index">
            <img src="img/img-index/ft2.png" class="base"/>
            <img src="img/img-index/ft-2.png" class="active"/>
            闪购
          </router-link>
        </li>
        <li>
          <router-link to="/ord">
            <img src="img/img-index/ft3.png" class="base"/>
            <img src="img/img-index/ft-3.png" class="active"/>
            订单
          </router-link>
        </li>
        <li>
          <router-link to="/me">
            <img src="img/img-index/ft4.png" class="base"/>
            <img src="img/img-index/ft-4.png" class="active"/>
            我的
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
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
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
  .container {
    height: 100%;
  }
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
          &.router-link-exact-active {
            color: #333333;
            .base {
              display: none;
            }
            .active{
              display: block;
            }
          }
          .active {
            display: none;
          }
          img{
            width: .22rem;
            height: .22rem;
            margin-bottom: .09rem;
          }
        }
      }
    }
  }
</style>
