//创建buffer
var buf=global.Buffer.alloc(5,'abcdef');
console.log(buf);
//将buffer转为普通字符
console.log(buf.toString());