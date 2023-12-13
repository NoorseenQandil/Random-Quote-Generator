speechBtn       = document.querySelector(".speech"),         // Catch an element with "speech" class
copyBtn         = document.querySelector(".copy"),           // Catch an element with "copy" class
twitterBtn      = document.querySelector(".twitter"),        // Catch an element with "twitter" class
synth           = speechSynthesis;                           // Web Speech API

// Speech Button
speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

// Copy Button
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(`${quoteText.innerText} by ${authorName.innerText}`);
});

// Twitter Button
twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});