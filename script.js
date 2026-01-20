let balance = 0;
const symbols = ['💀', '😍', '🤑', '😡', '😂', '😫'];
const betAmount = 2599;

document.getElementById('result').textContent = "nul";

function showPopup()
{
    document.getElementById('popup').style.display = 'block';
}

function closePopup()
{
    document.getElementById('popup').style.display = 'none';
}

function addBalance(amount)
{
    document.getElementById('addmoneysound').cloneNode().play();
    balance += amount
    document.getElementById('display').textContent = '฿ ' + balance;
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function spin()
{
const spinButton = document.querySelector('button[onClick="spin()"]');

    if (balance < betAmount) {
        document.getElementById('losesound').cloneNode().play()
        document.getElementById('result').textContent = 'เงินสุทธิไม่เพียงพอ กรุณาเติมเงิน';
        return;
    }

    spinButton.disabled = true;
    balance -= betAmount;
    document.getElementById('addmoneysound').cloneNode().play()
    document.getElementById('result').textContent = 'กำลังปั่น...'
    document.getElementById('result').style.color = 'white';

    for (let i = 0; i < 15; i++){
        document.getElementById('slot1').textContent = symbols[Math.floor(Math.random() * symbols.length)];
        document.getElementById('slot2').textContent = symbols[Math.floor(Math.random() * symbols.length)];
        document.getElementById('slot3').textContent = symbols[Math.floor(Math.random() * symbols.length)];
        await sleep(70);
    }


    let slot1 = symbols[Math.floor(Math.random() * symbols.length)];
    let slot2 = symbols[Math.floor(Math.random() * symbols.length)];
    let slot3 = symbols[Math.floor(Math.random() * symbols.length)];

    document.getElementById('slot1').textContent = slot1;
    document.getElementById('slot2').textContent = slot2;
    document.getElementById('slot3').textContent = slot3;

    checkWin(slot1, slot2, slot3);

    document.getElementById('display').textContent = '฿ ' + balance;

    spinButton.disabled = false;
}

function checkWin(slot1, slot2, slot3)
{
    let resultText = document.getElementById('result');

    if (slot1 === slot2 && slot2 === slot3) {
        document.getElementById('jackpotsound').cloneNode().play()
        let winAmount = 99999;
        balance += winAmount;
        resultText.textContent = 'JACKPOT เเตก!' + winAmount;
        resultText.style.color = 'yellow';
    }
    else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3){
        document.getElementById('addmoneysound').cloneNode().play()

        let winAmount = 4000;
        balance += winAmount;
        resultText.textContent = 'ชนะ! ฿' + winAmount;
        resultText.style.color = 'green';
    }
    else{
        document.getElementById('losesound').cloneNode().play()
        resultText.textContent = 'เสีย!';
        resultText.style.color = 'red';
    }
}

function checkout()
{
    balance =0;
    document.getElementById('display').textContent = '฿ ' + balance;

}