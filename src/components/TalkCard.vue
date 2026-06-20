<script setup lang="ts">
import { computed } from 'vue'
import type { Talk } from '../types'
import ContentCard from './ContentCard.vue'

const props = defineProps<{ talk: Talk; upcoming?: boolean; expandedKey: string | null }>()
const emit = defineEmits<{ expand: [key: string | null] }>()

const key = computed(() => props.talk.title + props.talk.date)
const expanded = computed(() => props.expandedKey === key.value)

function toggle() {
  emit('expand', expanded.value ? null : key.value)
}

function formatDate(raw: string) {
  const [y, m, d] = raw.replace(/\//g, '-').split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
</script>

<template>
  <ContentCard
    :title="talk.title"
    :tags="talk.tags"
    :expanded="expanded"
    expandable
    @toggle="toggle"
  >
    <template #meta>
      <time class="date">{{ formatDate(talk.date) }}</time>
      <span class="sep">·</span>
      <a v-if="talk.event.url" :href="talk.event.url" target="_blank" rel="noopener" class="event" @click.stop>{{ talk.event.name }}</a>
      <span v-else class="event event--plain">{{ talk.event.name }}</span>
      <template v-if="talk.coSpeaker">
        <span class="sep">·</span>
        <span class="cospeaker">
          w/
          <a v-if="talk.coSpeaker.url" :href="talk.coSpeaker.url" target="_blank" rel="noopener" @click.stop>{{ talk.coSpeaker.name }}</a>
          <span v-else>{{ talk.coSpeaker.name }}</span>
        </span>
      </template>
    </template>

    <p v-if="talk.abstract" class="abstract">{{ talk.abstract }}</p>
    <div class="links">
      <a v-if="talk.slides?.url" :href="talk.slides.url" target="_blank" rel="noopener" class="link">slides →</a>
      <a v-if="talk.recording" :href="talk.recording" target="_blank" rel="noopener" class="link">recording →</a>
    </div>
  </ContentCard>
</template>

<style scoped>
.date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
}

.sep {
  color: var(--border);
  font-size: 12px;
}

.event {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--tab-accent, var(--accent));
}

a.event:hover {
  text-decoration: underline;
  opacity: 0.8;
}

.event--plain {
  color: var(--text-muted);
}

.cospeaker {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
}

.cospeaker a {
  color: var(--text-muted);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.abstract {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.75;
  white-space: pre-line;
  margin-bottom: 16px;
}

.links {
  display: flex;
  gap: 16px;
}

.link {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--tab-accent, var(--accent));
  text-decoration: none;
  transition: opacity 0.15s;
}

.link:hover {
  opacity: 0.8;
  text-decoration: underline;
}
</style>
