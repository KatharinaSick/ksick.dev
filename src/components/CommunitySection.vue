<template>
  <section id="community" class="section section--wide">
    <p class="section-label" style="color: var(--c-purple)">community</p>
    <h2 class="section-title">Building things together</h2>
    <p class="section-subtitle">
      My corner of the Cloud Native world.
    </p>

    <div class="community-grid community-grid--three">
      <a
        href="https://cloudnativelinz.at/"
        target="_blank"
        rel="noopener"
        class="community-card community-card--blue"
      >
        <span class="community-card__role">co-organizer</span>
        <h3 class="community-card__title">Cloud Native Linz</h3>
        <p class="community-card__desc">
          Our goal is to bring together passionate individuals who inspire, support, and challenge each other.
        </p>
        <span class="community-card__cta">visit community →</span>
      </a>

      <a
        href="https://offon.dev"
        target="_blank"
        rel="noopener"
        class="community-card community-card--amber"
      >
        <span class="community-card__role">co-creator</span>
        <h3 class="community-card__title">offon.dev</h3>
        <p class="community-card__desc">
          A welcoming community for open source enthusiasts. Learn through hands-on challenges, share your knowledge, and grow alongside people who love open source as much as you do.
        </p>
        <span class="community-card__cta">visit offon.dev →</span>
      </a>

      <a
        href="https://cloudnativedays.at/"
        target="_blank"
        rel="noopener"
        class="community-card community-card--pink"
      >
        <span class="community-card__role">former organizer</span>
        <h3 class="community-card__title">Cloud Native Days Austria</h3>
        <p class="community-card__desc">
          Cloud Native Days Austria is a conference aimed at developers, platform people, and other IT professionals interested in Cloud Native technologies.
        </p>
        <span class="community-card__cta">visit conference →</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.community-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 40px;
}

.community-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s;
}

.community-card:hover {
  text-decoration: none;
}

.community-card--blue:hover  { border-color: var(--c-blue); }
.community-card--pink:hover  { border-color: var(--c-pink); }
.community-card--amber:hover { border-color: var(--c-amber); }

.community-card__role {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.05em;
}

.community-card--blue .community-card__role  { color: var(--c-blue); }
.community-card--pink .community-card__role  { color: var(--c-pink); }
.community-card--amber .community-card__role { color: var(--c-amber); }

.community-card__title {
  font-size: 20px;
  color: var(--text);
}

.community-card__desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  flex: 1;
}

.community-card__cta {
  font-family: var(--font-mono);
  font-size: 12px;
  margin-top: 4px;
}

.community-card--blue .community-card__cta  { color: var(--c-blue); }
.community-card--pink .community-card__cta  { color: var(--c-pink); }
.community-card--amber .community-card__cta { color: var(--c-amber); }
</style>
