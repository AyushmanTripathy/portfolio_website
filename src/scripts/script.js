let data;

const pallete = {
  current: "dark",
  dark: {
    bg: "#202124",
    sec: "hsla(0, 0%, 73%, 0.87)",
    transBg: " rgba(0, 0, 0, 0.8)",
  },
  light: {
    bg: "hsla(0, 0%, 73%, 0.87)",
    sec: "#202124",
    transBg: " rgba(0, 0, 0, 0.8)",
  },
};

///default theme == dark

changeTheme(pallete.dark);

function start() {
  changePage("home");
  $("#loadingScreen").fadeOut("slow");
  $(".topbar").slideToggle("slow").css("display", "flex");
  $("#home").fadeIn("slow");
  nameLoop();

  getData('./src/data.json');
  //getData("https://secure-ravine-32835.herokuapp.com/get/data");
  //getData("http://localhost:8080/get/data");
}

function getData(path) {
  fetch(path)
    .then((response) => {
      if (!response.ok) return console.log("fetch falied",response);
      console.log(response);
      return response;
    })
    .then((response) => {
      data = response;
    });
}

function showModal() {
  $("#modal").fadeIn("slow").css("display", "flex");
}

function showMore(name) {
  const temp = data[name];
  if (!temp) return console.error(`${name} is not defined in data`);
  $("#showContent").text(temp.des);
  $("#showIcon").attr("src", `./src/imgs/skills/${name}.svg`);
  $("#showMore").fadeToggle("slow").css("display", "flex");
}

function closeShow() {
  $("#showMore").fadeToggle("slow");
}

function changePage(id) {
  console.log(id);
  window.location.href = `#${id}`;
  $("#modal").fadeOut("slow");
}

function changePallete() {
  //called ternary operator

  pallete.current = pallete.current == "light" ? "dark" : "light";
  changeTheme(pallete[pallete.current]);
}

function changeTheme(theme) {
  $(":root").css("--bg", theme.bg);
  $(":root").css("--sec", theme.sec);
  $(":root").css("--transBg", theme.transBg);
}

function copyMail() {
  window.open(
    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ayushmantripathy2004@gmail.com"
  );
  copyText("ayushmantripathy2004@gmail.com");
}

function gitProfile() {
  window.open("https://github.com/AyushmanTripathy");
}

function copyText(text) {
  if (!navigator.clipboard) return alert("copy error");
  navigator.clipboard.writeText(text);
}
