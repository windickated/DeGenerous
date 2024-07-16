function addTilesListener(section) {
  const tiles = document.querySelectorAll('.tile');
  const tilePictures = document.querySelectorAll('.tile-picture');

    tiles.forEach((tile, i) => {
      tile.addEventListener('mouseover', () => {
        tilePictures[i].src = `/conexusAssets/titlePicture/${section}/${tile.id.replace(/\s+/g, '')}2.png`;
      })
      tile.addEventListener('mouseout', () => {
        tilePictures[i].src = `/conexusAssets/titlePicture/${section}/${tile.id.replace(/\s+/g, '')}1.png`;
      })
      tile.addEventListener('click', () => {
        alert('Story: ' + tile.id);
      })
    })

    const backArrow = document.querySelector('.arrow');
		backArrow.addEventListener('click', () => window.open('/CoNexus', '_self'));
}

export default addTilesListener;