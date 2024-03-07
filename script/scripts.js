const allBtn = document.getElementsByClassName('add-btn');

let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        count = count + 1;
        console.log(count)
        document.getElementById('seat-count').innerText = count;
    });
}