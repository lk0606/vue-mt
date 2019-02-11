<template>
  <div class="container">
    <!--header-->
    <header>
      <div class="hd">
        <a href="javascript:void(0);">
          <img src="img/img-reg-log/left1.png" @click="back"/>
        </a>
        <p>注册</p>
      </div>
    </header>
    <!--section-->
    <section>
      <!--注册步骤-->
      <ul class="regord">
        <li v-for="(text, index) in step.value" :key="index">
          <span
            :class="{ curStep: isCur === index }"
            href="javascript:void(0);">
            {{text}}
            <img src="img/img-reg-log/right2.png" />
          </span>
        </li>
      </ul>
      <p
        v-show="isCur === 1"
        class="tips">{{tips}}{{codePhoneNum}}</p>
      <!--电话号码-->
      <div class="phone">
        <input
          @input="validatePhone( $event )"
          type="text" :placeholder="input.placeholder" maxlength="11" v-model="phoneNum"/>
      </div>
      <!--同意并注册-->
      <div class="read">
        <div  v-show="isCur === 0">
          <div>
            <img :src="checkbox.icon[0]" @click="checkBox( $event )" />
          </div>
          <p>
            我已审慎阅读并同意
            <span>《美团网用户协议》</span>、
            <span>《法律声明》</span>、
            <span>《隐私政策》</span>，
            接受免除或限制责任、诉讼管辖约定等粗体提示条款。
          </p>
        </div>
        <div>
          <input
            @click="submitPhone(phoneNum)"
            :style="regBtn.style"
            type="button" v-model="regBtn.value"/>
        </div>
      </div>
    </section>
    <!--输入法框-->
    <aside>
      <!--输入法导航-->
      <ul class="nav">
        <li><img src="img/img-reg-log/sg.png" /></li>
        <li><img src="img/img-reg-log/face.png" /></li>
        <li><img src="img/img-reg-log/keyboard.png" /></li>
        <li><img src="img/img-reg-log/zoom1.png" /></li>
        <li><img src="img/img-reg-log/down1.png" /></li>
      </ul>
      <!--按键-->
      <div class="key">
        <div class="key-left">
          <ul>
            <li>%</li>
            <li>-</li>
            <li>+</li>
            <li>*</li>
          </ul>
          <p>符</p>
        </div>
        <!--中间数字键-->
        <div class="key-mid">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>返回</li>
            <li>0</li>
            <li><img src="img/img-reg-log/nbsp1.png" /></li>
          </ul>
        </div>
        <div class="key-right">
          <ul>
            <li><img src="img/img-reg-log/delete.png" /></li>
            <li>.</li>
            <li>@</li>
            <li>换行</li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { validatePhoneNum } from '../../utils/validate'
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  components: {},
  data () {
    return {
      isCur: 0,
      checkbox: {
        icon: ['img/img-reg-log/checkbox.png', 'img/img-reg-log/checked.png'],
        checked: false
      },
      input: {
        placeholder: '请输入您的手机号'
      },
      phoneNum: '18049459500',
      regBtn: {
        style: { backgroundColor: '#f8db97' },
        value: '同意并注册'
      },
      tips: '验证短信已经发送到',
      step: {
        value: ['1.输入手机号', '2.输入验证码', '3.设置密码']
      }
    }
  },
  computed: {
    ...mapGetters([
      'storePhoneNum'
    ]),
    codePhoneNum () {
      const phoneNum = this.storePhoneNum.substr(3, 4)
      return this.storePhoneNum.replace(phoneNum, '****')
    }
  },
  methods: {
    back () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/login')
    },
    checkBox (e) {
      if (this.checkbox.checked === false) {
        e.target.src = this.checkbox.icon[1]
        if (validatePhoneNum(this.phoneNum)) {
          this.regBtn.style.backgroundColor = '#ffbf2f'
        }
        this.checkbox.checked = true
      } else {
        e.target.src = this.checkbox.icon[0]
        this.regBtn.style.backgroundColor = '#f8db97'
        this.checkbox.checked = false
      }
    },
    validatePhone (e) {
      if (validatePhoneNum(this.phoneNum) && this.checkbox.checked === true) {
        console.log('手机号合法, 已勾选')
        this.regBtn.style.backgroundColor = '#ffbf2f'
      } else if (this.checkbox.checked === false) {
        console.log('请勾选阅读条款')
        this.regBtn.style.backgroundColor = '#f8db97'
      } else if (!validatePhoneNum(this.phoneNum)) {
        console.log('手机号不合法')
        this.regBtn.style.backgroundColor = '#f8db97'
      }
    },
    submitPhone (phoneNum) {
      if (this.regBtn.style.backgroundColor === '#ffbf2f') {
        this.isCur = 1
        this.phoneNum = ''
        this.regBtn.value = '提交验证码'
        this.input.placeholder = '请输入短信中的验证码'
        this.$store.commit('SAVEPHONE', phoneNum)
      }
    }
  },
  created () {
    console.log(this.storePhoneNum)
  },
  mounted () {
  },
  updated () {
  }
}
</script>

