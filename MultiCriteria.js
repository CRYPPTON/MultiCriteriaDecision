
/* 
-   task add matrix maker
-   add weight for each alternative ***
*/
var table = [
        [250,16,12,5],
        [200,16,8,3],
        [300,32,16,4],
        [275,32,8,4],
        [225,16,16,2]
       
]

var non_beneficial = function(){
    var w = 0.25;                                  //set weight non_beneficial
        var nb = [];
        var min;
        for (let i = 0; i < table.length; i++) {
            nb.push(table[i][0])
        }
        min = Math.min(...nb)
        nb = nb.map(num => Number(((min/num)*w).toFixed(4)))
        return nb
}



var beneficial = function(){
    var w = 0.25;                            //set weight beneficial
    var b = [[],[],[]];
    for (let i = 0; i < table.length; i++) {
        b[0].push(table[i][1])
        b[1].push(table[i][2])
        b[2].push(table[i][3])
    }
    var max1 = Math.max(...b[0])
    var max2 = Math.max(...b[1])
    var max3 = Math.max(...b[2])
    var max = [max1,max2,max3]

for (let i = 0; i < b.length; i++) {
    b[i] = b[i].map(num => Number(((num/max[i])*w).toFixed(4)))
 }
   return b
}

var nb = [non_beneficial()]
var b = beneficial()

var normalized = nb.concat(b)


var t = function(m){
    var matrix = [[],[],[],[],[]];
    for (let i = 0; i < normalized[0].length-1; i++) {
        for (let j = 0; j < normalized[0].length; j++) {
            matrix[j].push(normalized[i][j])
        }
    }
    console.log("matrica je :")
    return matrix
}

// transponse var t = normalized[0].map((_, colIndex) => normalized.map(row => row[colIndex]));

console.log("normalizovana")

var m = t();
var res = []
for (let i = 0; i < m.length; i++) {

    var sum = m[i].reduce(function(a, b){
        return a + b;
    }, 0);
    res.push(sum.toFixed(4));
}

console.log(res)


