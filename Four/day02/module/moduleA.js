// 这是模块A
const a = 20;
// 把 a 暴露出去

const fun = (y) => {
  let x = 10;
  return x + y + a;
};
// 当输出的接口只有一个时,可以用 default
// default 在一个模块中只能用一次
export default fun;

/* export {
  // 直接写方法名
  fun
};

// 例子3
const fun1 = ()=>{};
const fun2 = ()=>{};
const fun3 = ()=>{};

export {
  fun1,
  fun2,
  fun3
}
 */