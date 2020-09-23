document.addEventListener('DOMContentLoaded', function() {
    var player = sessionStorage .getItem('player');
    document.querySelector('.player').innerHTML = player;
});