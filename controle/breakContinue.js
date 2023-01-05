const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if(x == 5){
        break //Chega no indice 4 e para 
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('Fim do BREAK')

for(y in nums){
    if(y == 5){
        continue //Chega no indice 4, pula o 5, e continua
    }
    console.log(`${y} = ${nums[y]}`)
}

//ROTULANDO UM FOR
externo: for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3) break externo // Quando atingir 2, 2, ele para
        console.log(`Par = ${a}, ${b}`)
    }
}