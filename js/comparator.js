"use strict";
var SliderStatus;
(function (SliderStatus) {
    SliderStatus[SliderStatus["Static"] = 0] = "Static";
    SliderStatus[SliderStatus["Moving"] = 1] = "Moving";
})(SliderStatus || (SliderStatus = {}));
var sliderStatus = SliderStatus.Static;
var width = 50;
var container = document.getElementById('comparator-container');
var slider = document.getElementById('comparator-slider');
var resizer = document.getElementById('comparator-resizer');
function bound() {
    var _a;
    return (_a = container === null || container === void 0 ? void 0 : container.getBoundingClientRect()) !== null && _a !== void 0 ? _a : { width: 0, right: 0, left: 0 };
}
function drag() {
    sliderStatus = SliderStatus.Moving;
}
function leave() {
    sliderStatus = SliderStatus.Static;
}
function getSliderMargin() {
    return "calc(".concat(width, "% - 5px)");
}
function checkInBound(xValue) {
    return xValue > bound().left && xValue < bound().right;
}
function calculatePositionInPercentage(xValue) {
    var xPosition = xValue - bound().left;
    var xPositionPercentage = Math.floor(xPosition / bound().width * 100);
    return xPositionPercentage;
}
function updateUi() {
    if (slider !== null && resizer !== null) {
        slider.style.marginLeft = getSliderMargin();
        resizer.style.width = "".concat(width, "%");
    }
}
function addListeners() {
    window.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
    window.addEventListener('mousemove', function (event) {
        if (sliderStatus == SliderStatus.Moving && checkInBound(event.clientX)) {
            width = calculatePositionInPercentage(event.clientX);
            updateUi();
        }
    });
    window.addEventListener('mouseup', function () { return leave(); });
    slider === null || slider === void 0 ? void 0 : slider.addEventListener('mousedown', function () { return drag(); });
}
addListeners();
updateUi();
//# sourceMappingURL=comparator.js.map