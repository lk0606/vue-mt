<template>
  <nav>
    <div class="nav">
      <swiper v-if="ready" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <ul>
            <li>
              <a href="javascript:void(0);">
                <img src="img/img-index/nav1.png" />
                <span>美食</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="img/img-index/nav2.png" />
                <span>美团超市</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="img/img-index/nav3.png" />
                <span>生鲜果蔬</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="img/img-index/nav4.png" />
                <span>美团专送</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="img/img-index/nav5.png" />
                <span>跑腿代购</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="img/img-index/nav6.png" />
                <span>下午茶</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="img/img-index/nav7.png" />
                <span>汉堡披萨</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="img/img-index/nav8.png" />
                <span>鸭脖卤味</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="img/img-index/nav9.png" />
                <span>炸鸡零食</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src="img/img-index/nav10.png" />
                <span>日韩料理</span>
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
  name: 'Nav'
}
</script>

<style lang="scss" >
  // 导航栏
  nav{
    overflow: hidden;
  }
  nav ul{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: .1rem;
  }
  nav ul li{
    padding:0 .05rem;
    margin-right: .17rem;
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
