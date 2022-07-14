
# canvas

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body {
            text-align: center;
        }

        canvas {
            box-shadow: 5px 5px 5px gray;
            border: 1px solid #999;
        }
    </style>
</head>

<body>
    <canvas id="canvas" width="900" height="800"></canvas>
</body>
<script>
    var cv = document.getElementById('canvas')
    var ctx = cv.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.fill();
    // canvas上绘制图形的交互
    ctx.fillStyle = 'blue';
    ctx.fillRect(300, 450, 200, 200);
    var lock = true;
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(400, 200, 150, 0, 2 * Math.PI)
    ctx.fill();
    cv.onclick = function(e) {
        var e = e || window.event;
        var x = e.clientX - this.offsetLeft;
        var y = e.clientY - this.offsetTop;

        if (x >= 300 && x <= 500 && y >= 450 && y <= 650) {
            cv.width = cv.width;
            ctx.beginPath();
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, cv.width, cv.height);
            ctx.fill();
            ctx.fillStyle = 'blue';
            ctx.fillRect(300, 450, 200, 200);
            var lock = true;
            ctx.beginPath();
            ctx.fillStyle = 'green';
            ctx.arc(400, 200, 150, 0, 2 * Math.PI)
            ctx.fill();
        }
        var s = gg(x - 400, y - 200);
        if (s <= 150) {
            ctx.beginPath();
            ctx.fillStyle = 'red'
            ctx.fillRect(0, 0, cv.width, cv.height);
            ctx.fill();
            ctx.fillStyle = 'blue';
            ctx.fillRect(300, 450, 200, 200);
            var lock = true;
            ctx.beginPath();
            ctx.fillStyle = 'green';
            ctx.arc(400, 200, 150, 0, 2 * Math.PI)
            ctx.fill();
        }
    }


    function gg(w, h) {
        return Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2), 2)
    }
</script>

</html>
```

### canvas鼠标移动

```js
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <canvas id="canvas" width="300" height="300"></canvas>
</body>
<script type="text/javascript">
    var cv = document.getElementById('canvas');
    var ctx = cv.getContext('2d');

    function Keymove(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }
    Keymove.prototype.cks = function() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.rect(this.x, this.y, this.w, this.h)
        ctx.fill();
    };

    var km = new Keymove(0, 0, 100, 100, 'white');

    document.onkeydown = function(e) {
        var e = e || window.event;
        var dir = e.keyCode;
        if (dir == 38) {
            this.y -= 10;
        }
        if (dir == 40) {
            this.y += 10;
        }
        if (dir == 36) {

        }
        if (dir == 37) {

        }
        if (dir == 39) {

        }
    }
</script>

</html>
```

### canvas拖拽

```js
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style media="screen">
        body {
        text-align: center;
    }

    canvas {
        box-shadow: 5px 5px 5px gray;
        border: 1px solid #999;
        cursor: url('./橡皮.cur'), auto;
    }

    span,
    select {
        vertical-align: top;
        margin-left: 10px;
    }

    .box {
        /* width: 144px; */
        display: inline-block;
        margin-left: 50px;
    }
    </style>
</head>

<body>
    <canvas id="canvas" width="800" height="800"></canvas>
</body>
<script type="text/javascript">
    var cv = document.getElementById('canvas')
    var ctx = cv.getContext('2d')

    function Rect(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }
    Rect.prototype.draw = function(style) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.y)
        if (style == 'fill') {
            ctx.fillStyle = this.c
        } else {
            ctx.strokeStyle = this.c
        }
        ctx[style]();
    };
    var rect = new Rect(200, 50, 100, 100, 'blue');
    rect.draw('fill');
    cv.onmousedown = function(e) {
        var e = e || window.event;
        var dx = e.clientX - this.offsetLeft;
        var dy = e.clientY - this.offsetTop;
        if (dx >= rect.x && dx <= rect.x + rect.w && dy >= rect.y && dy <= rect.y + rect.h) {
            // 获取鼠标相对于rect的坐标
            dx -= rect.x;
            dy -= rect.y;
            cv.onmousemove = function(e) {
                var e = e || window.event;
                rect.x = e.clientX - dx - this.offsetLeft;
                rect.y = e.clientY - dy - this.offsetTop;
                cv.width = cv.width;
                rect.draw('fill');
            }

        }
    }
    cv.onmouseup = function() {
        cv.onmousemove = null;
    }
</script>

</html>
```



