<script>
  export let storySection;
  export let storyName;
  const storyLink = storyName.replace(/\s+/g, '');

  const storyImage = `/conexusAssets/titlePicture/${storySection}/${storyLink}1.avif`;
  const descriptionImage = `/conexusAssets/descriptionPicture/${storySection}/${storyLink}.avif`;
</script>



<div class="description-tile" id="{storyName}-description">
  <img class="description-image" alt="Story description" src={descriptionImage} />
  <p class="description-text" id="{storyName}-text"></p>
  <button class="close-button" id="{storyName}-close">CLOSE</button>
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
    position: fixed;
    top: 0;
    right: 0;
    width: 99.8%;
    height: 100%;
    background-color: rgba(1, 0, 32, 0.75);
    border: 0.05vw solid rgba(51, 226, 230, 0.75);
    border-radius: 2.5vw;
    -webkit-backdrop-filter: blur(1vw);
    backdrop-filter: blur(1vw);
  }

  .description-image {
    position: absolute;
    height: 90%;
    left: 2.5%;
    bottom: 5%;
    border-radius: 2vw;
    filter: drop-shadow(0 0 0.5vw rgba(51, 226, 230, 0.75))
  }

  .description-text {
    font-size: 2.5vw;
    line-height: 4vw;
    height: 70%;
    margin: 2.5% 2.5% 20% 47%;
    overflow-y: scroll;
    color: rgba(51, 226, 230, 0.9);
  }

  .play-button, .close-button {
    position: absolute;
    height: 12%;
    bottom: 5%;
    border: 0.05vw solid rgba(51, 226, 230, 0.75);
    border-radius: 2vw;
    font-size: 2.8vw;
    line-height: 3vw;
    color: rgba(51, 226, 230, 0.75);
    background-color: rgba(51, 226, 230, 0.1);
    filter: drop-shadow(0 0 0.1vw rgba(51, 226, 230, 0.4));
  }

  .play-button {
    width: 30%;
    right: 2.5%;
  }

  .close-button {
    width: 18%;
    right: 35%;
  }

  .play-button:hover, .close-button:hover, .play-button:active, .close-button:active {
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

  .tile:hover, .tile:active {
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
    font-size: 2.8vw;
    line-height: 1vw;
    white-space: nowrap;
    text-shadow: 0 0 1vw rgba(1, 0, 32, 0.4);
  }


  @media only screen and (max-width: 600px) {
    .description-image {
      height: 100%;
      width: 100%;
      left: 0;
      bottom: 0;
      -webkit-filter: blur(2vw);
      filter: blur(2vw);
      opacity: 0.5;
      z-index: -1;
    }

    .description-text {
      font-size: inherit;
      line-height: 1.6em;
      height: 70%;
      margin: 5%;
      color: rgba(51, 226, 230, 1);
      filter: drop-shadow(0 0 1vw #010020);
    }

    .play-button, .close-button {
      height: 12%;
      bottom: 5%;
      font-size: 1.4em;
      line-height: inherit;
      -webkit-backdrop-filter: blur(10vw);
      backdrop-filter: blur(10vw);
    }

    .play-button {
      width: 50%;
      right: 5%;
    }

    .close-button {
      width: 35%;
      left: 5%;
    }

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