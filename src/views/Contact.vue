<i18n>
  en: 
    title: Request
    q1: Which platform do you want?
    q2: What is the purpose?
    web: Web
    android_mobile: Android
    linux: Linux
    Next: Next
  ko: 
    title: 의뢰하기
    q1: 어떤 플랫폼을 원하세요?
    q2: 용도가 뭔가요?
    web: 웹
    android_mobile: 안드로이드
    linux: 리눅스
    Next: 다음
</i18n>

<template>
  <div>
    <h1>{{ $t('title') }}</h1>
    <section>
      <div class="stepper">
        <span class="tag">1</span>
        <span class="tag">2</span>
        <span class="tag">3</span>
      </div>
      <div class="question">{{ $t('q1') }}</div>
      <div class="answer">
        <label for="web">
          {{ $t('web') }}
          <input type="checkbox" id="web" />
        </label>
        <br />
        <label for="android_mobile">
          {{ $t('android_mobile') }}
          <input type="checkbox" id="android_mobile" />
        </label>
        <br />
        <label for="linux">
          {{ $t('linux') }}
          <input type="checkbox" id="linux" />
        </label>
      </div>
      <div class="question">{{ $t('q2') }}</div>
      <div class="answer">
        <input type="text" maxlength="300" class="a2" />
      </div>
      <div class="row jc-end">
        <button>{{ $t('Next') }}</button>
      </div>
    </section>
  </div>
</template>
<style scoped>
section {
  padding: 3rem;
  border-radius: 5px;
  background-color: #fefeff;
  box-shadow: 1px 1px 2px 1px #bbb;
  margin-top: 2rem;
}
.question {
  font-size: 1.5rem;
}
.answer {
  margin: 1rem 1rem 2rem;
  line-height: 2;
}
.a2 {
  margin-top: 2rem;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
}

button {
  font-size: 20px;
  padding: 4px 12px;
  color: #333;
}

.stepper{
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}

.tag {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #0089f4;
  color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

@media screen and (max-width: 650px) {
  section {
    padding: 1rem;
  }
}
</style>

