<script>
  export let storySection;
  export let storyName;
  const storyLink = storyName.replace(/\s+/g, '');

  const storyImage = `/conexusAssets/titlePicture/${storySection}/${storyLink}1.png`;
</script>


<div class="tile" id="{storyName}">
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
    background-color: #2441BD;
    color: rgba(255, 255, 255, 0.75);
    border: 0.05vw solid #33E2E6;
    border-radius: 1.5vw;
    filter: drop-shadow(0 0 0.1vw #010020);
    cursor: pointer;
    text-decoration: none;
    flex: none;
  }

  .tile:hover {
    background-color: #2D5AD8;
    color: #33E2E6;
    filter: drop-shadow(0 0 0.5vw #33E2E6);
  }

  .tile-picture {
    object-fit: cover;
    width: 95%;
    height: 80%;
    margin: 2.5%;
    margin-bottom: 0;
    border: 0.05vw solid #33E2E6;
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