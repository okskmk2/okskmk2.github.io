<i18n>
  en: 
    title: Blog
  ko: 
    title: 블로그
  ja: 
    title: こんにちは、世界！
  zh: 
    title: 你好、世界！
</i18n>

<template>
  <div>
    <h1>{{ $t('title') }}</h1>
  </div>
</template>

<script>
export default {
  name: "Blog",
  mounted() {
    const client_id = "79e1d0afdb7e5967642136a3ed317064";
    const redirect_uri = "https://okskmk2.github.io";
    const tistory_request_url = `https://www.tistory.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token`;
    this.axios.get(tistory_request_url).then(({data})=>{
      console.log(data);
    })
  }
};
</script>

