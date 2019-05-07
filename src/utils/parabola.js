/**
 * @Author:      allenAugustine
 * @Email:       iallenaugustine@gmail.com  -  misterji0708@qq.com
 * @DateTime:    2018-05-22 17:42:45
 * @Description: 物体抛物线运动
 */

const parabola = (params = {}) => {
    let startPos = params.startPos, //起点坐标
        endPos = params.endPos, //终点坐标
        callback = params.callback, //动画完成回调
        frame = params.frame, //每帧结束的回调

        x1 = startPos.x,
        x2 = endPos.x,
        y1 = startPos.y,
        y2 = endPos.y,

        /**
         * (x1, y1) - 起点坐标   (x2, y2) - 终点坐标
         * 将原点(0, 0)移动到起点坐标处, 使其成为从原点开始的平抛运动
         * 此时, 起点坐标为(0, 0), 终点坐标为 (x2 - x1, y2 - y1), web坐标向下为正, 所以抛物线开头向下,但a值为正
         * 抛物线公式: y = (endY / Math.pow(endX, 2)) * x * x
         */
        endX = x2 - x1,
        endY = y2 - y1,

        g = 0.4, //重力加速度 (模拟值)
        s = 18, //水平速度 (模拟值)

        /**
         * 运动模式
         * 0 - 水平位移 < 垂直位移  以y为主,推算x, 自由落体优先
         * 1 - 水平位移 > 垂直位移  以x为主,推算y, 水平匀速优先
         */
        mode = Math.abs(endX) < Math.abs(endY) ? 0 : 1,

        // 'L'  向左  'R'  向右  'D'  向下 'U'  向上
        directionX = endX > 0 ? 'R' : endX < 0 ? 'L' : '',
        directionY = endY > 0 ? 'D' : endY < 0 ? 'U' : '',

        a = endY / Math.pow(endX, 2),

        x = 0,
        y = 0,
        tick = 0;

    const raf = (fn) => { setTimeout(fn, 1000 / 52); };

    const run = () => {
        tick++;

        if (mode == 0) {
            y = g * tick * tick; // 纵向: 匀加速直线运动
            x = Math.sqrt(Math.abs(y / a)); // 横向, 根据y值反推, 匀速直线
        } else {
            x = Math.abs(x) + s;
            y = Math.abs(a) * x * x;
        }

        if (directionX == 'L') x = -x;
        if (directionY == 'U') y = -y;

        //每帧的回调函数
        frame(x + x1, y + y1);

        /* 根据y值判断动画是否结束 */
        if (directionY == 'D' && y < endY || directionY == 'U' && y > endY) {
            raf(run);
        } else {
            if (typeof callback === 'function') {
                callback();
            }
        }
    };

    raf(run);
};

module.exports = parabola;