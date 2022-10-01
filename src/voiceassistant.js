
const btn = document.getElementById("myBtn");
const btn1 = document.getElementById("myBtn1");
const btn2 = document.getElementById("myBtn2");
const content = document.querySelector('.content')

//answering
const name = [
  'My name is Shilia,your voice assistant',
  'I am shilia,your voice assistant',
  'Shilia here,your voice assistant',
  'Myself Shilia,your voice assistant'
]

const greetings = [
  'Hello',
  'Welcome',
  'Shilia,welcoming you',
  'warming welcome'
]

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()



btn.addEventListener('click', () => {
  
  const speech = new SpeechSynthesisUtterance()
  speech.text = "Hello, I'm your space assistant. I will guide you ISS";

  
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices.filter(function (voice) { return voice.name == 'Google UK English male'; })[0];


  // this features not work with this female voice
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);

})

btn1.addEventListener('click', () => {
  
    window.open("https://modelviewer.dev/editor/");
  
  })

  btn2.addEventListener('click', () => {
  
    window.open("https://api.nasa.gov/");
  
  })


