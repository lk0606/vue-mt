<template>
  <div class="ban">
    <swiper v-if="ready" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" alt=""/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import { getBanner } from '@/api/index'
export default {
  name: 'Banner',
  components: {
    // swiper,
    // swiperSlide
  },
  data () {
    return {
      // required, use to ensure init done
      ready: false,
      swiperOption: {
        // load do something
        // notNextTick: true,
        // 修改swiper的子元素时，自动初始化swiper
        observer: true,
        // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observeParents: true,
        // slider num
        slidesPerView: 1,
        // slider space
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
          //  user-defined
          // bulletClass: 'bullet-class',
          // bulletActiveClass: 'bullet-active-class'
        }
      },
      swiperSlides: []
    }
  },
  computed: {
    // swiper () {
    //   return this.$refs.mySwiper.swiper
    // }
  },
  methods: {
    getBanner () {
      getBanner().then(
        res => {
          this.swiperSlides = res.data
          // console.login(this.swiperSlides)
          this.ready = true
        }
      )
    }
  },
  mounted () {
    this.getBanner()
  }
}
</script>

<style lang="scss" >
  .ban{
    height: .9rem;
    width: 3.55rem;
    position: relative;
    img{
      height: .9rem;
      width: 3.55rem;
    }
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
      bottom: -0.2rem;
    }
  }

</style>
