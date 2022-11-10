alert ("You need to decide which book to read. Your options are Percy Jackson, Six of Crows, and Harry Potter.")

let Action_SoC = prompt("Do you (1) like heroes in action, or do you like (2) Murder Mysteries?")
if(Action_SoC == 2){
    alert("You will like Six of Crows")
} else{
    let PJO_HP = prompt("Do you like (1) physical combat, or do you like (2) magical combat?")
    if(PJO_HP==1){
        alert("You will like Percy Jackson")
    } else{
        alert("You will like Harry Potter")
    }
}
