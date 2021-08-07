const names = ["Web Developer.", "ML Engineer."];
const len = 3;

function nameLoop() {
  let i = 0;

  //timeout recursion
  timeLoop(i);
}

function timeLoop(i) {
  if (i === names.length) return lastType("Ayushman Tripathy.");

  typing(names[i]);
  i++;

  //wait for calling next time
  setTimeout(() => {
    timeLoop(i);
  }, len * 1000);
}

function typing(name) {
  $("#text").text(name);
  $("#text").css(
    "animation",
    `typing ${len}s steps(${name.length},end) infinite,blinking 0.5s step-end infinite`
  );
}

function lastType(name) {
  $("#typeWriterHeading").text("I am");
  $("#text").text(name);
  $("#text").css(
    "animation",
    `lastType ${len}s steps(${name.length},end),blinking 0.5s step-end infinite`
  );
}

//cursor effect

cursorEffect();
function cursorEffect() {
  //follow the cursor
  document.addEventListener("mousemove", (event) => {
    $(".cursor").css("display", "block");
    $("#innerCursor")
      .css("top", `${event.pageY - 15}px`)
      .css("left", `${event.pageX - 15}px`);
    $("#outerCursor")
      .css("top", `${event.pageY - 20}px`)
      .css("left", `${event.pageX - 20}px`);
  });
}
