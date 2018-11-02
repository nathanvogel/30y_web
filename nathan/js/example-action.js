/* globals moment */

// Create project iframe
var iframe = document.createElement("iframe");
iframe.setAttribute("src", "./project/index.html");
iframe.style.width = "100%";
iframe.style.height = "100%";
// document.body.appendChild(iframe);

$(document).ready(() => {
  // Add iframe
  var mainContainer = document.getElementById("container-main");
  mainContainer.style.overflowY = "hidden";
  mainContainer.appendChild(iframe);

  document.addEventListener("timeline-scroll", e => {
    console.log("[student-action.js] -----callback timeline-scroll");

    // let normal = moment(e.detail.normal);
    let dotDate = moment(e.detail.date);
    console.log(dotDate.format("DD/MM/YYYY"));
    // $("#container-main").html(dotDate.format("DD/MM/YYYY"));
  });

  document.addEventListener("timeline-loadDotContent", e => {
    let dotID = e.detail.id;

    console.log(
      "[student-action.js] -----callback timeline-loadDotContent " + dotID
    );
    //console.log(e.detail.normal);
    // let dot = $(".timeDot[idToLoad='" + dotID + "']");
    // dot.attr("startdate");
    // console.log("Loaded date : " + dot.attr("startdate"));
  });
});
