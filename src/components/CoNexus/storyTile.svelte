<script>
  export let storySection;
  export let storyName;
  const storyLink = storyName.replace(/\s+/g, '');

  const storyImage = `/conexusAssets/titlePicture/${storySection}/${storyLink}1.avif`;
</script>


<div class="tile" id="{storyName}" data-section="{storySection}">
  <img class="tile-picture" src={storyImage} alt="{storyName}"/>
  <p class="title">{ storyName }</p>
</div>


<style>
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