---
title: 集合/字典/散列表相关算法题
---
[[toc]]
# 1-两数之和
```js
/**
    输入一个数组和一个目标值，返回组成目标值和的连个元素索引
    @param {array} nums
    @param {number} target
 */
function findSums(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
}
```
# 3-无重复最长子串
```js
/**
 * 返回一个字符串中最大子串的长度
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
     // 使用双指针，一快一慢，维护一个滑动窗口，为最大子串
     // 不断移动右指针，如果右指针遇到重复字符，就把左指针移动到重复字符的下一位
     let left = 0
     let window = 0 // 窗口长度
     const map = new Map()
     for (let right = 0; right < s.length; right ++) {
         if (map.has(s[right]) && map.get(s[right]) >= left) {
             left = map.get(s[right]) + 1
         }
         window = Math.max(window, right - left + 1) // 更新window
         
         map.set(s[right], right) // 记录 [元素，下标]
     }

     return map
};

/** 
 * input: abcabcbb
 * out: 3
 */
console.log(lengthOfLongestSubstring('abcabcbb'));

/** 
 * input: abbcdea
 * out: 5
 */
 console.log(lengthOfLongestSubstring('abbcdea'));

 /** 
 * input: pwwkew
 * out: 3
 */
  console.log(lengthOfLongestSubstring('pwwkew'));
```
# 20-有效地括号
```js
/**
 * 可能的括号: '()', '[]', '{}'
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const stack = [];
  const parenthesis = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  if (s.length % 2) return false

  for (let i = 0; i < s.length; i++) {
      // 如果是左括号，就直接push
      if (['(', '{', '['].includes(s[i])) {
          stack.push(s[i])
      } else { // 如果是右括号，判断栈顶是否配对，配对则pop，否则return
        if (stack[stack.length - 1] === parenthesis[s[i]]) {
            stack.pop()
        } else {
            return false
        }
      }
  }

  return stack.length === 0;
};

console.log(isValid("((([{}][()]))"));
```
# 76-最小覆盖子串
```js
/**
 * 需要从字符串S中找出包含T所有字母的最短子串
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let l = 0
    let r = 0
    const need = new Map()
    for (let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1)
    }
    console.log(need);
};


minWindow('dd', 'ABCCCA')

// 用双指针维护一个滑动窗口
// 移动右指针，找到包含T的子串，移动左指针，尽量减少包含T的子串的长度
// 使用Map储存需要的所有字符的个数

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
```
# 349-两个数组的交集
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1), set2 = new Set(nums2)

    return [...set1].filter(item => set2.has(item))
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersectionByMap = function (nums1, nums2) {
    const map = new Map()
    for (let value of nums1) {
        map.set(value, true)
    }

    const res = []

    nums2.forEach(item => {
        if (map.get(item)) {
            res.push(item)
            map.delete(item)
        }
    })

    return res
};


/** 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * 不考虑输出顺序
 */
console.log(intersectionByMap([1, 2, 2, 1], [2, 2]));
```