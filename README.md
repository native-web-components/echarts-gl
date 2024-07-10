# echarts-gl

### Install

```
npm install echarts echarts-gl --save
```

### Usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>echarts-gl Web Component</title>
    <script type="module" src="./main.ts"></script>
    <style>
      wc-echarts-gl {
        display: block;
        height: 500px;
        background: #f5f5f5;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <wc-echarts-gl></wc-echarts-gl>

    <script type="module">
      const echarts = document.querySelector("wc-echarts-gl");
      const options = {
        grid3D: {},
        xAxis3D: {},
        yAxis3D: {},
        zAxis3D: {},
        series: [
          {
            type: "scatter3D",
            symbolSize: 50,
            data: [
              [-1, -1, -1],
              [0, 0, 0],
              [1, 1, 1],
            ],
            itemStyle: {
              opacity: 1,
            },
          },
        ],
      };
      echarts.setOptions(options);
    </script>
  </body>
</html>
```
