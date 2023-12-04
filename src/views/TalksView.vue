<script lang="ts" setup>
import Socials from '@/components/SocialIcons.vue'
import Talk from '@/components/Talk.vue'
import { Octokit } from '@octokit/core'
import { onBeforeMount, ref } from 'vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import * as process from 'process'
import matter from "gray-matter";

const talks = ref([])

const octokit = new Octokit({
  auth: process.env.VUE_APP_GITHUB_API_KEY
})

const getTalks = async () => {
  const owner = 'KatharinaSick'
  const repo = 'PresentationMaterials'
  const tree = 'main'

  const readmes = (
    await octokit.request(`GET /repos/${owner}/${repo}/git/trees/${tree}`, {
      owner,
      repo,
      tree_sha: tree,
      recursive: true,
      headers: { 'X-GitHub-Api-Version': '2022-11-28' }
    })
  ).data.tree.filter((i) => i.path.endsWith('README.md'))

  const matters = Promise.all(
    readmes.map(async (readme) => {
      const base64 = (
        await octokit.request(`GET /repos/${owner}/${repo}/git/blobs/${readme.sha}`, {
          owner,
          repo,
          file_sha: readme.sha,
          headers: { 'X-GitHub-Api-Version': '2022-11-28' }
        })
      ).data.content
      return matter(atob(base64))
    })
  )

  const response = (await matters)
    .filter((matter) => Object.keys(matter.data).length > 0)
    .map((matter) => matter.data)
    .sort((a, b) => new Date(b.event.date) - new Date(a.event.date))
  talks.value.push(...response)
}

onBeforeMount(() => {
  getTalks()
})
</script>

<template>
  <div class="container">
    <div class="contentContainer">
      <h1 class="title">Talks 🎙️</h1>
      <div class="talksContainer">
        <LoadingSpinner v-if="talks.length < 1" />

        <Talk
          v-for="talk in talks"
          :title="talk.title"
          :abstract="talk.summary"
          :thumbnail="talk.images.thumbnail"
          :event-name="talk.event.name"
          :event-date="talk.event.date"
          :event-logo="talk.event.logo"
        />
      </div>

      <p class="detailsText">
        For more details see
        <a href="https://github.com/katharinasick/presentationMaterials/"
          >github.com/KatharinaSick/PresentationMaterials</a
        >
      </p>

      <Socials />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;

  display: flex;
  flex-direction: row;

  margin: 0;
}

.contentContainer {
  padding: 128px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
}

.talksContainer {
  display: flex;
  flex-direction: row;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  margin: 64px 0;
}

.title {
  display: inline-block;
  margin: 0;
  padding: 0;

  width: -moz-fit-content;
  width: fit-content;
}

.detailsText {
  font-size: 1.2em;
  margin-bottom: 64px;
}

@media (max-width: 1250px) {
  .contentContainer {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
