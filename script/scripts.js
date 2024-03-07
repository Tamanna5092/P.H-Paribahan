const allBtn = document.getElementsByClassName('add-btn');

let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        count = count + 1;

        const seatName = event.target.innerText;
        console.log()

        setInnerText('seat-count',count)
    });
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}