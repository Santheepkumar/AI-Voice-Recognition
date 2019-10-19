const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const Recognition = new SpeechRecognition();

Recognition.onstart = function() {
    console.log("Voice is Activated, Start Talking");
};

Recognition.onresult = function(event) {
    console.log(event);

};

//Add Listener to Button

btn.addEventListener('click', () => {
    
    Recognition.start();
});