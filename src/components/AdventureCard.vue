<script setup lang="ts">
import type { Adventure } from '../composables/useAdventures'
import ContentCard from './ContentCard.vue'

defineProps<{ adventure: Adventure }>()

function formatMonth(month: string) {
  return month.replace(/\b\w+/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
}
</script>

<template>
  <ContentCard
    :href="`https://offon.dev/adventures/${adventure.id}`"
    :title="adventure.title"
    :tags="adventure.tags"
    cta="start →"
  >
    <template #meta>
      <span class="month">{{ formatMonth(adventure.month) }}</span>
      <span class="sep">·</span>
      <span class="levels">
        <span v-for="(level, i) in adventure.levels" :key="level.id">
          <span v-if="i > 0" class="sep"> / </span>{{ level.difficulty }}
        </span>
      </span>
    </template>
  </ContentCard>
</template>

<style scoped>
.month,
.levels {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--tab-accent, var(--c-amber));
}

.sep {
  color: var(--border);
  font-size: 12px;
}
</style>
