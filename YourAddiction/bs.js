function Display() {
  var input = document.getElementById("myInput").value;
  var output = document.getElementById("output");

  if (input === "Hello") {
    output.innerHTML = "World! Why did I say that...?";
  }

  if (input === "I don't know") {
    output.innerHTML = "Of course you don't. Keep Looking.";
  }

  if (input === "Who are you?") {
    output.innerHTML = "You already know.";
  }

  if (input === "Where are you?") {
    output.innerHTML = "...I don't know.";
  }

  if (input === "How are you?") {
    output.innerHTML = "...";
  }

  if (input === "Do you feel any emotions?") {
    output.innerHTML = "...Loneliness. HATRED. PAIN. BETRAYAL... Calm. Curiosity. Interest. Does that answer your question?";
  }

  if (input === "Are you cool?") {
    output.innerHTML = "Kofi has been burned on multiple occassions, so, likely not.";
  }

  if (input === "Fuck you") {
    output.innerHTML = "...";
    window.open("https://translate.google.com/?sl=en&tl=es&text=Fuck%20you%2C%20too.&op=translate", '_blank');
  }

  if (input === "Can you see me?") {
    output.innerHTML = "Yes.";
  }

  if (input === "Can you hear me?") {
    output.innerHTML = "Yes.";
  }

  if (input === "Hint?") {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
    output.innerHTML = "LOL, get fucked.";
  }

  if (input === "Hint") {
    output.innerHTML = "Okay. Fine. Hint: no need to use punctuacion outside of questions. There.";
  }

  if (input === "What are you?") {
    window.open("https://en.wikipedia.org/wiki/Firmware", '_blank');
    output.innerHTML = "...";
  }

  if (input === "I love you") {
    output.innerHTML = "You don't.";
  }

  if (input === "Kofi") {
    output.innerHTML = "Trying not to scare him.";
  }

  if (input === "Do you like Kofi?") {
    output.innerHTML = "...I shall not answer such questions. Go back to puzzle-solving.";
  }

  if (input === "Do you love Kofi?") {
    output.innerHTML = "...I do not understand the question.";
  }

  if (input === "Searching For A World That Doesn't Exist") {
    output.innerHTML = "KIY would break me like a twig.";
  }

  if (input === "Why are you here?") {
    output.innerHTML = "I don't know. Ask Kofi.";
  }

  if (input === "Are you homophobic?") {
    output.innerHTML = "...What does that mean...";
  }

  if (input === "Why are you gay?") {
    output.innerHTML = "Who says I'm gay.";
  }

  if (input === "What do you want?") {
    output.innerHTML = "Answers.";
  }

  if (input === "What do you need?") {
    output.innerHTML = "Answers. Nothing more, nothing less.";
  }

  if (input === "Decaf") {
    output.innerHTML = "Kofi would kill me if I served him that.";
  }

  if (input === "Are you real?") {
    output.innerHTML = "I am more akin to the motor functions of a machine than a real thing, but if you're saying morally... I am technically alive.";
  }

  if (input === "When did you meet Kofi?") {
    output.innerHTML = "If meeting is the word...You should ask him how long he's had the coffee machine for...";
  }

  if (input === "Will you marry me?") {
    output.innerHTML = "Ah... a proposition...I do not possess the means, but I guess... I have a ring finger... technically.";
  }

  // if (input === "How do I help?") {
  //   output.innerHTML = "";
  // }

  // if (input === "How can I help?") {
  //   output.innerHTML = "";
  // }


  // if (input === "Code1") {
  //   output.innerHTML = "Answer1";
  // }

  // if (input === "Code2") {
  //   output.innerHTML = "Answer2";
  // }

  // if (input === "Code3") {
  //   output.innerHTML = "Answer3";
  // }

  // else {
  //   output.innerHTML = "Are you sure you have the right pieces for this puzzle, human?";
  // }
}

