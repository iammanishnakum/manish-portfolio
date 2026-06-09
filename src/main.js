import './style.css'
import { inject } from '@vercel/analytics'

// Initialize Vercel Web Analytics
inject()

// ── Custom cursor ──────────────────────────────────────────────
const cursor = document.getElementById('cursor')
const ring = document.getElementById('cursor-ring')
let mx = 0, my = 0, rx = 0, ry = 0

document.addEventListener('mousemove', e => {
  mx = e.clientX
  my = e.clientY
})

function animateCursor() {
  cursor.style.left = mx + 'px'
  cursor.style.top = my + 'px'
  rx += (mx - rx) * 0.12
  ry += (my - ry) * 0.12
  ring.style.left = rx + 'px'
  ring.style.top = ry + 'px'
  requestAnimationFrame(animateCursor)
}
animateCursor()

// ── Nav scroll effect ──────────────────────────────────────────
const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60)
})

// ── Scroll reveal animations ───────────────────────────────────
const reveals = document.querySelectorAll('.reveal')
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible')
  })
}, { threshold: 0 })
reveals.forEach(el => revealObserver.observe(el))

// ── Skill bar animations ───────────────────────────────────────
const fills = document.querySelectorAll('.skill-fill')
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const w = parseFloat(e.target.dataset.width)
      e.target.style.transform = `scaleX(${w})`
    }
  })
}, { threshold: 0.3 })
fills.forEach(el => skillObserver.observe(el))

// ── Orb parallax on mouse move ─────────────────────────────────
const orb1 = document.querySelector('.orb1')
const orb2 = document.querySelector('.orb2')
window.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth
  const y = e.clientY / window.innerHeight
  orb1.style.transform = `translate(${x * 40 - 20}px, ${y * 30 - 15}px)`
  orb2.style.transform = `translate(${x * -30 + 15}px, ${y * -20 + 10}px)`
})
