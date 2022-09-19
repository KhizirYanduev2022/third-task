let arr = ['Khizir','Said','Malik','Deni','Rizvan','Adam','Umar','Rizvan','Rasul','Alvi'];
let accumulator = []
for(i=0;i<arr.length;i++){
    if(arr[i][0]=='A'){
  accumulator.push(arr[i])
    }
}
console.log(accumulator)