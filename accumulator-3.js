let lang = ['java','js','python','golang','c++','kotlin','swift','flutter','php'];
let accumulator = [];

for(i=0;i<lang.length;i++){
    if(lang[i].length > 3){
        accumulator.push(lang[i]);
    }
 
}
console.log(accumulator);

