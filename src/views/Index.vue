<template>
  <div>
    <!-- header -->
    <header class="hd">
      <div class="hd-top">
        <div class="hd-left">
          <img src="img/img-index/position.png" />
          <span>立人科技园</span>
          <img src="img/img-index/right.png" />
        </div>
        <div class="hd-right">
          <img src="img/img-index/weather.jpg" />
          <img src="img/img-index/msg.jpg" />
        </div>
      </div>
      <!--<div class="seach-wrap" style="height: .55rem">-->
      <div class="seach" >
        <input type="text" placeholder="沙拉"/>
      </div>
      <!--</div>-->

    </header>
    <section class="sec">
      <banner/>
      <nav/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner'
import Nav from '@/components/Nav'
export default {
  name: 'home',
  components: {
    Banner,
    Nav
  }
}
</script>
<style lang="scss" scoped>
  header{
    box-sizing: border-box;
    padding-top: .14rem;
    //padding-bottom: .1rem;
    width: 100%;
    background: #ffcb50;
    .hd-top{
      padding:0 .1rem;
      //margin-bottom: .13rem;
      margin-bottom: .03rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .hd-left{
        display: flex;
        align-items: center;
        img:nth-of-type(1){
          margin-right: .06rem;
          width: .12rem;height: .16rem;
        }
        span{
          margin-right: .08rem;
          font-size: .16rem;
          color: black;
        }
        img:nth-of-type(2){
          margin-right: .06rem;
          width: .035rem;height: .07rem;
        }
      }
      .hd-right{
        display: flex;
        align-items: center;
        img:nth-of-type(1){
          width: .74rem;
          height: .21rem;
        }
        img:nth-of-type(2){
          width: .21rem;
          height: .21rem;
        }
      }
    }
    .seach-fixed{
      background: white;
      z-index: 9;
      position: fixed;
      top: 0;
      //padding:  .1rem 0;
    }
    .seach{
      width: 100%;
      padding:.1rem .1rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      input{
        text-indent: .32rem;
        display: block;
        height: .35rem;
        width: 100%;
        //margin-top: .13rem;
        outline:none;
        border: 0;
        border-radius: .02rem;
        background: url(../../public/img/img-index/magnifier.png) no-repeat #fffbef left center;
        background-size: .14rem .14rem;
        background-position: .13rem .095rem;
      }
      input::-webkit-input-placeholder{
        font-size: .14rem;
        color: #999;
        font-family:"黑体";
      }
    }
  }
  section {
    width: 100%;
    box-sizing: border-box;
    padding: 0 .1rem;
    margin-top: .15rem;
  }
</style>
