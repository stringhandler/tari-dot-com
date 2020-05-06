let OS = "";
function getOS() {
  let platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }

  OS = os;
}
getOS();

function selectedOs(element, cardElement) {
  let el = document.getElementById(element);
  let cardEl = document.getElementById(cardElement);
  let oldActiveBtn = document.getElementsByClassName("tab-button");
  let oldActive = document.getElementsByClassName("download-content");

  removeClass(oldActive);
  removeClass(oldActiveBtn);

  el.classList.add("active");
  cardEl.classList.add("active");
}

function removeClass(elems) {
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.remove("active");
  }
}

jQuery(document).ready(function($) {
  function setInitialActive(os) {
    switch (os) {
      case "Mac OS":
        $("#mac-btn").addClass("active");
        $("#mac").addClass("active");
        break;
      case "Windows":
        $("#windows-btn").addClass("active");
        $("#windows").addClass("active");
        break;
      default:
        $("#ubuntu-btn").addClass("active");
        $("#ubuntu").addClass("active");
        break;
    }
  }
  setInitialActive(OS);
});
