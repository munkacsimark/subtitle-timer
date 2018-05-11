#!/usr/bin/env node

'use strict';
const fs = require('fs');
const path = require('path');
const program = require('commander');
const lib = path.join(path.dirname(fs.realpathSync(__filename)), '/lib');
const timer = require(`${lib}/subtitle-timer.js`);

const run = (file) => {
  const srt = fs.readFileSync(path.normalize(file), program.encoding);
  const delayedSrtString = timer.setDelay(srt, parseInt(program.seconds));
  fs.writeFileSync(path.normalize(`${path.parse(file).dir}/${path.parse(file).name}-DELAYED.srt`), delayedSrtString, program.encoding);
}

program.arguments('<file>')
  .option('-s, --seconds <seconds>', 'Delay time in seconds')
  .option('-e, --encoding [ascii|latin1|utf8]', 'Encoding of input file.', 'utf8')
  .action(file => run(file))
  .parse(process.argv);
