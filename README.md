[![Build Status](https://travis-ci.org/munkacsimark/subtitle-timer.svg?branch=master)](https://travis-ci.org/munkacsimark/subtitle-timer) [![Coverage Status](https://coveralls.io/repos/github/munkacsimark/subtitle-timer/badge.svg?branch=master)](https://coveralls.io/github/munkacsimark/subtitle-timer?branch=master)

## Subtitle timer

With this tool you can retime your subtitles. It works only with `.srt` files. It creates a delayed subtitle file next to original.

### Usage

```bash
$ npm i -g subtitle-timer
$ subtitle-timer [options] <file>
```

or you can use it without install with `npx`:

```bash
$ npx subtitle-timer [options] <file>
```

#### Options

- **-s** => delay time in seconds (it can be negative) (required)
- **-e** => encoing of file [ascii|latin1|utf8] (optional, default is utf8)

#### E.g.

We have `beautiful-subtitle.srt`. But it contains special characters and it's encoded in `iso-8859-1`. Also we need delay it because it's delayed for 2 minutes.

```bash
$ subtitle-timer -s 120 -e latin1 ./beautiful-subtitle.srt
```

The result is `beautiful-subtitle-DELAYED.srt`.
