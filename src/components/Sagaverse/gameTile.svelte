<script>
  export let gameName;
  const gameLink = gameName.replace(/\s+/g, '');

  const gameImage = `/sagaverseAssets/titlePicture/${gameLink}1.avif`;
  const descriptionImage = `/sagaverseAssets/descriptionPicture/${gameLink}.avif`;
</script>



<div class="description-tile" id="{gameName}-description">
  <img class="description-image" alt="Story description" src={descriptionImage} />
  <p class="description-text" id="{gameName}-text"></p>
  <button class="close-button" id="{gameName}-close">CLOSE</button>
  <button class="play-button" id="{gameName}-button">PLAY NOW</button>
</div>


<div class="tile" id="{gameName}">
  <img class="tile-picture" src={gameImage} alt="{gameName}"/>
  <p class="title">{ gameName }</p>
</div>


<style>
  .description-tile {
    display: none;
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
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
    font-size: 2vw;
    line-height: 3.5vw;
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
    width: 28vw;
    height: 32vw;
    margin: 1vw;
    padding-bottom: 3%;
    background-color: rgba(22, 30, 95, 0.75);
    color: rgba(51, 226, 230, 0.75);
    border: 0.05vw solid rgba(51, 226, 230, 0.75);
    border-radius: 1.5vw;
    filter: drop-shadow(0 0 0.1vw #010020);
    cursor: pointer;
    text-decoration: none;
    flex: none;
  }

  .tile:hover, .tile:active {
    background-color: rgba(51, 226, 230, 0.3);
    color: #010020;
    filter: drop-shadow(0 0 0.5vw #33e2e6);
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
    line-height: 3vw;
    white-space: nowrap;
    text-shadow: 0 0 1vw #010020;
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
      font-size: 1em;
      line-height: inherit;
    }
  }
</style>