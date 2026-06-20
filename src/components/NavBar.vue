<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const activeSection = ref<string>('')

function onScroll() {
  scrolled.value = window.scrollY > 20
}

let observer: IntersectionObserver

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    { threshold: 0.3 }
  )

  for (const id of ['content', 'community', 'contact']) {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>

<template>
  <nav :class="['navbar', { 'navbar--scrolled': scrolled }]">
    <div class="navbar__inner">
      <a href="#top" class="navbar__name">ksick.dev</a>
      <div class="navbar__links">
        <a href="#content"   class="link--content"   :class="{ active: activeSection === 'content' }">content</a>
        <a href="#community" class="link--community" :class="{ active: activeSection === 'community' }">community</a>
        <a href="#contact"   class="link--contact"   :class="{ active: activeSection === 'contact' }">contact</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  transition: background 0.2s, box-shadow 0.2s;
}

.navbar--scrolled {
  background: rgba(11, 13, 18, 0.88);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--border);
}

.navbar__inner {
  max-width: var(--wide-width);
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__name {
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.01em;
  text-decoration: none;
  background: linear-gradient(90deg, var(--c-teal), var(--c-purple), var(--c-pink), var(--c-amber));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar__name:hover {
  text-decoration: none;
  opacity: 0.8;
}

.navbar__links {
  display: flex;
  gap: 32px;
}

.navbar__links a {
  font-family: var(--font-mono);
  font-size: 13px;
  text-decoration: none;
  transition: filter 0.2s;
  filter: brightness(0.75);
}

.navbar__links a:hover,
.navbar__links a.active {
  text-decoration: none;
  filter: brightness(1);
}

.link--content   { color: var(--c-teal); }
.link--community { color: var(--c-purple); }
.link--contact   { color: var(--c-coral); }

@media (max-width: 480px) {
  .navbar__links { gap: 20px; }
}
</style>
