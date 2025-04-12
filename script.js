// Smooth scrolling effect for the down arrow
document.querySelector('.down-arrow a').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
