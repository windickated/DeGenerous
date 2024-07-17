<script>
  export let storySection;
  export let storyName;
  const storyLink = storyName.replace(/\s+/g, '');

  const storyImage = `/conexusAssets/titlePicture/${storySection}/${storyLink}1.avif`;
</script>



<div class="description-tile" id="{storyName}-description">
  <img class="description-image" alt="Story description" src={storyImage} />
  <p class="description-text" id="{storyName}-text"></p>
  <button class="play-button" id="{storyName}-button">PLAY NOW</button>
</div>


<div class="tile" id="{storyName}" data-section="{storySection}">
  <img class="tile-picture" src={storyImage} alt="{storyName}"/>
  <p class="title">{ storyName }</p>
</div>


<style>
  .description-tile {
    display: none;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 99.8%;
    height: 100%;
    background-color: rgba(1, 0, 32, 0.75);
    border: 0.05vw solid rgba(51, 226, 230, 0.75);
    border-radius: 2.5vw;
    backdrop-filter: blur(1vw);
  }

  .description-image {
    position: absolute;
    width: 30%;
    left: 1%;
    bottom: 4%;
    border: 0.05vw solid rgba(51, 226, 230, 0.75);
    border-radius: 2vw;
  }

  .description-text {
    font-size: 2vw;
    line-height: 3vw;
    height: 63%;
    margin: 3% 2% 20% 33%;
    overflow-y: scroll;
    color: rgba(51, 226, 230, 0.9);
  }

  .play-button {
    position: absolute;
    width: 30%;
    height: 15%;
    right: 1%;
    bottom: 4%;
    border: 0.05vw solid rgba(51, 226, 230, 0.75);
    border-radius: 2vw;
    font-size: 2.5vw;
    line-height: 2.5vw;
    color: rgba(51, 226, 230, 0.75);
    background-color: rgba(51, 226, 230, 0.1);
    filter: drop-shadow(0 0 0.1vw rgba(51, 226, 230, 0.4));
    cursor: pointer;
  }

  .play-button:hover {
    color: rgba(51, 226, 230, 1);
    background-color: rgba(51, 226, 230, 0.5);
    filter: drop-shadow(0 0 1vw rgba(51, 226, 230, 0.4));
  }

  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 20vw;
    height: 22vw;
    margin: 1vw;
    padding-bottom: 3%;
    background-color: rgba(36, 65, 189, 0.75);
    color: rgba(255, 255, 255, 0.6);
    border: 0.05vw solid rgba(51, 226, 230, 0.75);
    border-radius: 1.5vw;
    filter: drop-shadow(0 0 0.1vw #010020);
    cursor: pointer;
    text-decoration: none;
    flex: none;
  }

  .tile:hover {
    background-color: rgba(45, 90, 216, 0.9);
    color: rgba(51, 226, 230, 0.9);
    filter: drop-shadow(0 0 0.5vw rgba(51, 226, 230, 0.5));
  }

  .tile-picture {
    object-fit: cover;
    width: 95%;
    height: 80%;
    margin: 2.5%;
    margin-bottom: 0;
    border: 0.05vw solid rgba(51, 226, 230, 0.75);
    border-radius: 1vw;
  }

  .title {
    font-size: 3vw;
    line-height: 1vw;
    white-space: nowrap;
    text-shadow: 0 0 1vw rgba(1, 0, 32, 0.4);
  }


  @media only screen and (max-width: 600px) {
    .tile {
      width: 35vw;
      height: 40vw;
    }

    .title {
      font-size: 1.2em;
      line-height: inherit;
    }
  }
</style>