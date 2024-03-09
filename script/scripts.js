const allBtn = document.getElementsByClassName('add-btn');

let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        count = count + 1;

        const totalSeat = document.getElementById('seat-left').innerText
        const totalSeatLeft = totalSeat - 1;
        if(totalSeatLeft <= 0){
            alert('No seat available')
        }
        
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
        console.log(li3)

        selectedSeat.appendChild(li);
        economyClass.appendChild(li2);
        price.appendChild(li3);
  
        totalCost('total-cost', li3.innerText);
        grandTotalCost('grand-total', li3.innerText);
        
        setInnerText('seat-count',count);
        setInnerText('seat-left',totalSeatLeft);
    });
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

function totalCost(id,value){
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    setInnerText('total-cost',sum);
}

function grandTotalCost(category){
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);
    
    if(category == 'NEW15'){
        setInnerText('grand-total',convertedTotalCost - (totalCost * 15 / 100));
    }
    else if(category == 'Couple20'){
        setInnerText('grand-total',convertedTotalCost - (totalCost * 20 / 100));
    }
    else{
        setInnerText('grand-total',convertedTotalCost);
    }
}

function nextButton(){
    const ticketSectionContainer = document.getElementById('ticker-section-container');
    ticketSectionContainer.classList.add('hidden');
    const bookingSection = document.getElementById('booking-section');
    bookingSection.classList.remove('hidden');
}