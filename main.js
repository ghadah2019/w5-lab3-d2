function changeDiv() {
    var div = document.getElementById("myDiv");
    
    var width = document.getElementById("inputWidth").value + "px";
    var height = document.getElementById("inputHeight").value + "px";
    var radius = document.getElementById("inputRadius").value + "px";
    var color = document.getElementById("inputColor").value;
    
    div.style.width = width;
    div.style.height = height;
    div.style.borderRadius = radius;
    div.style.backgroundColor = color;
  }


  var originalWidth = "30%";
  var originalHeight = "40vh";
  var originalRadius = "10px";
  var originalColor = "blue";

  function resetDiv() {
    var div = document.getElementById("myDiv");
    
    div.style.width = originalWidth;
    div.style.height = originalHeight;
    div.style.borderRadius = originalRadius;
    div.style.backgroundColor = originalColor;
  }
