# YL-69 Driver

土壤湿度检测 YL-69 驱动，GPIO 版本，配合板上的阈值设定，输出高低电平

## Device Model

- [YL-69-gpio](https://rap.ruff.io/devices/yl-69-gpio)

## Install

```sh
> rap device add --model yl-69-gpio --id <device-id> 
```

## Demo

Supposed \<device-id\> is `xxx` in the following demos.

```js
$('#xxx').on('change', function(data) {
  // data will be 0 or 1.
  // 1 means humidity larger than threshold
});
```

## API References

### Events (opt.)

#### `change`

## Supported OS

Test passed on Ruff v1.6.0 and Ruff Lite v0.6.0

## Note

Only for gpio version.
