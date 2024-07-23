let intervalNFTs;
let finalPositionNFTs;
let intervalEpisodes;
let finalPositionEpisodes;

export const sidePanelIcon = document.querySelector('.panel-icon');
const sidePanelBar = document.querySelector('.side-panel');

export const otherEpisodesIcon = document.querySelector('.story-nodes-icon');
const otherEpisodesContainer = document.querySelector('.story-nodes-container');

const panelBG = document.querySelector('.side-panel-bg');


// Side panel object
export const sidePanel = {
  panelState: false,
  open() {
    this.changeIconState();
    otherEpisodesIcon.style.zIndex = '19';
    document.body.style.overflowY = 'hidden';
    panelBG.style.display = 'block';
    finalPositionNFTs = 0;
    clearInterval(intervalNFTs);
    if(window.outerWidth <= 600) {
      otherEpisodesIcon.src = '/public/GovernanceHubAssets/episodesMobileOpen-Inactive.png';
      if(episodesPanel.panelState) {
        episodesPanel.panelState = false;
        otherEpisodesContainer.style.top = '-80%';
        sidePanelBar.style.top = '0';
      } else {
        intervalNFTs = setInterval(slidePanelMobile, 5);
      }
    } else {
      closePanel(episodesPanel);
      intervalNFTs = setInterval(slidePanelPC, 5);
    }
    this.panelState = true;
  },
  close() {
    this.changeIconState();
    document.body.style.overflowY = 'auto';
    panelBG.style.display = 'none';
    finalPositionNFTs = 80;
    clearInterval(intervalNFTs);
    if(window.outerWidth <= 600) {
      otherEpisodesIcon.src = '/public/GovernanceHubAssets/episodesMobileOpen.png';
      intervalNFTs = setInterval(slidePanelMobile, 5);
    } else {
      intervalNFTs = setInterval(slidePanelPC, 5);
    }
    this.panelState = false;
  },
  changeIconState() {
    if(window.outerWidth <= 600) {
      if(this.panelState) {
        sidePanelIcon.src = '/public/GovernanceHubAssets/sideIconMobileOpen.png';
      } else {
        sidePanelIcon.src = '/public/GovernanceHubAssets/sideIconMobileClose.png';
      }
    } else {
      if(this.panelState) {
        sidePanelIcon.src = '/public/GovernanceHubAssets/sideIconPCOpen.png';
      } else {
        sidePanelIcon.src = '/public/GovernanceHubAssets/sideIconPCClose.png';
      }
    }
  }
}

// Utility functions for side panel

function slidePanelPC() {
  if(sidePanel.panelState) {
    if(finalPositionNFTs == 80) {
      clearInterval(intervalNFTs);
    } else {
      finalPositionNFTs += 4;
      sidePanelIcon.style.right = `${finalPositionNFTs}vw`;
      sidePanelBar.style.right = `${finalPositionNFTs - 80}vw`;
    }
  } else {
    if(finalPositionNFTs == 0) {
      clearInterval(intervalNFTs);
    } else {
      finalPositionNFTs -= 4;
      sidePanelIcon.style.right = `${finalPositionNFTs}vw`;
      sidePanelBar.style.right = `${finalPositionNFTs - 80}vw`;
    }
  }
}

function slidePanelMobile() {
  if(sidePanel.panelState) {
    if(finalPositionNFTs == 80) {
      clearInterval(intervalNFTs);
    } else {
      finalPositionNFTs += 4;
      sidePanelIcon.style.top = `${finalPositionNFTs}%`;
      sidePanelBar.style.top = `${finalPositionNFTs - 80}%`;
      // Moving another icon down with opening panel
      if(!episodesPanel.panelState) {
        otherEpisodesIcon.style.top = `${finalPositionNFTs}%`;
      }
    }
  } else {
    if(finalPositionNFTs == 0) {
      clearInterval(intervalNFTs);
    } else {
      finalPositionNFTs -= 4;
      sidePanelIcon.style.top = `${finalPositionNFTs}%`;
      sidePanelBar.style.top = `${finalPositionNFTs - 80}%`;
      if(!episodesPanel.panelState) {
        otherEpisodesIcon.style.top = `${finalPositionNFTs}%`;
      }
    }
  }
}



