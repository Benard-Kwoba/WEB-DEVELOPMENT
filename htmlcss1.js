
window.onload = function() {
    var leftPart = document.querySelector('.left');
    leftPart.addEventListener('wheel', function(e) {
        var delta = Math.sign(e.deltaY);
        leftPart.scrollTop += delta * 30;
        e.preventDefault();
    });
};
function linkalertjs () {
    alert("You clicked on tutorial site");
}
    
  
  