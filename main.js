function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(IMAGE);
    video.hide();

    tint_color="";
}

  function draw(){
    image(video, 0 , 0, 640, 480);
    circle(30, 30, 20);
    fill(40, 60, 20)
    circle(30, 10, 40);
    circle(20, 60, 80);
   circle(90, 30, 10);
   circle(30, 70, 40);
   circle(60, 50, 40);
  circle(80, 90, 70);
 
  }

   function take_snapshot(){
    save('mona.png');
   }

   function filter_tint(){
    tint_color = document.getElementById("color_name").value;
   }