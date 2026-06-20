<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useTalks } from '../composables/useTalks'
import { useAdventures } from '../composables/useAdventures'
import { usePosts } from '../composables/usePosts'
import TalkCard from './TalkCard.vue'
import AdventureCard from './AdventureCard.vue'
import ContentCard from './ContentCard.vue'

const { upcoming, recent, loading, error } = useTalks()
const { adventures, loading: adventuresLoading, error: adventuresError } = useAdventures()
const { posts, loading: postsLoading, error: postsError } = usePosts()

type Tab = 'talks' | 'observation-deck' | 'offon' | 'blog'
const activeTab = ref<Tab>('talks')

const tabs: { id: Tab; label: string; color: string }[] = [
  { id: 'talks',            label: 'talks',                  color: 'var(--c-teal)'   },
  { id: 'offon',            label: 'open source challenges',  color: 'var(--c-amber)'  },
  { id: 'observation-deck', label: 'observation deck',        color: 'var(--c-purple)' },
  { id: 'blog',             label: 'blog',                   color: 'var(--c-green)'  },
]

const activeColor = computed(() => tabs.find(t => t.id === activeTab.value)?.color ?? 'var(--c-teal)')

function updateSelectionColor(color: string) {
  document.documentElement.style.setProperty('--selection-color', color)
}

onMounted(() => updateSelectionColor(activeColor.value))
watch(activeColor, updateSelectionColor)

const TOTAL_LIMIT = 5
const showAll = ref(false)
const visibleRecent = computed(() => {
  if (showAll.value) return recent.value
  const remaining = Math.max(0, TOTAL_LIMIT - upcoming.value.length)
  return recent.value.slice(0, remaining)
})
const totalTalks = computed(() => upcoming.value.length + recent.value.length)
const hasMore = computed(() => !showAll.value && totalTalks.value > TOTAL_LIMIT)

const ADVENTURE_LIMIT = 5
const showAllAdventures = ref(false)
const visibleAdventures = computed(() => showAllAdventures.value ? adventures.value : adventures.value.slice(0, ADVENTURE_LIMIT))

const POST_LIMIT = 5
const showAllPosts = ref(false)
const visiblePosts = computed(() => showAllPosts.value ? posts.value : posts.value.slice(0, POST_LIMIT))

const expandedKey = ref<string | null>(null)

function formatPostDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}
</script>

<template>
  <section id="content" class="section section--wide">
    <p class="section-label" style="color: var(--c-teal)">content</p>
    <h2 class="section-title">Talks, episodes &amp; adventures</h2>
    <p class="section-subtitle">Things I make, say, and ship in the open.</p>

    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ 'tab--active': activeTab === tab.id }"
        :style="activeTab === tab.id ? { color: tab.color, borderBottomColor: tab.color } : {}"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tab-content" :style="{ '--tab-accent': activeColor }">

      <!-- TALKS -->
      <template v-if="activeTab === 'talks'">
        <div v-if="loading" class="status">fetching talks...</div>
        <div v-else-if="error" class="status status--error">
          Couldn't load talks.
          <a href="https://github.com/KatharinaSick/PresentationMaterials/blob/main/events.yaml" target="_blank" rel="noopener">See them on GitHub.</a>
        </div>
        <template v-else>
          <div v-if="upcoming.length" class="talks-group">
            <p class="group-label">// upcoming</p>
            <TalkCard v-for="talk in upcoming" :key="talk.title + talk.date" :talk="talk" upcoming :expandedKey="expandedKey" @expand="expandedKey = $event" />
          </div>
          <div class="talks-group">
            <p class="group-label">// recent</p>
            <TalkCard v-for="talk in visibleRecent" :key="talk.title + talk.date" :talk="talk" :expandedKey="expandedKey" @expand="expandedKey = $event" />
            <button v-if="hasMore" class="show-more" @click="showAll = true">
              show all {{ totalTalks }} talks
            </button>
          </div>
        </template>
      </template>

      <!-- OPEN SOURCE CHALLENGES -->
      <template v-if="activeTab === 'offon'">
        <p class="tab-desc">Hands-on adventures through real open source tools. Each challenge has three difficulty levels, so pick yours and start playing.</p>
        <div v-if="adventuresLoading" class="status">fetching adventures...</div>
        <div v-else-if="adventuresError" class="status status--error">
          Couldn't load adventures.
          <a href="https://offon.dev" target="_blank" rel="noopener">Browse on offon.dev.</a>
        </div>
        <div v-else>
          <AdventureCard v-for="adventure in visibleAdventures" :key="adventure.id" :adventure="adventure" />
          <button v-if="!showAllAdventures && adventures.length > ADVENTURE_LIMIT" class="show-more" @click="showAllAdventures = true">
            show all {{ adventures.length }} challenges
          </button>
        </div>
      </template>

      <!-- OBSERVATION DECK -->
      <template v-if="activeTab === 'observation-deck'">
        <p class="tab-desc">A monthly show co-hosted with <a href="https://github.com/avillela" target="_blank" rel="noopener">Adriana Villela</a>. Interviews, deep dives, and honest conversations about Cloud Native.</p>
        <ContentCard
          href="https://www.youtube.com/watch?v=vnii6zvfvO4"
          title="Deep Dive into OSS Community Management with Reese Lee"
          cta="watch →"
          :tags="['OpenTelemetry', 'Community Management']"
        >
          <template #meta>
            <span class="meta-text">Jun 16, 2026</span>
            <span class="meta-sep">·</span>
            <span class="meta-text">episode 1</span>
          </template>
        </ContentCard>
      </template>

      <!-- BLOG -->
      <template v-if="activeTab === 'blog'">
        <p class="tab-desc">Mostly older posts on Medium, but a few are still worth a read.</p>
        <div v-if="postsLoading" class="status">fetching posts...</div>
        <div v-else-if="postsError" class="status status--error">
          Couldn't load posts.
          <a href="https://medium.com/@ksick" target="_blank" rel="noopener">Browse on Medium.</a>
        </div>
        <template v-else>
          <ContentCard
            v-for="post in visiblePosts"
            :key="post.url"
            :href="post.url"
            :title="post.title"
            cta="read →"
            :tags="post.categories"
          >
            <template #meta>
              <span class="meta-text">{{ formatPostDate(post.date) }}</span>
            </template>
          </ContentCard>
          <button v-if="!showAllPosts && posts.length > POST_LIMIT" class="show-more" @click="showAllPosts = true">
            show all {{ posts.length }} posts
          </button>
        </template>
      </template>

    </div>
  </section>
</template>

<style scoped>
.tabs {
  display: flex;
  gap: 0;
  margin: 40px 0 0;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
}

.tab {
  padding: 10px 18px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  margin-bottom: -1px;
}

.tab:hover {
  color: var(--text);
}

.tab-content {
  padding-top: 4px;
}

.tab-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  padding: 20px 0 4px;
}

.tab-desc a {
  color: var(--text);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.talks-group {
  margin-bottom: 48px;
}

.group-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  padding: 20px 0 4px;
}

.status {
  padding: 32px 0;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-muted);
}

.status--error { color: #f87171; }

.show-more {
  margin-top: 16px;
  padding: 10px 20px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.15s;
}

.show-more:hover {
  color: var(--text);
  border-color: var(--text-muted);
}

.meta-text {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--tab-accent, var(--accent));
}

.meta-sep {
  color: var(--border);
  font-size: 12px;
}
</style>
