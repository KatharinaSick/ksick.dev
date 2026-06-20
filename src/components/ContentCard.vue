<script setup lang="ts">
withDefaults(defineProps<{
  href?: string
  title: string
  cta?: string
  tags?: string[]
  expandable?: boolean
  expanded?: boolean
}>(), {
  expandable: false,
  expanded: false,
})

const emit = defineEmits<{ toggle: [] }>()
</script>

<template>
  <article class="card">
    <component
      :is="href ? 'a' : 'button'"
      class="card__inner"
      v-bind="href
        ? { href, target: '_blank', rel: 'noopener' }
        : { 'aria-expanded': String(expanded) }"
      @click="href ? undefined : emit('toggle')"
    >
      <div class="card__meta">
        <slot name="meta" />
      </div>
      <div class="card__row">
        <h3 class="card__title">{{ title }}</h3>
        <span class="card__cta">{{ expandable ? (expanded ? '−' : '+') : cta }}</span>
      </div>
      <div v-if="tags?.length" class="card__tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </component>
    <div v-if="expanded" class="card__body">
      <slot />
    </div>
  </article>
</template>

<style scoped>
.card {
  border-bottom: 1px solid var(--border);
}

.card__inner {
  display: block;
  width: 100%;
  padding: 20px 0;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  font-family: inherit;
  text-decoration: none;
}

.card__inner:hover .card__title,
.card__inner:hover :deep(.card__title) {
  color: var(--tab-accent, var(--accent));
}

.card__inner:hover {
  text-decoration: none;
}

.card__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.card__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}

.card__title {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  line-height: 1.45;
  transition: color 0.15s;
}

.card__cta {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--tab-accent, var(--accent));
  flex-shrink: 0;
  line-height: 1;
}

.card__tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 2px 7px;
}

.card__body {
  padding: 0 0 20px;
}
</style>
