//全局函数

//console.log(global.parseInt(3.14));
//1.一次性定时器
//开启
var timer=setTimeout(function(){
  console.log('嘭嘭嘭！！');
},3000);
//清除
clearTimeout(timer);

//2.周期性定时器
//开启
var timer=setInterval(function(){
  console.log('滴滴滴！！');
},3000);
//清除
clearInterval(timer);
//练习：使用周期性定时器每隔3秒打印hello，打印三次后，清除定时器。
//初始化1个变量用于记录执行的次数
var i=0;
var timer=setInterval(function(){
  i++;
  console.log('hello');
  //当i为3的时候，清除定时器
  if(i==3){
    clearInterval(timer);
  }
},3000);*/
//立即执行
var timer=setImmediate(function(){
  console.log('嘟嘟嘟!!');
});
clearImmediate(timer);
process.nextTick(function(){
  console.log('滴答');
});
console.log(1);

var arr=new Array(-1);



