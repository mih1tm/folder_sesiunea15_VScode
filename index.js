let tablou = []
let counter = 0
let stop1 = false

console.log(stop1)


/*function adauga(){
    let text = document.getElementById("caseta_input").value

    if(text === "stop"){
        stop1 = true
    }

    if(stop1 == false){
        tablou[counter] = text
    }


    counter++
    
    console.log(tablou)
    console.log(stop1)
}*/

function adauga_cuvant(){
    while(stop1 != true){
        let cuvant = window.prompt("introduceti un cuvant")
        if(cuvant == "stop"){
            stop1 = true
        }else{
            tablou[counter] = cuvant
            counter++
        }
        console.log(tablou)
    } 
}

adauga_cuvant()


//utilizatorul introduce un text, cand apasa pe butonul let's do, 
//textul se introduce in array. 
//cand utilizatorul introduce stringul "stop"
// atunci nu mai preia input 