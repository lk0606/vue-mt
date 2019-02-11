<template>
  <!--附近商家-->
  <div class="near">
    <h2>附近商家</h2>
    <ul>
      <li>
        <div>
          <span>综合排序</span>
          <img src="img/img-index/down.png" />
        </div>
        <ul>
          <li></li>
        </ul>
      </li>
      <li>
        <span>销量最高</span>
      </li>
      <li>
        <span>距离最近</span>
      </li>
      <li>
        <span>筛选</span>
        <img src="img/img-index/filter.png" />
      </li>
    </ul>
    <!--食物们-->
    <router-link
      class="food" tag="div" to="/shop">
      <div>
        <img src="img/img-index/food1.jpg" />
      </div>
      <ul>
        <li>
          <h3>
            汤小鲜和范小满（捞饭·炖品）
          </h3>
          <img src="img/img-index/more.png" />
        </li>
        <li>
          <p>
            <img src="img/img-index/star.png" />
            <span>4.5</span>
            <span>月售5973</span>
          </p>
          <p>
            <span>46分钟</span>
            <span>4.2km</span>
          </p>
        </li>
        <li>
          <p>起送￥0|配送￥3.5 <span>￥4.5| </span>人均￥21</p>
        </li>
        <li>
          <img src="img/img-index/good-type.png" />
          <strong>中式简餐</strong>
        </li>
        <li>
          <p>
            <span>10减10</span>
            <span>20减15</span>
            <i>支持自取</i>
            <i>青山公益商家</i>
          </p>
          <img src="img/img-index/down.png" />
        </li>
      </ul>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Near',
  data () {
    return {
    }
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
  .near{
    padding: 0 .1rem;
    margin-top: .25rem;
    h2{
      font-size: .19rem;
      line-height: .19rem;
      padding: .12rem 0rem;
      color: #484848;
    }
    .ul-fixed{
      background: white;
      width: 100%;
      padding:0 0.1rem;
      padding-bottom: .1rem;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      position: fixed;
      top: .55rem;
      left: 0;
    }
    ul{
      display: flex;
      justify-content: space-between;
      li{
        display: flex;
        align-items: center;
        font-size:.13rem;
        color: #3b3b3b;
        img{
          margin-left: .05rem;
          width: .06rem;
          height: .04rem;
        }
      }
      li:nth-of-type(4){
        span{
          //margin-left: .18rem;
          //border-left: 1px solid #ebebeb;
        }
        img{
          width: .12rem;
          height: .12rem;
        }
      }
      li:nth-of-type(1) div{
        display: flex;
        align-items: center;
      }
    }
    .food{
      padding-top: .28rem;
      //background: wheat;
      display: flex;
      justify-content: space-between;
      div{
        margin-right: .1rem;
        img{
          width: .79rem;
          height: .59rem;
        }
      }
      ul{
        //食物名称
        width: 2.68rem;
        display: flex;
        flex-direction: column;
        li:nth-of-type(1){
          display: flex;
          justify-content: space-between;
          h3{
            font-size: .15rem;
            color: #333;
          }
          img{
            width: .13rem;
            height: .15rem;
          }
        }
        li:nth-of-type(2){
          justify-content: space-between;
          p{
            display: flex;
            align-items: center;
            img{
              width: .58rem;
              height: .09rem;
              margin-right: .06rem;
            }

          }
          p:nth-of-type(2) span:nth-of-type(1){
            margin-right: .04rem;
          }
          p:nth-of-type(2) span:nth-of-type(2){
            padding-left: .04rem;
            border-left: 1px solid #e5e5e5;
          }
        }
        li:nth-of-type(3){
          span{
            text-decoration: line-through;
            font-size: 0.07rem;
            color: #999;
          }
        }
        li:nth-of-type(4){
          img{
            margin-left: 0;
            margin-right: .04rem;
            width: .11rem;
            height: .12rem;
          }
          strong{
            font-weight: 500;
            font-size: .11rem;
            color: #444;
          }
        }
        li:nth-of-type(5) {
          display: flex;
          justify-content: space-between;
          p{
            font-size: .1rem;
            span{
              margin-right: .03rem;
              display: inline-block;
              padding: .02rem;
              color: #fb4e44;
              border: 1px solid #fdc9c6;
            }
            i{
              margin-right: .03rem;
              display: inline-block;
              padding: .02rem;
              color: #22b5a5;
              border: 1px solid #b4ede6;
              font-style: normal;
            }
            i:last-of-type{
              margin-right: 0rem;
            }

          }
          img{
            width: .06rem;
            height: .04rem;
          }
        }
        li{
          margin-bottom: .1rem;
          display: flex;
          align-items: center;
          p{
            font-size: .12rem;
            color: #777;
          }

        }
      }
    }
    .food:last-of-type{
      /*margin-bottom: .8rem;*/
    }
  }
</style>
