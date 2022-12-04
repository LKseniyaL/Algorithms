
// 1) function test1(n)
// {
//    if (n==1) 
//       return;
//    for (i=1; i<=n; i++)
//        for (j=n; j>=1; j--)
//            console.out("*");
// }
// time complexity  O(n2)
// space complexity O(1)


// 2) function test2( n)
// {
//    let a = 0;
// for (i = 0; i < n; i++)
//    for (j = n; j > i; j--)
//        a = a + i + j;
// }
// time complexity  O(n2)
// space complexity O(1)



// 3) function test3( n)
// {
//    let i, j, a = 0;
// for (i = n/2; i <=n; i++)
//    for (j = 2; j <=n; j=j*2)
//        a=a+n/2;
// }
// time complexity  O(n)
// space complexity O(1)



// Задачка со звёздочкой
// *
// 4)function test4( n)
// {
//    let a = 0, i = n;
// while (i > 0) {
//    a += i;
//    i /= 2;
// }
// }
// time complexity  O(log n)
// space complexity O(1)



// Сам алгоритм (+ разбирали на уроке, функция test11):
// 1) Проверяем, что в массиве хотя бы один елемент, если нет, возвращаем -1 
// 2)Берём элемент из середины массива
// 2) Сравниваем его с искомым (key)
// 3) Если ключ больше, чем найденный элемент, то повторяем процедуру для правой половины массива
//  Если ключ меньше, чем найденный элемент, то повторяем процедуру для левой половины массива

// const arr = [10,20,30,20,10];
// const key = 0;

// function binarySearch(sortedArr, key) {
// let start = 0;
// let end = sortedArr.length -1;

// if(sortedArr.length === 0){
//     return -1;
// }

// while(start <= end){ 
// let middle = Math.round((start + end) / 2);
// let value = sortedArr[middle];

// if(value === key){
//     return value;
// }
// if(value > key){
//     end = middle - 1;
// }
// else{
//     start = middle + 1;
// }
// }
// return 0;
// }
// console.log(binarySearch(arr, key));









