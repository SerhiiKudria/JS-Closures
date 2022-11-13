/*
Измените пример с занятия по замыканию (counter) так, чтобы при каждом вызове 
значение счетчика менялось не на 1, а на переданное пользователем число 
(передать его при вызове внешней функции customCounter).
*/
function customCounter1(inc) {
  let i = 0;
  return function () {
    return (i += inc);
  };
}
const myCounter = customCounter1(5);
const result1 = myCounter(); // => 5
console.log("result1", result1);
const result2 = myCounter(); // => 10
console.log("result2", result2);
const result3 = myCounter(); // => 15
console.log("result3", result3);
/*
* Измените пример с занятия по замыканию (counter) так, чтобы пользователь задавал
начальное значение счетчика (в примере с занятия это 0)
и
шаг изменения счетчика (в примере с занятия это 1).

Пример использования:
const myCounter = customCounter2(1, 5);
const result1 = myCounter();  // => 6
const result2 = myCounter();  // => 11
const result3 = myCounter();  // => 16

В ОТЛАДЧИКЕ отследить переменные, которые находятся в ЗАМЫКАНИИ.
*/
function customCounter2(begin, inc) {
  let i = begin;
  return function () {
    return (i += inc);
  };
}
const myCounter2 = customCounter2(1, 5);
const result12 = myCounter2(); // => 5
console.log("result1", result12);
const result22 = myCounter2(); // => 10
console.log("result2", result22);
const result32 = myCounter2(); // => 15
console.log("result3", result32);
