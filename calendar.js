const calendar=document.getElementById('calendar');
for(let i=1;i<=30;i++){
const day=document.createElement('div');
day.innerText=i;
day.onclick=()=>day.classList.toggle('booked');
calendar.appendChild(day);
}