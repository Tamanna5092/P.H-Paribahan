const allBtn = document.getElementsByClassName('add-btn');

let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        count = count + 1;

        const seatName = event.target.innerText;
        // console.log(seatName)

        const selectedSeat = document.getElementById('seat-name');
        const economyClass = document.getElementById('economoy');
        const price = document.getElementById('price');

        const li = document.createElement('li');
        li.innerText = seatName;
        
        const li2 = document.createElement('li');
        li2.innerText = 'Economoy';

        const li3 = document.createElement('li');
        li3.innerText = '550'

        selectedSeat.appendChild(li);
        economyClass.appendChild(li2);
        price.appendChild(li3)

        setInnerText('seat-count',count)
    });
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}