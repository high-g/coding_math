import './style.scss'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

const centerY = height * .5
const centerX = width * .5
const baseRadius = 100
const baseAlpha = 0.5
const offset = 0.5
const speed = 0.1
let angle = 0

render()

function render() {
  // const y = centerY + Math.sin(angle) * offset
  // const radius = baseRadius + Math.sin(angle) * offset
  const alpha = baseAlpha + Math.sin(angle) * offset

  context.fillStyle = 'rgba(0, 0, 0, ' + alpha + ')'
  context.clearRect(0, 0, width, height)
  context.beginPath()
  context.arc(centerX, centerY, 100, 0, Math.PI * 2, false)
  context.fill()

  angle += speed
  requestAnimationFrame(render)
}