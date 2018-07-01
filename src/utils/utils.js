import {
  min,
  max,
  reduce,
  multiply,
  pluck,
  map,
  pipe,
  split,
  compose,
  nth,
} from 'ramda'

export const minList = reduce(min, +Infinity)
export const off = multiply(0.8)
export const maxList = reduce(max, -Infinity)
export const getLegendNodes = chartSelector =>
  Array.from(
    document.querySelectorAll(`${chartSelector} text[text-anchor="start"]`)
  )
export const domainTransducer = compose(
  pluck('url'),
  map(
    pipe(
      split('/'),
      nth(2)
    )
  )
)

export const addDownloadImage = (chart, idDownload) => {
  window.google.visualization.events.addListener(chart, 'ready', () => {
    document.getElementById(idDownload).href = chart.getImageURI()
  })
}

export const idleCallback = cb => {
  if (window.requestIdleCallback) {
    requestIdleCallback(cb)
  } else {
    requestAnimationFrame(cb)
  }
}

export const resizeChart = (chart, data, options) => {
  window.resize = function() {
    chart.draw(data, options)
  }
}

export const scriptAsync = (u, c) => {
  const d = document,
    t = 'script'
  const o = d.createElement(t)
  const s = d.getElementsByTagName(t)[0]
  o.src = '//' + u
  if (c) {
    o.addEventListener(
      'load',
      function(e) {
        c(null, e)
      },
      false
    )
  }
  s.parentNode.insertBefore(o, s)
}

export const show = selector =>
  document.querySelectorAll(selector)[0].classList.remove('hidden')

export const hide = selector =>
  document.querySelectorAll(selector)[0].classList.add('hidden')

export const readFiles = async files =>
  Promise.all(
    Array.from(files).map(
      el =>
        new Promise((res, rej) => {
          const reader = new FileReader()
          reader.onload = () => {
            try {
              const result = JSON.parse(reader.result)
              res(result)
            } catch (e) {
              rej(e)
            }
          }
          reader.readAsText(el)
        })
    )
  )
