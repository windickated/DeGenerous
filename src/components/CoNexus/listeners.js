function addTilesListener(format, section) {
  const tiles = document.querySelectorAll('.tile');
  const tilePictures = document.querySelectorAll('.tile-picture');

  if(format === 'menu') {
    tiles.forEach((tile, i) => {
      tile.addEventListener('mouseover', () => {
        tilePictures[i].src = `conexusAssets/titlePicture/${tile.id.replace(/\s+/g, '')}2.png`;
      })
      tile.addEventListener('mouseout', () => {
        tilePictures[i].src = `conexusAssets/titlePicture/${tile.id.replace(/\s+/g, '')}1.png`;
      })
    })
  } else if(format === 'story') {
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

    // Back arrow is active everywhere except the Menu
    const backArrow = document.querySelector('.arrow');
		backArrow.addEventListener('click', () => window.open('/CoNexus', '_self'));
  }
}

export default addTilesListener;