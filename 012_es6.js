//1.函数中的参数
/*
function add(a,b,c=0){//给c设置默认值
  return a+b+c;
}
var res=add(2,7,8);
console.log(res);

//2.模板字符串
var year=2018;
var month=10;
var date=19;
var hours=10;
var minutes=47;
var seconds=5;
console.log(`
${year}年'''
${month+1}月
${date}日
${hours}:${minutes}:
${seconds<10?'0'+seconds:seconds}
`);
*/
var emp={
  ename:'tom',
  sex:1,
  birthday:'1998-2-3',
  salary:8000
}
console.log(`姓名：${emp.ename}，
性别：${emp.sex==1?'男':'女'}，
生日：${emp.birthday}，工资：${emp.salary}`);
//ES6中console.log可以换行

