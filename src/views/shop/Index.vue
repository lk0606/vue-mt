<template>
  <div>
    <!--header-->
    <header>
      <div class="hd-top">
        <p>
          <i class="iconfont icon-jiantouzuoxiao" @click="back"></i>
        </p>
        <p>
          <i class="iconfont icon-fangdajing"></i>
          <i class="iconfont icon-shoucang"></i>
          <i class="iconfont icon-shenglvehao"></i>
        </p>
      </div>

    </header>
    <!--section-->
    <section>
      <div class="notice">
        <h2>汤小鲜和范小满&nbsp;(捞饭·炖品)</h2>
        <img src="img/img-shop/food1.jpg" />
        <ul>
          <li>
            <img src="img/img-shop/time1.png" />
            配送约39分钟
          </li>
          <li>
            <span>|</span><img src="img/img-shop/lightning1.png" />
            极速退款<span>|</span>
          </li>
          <li>
            <img src="img/img-shop/mountain1.png" />
            青山公益商家
          </li>
        </ul>
        <p>公告: [SOUPER,生活轻奢餐]专注，完美！作品，而不是产品！情怀无用，味道至少！</p>
        <div class="coupon-wrap">
          <div class="coupon">
            <p>￥1<span>领</span></p>
            <p>￥2<span>领</span></p>
            <p>￥3<span>领</span></p>
          </div>
          <ul>
            <li>10减10</li>
            <li>30减20</li>
            <li>40减30</li>
            <li>65减35</li>
            <li>100减60</li>
            <li><i class="iconfont icon-jiantou_down"></i></li>
          </ul>
        </div>
      </div>
      <div class="nav-wrap">
        <ul class="nav">
          <li>
            <a href="#">点菜</a>
            <i></i>
          </li>
          <li>
            <a href="#">评价
              <i></i>
            </a>
            <span>&nbsp;3378</span>
          </li>
          <li>
            <a href="#">商家</a>
            <i></i>
          </li>
          <li>
            <a href="#">邀请拼单</a>
          </li>
        </ul>
      </div>
      <div class="ban-wrap">
        <ul class="ban">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <li>
                  <a href="#">
                    <img src="img/img-shop/shop-ban1.jpg" />
                  </a>
                </li>
              </div>
              <div class="swiper-slide">
                <li>
                  <a href="#">
                    <img src="img/img-shop/shop-ban1.jpg" />
                  </a>
                </li>
              </div>
              <div class="swiper-slide">
                <li>
                  <a href="#">
                    <img src="img/img-shop/shop-ban1.jpg" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        </ul>
        <p>

          <img src="img/img-shop/shop-hot1.png" />
          <span>热卖</span>
          <img src="img/img-shop/shop-hot1.jpg" /></p>
      </div>
      <div class="fd-wrap">
        <ul class="tit">
          <li><img src="img/img-shop/shop-discount1.png" />
            折扣
          </li>
          <li>进店必买</li>
          <li>souper公告</li>
          <li>NEW</li>
          <li>吃遍世界</li>
          <li>你不知的souper</li>
          <li>进店必买</li>
          <li>不买不让走</li>
        </ul>
        <ul class="fd">
          <li>
            <dl>
              <dt><img src="img/img-shop/fd1.jpg" />
              </dt>
              <dd>
                台湾眷村卤肉饭+炭烤茄子双拼饭</dd>
              <!--微辣，鸡腿-->
              <dd class="taste"></dd>
              <dd>
                <span>月售1795</span>
                <span>赞52</span>
              </dd>
              <dd>
                <i>￥9.9
                  <span>￥32</span>
                </i>
                <i>选规格</i>
              </dd>
              <dd>
                <img src="img/img-shop/shop-discount2.png" >
                3.09折 限5份
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="img/img-shop/fd2.jpg" />
              </dt>
              <dd>
                一只外焦里嫩的藤椒大鸡腿(鸡腿鸡腿大鸡腿)</dd>
              <!--微辣，鸡腿-->
              <dd class="taste">
                <span>微辣<img src="img/img-shop/shop-paprika1.png" /></span>
                <span>鸡腿</span>
              </dd>
              <dd>
                <span>月售1795</span>
                <span>赞52</span>
              </dd>
              <!--选规格-->
              <dd>
                <i>￥9.9
                  <span>￥32</span>
                </i>
                <img src="img/img-shop/more.png" />
              </dd>
              <dd>
                <img src="img/img-shop/shop-discount2.png" >
                3.09折 限5份
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="img/img-shop/fd1.jpg" />
              </dt>
              <dd>
                台湾眷村卤肉饭+炭烤茄子双拼饭</dd>
              <!--微辣，鸡腿-->
              <dd class="taste"></dd>
              <dd>
                <span>月售1795</span>
                <span>赞52</span>
              </dd>
              <dd>
                <i>￥9.9
                  <span>￥32</span>
                </i>
                <i>选规格</i>
              </dd>
              <dd>
                <img src="img/img-shop/shop-discount2.png" >
                3.09折 限5份
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="img/img-shop/fd2.jpg" />
              </dt>
              <dd>
                一只外焦里嫩的藤椒大鸡腿(鸡腿鸡腿大鸡腿)</dd>
              <!--微辣，鸡腿-->
              <dd class="taste">
                <span>微辣<img src="img/img-shop/shop-paprika1.png" /></span>
                <span>鸡腿</span>
              </dd>
              <dd>
                <span>月售1795</span>
                <span>赞52</span>
              </dd>
              <!--选规格-->
              <dd>
                <i>￥9.9
                  <span>￥32</span>
                </i>
                <img src="img/img-shop/more.png" />
              </dd>
              <dd>
                <img src="img/img-shop/shop-discount2.png" >
                3.09折 限5份
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="img/img-shop/fd1.jpg" />
              </dt>
              <dd>
                台湾眷村卤肉饭+炭烤茄子双拼饭</dd>
              <!--微辣，鸡腿-->
              <dd class="taste"></dd>
              <dd>
                <span>月售1795</span>
                <span>赞52</span>
              </dd>
              <dd>
                <i>￥9.9
                  <span>￥32</span>
                </i>
                <i>选规格</i>
              </dd>
              <dd>
                <img src="img/img-shop/shop-discount2.png" >
                3.09折 限5份
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="img/img-shop/fd2.jpg" />
              </dt>
              <dd>
                一只外焦里嫩的藤椒大鸡腿(鸡腿鸡腿大鸡腿)</dd>
              <!--微辣，鸡腿-->
              <dd class="taste">
                <span>微辣<img src="img/img-shop/shop-paprika1.png" /></span>
                <span>鸡腿</span>
              </dd>
              <dd>
                <span>月售1795</span>
                <span>赞52</span>
              </dd>
              <!--选规格-->
              <dd>
                <i>￥9.9
                  <span>￥32</span>
                </i>
                <img src="img/img-shop/more.png" />
              </dd>
              <dd>
                <img src="img/img-shop/shop-discount2.png" >
                3.09折 限5份
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </section>
    <!--footer-->
    <footer>
      <div class="cart">
        <p>满10减10；满30减20；满40减30；满65减45；满100减65；</p>
        <div>
          <p>另需配送费￥5.5 | 支持自取</p>
          <span>￥0起送</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
  /*header*/
  header{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 .1rem;
    padding-top: .12rem;
    width: 100%;
    height: 1.25rem;
    background: url("../../../public/img/img-shop/shop-bg1.jpg") center no-repeat;
    background-size: 100% 100%;
    .hd-top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      p{
        display: flex;
        align-items: center;
        color: #fbfff6;
      }
      .icon-jiantouzuoxiao{
        font-size: .26rem;
        color: #fbfff6;
        margin-left: .05rem;
      }
      p:nth-of-type(2){
        .icon-fangdajing{
          font-size: .22rem;
          margin-right: .2rem;

        }
        .icon-shoucang{
          font-size: .22rem;
          margin-right: .2rem;

        }
        .icon-shenglvehao{
          font-size: .22rem;
        }
      }

    }
  }
  /*section*/
  section{
    //padding: 0 .1rem;
    background: #f7f8fa;
    .notice{
      margin: 0 .1rem;
      padding: .15rem .13rem;
      position: relative;
      top: -.49rem;
      background: #fff;
      border-radius: .03rem;
      h2{
        width: 2.6rem;
        letter-spacing: .015rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .22rem;
        color: #000;
      }
      >img{
        position: absolute;
        right: .13rem;
        top: -.22rem;
        width: .55rem;
        height: .55rem;
      }
      ul{
        margin-top: .06rem;
        li{
          float: left;
          line-height: .2rem;
          display: flex;
          align-items: center;
          margin-right: .08rem;
          font-size: .11rem;
          color: #353535;
          img{
            margin-right: .05rem;
            width: .11rem;
            height: .11rem;
          }
        }

        li:nth-of-type(2){
          margin-right: 0rem;
          padding-right: .08rem;
          span{
            color: #dbd7d4;
          }
          span:nth-of-type(1){
            padding-right: .08rem;
          }
          span:nth-of-type(2){
            padding-left: .08rem;
          }
          img{
            padding-left: 0rem;
          }
        }
      }
      >p{
        color: #b6b6b6;
        font-size: .11rem;
        width: 100%;
        letter-spacing: .005rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: .18rem;
      }
      .coupon-wrap{
        display: flex;
        flex-direction: column;
        margin-top: .09rem;
        .coupon{
          display: flex;
          p{
            margin-right: .05rem;
            display: flex;
            justify-content: space-between;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            align-items: center;
            padding-left: .14rem;
            padding-right: .08rem;
            color: #fff;
            font-size: .12rem;
            width: .75rem;
            height: .23rem;
            background: url("../../../public/img/img-shop/bg-coupon1.png");
            background-size:100% 100% ;
            span{

            }
          }
        }
        ul{
          margin-top: .06rem;
          width: 100%;
          li{
            float: left;
            line-height: .14rem;
            padding: 0 .05rem;
            font-size: .1rem;
            color: #eb6161;
            border: 1px solid #eccfd4;
          }
          li:nth-of-type(6){
            float: right;
            border: 0;
            .icon-jiantou_down{
              font-weight: bold;
              font-size: .14rem;
              color: #949494;
            }
          }
        }
      }
    }
    .nav-wrap{
      border-bottom: 1px solid #ededed;
      .nav{
        margin: 0 .1rem;
        //margin-top: .14rem;
        margin-top: -.3rem;
        display: flex;
        justify-content: space-between;
        li{
          display: flex;
          align-items: center;
          flex-direction: column;
          font-size: .16rem;
          a{
            color: #303030;
            //font-weight: bold;
            letter-spacing: .02rem;
          }
          i{
            visibility: hidden;
            margin-top: .11rem;
            width: .2rem;
            height: .02rem;
            background: url("../../../public/img/img-shop/shop-bg-line1.jpg") repeat-x;

          }
          span{
            letter-spacing: 0rem;
            font-size: .08rem;
            line-height: .1rem;
            color: #979797;
          }

        }
        li:nth-of-type(1){
          margin-right: .4rem;
          a{
            font-weight: bold;
          }
          i{
            visibility: visible;
          }
        }
        li:nth-of-type(2){
          display: flex;
          flex-direction: row;
          a{
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
        li:last-of-type a{
          display: flex;
          align-items: center;
          justify-content: center;
          padding: .05rem .1rem;
          font-size: .13rem;
          color: #f69d25;
          border-radius: .2rem;
          border: 1px solid #d2a759;
        }
      }
    }
    .ban-wrap{
      background: white;
      .ban{
        margin: 0 .1rem;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        li{
          width: 100%;
          padding: .15rem .05rem;

          a{
            img{
              flex: 1;
              width: 100%;
              width: 3.3rem;
              height: 1.25rem;
            }
          }
        }
      }
      p{
        padding: 0 .1rem;
        display: flex;
        align-items: center;
        padding-bottom: .12rem;
        img:nth-of-type(1){
          margin: 0 .05rem;
          width: .15rem;
          height: .15rem;
        }
        span{
          font-weight: bold;
          font-size: .12rem;
          color: #323232;
          margin-right: .28rem;
        }
        img:nth-of-type(2){
          width: 1.15rem;
          height: .28rem;
        }
      }
    }
    .fd-wrap{
      display: flex;
      background: white;
      .tit{
        width: .54rem;
        background: #f7f8fa;
        padding: 0 .1rem;
        padding-right: .17rem;
        display: flex;
        flex-direction: column;
        li{
          margin-left: .05rem;
          padding: .15rem 0;
          color: #656668;
          display: flex;
          align-items: center;
          font-size: .12rem;
          img{
            margin-right: .05rem;
            width: .15rem;
            height: .15rem;
          }
        }
      }
      .fd{
        display: flex;
        flex-direction: column;
        margin-left: .1rem;
        li{
          dl{
            dt{
              float: left;
              margin-bottom: .7rem;
              img{
                margin-right: .1rem;
                width: 1.1rem;
                height: 1.1rem;
              }
            }
            dd{
              letter-spacing: .8px;
            }
            dd:nth-of-type(1){
              line-height: .24rem;
              width: 1.38rem;
              font-size: .17rem;
              color: #353535;
              font-weight: bold;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            dd:nth-of-type(2){

            }
            dd:nth-of-type(3){
              display: flex;
              span{
                margin-top: .07rem;
                font-size: .11rem;
                color: #a5a5a5;
              }
              span:nth-of-type(1){
                margin-right: .11rem;
              }
            }
            dd:nth-of-type(4){
              margin-top: .08rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              i:nth-of-type(1){
                display: flex;
                flex-direction: column;
                font-size: .15rem;
                color: #f94d49;
                font-weight: bold;
                span{
                  margin-top: .01rem;
                  line-height: .16rem;
                  font-size: .09rem;
                  color: #969696;
                  text-decoration: line-through;
                  text-indent: .02rem;
                  //font-weight: 100;
                }
              }
              i:nth-of-type(2){
                display: flex;
                justify-content: center;
                align-items: center;
                padding: .06rem .12rem;
                font-size: .14rem;
                color: #442f10;
                background: #ffc83f;
                border-radius: .2rem;
              }
              img{
                width: .25rem;
                height: .25rem;
              }

            }
            dd:nth-of-type(5){
              margin-top: .04rem;
              display: flex;
              align-items: center;
              font-size: .11rem;
              color: #f05344;
              img{
                margin-right: .04rem;
                width: .115rem;
                height: .115rem;
              }
            }
          }
        }
        .taste{
          display: flex;
          span{

            margin: .07rem .05rem 0rem 0;
            border-radius: .02rem;
            background: #f1f1f1;
            padding: .02rem .05rem .03rem .05rem;
            font-size: .11rem;
            color: #2e2e2e;
            img{
              width: .11rem;
              height: .11rem;
              margin-left: .01rem;
            }
          }
          span:nth-of-type(1){
            display: flex;
            align-items: center;
            padding-right: .02rem;
          }

        }
      }
      .fd:last-of-type{
        margin-bottom: 1.2rem;
      }
    }
  }
  /*footer*/
  footer{
    position: fixed;
    bottom: 0;
    padding: 0 .15rem;
    width: 100%;
    box-sizing: border-box;
    .cart{
      height: 1rem;
      background: url("../../../public/img/img-shop/shop-cart2.jpg") no-repeat center;
      background-size: cover;
      >p:nth-of-type(1){
        margin: 0 auto;
        padding: .12rem 0;
        font-size: .13rem;
        color: #332f2c;
        width: 2.86rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      div{
        padding-left: .84rem;
        margin-top: .2rem;
        display: flex;
        //justify-content: center;
        align-items: center;
        p{
          font-size: .11rem;
          color: #abaaa8;
          width: 1.4rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-right: .17rem;
        }
        span{
          font-size: .15rem;
          color: #acaba9;
        }
      }
    }
  }
</style>
