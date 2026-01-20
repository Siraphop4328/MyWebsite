let balance = 0;
const symbols = ['💀', '😍', '🤑', '😡', '😂', '😫'];
const betAmount = 2500;

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

function spin()
{
    if (balance < betAmount) {
        document.getElementById('result').textContent = 'เงินสุทธิไม่เพียงพอ กรุณาเติมเงิน';
        return;
    }

    balance -= betAmount;

    let slot1 = symbols[Math.floor(Math.random() * symbols.length)];
    let slot2 = symbols[Math.floor(Math.random() * symbols.length)];
    let slot3 = symbols[Math.floor(Math.random() * symbols.length)];

    document.getElementById('slot1').textContent = slot1;
    document.getElementById('slot2').textContent = slot2;
    document.getElementById('slot3').textContent = slot3;

    checkWin(slot1, slot2, slot3);

    document.getElementById('display').textContent = '฿ ' + balance;

}

function checkWin(slot1, slot2, slot3)
{
    let resultText = document.getElementById('result');

    if (slot1 === slot2 && slot2 === slot3) {
        let winAmount = 99999;
        balance += winAmount;
        resultText.textContent = 'JACKPOT เเตก!' + winAmount;
        resultText.style.color = 'yellow';
    }
    else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3){
        let winAmount = 4000;
        balance += winAmount;
        resultText.textContent = 'ชนะ! ฿' + winAmount;
        resultText.style.color = 'green';
    }
    else{
        resultText.textContent = 'เสีย!';
        resultText.style.color = 'red';
    }
}