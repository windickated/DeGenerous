<script>
  export let storySection;
  export let storyName;
  const storyLink = storyName.replace(/\s+/g, '');

  const primaryImage = `/conexusAssets/titlePicture/${storySection}/${storyLink}1.png`;
  const secondaryImage = `/conexusAssets/titlePicture/${storySection}/${storyLink}2.png`;
</script>


<div class="tile" id="{storyName}">
  <img class="tile-picture" src={primaryImage} alt="{storyName}"/>
  <p class="title">{ storyName }</p>
</div>


<style>
  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 24vw;
    height: 28vw;
    margin: 1vw;
    padding-bottom: 3%;
    background-color: #2441BD;
    color: #dedede;
    border: 0.05vw solid #33E2E6;
    border-radius: 1.5vw;
    filter: drop-shadow(0 0 0.1vw #010020);
    cursor: pointer;
    text-decoration: none;
    flex: none;
  }

  div:hover {
    background-color: #2D5AD8;
    color: #33E2E6;
    filter: drop-shadow(0 0 0.5vw #33E2E6);
  }

  img {
    object-fit: cover;
    width: 95%;
    height: 80%;
    margin: 2.5%;
    margin-bottom: 0;
    border: 0.05vw solid #33E2E6;
    border-radius: 1vw;
  }

  p {
    font-size: 3vw;
    line-height: 3vw;
    white-space: nowrap;
  }
</style>