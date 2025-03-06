const numberInput = document.getElementById('age')
const checkButton = document.getElementById('check')
var resultBox = document.getElementById('result')



checkButton.onclick = function () {

    if( numberInput.value >=18 && numberInput.value <=40){
        resultBox.innerText = 'شما جوان هستید'
    }
    if(numberInput.value >=41 && numberInput.value <=60){
        resultBox.innerText = 'سن شما پُخته هستید'
    }
    if(numberInput.value >=60 && numberInput.value <=10000){
        resultBox.innerText = 'شما کهن سال هستید'

    }
    if(numberInput.value >=1 && numberInput.value <=10){
        resultBox.innerText = 'شما  طفل هستید'

    }
    if(numberInput.value >=11 && numberInput.value <=17){
        resultBox.innerText = 'شما  نوجوان هستید'

    }

}

 
