const allBtn = document.getElementsByClassName('add-btn');

let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        count = count + 1;

        const seatName = event.target.innerText;
        // console.log(seatName)
        const selectedSeat = document.getElementById('seat-name');

        const p = document.createElement('p');
        p.innerText = seatName;
        
        selectedSeat.appendChild(p);

        setInnerText('seat-count',count)
    });
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}