<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="row rest">
          <div>
            <div class="brand">
              <img src="../assets/favicon_v2.png" alt="baeun_logo" width="40px" />
              {{$t('brand')}}
            </div>
            <div class="brand_sub">{{$t('brand_sub')}}</div>
          </div>
          <div class="only-mobile row ai-center rest jc-end">
            <a data-target="gnb" class="pointer">Menu</a>
          </div>
        </div>
        <div class="row-col ai-center hide-mobile" id="gnb">
          <globalMenu class='row-col'></globalMenu>
          <nav class="user-nav">
            <i18nChange></i18nChange>
          </nav>
        </div>
      </div>
    </header>
    <router-view class="container" />
    <footer>
      <div class="container">
        <i class="fa fa-facebook-official fa-fw" aria-hidden="true"></i>
        <i class="fa fa-instagram fa-fw" aria-hidden="true"></i>
      </div>
    </footer>
  </div>
</template>

<i18n>
ko:
  brand: 바은
  brand_sub: 소프트웨어 개발사
en:
  brand: Baeun
  brand_sub: Software Company
</i18n>

<script>
import i18nChange from "../components/i18n-change";
import globalMenu from "../components/global-menu";

export default {
  name: "app",
  data() {
    return {
      modalOpen: false
    };
  },
  components: { i18nChange, globalMenu },
  mounted() {
    let gnbCaller = document.querySelector("[data-target]");
    gnbCaller.addEventListener("click", function() {
      let gnb = gnbCaller.getAttribute("data-target");
      document.getElementById(gnb).classList.toggle("hide-mobile");
    });
  }
};
</script>