
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

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

  const colorSwitch ={
    isRuning: false,
    timerId: null,
    
    runChangeThemeOnClick(){
        if(this.isRuning) return;
        startBtnRef.disabled = true;
        this.isRuning = true;
        this.timerId = setInterval(()=> {
            bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
        },1000);
    },
    stopChangeThemeOnClick(){
        clearInterval(this.timerId);
        startBtnRef.disabled = false;
        this.isRuning = false;
        this.timerId = null;
    },
  };
  startBtnRef.addEventListener('click', colorSwitch.runChangeThemeOnClick.bind(colorSwitch));
  stopBtnRef.addEventListener('click', colorSwitch.stopChangeThemeOnClick.bind(colorSwitch));

