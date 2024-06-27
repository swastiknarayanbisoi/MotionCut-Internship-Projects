/*----- MENU -----*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*----- CAMBIO COLORS -----*/
const sizes = document.querySelectorAll('.size__tallas');
const colors = document.querySelectorAll('.sneaker__color');
const sneaker = document.querySelectorAll('.sneaker__img');

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let sneakerColor = document.querySelector(`.sneaker__img[color="${color}"]`);

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);

    sneaker.forEach(s => s.classList.remove('shows'));
    sneakerColor.classList.add('shows')
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

//Quantity - Increment and Decrement

const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    Number = document.querySelector(".number");

    let a = 1;

    plus.addEventListener("click", ()=>
    {
        a++;
        a = (a<10)? "0" + a : a;
        Number.innerText = a;
        console.log(a);
    });

    minus.addEventListener("click", ()=>
    {
        if(a > 1)
        {
            a--;
            a = (a<10)? "0" + a : a;
            Number.innerText = a;
            console.log(a);
        }
    });

// Add to cart button alert
document.getElementById('cart').addEventListener('click', () => {
    alert('Your product has been added to the cart!');
});

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
// Tab buttons functionality
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        document.querySelector(`#${button.dataset.tab}`).classList.add('active');
    });
});

// Check pincode functionality
const pincodeInput = document.getElementById("pincode-input");
const checkPincodeBtn = document.getElementById("check-pincode");
const pincodeMessage = document.getElementById("pincode-message");

checkPincodeBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const pincode = pincodeInput.value.trim();
    const restrictedPincodes = ['764003', '764060', '764061'];

    if (pincode.length !== 6 || !/^\d+$/.test(pincode)) {
        pincodeMessage.textContent = "Please enter a valid 6-digit pincode.";
        pincodeMessage.style.color = "red";
        return;
    }

    if (restrictedPincodes.includes(pincode)) {
        pincodeMessage.textContent = "Sorry, delivery is not available to this pincode.";
        pincodeMessage.style.color = "red";
        return;
    }

    // Simulate checking delivery availability (replace with actual logic)
    setTimeout(function() {
        // Assuming delivery is available for demonstration
        pincodeMessage.textContent = "Delivery available to " + pincode + ".";
        pincodeMessage.style.color = "green";
    });

    pincodeInput.value = "";
});
