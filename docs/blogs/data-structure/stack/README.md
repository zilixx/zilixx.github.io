---
title: 栈相关算法题
---
[[toc]]
# 20-有效的括号
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