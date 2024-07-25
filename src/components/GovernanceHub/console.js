import { consoleContainer, consoleImageContainer, consoleButtons } from "./script.js";
import { activeEpisode, storyNumber, lastStoryNumber } from "./episodes.js";


// Console panel object
export const consolePanel = {
  consoleButtons: [
    {
      id: "conexus",
      image: "/public/governanceHubAssets/conexus.avif",
      hover: "/public/governanceHubAssets/conexus-hover.avif",
      click: "/public/governanceHubAssets/conexus-active.avif",
      size: "big"
    },
    {
      id: "back",
      image: "/public/governanceHubAssets/back.avif",
      hover: "/public/governanceHubAssets/back-hover.avif",
      click: "/public/governanceHubAssets/back-active.avif",
      size: "small"
    },
    {
      id: "omnihub",
      image: "/public/governanceHubAssets/omnihub.avif",
      hover: "/public/governanceHubAssets/omnihub-hover.avif",
      click: "/public/governanceHubAssets/omnihub-active.avif",
      size: "big"
    },
    {
      id: "forward",
      image: "/public/governanceHubAssets/forward.avif",
      hover: "/public/governanceHubAssets/forward-hover.avif",
      click: "/public/governanceHubAssets/forward-active.avif",
      size: "small"
    },
    {
      id: "sagaverse",
      image: "/public/governanceHubAssets/sagaverse.avif",
      hover: "/public/governanceHubAssets/sagaverse-hover.avif",
      click: "/public/governanceHubAssets/sagaverse-active.avif",
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
        html += `<img src="/public/governanceHubAssets/${this.consoleButtons[i].id}.avif" data-name="${this.consoleButtons[i].id}" class="console-btn ${this.consoleButtons[i].size}">`;
      }
      consoleContainer.innerHTML = html;
    },

    addConsoleListeners() {

      consoleButtons.forEach( (button) => {
        button.addEventListener('mouseenter', () => {
          button.src = `/public/governanceHubAssets/${button.dataset.name}-hover.avif`;
        })
        button.addEventListener('mouseout', () => {
          button.src = `/public/governanceHubAssets/${button.dataset.name}.avif`;
        })
        button.addEventListener('mousedown', () => {
          button.src = `/public/governanceHubAssets/${button.dataset.name}-active.avif`;
        })
        button.addEventListener('mouseup', () => {
          button.src = `/public/governanceHubAssets/${button.dataset.name}-hover.avif`;
        })
        button.addEventListener('touchstart', () => {
          button.src = `/public/governanceHubAssets/${button.dataset.name}-hover.avif`;
        })
        button.addEventListener('touchend', () => {
          button.src = `/public/governanceHubAssets/${button.dataset.name}.avif`;
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
      consoleButtons[2].src = '/public/governanceHubAssets/omnihub-inactive.avif';
      consoleButtons[2].style.pointerEvents = 'none'
    
    }
}

export default consolePanel;