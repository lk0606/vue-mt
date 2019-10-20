<template>
  <div class="container">
    <Head/>
    <section class="sec">
      <Banner/>
      <Nav :navData="navData" />
      <CheapBox/>
      <Comm/>
    </section>
    <!--节日推荐-->
    <div class="festival">
      <a href="javascript:void(0);">
        <img src="img/img-index/festival1.jpg" />
      </a>
    </div>
    <!--购物车-->
    <div class="cart">
      <router-link to="/cart">
        <img src="img/img-index/cart-empty-f.png" />
      </router-link>
    </div>
    <Near/>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from './components/Head'
import Banner from './components/Banner'
import Nav from './components/Nav'
import CheapBox from './components/CheapBox'
import Comm from './components/Comm'
import Near from './components/Near'
import { getNav } from '@/api/index'
export default {
  name: 'home',
  components: {
    Head,
    Banner,
    Nav,
    CheapBox,
    Comm,
    Near
  },
  data () {
    return {
      navData: []
    }
  },
  methods: {
    getNav () {
      getNav().then(
        res => {
          this.navData = res.data
        }
      )
    }
  },
  created () {
    this.getNav()
  },
  mounted () {
    console.log(this.$route)
  },
  // beforeRouteLeave (to, from, next) {
    // console.log(to, from, next)
  // }
}
</script>
<style lang="scss" scoped>
  .container {
    height: 100%;
    padding-bottom: .8rem;
  }
  section {
    width: 100%;
    box-sizing: border-box;
    padding: 0 .1rem;
    margin-top: .15rem;
  }
  // 节日推荐
  .festival{
    //background: #9c82af;
    margin-top: .25rem;
    a{
      img{
        width: 3.74rem;
        height: 2.4rem;
      }
    }
  }

  //购物车
  .cart{
    position: fixed;
    top: 3.85rem;
    right: .1rem;
    img{
      width: .45rem;
      height: .45rem;

    }
  }
</style>
