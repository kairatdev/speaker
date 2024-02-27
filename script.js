let main = document.createElement("div");
main.className = "hero";

let h1 = document.createElement("h1");
h1.innerHTML = "Text To Speech";

let span = document.createElement("span");
span.id = "span";
span.textContent= "Converter";

let textarea = document.createElement("textarea");
textarea.placeholder = "Write anything here...";

let row = document.createElement("div");
row.className = "row";

let select = document.createElement("select");


let btn = document.createElement("button");
btn.innerHTML="Listen";

let img = document.createElement("img")
img.src = "images.png"
img.className = "imgsize"

main.append(h1);
h1.append(span);

btn.prepend(img)
main.append(textarea);

main.append(row);

row.append(select);
row.append(btn);



document.body.prepend(main);

let voices = [];

let voiceSelect  = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0]

    voices.forEach((voice,i) => (voiceSelect.options[i]=new Option(voice.name,i)))
}

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
})
let speech = new SpeechSynthesisUtterance();
document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})
