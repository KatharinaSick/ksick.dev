<template>
  <div class="socialsContainer">
    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/in/katharinasick" target="_blank">
      <svg class="icon" height="48px" viewBox="0 0 256 256" width="48px" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"/>
      </svg>
    </a>
    <!-- GitHub -->
    <a href="https://github.com/KatharinaSick" target="_blank">
      <IconGithub class="icon"/>
    </a>
    <!-- StackOverflow -->
    <a href="https://stackoverflow.com/users/5052976/katharina" target="_blank">
      <svg class="icon" viewBox="0 0 256 304" xmlns="http://www.w3.org/2000/svg">
        <path d="M216.33 276.188v-81.211h26.953v108.165H0V194.977h26.954v81.211z"/>
        <path
            d="m56.708 187.276l132.318 27.654l5.6-26.604L62.31 160.672l-5.601 26.604Zm17.502-63.009l122.517 57.058l11.202-24.503L85.412 99.414L74.21 124.267Zm33.955-60.208l103.964 86.462l17.152-20.653l-103.964-86.462l-17.152 20.653ZM175.375 0L153.67 16.102l80.511 108.515l21.703-16.102L175.375 0ZM53.906 248.884h135.119V221.93H53.907v26.954Z"/>
      </svg>
    </a>
  </div>
</template>

<style scoped>
.socialsContainer {
  display: flex;
  flex-direction: row;
  gap: 48px;
  width: 100%;
  justify-content: center;
}

.icon {
  width: var(--icon-size);
  height: var(--icon-size);
  fill: var(--color-placeholder);
}

.icon:hover {
  fill: var(--color-text);

}
</style>
<script setup>
import IconGithub from "@/components/icons/IconGithub.vue";
</script>