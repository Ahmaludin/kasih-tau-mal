export default function unableScroll() {
  const scrollTop = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('top')
  );
  document.documentElement.classList.remove('noscroll');
  window.scrollTo(0, -scrollTop);
}
