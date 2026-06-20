<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ContentSection from './components/ContentSection.vue'
import CommunitySection from './components/CommunitySection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <hr class="divider" />
    <ContentSection />
    <hr class="divider" />
    <CommunitySection />
    <hr class="divider" />
    <ContactSection />
    <footer class="footer">
      <p>made with vue &amp; a lot of cloud native energy</p>
    </footer>
  </main>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 40px 24px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  opacity: 0.6;
}
</style>
