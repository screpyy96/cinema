const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seats:not(.ocuppied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value;
//update total price and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//movie select event
movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value
    updateSelectedCount();
})

//Seat click event
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('ocuppied')){
        e.target.classList.toggle('selected')
    }

    updateSelectedCount();
})