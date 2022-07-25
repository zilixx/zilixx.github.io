---
title: 队列相关算法题
---
[[toc]]
# 933-最近请求次数
```js
/**
 * 输入：
 * ["RecentCounter", "ping", "ping", "ping", "ping"]
 * [[], [1], [100], [3001], [3002]]
 * 输出：
 * [null, 1, 2, 3, 3]
 */
var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }

  return this.queue.length;
};
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1)); // requests = [1]，范围是 [-2999,1]，返回 1
console.log(recentCounter.ping(100)); // requests = [1, 100]，范围是 [-2900,100]，返回 2
console.log(recentCounter.ping(3001)); // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
console.log(recentCounter.ping(3002)); // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
```
