const accountId = 12443
let accountEmai= "ramesh123@gmail.com"
var accountPassword= "55553"
accountCity= "Lucknow"
/*
preferred not to use var because 
of issue in block scope and functional scope
*/
var accountState
accountEmai= "ria@gmail.com"
accountPassword= "94544"
accountCity= "kerela"
 // accountId= 531344
console.log(accountId);
console.table([accountId,accountEmai,accountPassword,accountCity,accountState])
