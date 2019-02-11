<template>
  <div class="container">
    <!--header-->
    <header>
      <div class="hd-right">
        <img src="img/img-me/setting.png" />
        <img src="img/img-me/msg.png" />
      </div>
      <div class="hd-left">
        <div class="hd-pic">
          <img src="img/img-me/me-empty.png" />
        </div>
        <div>
          <a href="javascript:void (0);">登录/注册</a>
        </div>
      </div>
    </header>
    <!--section-->
    <section>
      <!--menu-->
      <div class="menu">
        <ul>
          <li>
            <a href="">
              <img src="img/img-me/logo1.png" />
              我的收藏
            </a>
          </li>
          <li>
            <a href="">
              <img src="img/img-me/logo2.png" />
              我的足迹
            </a>
          </li>
          <li>
            <a href="">
              <img src="img/img-me/logo3.png" />
              我的评价
            </a>
          </li>
          <li>
            <a href="">
              <img src="img/img-me/logo4.png" />
              答谢记录
            </a>
          </li>
          <li>
            <a href="">
              <img src="img/img-me/logo5.png" />
              我的地址
            </a>
          </li>
        </ul>
      </div>
      <!--我的资产-->
      <div class="money">
        <h3>我的资产</h3>
        <ul>
          <li>
            <a href="">
              <img src="img/img-me/m1.png" />
              红包
            </a>
          </li>
          <li>
            <a href="">
              <img src="img/img-me/m2.png" />
              代金券
            </a>
          </li>
          <li>
            <a href="">
              <img src="img/img-me/m3.png" />
              我的钱包
              <span>签到赢现金</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="img/img-me/m4.png" />
              闪付
              <span>新客减8元</span>

            </a>
          </li>

        </ul>
      </div>
      <!--我的服务-->
      <div class="money service">
        <h3>我的服务</h3>
        <ul>
          <li>
            <a href="">
              <img src="img/img-me/s1.png" />
              帮助与...
            </a>
          </li>
          <li>
            <a href="">
              <img src="img/img-me/s2.png" />
              客服中心
            </a>
          </li>
        </ul>
      </div>
      <!--更多推荐-->
      <div class="money">
        <h3>更多推荐</h3>
        <ul>
          <li>
            <a href="">
              <img src="img/img-me/r1.png" />
              邀请有奖
            </a>
          </li>
          <li>
            <a href="">
              <img src="img/img-me/r2.png" />
              商家入驻
            </a>
          </li>
          <li>
            <a href="">
              <img src="img/img-me/r3.png" />
              骑手招募
            </a>
          </li>
          <li>
            <a href="">
              <img src="img/img-me/r4.png" />
              我要合作
            </a>
          </li>
          <li>
            <a href="">
              <img src="img/img-me/r5.png" />
              美团公益
            </a>
          </li>
        </ul>
      </div>
    </section>
    <Foot/>
  </div>
</template>

<script>
import Foot from './components/Foot'
export default {
  name: 'Index',
  components: {
    Foot
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
  .container {
    font-family: "Adobe 黑体 Std R","Microsoft YaHei";
  }
  header{
    padding: 0 .15rem;
    width: 100%;
    height: 1.2rem;
    box-sizing: border-box;
    background: url("../../../public/img/img-me/bg-top.jpg");
    background-size: cover;
    .hd-right{
      display: flex;
      justify-content: flex-end;
      padding-top: .12rem;
      img{
        width: .19rem;
        height: .19rem;
      }
      img:nth-of-type(2){
        margin-left: .21rem;
      }
    }
    .hd-left{
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      align-items: center;
      img{
        width: .55rem;
        height: .55rem;
        margin-right: .16rem;
      }
      div{
        margin-top: .14rem;
        display:flex;
        a{
          font-size: .12rem;
          color: #323731;
        }
      }
    }
  }
  /*section*/
  section{
    background: #f4f4f4;
    /*menu*/
    .menu,.money{
      //padding: 0 .15rem;
      background: white;
      ul{
        display: flex;
        flex-wrap: wrap;
        flex-shrink: 1;
        justify-content: space-between;
        li{
          width: 25%;
          display: flex;
          justify-content: center;
          margin-top: .16rem;
          margin-bottom: .08rem;
          a{
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #979797;
            font-size: .13rem;
            padding-bottom: .16rem;
            img{
              height: .25rem;
              width: .25rem;
              margin-bottom: .09rem;
            }
          }
        }
      }
    }
    /*我的资产*/
    .money{
      background: white;
      margin-top: .1rem;
      h3{
        margin-left:  .15rem;
        font-size: .13rem;
        font-weight: 100;
        color: #656565;
        padding: .15rem 0rem;
        border-bottom: 1px solid #e4e4e4;
      }
      span{
        margin-top: .06rem;
        font-size: .1rem;
        color: #b7b7b7;
      }
    }
    .service{
      ul{
        justify-content: flex-start;
      }
    }
    div:last-of-type{
      margin-bottom: .8rem;
    }
  }
</style>
