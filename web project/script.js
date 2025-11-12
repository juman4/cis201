document.select('.glow_link').forEach(link => {
    link.addEventListener('mouseenter',()=> {
        link.style.textShadow='0 0 15px cyan, 0 0 25px rgba(127, 163, 163, 0.71)';
    });
    link.addEventListener('mouseleave', ()=> {
        link.style.textShadiw='none';
    });
});