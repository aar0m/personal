function swapDiv(ele) {
    // replace y2024 with find element window.alert(document.getElementById('Y2024').parentElement.parentElement.id);

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