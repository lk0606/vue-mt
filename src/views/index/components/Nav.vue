<template>
  <nav>
    <div class="nav">
      <swiper v-if="ready" :options="swiperOption">
        <swiper-slide v-for="(slide, index) in navData[0]['nav']" :key="index">
          <ul>
            <li v-for="(item, idx) in slide.list" :key="idx">
              <a href="javascript:void(0);">
                <img :src="item" />
                <span>{{ idx }}</span>
              </a>
            </li>
          </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    navData: {
      type: Array
    }
  },
  data () {
    return {
      ready: false,
      swiperOption: {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  created () {
  },
  watch: {
    navData: {
      handler (val, oldVal) {
        if (val.length > 0) {
          console.log(val, 'val')
          this.ready = true
        } else {
          this.ready = false
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" >
  // 导航栏
  nav{
    overflow: hidden;
    .swiper-pagination .swiper-pagination-bullet{
      width: .04rem;
      height: .04rem;
      border-radius: 1px;
      background:  no-repeat #e4e4e4 ;
    }
    .swiper-pagination .swiper-pagination-bullet-active{
      border-radius: 1px;
      width: .06rem;
      height: .04rem;
      background:  no-repeat #ffd161;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets {
      bottom: -0.24rem;
    }
  }
  nav ul{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: .1rem;
  }
  nav ul li{
    width: 20%;
    /*padding:0 .05rem;*/
    /*margin-right: .17rem;*/
    flex-shrink: 1;
    // flex: 1;
  }
  nav ul li:nth-of-type(5),nav ul li:nth-of-type(10){
    margin-right: 0rem;
  }
  nav ul li a{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: .15rem;
  }
  nav ul li a img{
    width: .44rem;height: .44rem;
  }
  nav ul li a span{
    margin-top: .07rem;
    // margin-bottom: .02rem;
    font-size: .12rem;color: black;
  }
</style>
