<script>
  export let storyName;
  let storyLink = storyName.replace(/\s+/g, '');

  const storyImage = `conexusAssets/titlePicture/${storyLink}1.avif`;
</script>


<a class="tile" id="{storyName}" href="CoNexus/{storyLink}">
  <img class="tile-picture" src={storyImage} alt="{storyName}" />
  <p class="title">{ storyName }</p>
</a>


<style>
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
  }

  .tile:hover {
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
    .tile {
      width: 80vw;
      height: 60vw;
      flex: none;
      margin-bottom: 3vw;
      padding-bottom: 0;
      border-radius: 5vw;
    }

    .tile-picture {
      width: 90%;
      border-radius: 4vw;
    }

    .title {
      font-size: 1.5em;
      line-height: 1.5em;
    }
  }
</style>