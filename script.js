function swapDiv(ele) {
    const otherYears = document.querySelectorAll(".exp-txt");

    otherYears.forEach(year => {
        document.getElementById(year.id).style.display = 'none';
    });

    const otherYearLabels = document.querySelectorAll(".year-label");

    otherYearLabels.forEach(yearLabel => {
        document.getElementById(yearLabel.id).style.fontWeight = '100';
    });

    document.getElementById("L".concat(ele.id)).style.fontWeight = 'bold';
    document.getElementById("Y".concat(ele.id)).checked = true;
    document.getElementById("T".concat(ele.id)).style.animation = 'appear-slideUp 0.6s';
    document.getElementById("T".concat(ele.id)).style.display = 'block';
}

function swapRight() {
    var years = document.querySelectorAll("input[name='year']");

    var target = document.querySelector("input[name='year']:checked");
    var rootNode = document.getElementById(target.id).parentElement.parentElement;
    var rightNode = document.getElementById(rootNode.id - 1);

    if (target.id == years[years.length-1].id) {
        target = years[0];
        rootNode = document.getElementById(target.id).parentElement.parentElement;
        rightNode = document.getElementById(rootNode.id);
    }

    swapDiv(rightNode);
}

function swapLeft() {
    var years = document.querySelectorAll("input[name='year']");

    var target = document.querySelector("input[name='year']:checked");
    var rootNode = document.getElementById(target.id).parentElement.parentElement;
    var replacement = parseInt(rootNode.id[rootNode.id.length - 1]) + 1
    var leftNode = document.getElementById(rootNode.id.replace(/.$/, replacement));

    if (target == years[0]) {
        target = years[years.length-1];
        rootNode = document.getElementById(target.id).parentElement.parentElement;
        leftNode = document.getElementById(rootNode.id);
    }

    swapDiv(leftNode);
}

function fixFontColor(ele) {
    document.getElementById(ele.id).style.color = 'whitesmoke';
}

function clickDropdown() {
    document.getElementById("dropdown-contents").classList.toggle("show");
}

getElementById("dropdown").onclick = function(event) {
  if (!event.target.matches('.dropdown')) {
    var dropdowns = document.getElementsByClassName("dropped");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}