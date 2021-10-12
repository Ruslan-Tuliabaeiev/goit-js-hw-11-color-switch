
import refs from './refs.js'

const {
 
  startBtn, stopBtn,  body 
} = refs
  




const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  


  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

 

  

const timerColor = {
  isActive: false,
  start() {
    if (this.isActive) {return}
    this.isActive = true
    this.switchColor = setInterval(() =>{
      const min = 0
      const max = colors.length - 1
      let i = randomIntegerFromInterval(min, max)
      refs.body.style.backgroundColor = colors[i]
    }, 1000 )
  },
  stop() {
   clearInterval(this.switchColor),
   this.isActive = false
  },
}





  refs.startBtn.addEventListener('click', timerColor.start.bind(timerColor)),
  refs.stoptBtn.addEventListener('click', timerColor.stop.bind(timerColor))
  


