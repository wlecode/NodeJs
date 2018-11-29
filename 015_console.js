//console对象
/*
global.console.log(123); //打印消息
global.console.info(123); //打印消息
global.console.warn(123); //打印警告消息
global.console.error(123);//打印错误消息
*/
//开始计时
global.console.time('for-loop');
for(var i=0;i<100000;i++){
}
//计时结束
global.console.timeEnd('for-loop');


global.console.time('while-loop');
var i=0;
while(i<100000){
  i++;
}
global.console.timeEnd('while-loop');


global.console.time('dowhile-loop');
var i=0;
do{
  i++;
}while(i<100000);
global.console.timeEnd('dowhile-loop');



