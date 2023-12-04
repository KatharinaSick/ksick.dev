<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="menuContainer">
    <input type="checkbox" class="toggler" />
    <div class="hamburger">
      <div></div>
    </div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><a href="/" data-text="About">About</a></li>
            <li><a href="/talks" data-text="talks">Talks</a></li>
            <li><a href="/contact" data-text="contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.menuContainer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.menuContainer .toggler {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 80px;
  height: 80px;
  opacity: 0;
}

.menuContainer .hamburger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;
  margin: 12px;
  /* background: var(--primary-color); */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hamburger line */
.menuContainer .hamburger > div {
  position: relative;
  width: 100%;
  height: 2px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

/* Top and bottom lines */
.menuContainer .hamburger > div:before,
.menuContainer .hamburger > div:after {
  content: '';
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: inherit;
}

/* Moves line down */
.menuContainer .hamburger > div:after {
  top: 10px;
}

/* Toggler animate */
.menuContainer .toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}

/* Turn Lines into X */
.menuContainer .toggler:checked + .hamburger > div:before,
.menuContainer .toggler:checked + .hamburger > div:after {
  top: 0;
  transform: rotate(90deg);
}

/* Rotate on hover when checked */
.menuContainer .toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}

/* Show menu */
.menuContainer .toggler:checked ~ .menu {
  visibility: visible;
}

.menuContainer .toggler:checked ~ .menu > div {
  transform: scale(1);
  transition-duration: var(--menu-speed);
}

.menuContainer .toggler:checked ~ .menu > div > div {
  opacity: 1;
  transition: opacity 0.4s ease;
}

.menuContainer .menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menuContainer .menu > div {
  background-color: var(--menu-overlay-color);
  border-radius: 50%;
  width: 300vw;
  height: 300vw;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: all 0.4s ease;
}

.menuContainer .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.menuContainer .menu > div > div > ul {
  padding: 1.5rem;
}

.menuContainer .menu > div > div > ul > li {
  list-style: none;
  color: var(--menu-text-color);
  font-size: 3rem;
  padding: 1.5rem;
  font-weight: 700;
}

.menuContainer .menu > div > div > ul > li > a {
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease;
}

.menuContainer .menu > div > div > ul:hover > li > a {
  color: var(--menu-disabled-text-color);
}

.menuContainer .menu > div > div > ul > li:hover > a {
  color: var(--menu-selected-text-color);
  background: transparent;
}

.menuContainer .menu > div > div > ul > li > a:before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 500px;
  transition:
    letter-spacing 0.5s,
    left 0.5s;
}

.menuContainer .menu > div > div > ul > li:hover > a:before {
  content: attr(data-text);
  opacity: 1;
  left: 50%;
  letter-spacing: 10px;
  width: 1800px;
  height: 200px;
}

.menuContainer .menu > div > div > ul > li:nth-child(1) > a:before {
  color: var(--menu-purple-background);
}

.menuContainer .menu > div > div > ul > li:nth-child(2) > a:before {
  color: var(--menu-blue-background);
}

.menuContainer .menu > div > div > ul > li:nth-child(3) > a:before {
  color: var(--menu-green-background);
}
</style>
