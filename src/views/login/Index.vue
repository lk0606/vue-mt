<template>
  <div>
    <!--header-->
    <header>
      <div class="hd">
        <h2>登录美团</h2>
        <router-link to="/reg">
          注册
        </router-link>
      </div>
    </header>
    <!--section-->
    <section>
      <ul>
        <li>手机号归属地<span>中国></span></li>
        <li>
          <em>+86</em>
          <input type="text" placeholder="请输入手机号"/>
        </li>
        <li>
          <input type="button" value="下一步" />
        </li>
        <li>使用其他方式登录</li>
      </ul>
    </section>
    <!--footer-->
    <footer>
      <!--苹果自带输入法-->
      <ul>
        <li><h3>1</h3><span></span></li>
        <li><h3>2</h3><span>ABC</span></li>
        <li><h3>3</h3><span>DEF</span></li>
        <li><h3>4</h3><span>GHI</span></li>
        <li><h3>5</h3><span>JKL</span></li>
        <li><h3>6</h3><span>MNO</span></li>
        <li><h3>7</h3><span>PQRS</span></li>
        <li><h3>8</h3><span>TUV</span></li>
        <li><h3>9</h3><span>WXYZ</span></li>
        <li><h3>+*#</h3><span></span></li>
        <li><h3>0</h3><span></span></li>
        <li><img src="img/img-reg-log/delete2.png" /><span></span></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  data () {
    return {}
  },
  methods: {
    back () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/ord')
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
    .hd{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fafafa;
      padding: .14rem .09rem .14rem .16rem;
      border-bottom: 1px solid #ccc;
      img{
        width: .17rem;
        height: .17rem;
      }
      h2{
        font-size: .18rem;
        color: #030303;
        //font-weight: 100;
      }
      a{
        font-size: .15rem;
        color: #333333;
      }

    }
  }
  section{
    margin-top: .64rem;
    >ul:nth-of-type(1){
      padding: 0 .11rem;
      li{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #999;
      }
      li:nth-of-type(1){
        justify-content: space-between;
        letter-spacing: .01rem;
        padding: .1rem 0;
        font-size: .17rem;
        span{
          font-size: .14rem;
          color: #ffb000;
        }
      }
      li:nth-of-type(2){
        margin-top: .24rem;
        em{
          width: .75rem;
          font-size: .14rem;
          color: #333;
        }
        input{
          padding: .1rem 0;
          font-size: .17rem;
          color: #ffb000;

        }
        input::-webkit-input-placeholder{
          font-family: "微软雅黑";
          font-size: .17rem;
          color: #c7c7cd;
          font-weight: 100;
        }

      }
      li:nth-of-type(3){
        margin-top: .25rem;
        border: 0;
        justify-content: center;
        input{
          width: 100%;
          padding: .15rem 0;
          background: #f2f2f2;
          color: #ccc;
          font-size: .16rem;
        }
      }
      li:nth-of-type(4){
        letter-spacing: .01rem;
        justify-content: center;
        border: 0;
        margin-top: .22rem;
        margin-bottom: .25rem;
        font-size: .14rem;
        color: #ffb000;
      }
    }
  }
  /*footer*/
  footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    ul{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      li{
        display: flex;
        align-items: center;
        flex-direction: column;
        //width: 1.05rem;
        height: .54rem;
        width: 33%;
        border-bottom:  1px solid #8c8c8c;
        border-right: 1px solid #8c8c8c;
        h3{
          font-size: .2rem;
          line-height: .2rem;
          margin-top: .08rem;
          margin-bottom: .08rem;
        }
        span{
          font-size: .08rem;
          line-height: .08rem;
        }
      }
      li:nth-of-type(3n){
        border-right: 0;
      }
      li:nth-of-type(1){
        h3{

        }
      }
      li:nth-last-of-type(1){
        background: #d2d5d7;
        border-bottom: 0;
        justify-content: center;
        img{
          width: .23rem;
          height: .17rem;
        }
      }
      li:nth-last-of-type(2){
        border-bottom: 0;
        justify-content: center;

      }
      li:nth-last-of-type(3){
        background: #d2d5d7;
        border-bottom: 0;
        justify-content: center;

      }
    }
  }
</style>
