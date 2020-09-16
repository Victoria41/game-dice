
let count = 0;
let firstDice =  document.getElementById("first_div")
let secondDice = document.getElementById("second_div")
let arr = ["./images/1.svg","./images/2.svg","./images/3.svg","./images/4.svg","./images/5.svg","./images/6.svg"];
let point1 , point2, sum1 = 0, sum2 = 0

let gamer = 2;
let sumCount1 = 0;
let sumCount2 = 0;

let gamer1 = document.createElement("h1");
gamer1.innerHTML = "Gamer 1"


let gamer2 = document.createElement("h1");
gamer2.innerHTML = "Gamer 2"

gamer2.style.width = "330px";
gamer1.style.width = "330px";


document.getElementById("clear").addEventListener("click", NewGame )

function NewGame(){
    gamer1.innerHTML = "Gamer 1 "
    gamer2.innerHTML = "Gamer 2 "
    sum1 = 0;
    sum2 = 0;
    sumCount1 = 0;
    sumCount2 = 0;
    document.getElementById("count").innerHTML = 0;
    gamer1.innerHTML = "Gamer 1";
    gamer2.innerHTML = "Gamer 2"
}

document.getElementById("take").addEventListener("click", function(){
    if (gamer % 2 ==0){        
        sumCount1 = sumCount1 + sum1;
        gamer1.innerHTML = "Gamer 1 " + "have" + sumCount1 + " " + "points";
        sum1 = 0;
        document.getElementById("count").innerHTML = sum1;
        gamer++

        
    }else{
        sumCount2 = sumCount2 + sum2;
        gamer2.innerHTML = "Gamer 2 " + "have " + sumCount2 + " " + "points";
        sum2 = 0;
        document.getElementById("count").innerHTML = sum2;
        gamer++
    }
    if(sumCount1 >= MaxCount.value){
        setTimeout(function(){
            alert("Win Gamer1");
            NewGame()
        },1000)

    }else if(sumCount2 >= MaxCount.value){
        setTimeout(function(){
            alert("Win Gamer2");
            NewGame()
        },1000)
    }
})

let MaxCount = document.getElementById("maxCount");
let i = Math.ceil(Math.random() * 9);

function randomZar(){
   
    let firstCount = Math.ceil(Math.random() * 6);
    let secondCount = Math.ceil(Math.random() * 6);
    if(count < i){
        count++; 
        firstDice.style.backgroundImage = `url(${arr[firstCount-1]})`
        secondDice.style.backgroundImage = `url(${arr[secondCount-1]})`
        callback(count);
                
    } else{
    
        firstDice.style.backgroundImage = `url(${arr[firstCount-1]})`
        secondDice.style.backgroundImage = `url(${arr[secondCount-1]})`                 
        count = 0; 
        if(gamer% 2 == 0){

            if (firstCount==secondCount){
                sum1 = 0;
                document.getElementById("count").innerHTML = sum1;
                gamer++ 
            }else{
                point1 = firstCount+ secondCount;
                sum1 = sum1+point1;
                document.getElementById("count").innerHTML = sum1 
            }
            

        }else{

            if (firstCount==secondCount){
                sum2 = 0;   
                document.getElementById("count").innerHTML = sum2;
                            
                gamer++
            }else{
                point2 = firstCount+ secondCount;
                sum2 = sum2+point2;
                document.getElementById("count").innerHTML = sum2
            }

        } 

    } 


    

    
}


function callback(count){
    setTimeout(function interval(){
        randomZar(); 
          
    }, 500);
}



document.getElementById("gamers").appendChild(gamer1);
document.getElementById("gamers").appendChild(gamer2);






    




