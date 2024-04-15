const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileKeyWords = [];

r1.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  profileKeyWords.push(answer);

  r1.question("What's an activity you like doing?", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    profileKeyWords.push(answer);

    r1.question("What do you listen to while doing that?", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      profileKeyWords.push(answer);

      r1.question("Which meal is your favorite(eg: dinner, brunch, etc.)?", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        profileKeyWords.push(answer);

        r1.question("What's your favourite thing to eat for that meal?", (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          profileKeyWords.push(answer);

          r1.question("Which sport is your absolute favourite?", (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            profileKeyWords.push(answer);

            r1.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              profileKeyWords.push(answer);

              console.log(`${profileKeyWords[0]} loves to ${profileKeyWords[1]} while listening to ${profileKeyWords[2]}, devouring ${profileKeyWords[4]} for ${profileKeyWords[3]}, prefers ${profileKeyWords[5]} over any other sport and is amazing at ${profileKeyWords[6]}.`);

              r1.close();
            });
          });
        });
      });
    });
  });
});