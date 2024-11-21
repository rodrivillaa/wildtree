window.addEventListener('resize', function() {
    const navHeight = document.querySelector('nav').offsetHeight;
    document.body.style.paddingTop = `${navHeight}px`;
});