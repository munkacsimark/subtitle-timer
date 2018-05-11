'use strict';
const fs = require('fs');
const path = require('path');
const parser = require('subtitles-parser');

const setDelay = (srt, sec) => {
  const dataArr = parser.fromSrt(srt, true);
  dataArr.forEach(data => {
    const newStartTime = data.startTime + sec * 1000;
    const newEndTime = data.endTime + sec * 1000;
    data.startTime = newStartTime < 0 ? 0 : newStartTime;
    data.endTime = newEndTime < 0 ? 0 : newEndTime;
  });
  return parser.toSrt(dataArr);
}

module.exports = {
  setDelay,
}
