'use strict';
const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const lib = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
const timer = require(`${lib}/subtitle-timer.js`);

describe('setDelay()', () => {

    const srtString =
        '1\r\n00:02:12,000 --> 00:02:16,000\r\nSubtitle 1.1\r\nSubtitle 1.2\r\n\r\n' +
        '2\r\n00:02:38,967 --> 01:32:40,958\r\nSubtitle 2.1\r\nSubtitle 2.2\r\n\r\n';

    it('handles addition', () => {
        const expectedStrString =
        '1\r\n00:04:22,000 --> 00:04:26,000\r\nSubtitle 1.1\r\nSubtitle 1.2\r\n\r\n' +
        '2\r\n00:04:48,967 --> 01:34:50,958\r\nSubtitle 2.1\r\nSubtitle 2.2\r\n\r\n';
        expect(timer.setDelay(srtString, 130)).to.equals(expectedStrString);
    });

    it('handles subtraction', () => {
        const expectedStrString =
        '1\r\n00:02:02,000 --> 00:02:06,000\r\nSubtitle 1.1\r\nSubtitle 1.2\r\n\r\n' +
        '2\r\n00:02:28,967 --> 01:32:30,958\r\nSubtitle 2.1\r\nSubtitle 2.2\r\n\r\n';
        expect(timer.setDelay(srtString, -10)).to.equals(expectedStrString);
    });

    it('handles negative time', () => {
        const expectedStrString =
        '1\r\n00:00:00,000 --> 00:00:00,000\r\nSubtitle 1.1\r\nSubtitle 1.2\r\n\r\n' +
        '2\r\n00:00:00,000 --> 00:00:00,000\r\nSubtitle 2.1\r\nSubtitle 2.2\r\n\r\n';
        expect(timer.setDelay(srtString, -99999)).to.equals(expectedStrString);
    });

});
