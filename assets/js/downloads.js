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

jQuery(document).ready(function ($) {
  getS3Data();
  //get data
  function getS3Data() {
    $.ajax({
      url: Tari.s3BucketURL,
      headers: { "Access-Control-Allow-Origin": "*" },
      success: function (res) {
        groupDataByOs(res);
        setLatest(res);
      },
    });
  }

  function groupDataByOs(data) {
    renderBinaries(data["current/linux"], "linux");
    renderBinaries(data["current/windows"], "windows");
    renderBinaries(data["current/osx"], "osx");
    renderBinaries(data["current/libwallet"], "libWallet");
  }

  function renderBinaries(data, os) {
    let rawOs = os.replace("current/", "");
    let binContainer = document.getElementById(`${rawOs}BinID`);
    const dateOptions = { weekday: "long", month: "short", day: "numeric" };

    binContainer.innerHTML = data
      // The url comparison is to sort the zip/sha256 files.
      .sort((a, b) => a.lastModified > b.lastModified || (a.lastModified == b.lastModified && a.url < b.url) ? -1 : 1)
      .map((binary, index) => {
        const lastMod = new Date(binary.lastModified);
        const formattedDate = lastMod.toLocaleString(undefined, dateOptions);
        const formattedTime = lastMod.getHours() + ":" + lastMod.getMinutes();
        const altClass = index % 2 ? "" : "alt-colour";
        const path = binary.path.split("/").pop();

        return `<div class="bin-row ${altClass}">
              <div class="bin-row-item bin-left" scope="row">
                <a href="${binary.url}">
                  ${path}
                </a>
                </div>
              <div class="bin-row-item bin-right">${formattedDate} at ${formattedTime}</div>
            </div>`;
      })
      .join("");
  }

  function setLatest(data) {
    Object.keys(data).forEach((os) => {
      let rawOs = os.replace("current/", "");
      if (rawOs === os) {
        return;
      }
      if (rawOs !== "libwallet") {
        let btn = document.getElementById(`${rawOs}DL`);
        let checkSumDiv = document.getElementById(`${rawOs}CSID`);

        let sha256 = "";
        // The url comparison is to sort the zip/sha256 files.
        let latest = data[os].reduce((a, b) => a.lastModified > b.lastModified || (a.lastModified == b.lastModified && a.url < b.url) ? a : b)
        let checksum = latest.sha256;

        if (checksum) {
          sha256 = checksum.split(" ")[0];
        }

        if (btn && checkSumDiv) {
          btn.href = latest.url;
          checkSumDiv.innerHTML = checksum ? `SHA256: ${sha256}` : "";
        }
      }
    });
  }

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
