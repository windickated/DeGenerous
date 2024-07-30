import { consoleContainer, consoleImageContainer, consoleButtons } from "./script.js";
import { activeEpisode, storyNumber, lastStoryNumber } from "./episodes.js";


// Console panel object
export const consolePanel = {
  consoleButtons: [
    {
      id: "conexus",
      image: "/DeGenerous/governanceHubAssets/conexus.avif",
      hover: "/DeGenerous/governanceHubAssets/conexus-hover.avif",
      click: "/DeGenerous/governanceHubAssets/conexus-active.avif",
      size: "big"
    },
    {
      id: "back",
      image: "/DeGenerous/governanceHubAssets/back.avif",
      hover: "/DeGenerous/governanceHubAssets/back-hover.avif",
      click: "/DeGenerous/governanceHubAssets/back-active.avif",
      size: "small"
    },
    {
      id: "omnihub",
      image: "/DeGenerous/governanceHubAssets/omnihub.avif",
      hover: "/DeGenerous/governanceHubAssets/omnihub-hover.avif",
      click: "/DeGenerous/governanceHubAssets/omnihub-active.avif",
      size: "big"
    },
    {
      id: "forward",
      image: "/DeGenerous/governanceHubAssets/forward.avif",
      hover: "/DeGenerous/governanceHubAssets/forward-hover.avif",
      click: "/DeGenerous/governanceHubAssets/forward-active.avif",
      size: "small"
    },
    {
      id: "sagaverse",
      image: "/DeGenerous/governanceHubAssets/sagaverse.avif",
      hover: "/DeGenerous/governanceHubAssets/sagaverse-hover.avif",
      click: "/DeGenerous/governanceHubAssets/sagaverse-active.avif",
      size: "big"
    }],

    renderConsolePanel() {
      let html = '';
      let consoleImageFile;
      if(window.outerWidth <= 600) {
        consoleImageFile = '/DeGenerous/governanceHubAssets/consoleMobile.avif';
      } else {
        consoleImageFile = '/DeGenerous/governanceHubAssets/console.avif';
      }
      html += `<img src="${consoleImageFile}" alt="Console" id="console"></img>`;
      consoleImageContainer.innerHTML = html;
    },

    renderConsoleButtons() {
      let html = '';
      for(let i in this.consoleButtons) {
        html += `<img src="/DeGenerous/governanceHubAssets/${this.consoleButtons[i].id}.avif" data-name="${this.consoleButtons[i].id}" class="console-btn ${this.consoleButtons[i].size}">`;
      }
      consoleContainer.innerHTML = html;
    },

    addConsoleListeners() {

      consoleButtons.forEach( (button) => {
        button.addEventListener('mouseenter', () => {
          button.src = `/DeGenerous/governanceHubAssets/${button.dataset.name}-hover.avif`;
        })
        button.addEventListener('mouseout', () => {
          button.src = `/DeGenerous/governanceHubAssets/${button.dataset.name}.avif`;
        })
        button.addEventListener('mousedown', () => {
          button.src = `/DeGenerous/governanceHubAssets/${button.dataset.name}-active.avif`;
        })
        button.addEventListener('mouseup', () => {
          button.src = `/DeGenerous/governanceHubAssets/${button.dataset.name}-hover.avif`;
        })
        button.addEventListener('touchstart', () => {
          button.src = `/DeGenerous/governanceHubAssets/${button.dataset.name}-hover.avif`;
        })
        button.addEventListener('touchend', () => {
          button.src = `/DeGenerous/governanceHubAssets/${button.dataset.name}.avif`;
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
      consoleButtons[2].src = '/DeGenerous/governanceHubAssets/omnihub-inactive.avif';
      consoleButtons[2].style.pointerEvents = 'none'
    
    }
}

export default consolePanel;