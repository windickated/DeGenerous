import { consoleContainer, consoleImageContainer, consoleButtons } from "./script.js";
import { activeEpisode, storyNumber, lastStoryNumber } from "./episodes.js";


// Console panel object
export const consolePanel = {
  consoleButtons: [
    {
      id: "conexus",
      image: "/public/governanceHubAssets/conexus.png",
      hover: "/public/governanceHubAssets/conexus-hover.png",
      click: "/public/governanceHubAssets/conexus-active.png",
      size: "big"
    },
    {
      id: "back",
      image: "/public/governanceHubAssets/back.png",
      hover: "/public/governanceHubAssets/back-hover.png",
      click: "/public/governanceHubAssets/back-active.png",
      size: "small"
    },
    {
      id: "omnihub",
      image: "/public/governanceHubAssets/omnihub.png",
      hover: "/public/governanceHubAssets/omnihub-hover.png",
      click: "/public/governanceHubAssets/omnihub-active.png",
      size: "big"
    },
    {
      id: "forward",
      image: "/public/governanceHubAssets/forward.png",
      hover: "/public/governanceHubAssets/forward-hover.png",
      click: "/public/governanceHubAssets/forward-active.png",
      size: "small"
    },
    {
      id: "sagaverse",
      image: "/public/governanceHubAssets/sagaverse.png",
      hover: "/public/governanceHubAssets/sagaverse-hover.png",
      click: "/public/governanceHubAssets/sagaverse-active.png",
      size: "big"
    }],

    renderConsolePanel() {
      let html = '';
      let consoleImageFile;
      if(window.outerWidth <= 600) {
        consoleImageFile = '/public/governanceHubAssets/consoleMobile.avif';
      } else {
        consoleImageFile = '/public/governanceHubAssets/console.avif';
      }
      html += `<img src="${consoleImageFile}" alt="Console" id="console"></img>`;
      consoleImageContainer.innerHTML = html;
    },

    renderConsoleButtons() {
      let html = '';
      for(let i in this.consoleButtons) {
        html += `<img src="/public/governanceHubAssets/${this.consoleButtons[i].id}.png" data-name="${this.consoleButtons[i].id}" class="console-btn ${this.consoleButtons[i].size}">`;
      }
      consoleContainer.innerHTML = html;
    },

    addConsoleListeners() {

      consoleButtons.forEach( (button) => {
        button.addEventListener('mouseenter', () => {
          button.src = `/public/governanceHubAssets/${button.dataset.name}-hover.png`;
        })
        button.addEventListener('mouseout', () => {
          button.src = `/public/governanceHubAssets/${button.dataset.name}.png`;
        })
        button.addEventListener('mousedown', () => {
          button.src = `/public/governanceHubAssets/${button.dataset.name}-active.png`;
        })
        button.addEventListener('mouseup', () => {
          button.src = `/public/governanceHubAssets/${button.dataset.name}-hover.png`;
        })
        button.addEventListener('touchstart', () => {
          button.src = `/public/governanceHubAssets/${button.dataset.name}-hover.png`;
        })
        button.addEventListener('touchend', () => {
          button.src = `/public/governanceHubAssets/${button.dataset.name}.png`;
        })
        button.addEventListener('click', () => {
          switch (button.dataset.name) {
            case 'conexus': 
              window.open('https://conexus.degenerousdao.com/', '_blank');
              break;
            case 'back': 
            if(storyNumber != 1) {
              activeEpisode(storyNumber - 2);
            }
              break;
            case 'omnihub': 
              //window.open();
              break;
            case 'forward':
              if(storyNumber != lastStoryNumber) {
                activeEpisode(storyNumber);
              }
              break;
            case 'sagaverse':
              window.open('https://degenerousdao.com/', '_blank');
              break;
          }
        })
      })
    
      // Inactive Omnihub button
      consoleButtons[2].src = '/public/governanceHubAssets/omnihub-inactive.png';
      consoleButtons[2].style.pointerEvents = 'none'
    
    }
}

export default consolePanel;