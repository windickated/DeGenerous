import { displayContainer, displayImageContainer, formatButton, voteButton, storyText, videoFrame } from "./script.js";
import { clickedOption, inactiveOptions } from "./story.js";
import { undefinedOption } from "./sidepanel.js";


// Display screen object
const displayScreen = {
  displayButtons: [
  {
    id: "switcher",
    video: "/governanceHubAssets/video.avif",
    text: "/governanceHubAssets/text.avif",
    videoHover: "/governanceHubAssets/video-hover.avif",
    textHover: "/governanceHubAssets/text-hover.avif"
  },
  {
    id: "vote",
    image: "/governanceHubAssets/vote-clickable.avif",
    hover: "/governanceHubAssets/vote-hover.avif",
    click: "/governanceHubAssets/vote-active.avif",
    inactive: "/governanceHubAssets/vote-inert.avif"
  }],

  renderDisplayScreen() {
    let html = '';
    let displayScreenImage;
    let displayScreenBG;
    if(window.outerWidth <= 600) {
      displayScreenImage = '/governanceHubAssets/displayMobile.avif';
      displayScreenBG = '/governanceHubAssets/displayMobileBG.avif';
    } else {
      displayScreenImage = '/governanceHubAssets/display.avif';
      displayScreenBG = '/governanceHubAssets/displayBG.avif';
    }
    html += `
      <img src="${displayScreenImage}" alt="Display" id="display"></img>
      <img src="${displayScreenBG}" id="display-bg">`;
    displayImageContainer.innerHTML = html;
  },

  renderDisplayButtons() {
    let html = '';
    html += `<img src="${this.displayButtons[0].video}" class="display-btn format">`;
    html += `<img src="${this.displayButtons[1].inactive}" class="display-btn vote">`;
    displayContainer.innerHTML = html;
  },

  changeButtonState() {
    if(clickedOption) {
      if(!undefinedOption) {
        voteButton.src = this.displayButtons[1].image;
      } else {
        voteButton.src = this.displayButtons[1].click;
      }
    } else {
    voteButton.src = this.displayButtons[1].inactive;
    }
  },

  addDisplayListeners() {

    formatButton.addEventListener('mouseenter', () => {
      if(formatButton.src.includes(displayScreen.displayButtons[0].video)) {
        formatButton.src = displayScreen.displayButtons[0].textHover;
      } else {
        formatButton.src = displayScreen.displayButtons[0].videoHover;
      }
    })
  
    formatButton.addEventListener('mouseout', () => {
      if(formatButton.src.includes(displayScreen.displayButtons[0].textHover)) {
        formatButton.src = displayScreen.displayButtons[0].video;
      } else if(formatButton.src.includes(displayScreen.displayButtons[0].videoHover)){
        formatButton.src = displayScreen.displayButtons[0].text;
      }
    })
  
    formatButton.addEventListener('click', () => {
      if(formatButton.src.includes(displayScreen.displayButtons[0].textHover) || formatButton.src.includes(displayScreen.displayButtons[0].video)) {
        formatButton.src = displayScreen.displayButtons[0].text;
        storyText.style.visibility = 'visible';
        videoFrame.style.visibility = 'hidden';
      } else {
        formatButton.src = displayScreen.displayButtons[0].video;
        storyText.style.visibility = 'hidden';
        videoFrame.style.visibility = 'visible';
      }
    })
  
    voteButton.addEventListener('mouseenter', () => {
      if(voteButton.src.includes(displayScreen.displayButtons[1].image)) {
          voteButton.src = displayScreen.displayButtons[1].hover;
      }
    })
  
    voteButton.addEventListener('mouseout', () => {
      if(voteButton.src.includes(displayScreen.displayButtons[1].hover)) {
        voteButton.src = displayScreen.displayButtons[1].image;
      }
    })
  
    voteButton.addEventListener('click', () => {
      if(voteButton.src.includes(displayScreen.displayButtons[1].hover)) {
        voteButton.src = displayScreen.displayButtons[1].click;
        inactiveOptions();
      }
    })
  
  }
}

export default displayScreen;