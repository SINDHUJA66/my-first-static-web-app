let currentState = "start";

let gameData = {
  start: {
    text: "You wake up in a mysterious mansion. Choose your actions wisely to escape.",
    choices: ["Explore the Hallway", "Go to the Basement"],
    consequences: ["exploreHallway", "goToBasement"],
    image: "https://static.wikia.nocookie.net/suspects/images/e/e0/Mansion%2A.jpg/revision/latest?cb=20230203202049",
  },
  exploreHallway: {
    text: "You explore the dimly lit hallway. What do you want to do?",
    choices: ["Open the Door on the Left", "Continue Down the Hall"],
    consequences: ["openLeftDoor", "continueDownHall"],
    image: "https://preview.redd.it/1lgkv9jg9yi31.jpg?width=1080&crop=smart&auto=webp&s=74727c095a174b0f0222782f84d1c3f69c8ae54a",
  },
  openLeftDoor: {
    text: "You open the door on the left and find a hidden passage. Where does it lead?",
    choices: ["Secret Room", "Trap Door"],
    consequences: ["secretRoom", "trapDoor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Rome_passetto_night_inside.jpg/800px-Rome_passetto_night_inside.jpg",
  },
  secretRoom: {
    text: "You discover a secret room with valuable treasures. Congratulations!",
	choices: [""],
    image: "https://news.artnet.com/app/news-upload/2021/09/NINTCHDBPICT000677990029-1024x585.jpeg",
  },
  trapDoor: {
    text: "The trap door leads to a dark abyss. You fall into the unknown. Game over!",
	choices: [""],
    image: "https://ichef.bbci.co.uk/images/ic/1200x675/p06mf70k.jpg",
  },
  continueDownHall: {
    text: "You continue down the hall and find a locked door. What's your next move?",
    choices: ["Find the Key", "Return to the Hallway"],
    consequences: ["findKey", "returnHallway"],
    image: "https://deshannonspeaks.files.wordpress.com/2015/06/locked-doors-2.jpg",
  },
  findKey: {
    text: "You successfully find the key and unlock the door. What awaits you inside?",
    choices: ["Escape Route", "Monster"],
    consequences: ["escapeRoute", "encounterMonster"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5_DqeqZn0GP5kwGYTvCc9emcngFyywDMHQ&usqp=CAU",
  },
  escapeRoute: {
    text: "Congratulations! You find a secret escape route and successfully leave the mansion.",
	choices: [""],
    image: "https://ridewithgps.com/photos/12256552/large.jpg?0",
  },
  encounterMonster: {
    text: "Oh no! You encounter a terrifying monster. Game over!",
	choices: [""],
    image: "https://blog.stremio.com/wp-content/uploads/2018/10/PunpkinHead.jpg",
  },
  returnHallway: {
    text: "You decide to return to the hallway. What's your next move?",
    choices: ["Explore the Hallway"],
    consequences: ["exploreHallway"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Royal_York_Hallway.JPG",
  },
  goToBasement: {
    text: "You decide to go to the basement. What's your next move?",
    choices: ["Explore the Cellar", "Check the Boiler Room"],
    consequences: ["exploreCellar", "checkBoilerRoom"],
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdba954f-a7f5-417a-9337-8b719326f6be/de9b1pt-8d28e87a-d125-4030-ab36-32e7c0a1e78b.jpg/v1/fill/w_1280,h_854,q_75,strp/free_dark_basement_background__by_lewis4721_de9b1pt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvY2RiYTk1NGYtYTdmNS00MTdhLTkzMzctOGI3MTkzMjZmNmJlXC9kZTliMXB0LThkMjhlODdhLWQxMjUtNDAzMC1hYjM2LTMyZTdjMGExZTc4Yi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Xn9r5oO8eV30VZLr3RRzFy_axXcYYLurnjS9ci-4RtY",
  },
  exploreCellar: {
    text: "The cellar is filled with ancient artifacts. What do you want to do?",
    choices: ["Inspect the Artifacts", "Search for an Exit"],
    consequences: ["inspectArtifacts", "searchExitCellar"],
    image: "https://i.insider.com/650aca3d12dc4f001a170a3a?width=1000&format=jpeg&auto=webp",
  },
  inspectArtifacts: {
    text: "You learn about the history of the mansion and successfully escape.",
	choices: [""],
    image: "https://www.blacklightattractions.com/wp-content/gallery/cellar-escape-game/Cellar-Escape-01.jpg",
  },
  searchExitCellar: {
    text: "You find a hidden exit in the cellar. Congratulations!",
	choices: [""],
    image: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/12/896/500/iStock-183900819.jpg?ve=1&tl=1",
  },
  checkBoilerRoom: {
    text: "You decide to check the boiler room. What do you find?",
    choices: ["Malfunctioning Boiler", "Secret Passage"],
    consequences: ["malfunctioningBoiler", "secretPassage"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR35XB8SHQ2Xrj20CUSPYjlHHzASfR9Q76S5Q&usqp=CAU",
  },
  malfunctioningBoiler: {
    text: "The malfunctioning boiler explodes. Game over!",
	choices: [""],
    image: "https://azertag.az/files/2019/1/1200x630/1548524619261556937_1200x630.jpg",
  },
  secretPassage: {
    text: "You discover a secret passage. Where does it lead?",
    choices: ["Escape Route", "Underground Tunnel"],
    consequences: ["escapeRoute", "undergroundTunnel"],
    image: "https://images.pond5.com/ancient-secret-passage-footage-032499584_iconl.jpeg",
  },
  undergroundTunnel: {
    text: "The tunnel leads to safety. Congratulations!",
	choices: [""],
    image: "https://www.ripleys.com/wp-content/uploads/2022/08/shutterstock_532096693-e1660665080750.jpg",
  },
};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  console.log("Updating image to:", stage.image);
  document.getElementById("story-image").src = stage.image;
}

startGame();
