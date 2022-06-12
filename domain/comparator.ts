enum SliderStatus {
    Static,
    Moving
}

let sliderStatus: SliderStatus = SliderStatus.Static;
let width = 50;

const container = document.getElementById('comparator-container');
const slider = document.getElementById('comparator-slider');
const resizer = document.getElementById('comparator-resizer');

function bound(): DOMRect {
    return container?.getBoundingClientRect() ?? {width: 0, right: 0, left: 0} as DOMRect;
}

function drag(): void {
    sliderStatus = SliderStatus.Moving;
}

function leave(): void {
  sliderStatus = SliderStatus.Static;
}

function getSliderMargin(): string {
  return `calc(${width}% - 5px)`;
}

function checkInBound(xValue: number): boolean {
  return xValue > bound().left && xValue < bound().right;
}

function calculatePositionInPercentage(xValue: number): number {
  const xPosition = xValue - bound().left;
  const xPositionPercentage = Math.floor(xPosition / bound().width * 100); 
  return xPositionPercentage;
}

function updateUi(): void {
    if (slider !== null && resizer !== null) {
        slider.style.marginLeft = getSliderMargin();
        resizer.style.width = `${width}%`;
    }
}

function addListeners(): void {
    window.addEventListener('dragstart', (event: MouseEvent) => {
        event.preventDefault();
    });

    window.addEventListener('mousemove', (event: MouseEvent) => {
        if (sliderStatus == SliderStatus.Moving && checkInBound(event.clientX)) {
            width = calculatePositionInPercentage(event.clientX);
            updateUi();
          }
    });

    window.addEventListener('mouseup', () => leave());

    slider?.addEventListener('mousedown', () => drag());
}

addListeners();
updateUi();