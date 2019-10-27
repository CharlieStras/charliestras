---
title: "删除数组中的重复项"
date: "2019-10-29"
---

## 背景

这个需求来源于 PA990PRO 的评估测试，工程师需要 Laboman 这边给大概 100 个标本下指令。但标本号可能存在重复的情况，需要在下指令之前排除出重复的标本。

由于 Laboman 目前没有功能可以直接实现此需求，故考虑通过 JS 来生成这些标本的指令，我们收到的带有标本号的文件大体上是这样的格式：

```none
1100198712
3230299473
1100188834
421908291156
1100195434
1100188576
421908281242
421908191255
421908051149
1100188578

421908191275
421908021147
1100187936
1100193473
1100187692
1100196285
421908071181
1100193424
1100191373
421908211058

```

假定文件的内容存储于变量`all`中，可以将其转换为数组，并去除其中的空项目：

```js
var allArr = all.split("\n")
allArr = allArr.filter(item => item.length > 0)
```

## 方法

接下来要做的就是去除`allArr`中重复的标本号

1. 使用`filter`和`indexOf`

   ```js
   const allUnique = allArr.filter(
     (item, index) => allArr.indexOf(item) == index
   )
   ```

2. 使用一个`object`来记录项目是否出现

   ```js
   var unique = {}
   allArr.forEach(item => {
     if (!unique[item]) {
       unique[item] = true
     }
   })
   const allUnique = Object.keys(unique)
   ```

3. 使用`Set`来创建一个集合，再将集合的里的项目导入数组

   ```js
   const allUnique = [...new Set(allArr)]
   ```

## 总结

三种方法中使用集合的方法是相对简易的方法，考虑到通用性，可以将这一功能整合为一个函数：

```js
function removeDupicates(arr) {
  return [...new Set(arr)]
}
```

不过目前在做评估测试时，通过这种方式生成指令还是不够便捷。如果可能的话，是不是可以通过导入带有所有标本号的文件或者直接通过扫码枪扫码，在 Laboman 中批量下指令？
