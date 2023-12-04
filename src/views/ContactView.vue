<script lang="ts" setup>
import Socials from '@/components/SocialIcons.vue'
</script>

<template>
  <div class="container">
    <div class="contentContainer">
      <h1 class="title">Let's get in touch 🤝</h1>

      <p>
        Are you passionate about technology, Cloud Native, or Kubernetes? I am too! Let's
        <a href="https://www.linkedin.com/in/katharinasick" target="_blank" class="purple"
          >connect on LinkedIn</a
        >
        and have a chat to exchange ideas and insights.
        <br /><br />
        I really enjoy meeting fellow enthusiasts in the digital space. Feel free to reach out for
        any tech-related chat or just to
        <a href="https://www.linkedin.com/in/katharinasick" target="_blank" class="blue"
          >say hello</a
        >. <br /><br />
        You'll probably also find me on quite a few <strong class="green">meetups</strong> in Linz
        and Vienna. The one, I visit most frequently is the
        <a href="https://community.cncf.io/linz/" target="_blank">Cloud Native Linz meetup</a>.
        <br />
        Visit my <a href="/talks">Talks</a> page to find out about any past and future talks of
        mine.
      </p>

      <Socials />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
}

.contentContainer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  margin: 10% 20%;
}

.title {
  display: inline-block;
  margin: 0;
  padding: 0;

  width: -moz-fit-content;
  width: fit-content;
}
</style>
