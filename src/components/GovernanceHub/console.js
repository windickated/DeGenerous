import { consoleContainer, consoleImageContainer, consoleButtons } from "./script.js";
import { activeEpisode, storyNumber, lastStoryNumber } from "./episodes.js";


// Console panel object
export const consolePanel = {
  consoleButtons: [
    {
      id: "conexus",
      image: "/governanceHubAssets/conexus.avif",
      hover: "/governanceHubAssets/conexus-hover.avif",
      click: "/governanceHubAssets/conexus-active.avif",
      size: "big"
    },
    {
      id: "back",
      image: "/governanceHubAssets/back.avif",
      hover: "/governanceHubAssets/back-hover.avif",
      click: "/governanceHubAssets/back-active.avif",
      size: "small"
    },
    {
      id: "omnihub",
      image: "/governanceHubAssets/omnihub.avif",
      hover: "/governanceHubAssets/omnihub-hover.avif",
      click: "/governanceHubAssets/omnihub-active.avif",
      size: "big"
    },
    {
      id: "forward",
      image: "/governanceHubAssets/forward.avif",
      hover: "/governanceHubAssets/forward-hover.avif",
      click: "/governanceHubAssets/forward-active.avif",
      size: "small"
    },
    {
      id: "sagaverse",
      image: "/governanceHubAssets/sagaverse.avif",
      hover: "/governanceHubAssets/sagaverse-hover.avif",
      click: "/governanceHubAssets/sagaverse-active.avif",
      size: "big"
    }],

    renderConsolePanel() {
      let html = '';
      let consoleImageFile;
      if(window.outerWidth <= 600) {
        consoleImageFile = '/governanceHubAssets/consoleMobile.avif';
      } else {
        consoleImageFile = '/governanceHubAssets/console.avif';
      }
      html += `<img src="${consoleImageFile}" alt="Console" id="console"></img>`;
      consoleImageContainer.innerHTML = html;
    },

    renderConsoleButtons() {
      let html = '';
      for(let i in this.consoleButtons) {
        html += `<img src="/governanceHubAssets/${this.consoleButtons[i].id}.avif" data-name="${this.consoleButtons[i].id}" class="console-btn ${this.consoleButtons[i].size}">`;
      }
      consoleContainer.innerHTML = html;
    },

    addConsoleListeners() {

      consoleButtons.forEach( (button) => {
        button.addEventListener('mouseenter', () => {
          button.src = `/governanceHubAssets/${button.dataset.name}-hover.avif`;
        })
        button.addEventListener('mouseout', () => {
          button.src = `/governanceHubAssets/${button.dataset.name}.avif`;
        })
        button.addEventListener('mousedown', () => {
          button.src = `/governanceHubAssets/${button.dataset.name}-active.avif`;
        })
        button.addEventListener('mouseup', () => {
          button.src = `/governanceHubAssets/${button.dataset.name}-hover.avif`;
        })
        button.addEventListener('touchstart', () => {
          button.src = `/governanceHubAssets/${button.dataset.name}-hover.avif`;
        })
        button.addEventListener('touchend', () => {
          button.src = `/governanceHubAssets/${button.dataset.name}.avif`;
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
      consoleButtons[2].src = '/governanceHubAssets/omnihub-inactive.avif';
      consoleButtons[2].style.pointerEvents = 'none'
    
    }
}

export default consolePanel;