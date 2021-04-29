const date = new Date();

const currentDate = new Date().getDate();
console.log(currentDate);
const currentMonth = new Date().getMonth();
console.log(currentMonth);

const renderCalendar = () => {

  date.setDate(1);

  const monthDays = document.querySelector('.days');

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector('.date p').innerHTML = new Date().toDateString();

  let days = "";

  for(let j = firstDayIndex; j > 0; j--) {
      days += `<div class= "prev-date">${prevLastDay - j + 1}</div>`;
  }

  for(let i = 1; i <= lastDay; i++) {
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
      days += `<div class = "today">${i}</div>`;
    }
    else if (i < new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class = "past-date">${i}</div>`;
    }
    else{
      days += `<div>${i}</div>`;
    }
  }

  for(let k = 1; k <=nextDays; k++) {
    days += `<div class = "next-date">${k}</div>`;
    monthDays.innerHTML = days;
  }

};

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1)
  renderCalendar();
})

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1)
  renderCalendar();
})
renderCalendar();

const open = document.getElementById('open');
const schedule_container = document.getElementById('schedule_container');
const close = document.getElementById('close');

const confirm_container = document.getElementById('confirm_container');
const open_confirm = document.getElementById('open_confirm');
const yes = document.getElementById('yes');
const no = document.getElementById('no');

open.addEventListener('click', () => {
  schedule_container.classList.add('show');
})

open_confirm.addEventListener('click', () => {
  if(schedule_container.classList.contains('show')) {
      confirm_container.classList.add('show');
  }
})

yes.addEventListener('click', () => {
  confirm_container.classList.remove('show');
  schedule_container.classList.remove('show');
})

no.addEventListener('click', () => {
  confirm_container.classList.remove('show');
  schedule_container.classList.remove('show');
})

close.addEventListener('click', () => {
  schedule_container.classList.remove('show');
  confirm_container.classList.remove('show');
})
