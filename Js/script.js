const container = document.querySelector('.container'),
input = document.querySelector('.form input'),
btn = container.querySelector('.form button'),
img = container.querySelector('.qr-code img');

btn.addEventListener('click', () => {
    let qrValue = input.value;
    if(!qrValue) return;
    btn.innerText = "Gerando..."
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    img.addEventListener('load', () =>{
        container.classList.add('active');
        btn.innerText="Gerar QR Code";
    })
});


input.addEventListener('keyup', ()=>{
    if(!input.value){
        container.classList.remove('active');
    }
})