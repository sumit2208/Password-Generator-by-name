const range = document.getElementById('range');
const Length = document.getElementById('length');

const Passwordcontainer = document.getElementById('Password');
const UpperCase = document.getElementById('UpperCase');
const LowerCase = document.getElementById('LowerCase');
const Symbols = document.getElementById('Symbols');
const Numbers = document.getElementById('Numbers');

const UpperCase_Length = "ABCDEFGHIJKLMNOPQRSTYZ";
const LowerCase_Length = 'abcdefghijklmnopqrstuvwxyz';
const Numbers_Length = "1234567890";
const Symbols_Length = "@#$%^&*()_+=/?";
const result = document.getElementById('result');

const copy = document.getElementById("copy");

function GeneratePassword() {
    
    const name = document.getElementById('name').value
    let password = name;
    let all = "";
    // input length should be between 4 to 20
    if (Length.value >= 4 && Length.value <= 20) {
        if (Length.value >= 12) {
            result.textContent = "Very Strong"
        }
        
        if (Length.value <= 10) {
            result.textContent = " Strong"
        }
        if (Length.value <= 8) {
            result.textContent = " Better"
        }
        if (Length.value < 8) {
            result.textContent = " Weak"
        }
        if (UpperCase.checked) {
            all += UpperCase_Length;
        }
        if (LowerCase.checked) {
            all += LowerCase_Length;
        }
        if (Symbols.checked) {
            all += Symbols_Length;
        }
        if (Numbers.checked) {
            all += Numbers_Length;
        }
        // if all the checkbox is unchecked
        if (UpperCase.checked == false && LowerCase.checked == false && Symbols.checked == false && Numbers.checked == false) {
            alert("plaese Check Atleast One box")

        }
        // password range is Length.value - name.length 
        else {
            
            for (i = 0; i < Length.value - name.length; i++) {
                password += all[Math.floor(Math.random() * all.length)]
            }
            Passwordcontainer.textContent =  `${password} `;
            Passwordcontainer.appendChild(copy);
            copy.style.display="inline"
        }
    }
    else {
        alert("Password Length range is  4 to 20")
    }

    // copy the password

     copy.addEventListener('click', function () {
        const range = document.createRange();
        range.selectNode(Passwordcontainer);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand("copy");

        window.getSelection().removeAllRanges();
        Passwordcontainer.style.color = "white";
    });
}

// range bar = number box

range.addEventListener('input', function () {
    Length.value = this.value
})

Length.addEventListener('input', function () {
    const value = parseInt(this.value);
    if (value >= 4 && value <= 20) {
        range.value = value;
    }
})

// skeleton remove after page load .... Delay 1s   

const allskeleton = document.querySelectorAll('.skeleton');
const skeleton2 = document.querySelectorAll('.skeleton2');

window.addEventListener('load', () => {
    setTimeout(() => {
        allskeleton.forEach(item => {
            item.classList.remove('skeleton');
        })
    }, 750);
})

window.addEventListener('load', () => {
    setTimeout(() => {
        skeleton2.forEach(item => {
            item.classList.remove('skeleton2')
        })
    }, 750);
})





















