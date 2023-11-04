export default function disableScroll() {
  const doc = document.documentElement;

  if (doc.scrollHeight > window.innerHeight) {
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    doc.classList.add('noscroll');
    doc.style.top = -scrollTop + 'px';
  }
}
