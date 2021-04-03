alert('The File');
<img src="../Image/up.png" height="30" width="30px" onclick="topFunction()" id="myBtn" title="Go to top"/> 
<script>
// When the reader scrolls down 25px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the reader clicks on the arrow/button, scroll to the top of the document.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

</script>
