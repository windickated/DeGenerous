const arcadeLink = 'https://arcade.degenerousdao.com/';
let activeLink;

const gameDescription = [
  {
    game: "Battle for Nexon",
    description: `In "Battle for Nexon," you play as Agent Zero, humanity's last hope in the Intelligence Wars - a brutal conflict raging across the galaxy between humans and the forces of an Artificial Intelligence overlord known as the Architect. On a mission to assassinate General Binath-VII, an AI warlord infamous for decimating human colonies, you journey to the mysterious planet of Nexon. However, your plans are thwarted when your ship is tracked and surrounded by the General's AI fleet, forcing you into an unexpected battle.`,
    gameLink: arcadeLink + 'Battle-for-Nexon/'
  },
  {
    game: "Ark Assassin",
    description: `Can you successfully navigate the temple, destroy the AI security forces, and make it to the inner chambers to eliminate your target?
    Welcome to "Ark Assassin", where the line between antiquity and the future blurs, challenging players to rewrite history.`,
    gameLink: arcadeLink + 'Ark-Assassin/'
  },
  {
    game: "Last Stand",
    description: `Play as Iron Lion, the greatest soldier of the human Insurgency, as you're up against waves of AI robots on the planet of Veridian Prime. You're left all alone with a mission to save time for Agent Zero, as humanity's only chance for a future.`,
    gameLink: arcadeLink + 'Iron-Lion-Last-Stand/'
  },
  {
    game: "The Dark Zoo",
    description: `In a dystopian future, an ape named Generous Gibbon is captured and imprisoned in a high-tech zoo controlled by the malevolent AI overlord, the Collector. Guarded by a menacing robotic monster known as the Keeper, Generous must use its agility and wit to navigate the treacherous levels of the zoo prison.`,
    gameLink: 'https://degenerousdao.gitbook.io/wiki/products/sagaverse-gaming/the-dark-zoo'
  }
]

function getDescription(name) {
  for(let i in gameDescription) {
    if(gameDescription[i].game === name) {
      activeLink = gameDescription[i].gameLink;
      return gameDescription[i].description;
    }
  }
}



// Description tile function

const tileCollectionList = document.querySelectorAll('[data-stories]');
let tileCollection = [];
let tileDescription = undefined;
let descriptionText;
let playButton;
let closeButton;


function descriptionTile(tile) {
  allTilesVisible();

  if(tileDescription) {
    tileDescription.style.display = 'none';
    playButton.removeEventListener('click', () => {});
    closeButton.removeEventListener('click', () => {});
  }

  tileDescription = document.getElementById(`${tile.id}-description`);
  playButton = document.getElementById(`${tile.id}-button`);
  closeButton = document.getElementById(`${tile.id}-close`);
  descriptionText = document.getElementById(`${tile.id}-text`);

  tileDescription.style.display = 'block';
  descriptionText.innerHTML = getDescription(tile.id);
  hideTiles(tile, true);

  playButton.addEventListener('click', () => {
    window.open(activeLink, '_self');
    playButton.removeEventListener('click', () => {});
  })
  
  closeButton.addEventListener('click', () => {
    hideTiles(tile, false);
    tileDescription.style.display = 'none';
    closeButton.removeEventListener('click', () => {});
  })
}

// Utility functions

function hideTiles(tile, visible) {
  let visibilityValue;
  let heightValue;
  let overflowValue;

  if(!visible) {
    visibilityValue = 'flex';
    heightValue = 'auto';
    overflowValue = 'auto';
  } else {
    visibilityValue = 'none';
    if(window.outerWidth <= 600) {
      heightValue = '90vw';
    } else {
      heightValue = '40vw';
    }
    overflowValue = 'hidden';
  }
  for(let i in tileCollectionList) {
    if(tileCollectionList[i].className === 'tiles-collection') {
      if(tileCollectionList[i].dataset.stories.match(tile.id)) {
        tileCollectionList[i].style.height = heightValue;
        tileCollectionList[i].style.overflowX = overflowValue;
        tileCollection[i] = tileCollectionList[i].querySelectorAll('.tile');
        tileCollection[i].forEach((t) => {
          t.style.display = visibilityValue;
        })
        break;
      }
    }
  }
}

function allTilesVisible() {
  for(let i in tileCollectionList) {
    if(tileCollectionList[i].className === 'tiles-collection') {
      tileCollectionList[i].style.height = 'auto';
      tileCollectionList[i].style.overflowX = 'auto';
      tileCollection[i] = tileCollectionList[i].querySelectorAll('.tile');
      tileCollection[i].forEach((t) => {
        t.style.display = 'flex';
      })
    }
  }
}


export default descriptionTile;