var resultArray;
var selectedElement;
var waitingforInput = false;
var selectedIndex;
var answerAttemptInRow = 0;
var numberGuessedCorrect = 0;
var attempt = 1;
function generateRandomNumber(min,max){
    var randomNumber= Math.floor(Math.random() * (max - min) + min).toString();
    resultArray = randomNumber.split("");
    console.log(resultArray);
}
generateRandomNumber(1111,9999);


function circleClicked(element,index){
   selectedElement = element;
   element.target.classList.add("wait");
   waitingforInput = true;
   selectedIndex = index;
}


function detectKeyPress(event){
    if(waitingforInput == true){
        if(event.keyCode >= 48 && event.keyCode <= 57){
            selectedElement.target.innerHTML = event.key;
            waitingforInput = false;
            selectedElement.target.classList.remove("wait");
            checkNumberExist(event.key,selectedIndex);
            answerAttemptInRow++;
            if(answerAttemptInRow == 4){
                attempt++;
                if(numberGuessedCorrect != 4){
                    generateCircle();
                }
                numberGuessedCorrect = 0;
                answerAttemptInRow = 0;
            }  
        }
    }
} 



function checkNumberExist(number,index){
    var isNumberPresent = resultArray.indexOf(number);
    console.log(isNumberPresent);
    if(isNumberPresent !== -1){
        if(isNumberPresent == selectedIndex){
            console.log("Number exist in Correct Place");
            selectedElement.target.classList.add("correct");
            numberGuessedCorrect++;
            if(numberGuessedCorrect == 4){
                console.log("Game Win");
                alert("Game win");
            }
        }else{
            console.log("Number Exist, But in different place");
            selectedElement.target.classList.add("existButWrong");
        }
    }else{
       console.log("Number not Exist");
       selectedElement.target.classList.add("wrong");
    }
}

function generateCircle(){
    document.getElementById("content").innerHTML +=`<div class="row text-center">
    <div class="col-lg-3"></div>
    <div class="col-lg-1 box-grid" onclick="circleClicked(event,'0')">
        
    </div>
    <div class="col-lg-1 box-grid" onclick="circleClicked(event,'1')">
        
    </div>
    <div class="col-lg-1 box-grid" onclick="circleClicked(event,'2')">
        
    </div>
    <div class="col-lg-1 box-grid" onclick="circleClicked(event,'3')">
        
    </div>
    
</div>`
}

 generateCircle();
