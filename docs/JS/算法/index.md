---
  title: 算法
---

## 插入排序

```js
  var arr = [2,1,3,6,8,2,0,5,21,5,33,7,8]
    function insertionStor(arr){
        var len = arr.length;
        var perIndex,current;
        for(var i = 1;i<len;i++){
            perIndex = i-1;
            current = arr[i];
            while(perIndex >= 0 && arr[perIndex] > current){
                arr[perIndex+1] = arr[perIndex];
                perIndex--;
            }
            arr[perIndex+1] = current;
        }
          
        return console.log(arr);
    }
    insertionStor(arr);
```


## 冒泡排序

```js
//对数组中元素进行排序
var arr = [20, 3, 99, 17, 57];
//按照从小到大的顺序进行排序
//从元素中找到当前的最大元素,将它添加到新数组中
// var newArr = []; //用来存放排序后的元素
// for (var j = 0; j < arr.length; j++) {
//     var max = arr[0];
//     for (var i = 0;i<arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//         j--;
//     }
//     newArr.unshift(max);
//     arr.splice( arr.indexOf(max),1)
// }
// console.log(newArr)

//如何交换两个变量的值
	// var a = 10,
	//     b = 20;
	// var t = a;
	// a = b;
	// b = t;

//冒泡排序:通过两两比价,位置交换,将最大或最小的元素放在末尾实现排序
	for(var j=0;j<arr.length-1;j++){//五个数比四回结果就出来了
		for(var i=0;i<arr.length-1-j;i++){
			if(arr[i] > arr[i+1]){ //如果第一个数比第二个数大,那么交换两个数的位置.
				var t= arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = t;
			}
		}
	}
console.log(arr);
```