<style lang="scss" scoped>
  .container {
    /*font-size: 31.25vw;*/
    background: white;
  }
  /*header*/
  header{
    background: #f0efed;
    padding: .15rem 0rem;
    border-bottom: 1px solid #cccccc;
    .hd{
      display: flex;
      img{
        width: .12rem;
        height: .2rem;
        margin-left: .19rem;
        //margin-right: 1.13rem;
      }
      P{
        font-size: .2rem;
        line-height: .2rem;
        margin-left:  38%;
      }
    }
  }
  /*section*/
  section{
    background: #f0efed;
    /*注册步骤*/
    .regord{
      background: white;
      border-top:  1px solid #ffb81d;
      border-bottom:   1px solid #ffb81d;
      display: flex;
      justify-content: space-between;
      padding: .15rem .08rem;
      margin-bottom: .1rem;
      li{
        .curStep{
          color: #fdb926;
        }
        span{
          display: flex;
          color: #666666;
          font-size: .14rem;
          align-items: center;
          img{
            margin-left: .12rem;
            width: .07rem;
            height: .12rem;
          }
        }
      }
      /*li:nth-of-type(1){*/
        /*a{*/
          /*color: #fdb926;*/
        /*}*/
      /*}*/

    }
    /*电话号码*/
    .phone{
      background: white;
      //margin-bottom: .1rem;
      input{
        //color: #000;
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        padding: .15rem 0 .15rem .12rem;
        font-size: .13rem;
        border-top:  1px solid #ffb81d;
        border-bottom:   1px solid #ffb81d;
      }
      input::-webkit-input-placeholder{
        font-size: .14rem;
        color: #c7c7cd;
      }
    }
    /*同意并注册*/
    .read{
      padding: .12rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      div:nth-of-type(1){
        display: flex;
        img{
          width: .16rem;
          height: .16rem;
          margin-right: .07rem;
        }
        p{
          font-size: .14rem;
          color: #999;
          line-height: .19rem;
          span{
            color: #fdb926;
            text-decoration: underline;
          }
        }

      }
      div:nth-of-type(2){
        margin-top: .1rem;
        display: flex;
        padding: .04rem 0rem;
        .reg-phone{
          background: #fec339;
          color: #483709;
        }
        input{
          font-size: .15rem;
          width: 100%;
          padding:.13rem 0rem;
          background: #f8db97;
          color: #fffdfa;
          font-weight: bold;
        }
      }
    }
  }
  /*输入法框*/
  aside{
    /*输入法导航*/
    width: 100%;
    position: fixed;
    bottom: 0;
    .nav{
      padding: .07rem 0rem;
      border-top: 1px solid #acaaae;
      border-bottom:  1px solid #acaaae;
      display: flex;
      justify-content: space-between;
      li{
        width: 20%;
        display: flex;
        justify-content: center;
        img{
          //width: .28rem;
          height: .28rem;
        }
      }
      li:last-of-type{
        border-left: 1px solid #acaaae;
      }
    }
    /*按键*/
    .key{
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: .07rem .04rem;
      padding-bottom: .02rem;
      background: #d6d8dc;
      width: 100%;
      display: flex;
      justify-content: space-between;
      /*符号*/
      .key-left{
        margin-right: .08rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: .48rem;
        //height: 2.06rem;

        ul{
          background: #bcbec4;
          //-webkit-box-sizing: border-box;
          //-moz-box-sizing: border-box;
          //box-sizing: border-box;
          padding-left: .04rem;
          padding-right: .04rem;

          padding-bottom: .07rem;
          border-radius: .05rem;
          width: .48rem;
          //height: 2.06rem;
          height: 1.57rem;
          li{
            border-bottom: 1px solid #686b73;
            background: #bcbec4;
            height: 25%;
            display: flex;
            line-height: 20%;
            align-items: center;
            justify-content: center;
            font-size: .16rem;
          }
          li:nth-of-type(4){
            border-bottom: 0;
          }

        }
        p{

          padding-left: .04rem;
          padding-right: .04rem;
          background: #bcbec4;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: .05rem;
          border-radius: .05rem;
          width: .48rem;
          //height: .43rem;
          height: .52rem;
          font-size: .16rem;
          border-bottom: 0;
        }
      }
      .key-mid{

        //padding-bottom: .07rem;
        //margin-left: .05rem;
        ul{

          height: 2.2rem;
          //width: 2.13rem;
          width: 2.4rem;
          flex-wrap: wrap;
          display: flex;
          justify-content: space-between;
          li{
            margin-top: .06rem;
            //margin-bottom: .05rem;
            //margin-right: .05rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: .22rem;
            //width: .67rem;
            width: .76rem;
            height: .5rem;
            background: white;
            border-radius: .05rem;
            img{
              width: .3rem;
              height: .05rem;
            }
          }
          li:nth-of-type(1),li:nth-of-type(2),li:nth-of-type(3){
            margin-top: 0rem;
          }
          li:last-of-type{
            align-items: flex-end;
            img{
              margin-bottom: .14rem;
            }
          }
          li:nth-of-type(10){
            background: #ff672e;
            color: #fff;
          }
        }
      }
      .key-right{
        //width: .48rem;
        //display: flex;
        align-items: flex-end;
        li{
          padding-left: .04rem;
          padding-right: .04rem;
          background: #bcbec4;
          //background: red;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: .05rem;
          border-radius: .05rem;
          width: .48rem;
          //height: .43rem;
          height: .52rem;
          font-size: .16rem;
          border-bottom: 0;
        }
        li:nth-of-type(1){
          margin-top: .0em;
          img{
            width: .24rem;
            height: .18rem;
          }
        }
      }
    }
  }
  .tips{
    color: #6c6c6c;
    text-align: center;
    margin-bottom: .1rem;
    font-size: .14rem;
  }
</style>
