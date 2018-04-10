'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP_X = 50;
var GAP_Y = 10;
var GAP_TIME = 40;
var FONT_GAP = 190;
var TEXT_HEIGHT = 100;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP_Y - TEXT_HEIGHT - GAP_Y;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 140, 20);
  ctx.fillText('Список результатов:', 140, 40);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_Y + GAP_Y + FONT_GAP);
    ctx.fillRect(CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_Y + GAP_Y + (CLOUD_HEIGHT - TEXT_HEIGHT - (barHeight * times[i]) / maxTime), BAR_WIDTH, (barHeight * times[i]) / maxTime);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, GAP_TIME + (CLOUD_HEIGHT - TEXT_HEIGHT - (barHeight * times[i]) / maxTime));
  }
};
