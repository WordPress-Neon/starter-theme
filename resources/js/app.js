require('./bootstrap')

const contentLoaded = () => {
  addHeaderPadding()
}

function addHeaderPadding () {
  let headerElement = document.querySelector('header.fixed')
  if (headerElement) {
    document.body.style.paddingTop = headerElement ? `${headerElement.offsetHeight}px` : 0
  }
}

document.addEventListener('DOMContentLoaded', contentLoaded)
window.addEventListener('resize', addHeaderPadding)