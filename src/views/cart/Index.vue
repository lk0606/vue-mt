<template>
  <div class="container">
    <!--header-->
    <header>
      <div class="hd">
        <i class="iconfont icon-jiantou2" @click="back"></i>
        <h2>购物车</h2>
        <em>编辑</em>
      </div>
    </header>
    <!--section-->
    <section>
      <ul class="fd-wrap">
        <li>
          <img src="img/img-cart/checked.png" />
          <div>
            <img src="img/img-cart/food1.jpg" />
            <p>汤小鲜和范小满 (捞饭·炖品)</p>
            <i class="iconfont icon-more"></i>
          </div>
        </li>
        <li>
          <p><span>促销</span>满25减2；满35减3</p>
        </li>
        <li>
          <img src="img/img-cart/checked.png" />
          <div>
            <img src="img/img-cart/fd1.jpg" />
            <div>
              <h3>蛋炒饭</h3>
              <p><span>×1</span><em>￥10</em></p>
            </div>
          </div>
        </li>
        <li><p>包装费</p><span>￥1</span></li>
        <li>￥11<span>差￥9起送</span></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {}
  },
  methods: {
    back () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
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
  .container{
    background: #fbfbfb;
    letter-spacing: .005rem;
  }
  /*header*/
  header{
    .hd{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .13rem .23rem;
      .icon-jiantou2{
        font-size: .26rem;
        color: #757575;
      }
      h2{
        font-size: .16rem;
        color: #333333;
      }
      em{
        font-size: .13rem;
        color: #3f3f3f;
      }
    }
  }
  /*section*/
  section{
    background: white;
    padding: 0 .1rem;
    .fd-wrap{
      li{
        display: flex;
        align-items: center;
        padding-top: .1rem;
        >img{
          width: .18rem;
          height: .18rem;
          margin-right: .1rem;
        }
      }
      li:nth-of-type(1){
        div{
          display: flex;
          align-items: center;
          img{
            width: .2rem;
            height: .2rem;
            margin-right: .06rem;
          }
          p{
            font-size: .14rem;
            color: #333333;
            margin-right: .15rem;
          }
          .icon-more{
            font-size: .14rem;
          }
        }
      }
      li:nth-of-type(2){
        padding-left: .28rem;
        P{
          font-size: .12rem;
          line-height: .28rem;
          color: #333;
          span{
            margin-right: .06rem;
            padding: 0 .05rem;
            color: #ff112d;
            font-size: .11rem;
            border: 1px solid #ff112d;
          }
        }
      }
      li:nth-of-type(3){
        background: #fbfbfb;
        >div{
          display: flex;
          img{
            width: .75rem;
            height: .75rem;
            margin-right: .1rem;
          }
          div{
            height: .75rem;
            color: #333333;
            h3{
              margin-top: .13rem;
              font-size: .13rem;
            }
            p{
              margin-top: .28rem;
              font-size: .12rem;
              span{
                margin-right: 2rem;
                font-size: .09rem;
                color: #999;
              }
              em{

              }
            }
          }
        }

      }
      li:nth-of-type(4){
        padding-left: .28rem;
        justify-content: space-between;
        padding-bottom: .1rem;
        border-bottom: 1px solid #e4e4e4;
        >p,span{
          color: #333;
          font-size: .14rem;
          display: flex;
        }
      }
      li:last-of-type{
        justify-content: flex-end;
        padding: .1rem 0;
        font-size: .14rem;
        color: #fb4e44;
        font-weight: bold;
        span{
          margin-left: .07rem;
          font-weight: 100;
          padding: .11rem .2rem;
          color: #fefefe;
          background: #ccc;
        }
      }
    }
  }
</style>
