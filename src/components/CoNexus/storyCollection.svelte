<script>
import StoryTile from "./storyTile.svelte";

export let storySection;
export let storyNames;
export let collectionTitle = undefined;
</script>


{#if collectionTitle}
  <p class="tiles-collection-legend">{collectionTitle}</p>
{/if}

<section class="tiles-section">
  {#each storyNames as name}
    <StoryTile {storySection} storyName={name} />
  {/each}
</section>


<style>
  .tiles-section {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: auto;
    margin: 1vw 2.5vw;
    padding: 2vw;
    background-image: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(51, 226, 230, 0.1));
    border: 0.1vw solid rgba(51, 226, 230, 0.5);
    border-radius: 2.5vw;
    filter: drop-shadow(0 0 1vw rgba(51, 226, 230, 0.25));
    backdrop-filter: blur(2vw);
  }

  .tiles-section::-webkit-scrollbar {
    height: 0.5vw;
  }

  .tiles-section::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }

  .tiles-section::-webkit-scrollbar-thumb {
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(51, 226, 230, 0.5), rgba(0, 0, 0, 0));
    border-radius: 0.5vw;
  }

  .tiles-collection-legend {
    font-size: 3vw;
    line-height: 3vw;
    padding-left: 7vw;
    margin: 2vw auto 0 auto;
    color: rgba(51, 226, 230, 0.85);
    -webkit-text-stroke: 0.03vw #33E2E6;
    text-shadow: 0 0 1vw rgba(51, 226, 230, 0.4);
  }


  @media only screen and (max-width: 600px) {

    .tiles-collection-legend{
      font-size: 1.5em;
      line-height: 1.5em;
    }
  }
</style>