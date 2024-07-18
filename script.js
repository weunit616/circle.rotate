const circle = document.getElementById('circle');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');

let rotateValue = circle.style.transform;
// console.log('rotateValue');
let rotateSum;

upBtn.onclick = function () {
  // 時計回りに90度回転させる
  rotateSum = rotateValue + 'rotate(-90deg)';
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

downBtn.onclick = function () {
  // 反時計回りに90度回転させる
  rotateSum = rotateValue + 'rotate(90deg)';
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}
