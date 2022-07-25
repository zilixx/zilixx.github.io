---
title: 链表相关算法题
---
[[toc]]
# 02-两数相加
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(0);
  let p1 = l1,
    p2 = l2,
    p3 = l3, // 指针
    next = 0, // 进位
    value1,
    value2;

  while (p1 || p2) {
    // 如果指针为空则value为0
    value1 = p1 ? p1.val : 0;
    value2 = p2 ? p2.val : 0;

    // 创建p3的next节点
    p3.next = new ListNode((value1 + value2 + next) % 10);
    // 进位计算
    next = ~~((value1 + value2 + next) / 10);

    // 指针移动下一位
    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
    p3 = p3.next;
  }

  // 计算结束后，如果还进位数则多开辟一个节点
  p3.next = next ? new ListNode(next) : null;

  return l3.next;
};

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
```
# 83-删除排序链表中的重复元素
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 升序排列链表，删除所有重复的元素，是每个元素只出现一次
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    let p = head
    while (p) {
        if (p.next && p.next.val === p.val) {
            p.next = p.next.next
        } else {  // 这里使用else是因为确保无多个重复值。e.g.[1,1,1]
            p = p.next
        }
    }

    return head
};
```
# 141-环形链表
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let p1 = head, p2 = head // 一快一慢两个指针

    while (p1 && p2 && p2.next) {
        p1 = p1.next // 一步
        p2 = p2.next.next // 两步
        if (p1 === p2) { // 如果指针相遇则有环
            return true
        }
    }

    return false
};
```
# 206-反转链表
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 双指针反转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null,
    cur = head,
    temp;

  while (cur) {
    temp = cur.next;

    // 当前节点next指针指向前一个节点
    cur.next = prev;

    // 前一个节点指针向后移
    prev = cur;

    // 当前指针向后移
    cur = temp;
  }

  return prev;
};

// 1->2->3->4->5->null
// null<-1     2->3->4->5
// null<-1<-2  3->4->5
// null<-1<-2<-3     4->5
// null<-1<-2<-3<-4     5
// null<-1<-2<-3<-4<-5
```

# 234-回文链表
```js
// 判断链表中元素是否是回文
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const arr = []
    while (head) { // 遍历链表，存储在数组中
        arr.push(head.val)
        head = head.next
    }

    // 判断数组中元素是否构成回文
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i] !== arr[j]) return false
    }

    return true
};

// 简洁做法
// 两个字符串
// 头插和尾插
// https://leetcode-cn.com/problems/palindrome-linked-list/solution/onshi-jian-fu-za-du-o1kong-jian-fu-za-du-by-zoubin/
const isPalindrome2 = (head) => {
    let a = '', b = ''

    while (head) {
        a = a + head.val
        b = head.val + b
        head = head.next
    }

    return a === b
}
```

# 237-删除链表的节点
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

// 4->5->1->9  删除5
// 4->1->1->9
// 4->1---->9
// 4->1->9
```
