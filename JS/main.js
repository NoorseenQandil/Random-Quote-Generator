var quotes = [
    {
      quote: `"The future depends on what we do in the present."`,
    },
    {
      quote: `"It’s easy to stand in the crowd but it takes courage to stand alone."`,
    },
    {
      quote: `"Our greatest ability as humans is not to change the world, but to change ourselves."`,
    },
    {
      quote: `"Service without humility is selfishness and egotism."`,
    },
    {
      quote: `"It does not require money to live neat, clean, and dignified."`,
    },
    {
      quote: `"Speak only if it improves upon the silence."`,
    },
    {
      quote: `"Satisfaction lies in the effort, not in the attainment."`,
    },
    {
      quote: `"Relationships are based on four principles: respect, understanding, acceptance and appreciation."`,
    },
    {
      quote: `"Hate the sin, love the sinner." `,
    },
    {
      quote: `"It’s easy to stand with the crowd. It takes courage to stand alone."`,
    },
    {
      quote: `"Strength does not come from physical capacity. It comes from an indomitable will."`,
    },
    {
      quote: `"Strength does not come from winning. When you go through hardships and decide not to surrender, that is strength."`,
    },
    {
      quote: `"Carefully watch your thoughts, for they become your words. Manage and watch your words, for they will become your actions. Consider and judge your actions, for they have become your habits. Acknowledge and watch your habits, for they shall become your values. Understand and embrace your values, for they become your destiny."`,
    },
    {
      quote: `"The enemy is fear. We think it is hate; but, it is fear."`,
    },
    {
      quote: `"Seek not greater wealth, but simpler pleasure; not higher fortune, but deeper felicity."`,
    },
    {
      quote: `"Be the change you are trying to create."`,
    },
    {
      quote: `"Our greatest ability as humans is not to change the world, but to change ourselves."`,
    },
    {
      quote: `"In doing something, do it with love or never do it at all."`,
    },
    {
      quote: `"There are two days in the year that we can not do anything, yesterday and tomorrow."`,
    },
    {
      quote: `"There is a sufficiency in the world for man’s need but not for man’s greed."`,
    },
    {
      quote: `"Happiness is when what you think, what you say, and what you do are in harmony."`,
    },
    {
      quote: `"Those who know how to think need no teachers."`
    },
    {
      quote: `"Healthy discontent is the prelude to progress."`
    },
    {
      quote: `"Peace is its own reward."`
    },
    {
      quote: `"I am a humble but very earnest seeker after truth."`
    },
    {
      quote: `"Imitation is the sincerest flattery."`
    },
    {
      quote: `"To give pleasure to a single heart by a single act is better than a thousand heads bowing in prayer."`
    },
    {
      quote: `"Every home is a university and the parents are the teachers."`
    },
    {
      quote: `"There is no ‘way to peace', there is only ‘peace’."`
    },
    {
      quote: `"Nothing is impossible for pure love."`
    },
    {
      quote: `"True beauty consists of purity of heart."`
    },
    {
      quote: `"Action expresses priorities."`
    },
    {
      quote: `"Compassion is a muscle that gets stronger with use."`
    },
    {
      quote: `"Self-respect knows no considerations."`
    },
    {
      quote: `"Find purpose. The means will follow."`
    }
  ];
  
  const quoteText = document.querySelector(".quote-content"),
    quoteBtn = document.querySelector(".gnBtn"),
    author = document.querySelector(".author"),
    speechBtn = document.querySelector(".speech"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter"),
    synth = speechSynthesis;
  
  let currentQuoteIndex=-1;
  
  const getRandomQuoteIndex = () => {
    let newIndex = Math.floor(Math.random() * quotes.length);
    // Ensure the new index is different from the current one
    while (newIndex === currentQuoteIndex) {
      newIndex = Math.floor(Math.random() * quotes.length);
    }
    currentQuoteIndex = newIndex;
    console.log(newIndex);
    return currentQuoteIndex;
  };
  
  quoteBtn.addEventListener("click", function () {
    let randomQuotesIndex = getRandomQuoteIndex();
    quoteText.innerHTML = quotes[randomQuotesIndex].quote;
  });

  // Speech Button
  speechBtn.addEventListener("click", () => {
    if (!quoteBtn.classList.contains("loading")) {
      let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
      synth.speak(utterance);
      setInterval(() => {
        !synth.speaking
          ? speechBtn.classList.remove("active")
          : speechBtn.classList.add("active");
      }, 1);
    }
  });
  
  // Copy Button 
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`${quoteText.innerText} by ${author.innerText}`);
  });
  
  // Twitter Button
  twitterBtn.addEventListener("click", ()=>{
      let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
      window.open(tweetUrl, "_blank");
  });
  
  // quoteBtn.addEventListener("click", randomQuote);




