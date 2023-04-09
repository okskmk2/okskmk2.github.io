<template>
  <div id="app">
    <header>
      <div class="header-inner">
        <div class="brand">
          <img src="../assets/favicon_v2.png" alt="logo" class="logo" />
          <span class="brand-text">이은성 프로필</span>
        </div>
        <div class="menu">
          <div class="unb">
          </div>
        </div>
      </div>
    </header>
    <router-view class="container" />
    <footer>

    </footer>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      modalOpen: false
    };
  },

};
</script>