// Episodes panel object
export const episodesPanel = {
  panelState: false,
  open() {
    this.changeIconState();
    otherEpisodesIcon.style.zIndex = '30';
    document.body.style.overflowY = 'hidden';
    panelBG.style.display = 'block';
    finalPositionEpisodes = 0;
    clearInterval(intervalEpisodes);
    if(window.outerWidth <= 600) {
      sidePanelIcon.src = '/public/GovernanceHubAssets/sideIconMobileOpen-Inactive.png';
      if(sidePanel.panelState) {
        sidePanel.panelState = false;
        sidePanelBar.style.top = '-80%';
        otherEpisodesContainer.style.top = '0';
      } else {
        intervalEpisodes = setInterval(slideEpisodesPanelMobile, 5);
      }
    } else {
      closePanel(sidePanel);
      intervalEpisodes = setInterval(slideEpisodesPanelPC, 5);
    }
    this.panelState = true;
  },
  close() {
    this.changeIconState();
    otherEpisodesIcon.style.zIndex = '19';
    document.body.style.overflowY = 'auto';
    panelBG.style.display = 'none';
    clearInterval(intervalEpisodes);
    if(window.outerWidth <= 600) {
      sidePanelIcon.src = '/public/GovernanceHubAssets/sideIconMobileOpen.png';
      finalPositionEpisodes = 80;
      intervalEpisodes = setInterval(slideEpisodesPanelMobile, 5);
    } else {
      finalPositionEpisodes = 44;
      intervalEpisodes = setInterval(slideEpisodesPanelPC, 5);
    }
    this.panelState = false;
  },
  changeIconState() {
    if(window.outerWidth <= 600) {
      if(this.panelState) {
        otherEpisodesIcon.src = '/public/GovernanceHubAssets/episodesMobileOpen.png';
      } else {
        otherEpisodesIcon.src = '/public/GovernanceHubAssets/episodesMobileClose.png';
      }
    } else {
      if(this.panelState) {
        otherEpisodesIcon.src = '/public/GovernanceHubAssets/episodesPCOpen.png';
      } else {
        otherEpisodesIcon.src = '/public/GovernanceHubAssets/episodesPCClose.png';
      }
    }
  }
}

// Utility functions for panel object

export function closePanel(panel) {
  if(panel.panelState) {
    panel.close();
    panelBG.style.display = 'block';
  }
}

function slideEpisodesPanelPC() {
  if(episodesPanel.panelState) {
    if(finalPositionEpisodes == 40) {
      clearInterval(intervalEpisodes);
    } else {
      finalPositionEpisodes += 4;
      otherEpisodesIcon.style.left = `${finalPositionEpisodes + 4}vw`;
      otherEpisodesContainer.style.left = `${finalPositionEpisodes - 40}vw`;
    }
  } else {
    if(finalPositionEpisodes == 0) {
      clearInterval(intervalEpisodes);
    } else {
      finalPositionEpisodes -= 4;
      otherEpisodesIcon.style.left = `${finalPositionEpisodes}vw`;
      otherEpisodesContainer.style.left = `${finalPositionEpisodes - 44}vw`;
    }
  }
}

function slideEpisodesPanelMobile() {
  if(episodesPanel.panelState) {
    if(finalPositionEpisodes == 80) {
      clearInterval(intervalEpisodes);
    } else {
      finalPositionEpisodes += 4;
      otherEpisodesIcon.style.top = `${finalPositionEpisodes}%`;
      otherEpisodesContainer.style.top = `${finalPositionEpisodes - 80}%`;
      // Moving another icon down with opening panel
      if(episodesPanel.panelState) {
        sidePanelIcon.style.top = `${finalPositionEpisodes}%`;
      }
    }
  } else {
    if(finalPositionEpisodes == 0) {
      clearInterval(intervalEpisodes);
    } else {
      finalPositionEpisodes -= 4;
      otherEpisodesIcon.style.top = `${finalPositionEpisodes}%`;
      otherEpisodesContainer.style.top = `${finalPositionEpisodes - 80}%`;
      if(!episodesPanel.panelState) {
        sidePanelIcon.style.top = `${finalPositionEpisodes}%`;
      }
    }
  }
}