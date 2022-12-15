## Subtitle timer

With this tool you can fix your delayed subtitles. It works only with `.srt` files. It will create a delayed subtitle file next to the original one.

### Usage

```bash
$ npx subtitle-timer [options] <file>
```

#### Options

| Argument | Description                             | Possible values     | Default | Required |
| -------- | --------------------------------------- | ------------------- | ------- | -------- |
| -s       | delay time in seconds (can be negative) | -                   | -       | yes      |
| -e       | encoding of the file                    | ascii, latin1, utf8 | utf8    | no       |

#### Example

Let's say we have `subtitle.srt`. But the file contains special characters and it's encoded in `iso-8859-1`. Also we need to delay it because it's delayed with 2 minutes.

```bash
$ subtitle-timer -s 120 -e latin1 ./subtitle.srt
```

The result is `subtitle-DELAYED.srt`.
