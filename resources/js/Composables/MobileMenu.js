export default function () {
  document.querySelector('.hamburger.hamburger--spring').classList.toggle('is-active')

  let headerElement = document.getElementById('site-header')
  let headerElementHeight = headerElement.offsetHeight

  let mobileMenuElement = document.getElementById('mobile-navigation')
  mobileMenuElement.style.top = `${headerElementHeight - 1}px`

  mobileMenuElement.classList.toggle('max-h-0')
  mobileMenuElement.classList.toggle('opacity-0')
  mobileMenuElement.classList.toggle('pointer-events-none')

  let overlayElement = document.getElementById('mobile-overlay')
  overlayElement.classList.toggle('opacity-0')
  overlayElement.classList.toggle('pointer-events-none')

  if (!overlayElement.classList.contains('opacity-0')) {
    overlayElement.addEventListener('click', toggleMobileMenu)
  } else {
    overlayElement.removeEventListener('click', toggleMobileMenu)
  }
}