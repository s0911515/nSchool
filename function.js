var myBirthTime = new Date(2018, 3, 4, 13, 36);
function updateParagraph() {
  var now = new Date();
  var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
  document.getElementById('birth-time').innerText =
    '曉が生まれてから' + seconds + '秒経過。';
}
function calculateCircleArea(radius) {
    var area = radius * radius * 3.14;
    return area;
}
// setInterval(updateParagraph, 50);
document.getElementById('circle-area').innerText =
    '半径5の円の面積は' + calculateCircleArea(5) + 'cm';

