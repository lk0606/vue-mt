<template>
  <div class="container">
    <header>
      <p>
        订单
      </p>
    </header>
    <!--section-->
    <section>
      <div class="reg">
        <img src="img/img-reg-log/me-log1.png" />
        <p>您还没有登录，请登录后查看订单</p>
        <router-link to="/login">登录/注册</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {
  },
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
  .container{
    height: 100%;
    letter-spacing: .005rem;
  }
  /*header*/
  header{
    height: .42rem;
    padding-bottom: .13rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .16rem;
    margin-bottom: 1.22rem;
    p{

    }
  }
  /*section*/
  section{

    .reg{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width: 1.2rem;
        height: 1.2rem;
      }
      a{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.21rem;
        height: .35rem;
        background: #ffd300;
        color: #6b450a;
        font-size: .15rem;
      }
      P{
        padding: .22rem 0;
        color: #9e9c9a;
        font-size: .15rem;
      }

    }
  }
</style>
