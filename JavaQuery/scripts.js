
  $(document).ready(function() {
    $("h1").click(function() {
      alert("This is a header.");
      alert("I told you, THIS IS A HEADER!");
  });

  $("p").click(function() {
    $("This is a paragraph.");
    $(".gaminghelps-showing").toggle();
    $(".gaminghelps-hidden").toggle()
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});
