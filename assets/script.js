var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

var hasBack = false;
var hasAcc = false;
var hasText = false;
var bcolor;
var acolor;
var tcolor;

for (i=0; i<colors.length; i++){
  var num =Math.floor(Math.random() * 139);
  console.log(num);
  var randColor = colors[num];

  
  var inside = $("<p>"+colors[i]+"</p>").attr('id', colors[i]).addClass("colorBlock").css({
    "background-color": colors[i],
    "color": randColor
  });
  $("#colorDiv").append(inside);
}
pickBackground();

function pickBackground() {
  hasBack = false;
  $(".colorBlock").hover(function() {
    var thiscolor = $(this).attr('id');
    $("#bcolor").html(thiscolor + " & ");
    $("#lilBox").css('background-color', thiscolor);
    
    $(".colorBlock").on("click", function() {
      hasBack = true;
      bcolor = $(this).attr('id');
      $("#lilBox").css('background-color', bcolor);
      $(".colorBlock").unbind();
      if (hasAcc === false) {
        $("#directions").html("Pick an Accent Color.");
        pickAccent();
      }
    });
  });
}

function pickAccent() {
  $(".colorBlock").hover(function() {
    var thiscolor = $(this).attr('id');
    $("#acolor").html(thiscolor + " & ");
    $("#headbox").show();
    $("#headbox").css('background-color', thiscolor);
    
    $(".colorBlock").on("click", function() {
      hasAcc = true;
      acolor = $(this).attr('id');
      $("#headbox").css('background-color', acolor);
      $("#lilBox").css("border", acolor +" 2px solid");
      $(".colorBlock").unbind();
      if (hasText === false) {
        $("#directions").html("Pick a text color.");
        pickTextColor();
      }
    });
    
  });
}

function pickTextColor() {
  $(".colorBlock").hover(function() {
    var thiscolor = $(this).attr('id');
    $("#tcolor").html(thiscolor);
    $("#headbox").html("<h1>Hello World!</h1>");
    $("#headbox").css('color', thiscolor);
    
    $(".colorBlock").on("click", function() {
      $("#directions").html("");
      hasText = true;
      tcolor = $(this).attr('id');
      $("#headbox").css('color', tcolor);
      $(".colorBlock").unbind();
      $("#resetButtons").show();
      $(".ughbutton").css({
        "background-color": acolor,
        "color": tcolor,
        "border": bcolor+" 1px solid"
      });
      $("#currentcolors").show().css('color', tcolor);
    });
  });
}

$("#buttonBack").on("click", function() {
   pickBackground();
});
$("#buttonAcc").on("click", function() {
   pickAccent();
});
$("#buttonText").on("click", function() {
   pickTextColor();
});