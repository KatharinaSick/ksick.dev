<script setup>
const props = defineProps({
  title: String,
  abstract: String,
  thumbnail: String,
  eventName: String,
  eventDate: String,
  eventLogo: String
})
</script>

<template>
  <div class="card">
    <img alt="Picture of me speaking at KCD Denmark" class="speakerImage" :src="thumbnail" />
    <div class="content">
      <h1 class="title">{{ title }}</h1>
      <p class="abstract">{{ abstract }}</p>
      <div class="eventContainer">
        <img alt="Event Logo" class="eventLogo" :src="eventLogo" />
        <div>
          <h1 class="eventName">{{ eventName }}</h1>
          <p class="eventDate">{{ eventDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  box-shadow: var(--shadow);
  border-radius: 24px;
  transition: transform 0.2s;
}

.card:hover {
  //transform: scale(1.02);
  //box-shadow: var(--blue-shadow);
  //cursor: pointer;
}

.speakerImage {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 24px;
}

.content {
  text-align: start;
  padding: 12px 24px;
}

.title {
  font-size: 1.25em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.abstract {
  font-size: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: var(--color-placeholder);
}

.eventContainer {
  margin-top: 32px;
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 12px;
}

.eventLogo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 12px;
  background: white;
  border: 2px solid white;
}

.eventName {
  font-size: 1em;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.eventDate {
  font-size: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-placeholder);
  margin: 4px 0 0 0;
  padding: 0;
}
</style>
