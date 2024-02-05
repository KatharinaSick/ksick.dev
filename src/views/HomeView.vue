<script lang="ts" setup>
import Socials from '@/components/SocialIcons.vue'
</script>

<template>
  <div class="container">
    <img alt="Katharina Sick" class="smallImage" src="/me-small.webp" />

    <div class="contentContainer">
      <h1 class="title">Hello 👋<br />I'm <span class="gradient">Katharina</span></h1>

      <p>
        I'm all about making things <strong class="purple">user-friendly</strong>, especially when
        it comes to <strong>Cloud Native and Kubernetes</strong>. <br /><br />
        I've done a fair share of mobile app and backend work, but lately, I'm really into
        <strong class="blue">Cloud Native computing</strong>. <br /><br />
        Outside of work, you'll find me hanging out in <strong>tech and sports </strong>
        <strong class="green">communities</strong>, cruising on inline skates, exploring new places,
        or challenging myself with quizzes and games.
      </p>

      <Socials />
    </div>
    <img alt="Katharina Sick" class="bigImage" src="/me.webp" />
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

  margin: 5% 0 5% 5%;
}

.smallImage {
  display: none;

  width: var(--image-size);
  height: var(--image-size);
  object-fit: cover;

  border-radius: 50%;
}

.bigImage {
  height: 100vh;
}

.title {
  display: inline-block;
  margin: 0;
  padding: 0;

  width: -moz-fit-content;
  width: fit-content;
}

@media (max-width: 1250px) {
  .container {
    display: flex;

    width: calc(100% - 64px);
    height: calc(100% - 64px);

    flex-direction: column;
    align-items: center;

    padding: 32px;
    gap: 32px;
  }

  .smallImage {
    display: block;
  }

  .bigImage {
    display: none;
  }

  .contentContainer {
    margin: 0;
    gap: 32px;
  }

  .title {
    margin: auto;
  }
}
</style>
