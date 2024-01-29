const hr=document.getElementById('hour')
const mi=document.getElementById('minute')
const se=document.getElementById('second')
const task=document.getElementById('task')
const description=document.getElementById('description')
let duration
var table = document.getElementById("myTable");
var toggle = document.getElementById("toggle");

function addElement()
{
    table.innerHTML += `<tr><td>${task.value}</td><td>${description.value}</td><td>${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}</td> </tr>`
    task.value=""
    description.value=""
    
}
toggle.addEventListener('click', toggleInterval)

let s = 0
let m = 0
let h = 0
let intervalId
function toggleInterval() {
    if (toggle.textContent === 'Start') {
        s=0
        m=0
        h=0
        intervalId = setInterval(function() {
            s++
            if(s >= 60) {
                s=0
                m++
            }
            if(m >= 60){
                h++;
                m=0;
            }
           se.textContent = s.toString().padStart(2, '0')
           mi.textContent = m.toString().padStart(2, '0')
           hr.textContent = h.toString().padStart(2, '0')
        },1000)
        toggle.style.setProperty('background-color','red')
        toggle.textContent = 'Stop';

    } 
    else if(toggle.textContent === 'Stop'){
        se.textContent = '00'
        mi.textContent = '00'
        hr.textContent = '00'
        clearInterval(intervalId);
        toggle.style.setProperty('background-color','#2e63e7')
        toggle.textContent = 'Start';
        addElement()
    }
}





