<template>
  <section id="top" class="hero">
    <div class="hero__inner">
      <p class="hero__label"><span class="gradient-text">// ksick.dev</span></p>
      <h1 class="hero__title">
        Hey, I'm Kathi.<br />
        <span class="hero__title--muted">I live in the Cloud Native world.</span>
      </h1>
      <p class="hero__bio">
        I organize communities, give talks at conferences, and spend a lot of time thinking about
        how to make complex tech actually make sense for the people using it.<br /><br />
        Based in Austria, working at Dynatrace. Co-organizer of
        <a href="https://cloudnativelinz.at/" target="_blank" rel="noopener">Cloud Native Linz</a>,
        co-creator of
        <a href="https://offon.dev" target="_blank" rel="noopener">offon.dev</a>,
        20+ talks across Europe.<br /><br />
        I'm here for open source and the people who build it. ❤️
      </p>
      <div class="hero__actions">
        <a href="#content" class="btn btn--primary">Content &amp; talks</a>
        <a href="#contact" class="btn btn--ghost">Get in touch</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: calc(var(--nav-height) + 48px) 24px 80px;
}

.hero__inner {
  max-width: var(--content-width);
  margin: 0 auto;
}

.hero__label {
  font-family: var(--font-mono);
  font-size: 13px;
  margin-bottom: 28px;
}

.gradient-text {
  background: linear-gradient(90deg, var(--c-teal), var(--c-purple), var(--c-pink), var(--c-amber));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__title {
  font-size: clamp(40px, 7vw, 72px);
  color: var(--text);
  margin-bottom: 28px;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero__title--muted {
  color: var(--text-muted);
}

.hero__bio {
  font-size: 17px;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 620px;
  margin-bottom: 44px;
}

.hero__bio a {
  color: var(--text);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--border);
  transition: color 0.15s, text-decoration-color 0.15s;
}

.hero__bio a:hover {
  color: var(--accent);
  text-decoration-color: var(--accent);
  text-decoration: underline;
}

.hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  font-family: var(--font-display);
  transition: all 0.15s;
  text-decoration: none;
  letter-spacing: 0.01em;
}

.btn--primary {
  background: var(--accent);
  color: var(--bg);
}

.btn--primary:hover {
  background: var(--accent-hover);
  color: var(--bg);
  text-decoration: none;
}

.btn--ghost {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
}

.btn--ghost:hover {
  border-color: var(--text);
  color: var(--text);
  text-decoration: none;
}
</style>
