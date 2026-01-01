const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
 "rgb(242, 242, 242)",        // light silver (text-primary)
  "rgba(220, 38, 38, 0.6)",    // muted red glow
  "rgba(220, 38, 38, 0.3)",    // soft ember
  "rgb(153, 27, 27)",          // deep red
  "rgba(153, 27, 27, 0.25)",   // dark ember trail
  "rgba(220, 38, 38, 0.12)"
];

circles.forEach(function(circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
    coords.x = e.pageX;
    coords.y = e.pageY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function(circle, index){
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

// ✅ DO NOT ADD CLICK SOUND HERE


