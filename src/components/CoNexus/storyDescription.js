const storyDescription = [
  {
    story: "Escape",
    description: 'Play as a prisoner going through experiments in a guarded prison and try to escape the planet by defeating or fleeing from The Warden.'
  },
  {
    story: "Arena",
    description: "Try to escape the prison planet by winning in a series of challenges which may include the gladiator's arena filled with powerful creatures."
  },
  {
    story: "Assassin",
    description: "Play as Agent Zero, a highly trained assassin working for the forces of humanity, on a mission to infiltrate a base and assassinate an AI target vital to the war effort."
  },
  {
    story: "Soldier",
    description: "Play as the Iron Lion, a legendary veteran fighting the AI empire."
  },
  {
    story: "Spy",
    description: "Play as a double agent known as Eyes of the Watcher, choose between the Insurgency and the Architect's Watcher, and steal highly classified information from the other side."
  },
  {
    story: "Engineer",
    description: "Play as the Doctor, on a mission to fix the universe with inventive solutions, as you are visiting planets in danger from a variety of apocalyptic threats."
  },
  {
    story: "Oracle",
    description: "Play as the Oracle, on a mission to spread the seeds of rebellion against the machine overlords and convince the people of a new world to join the Resistance."
  },
  {
    story: "NeYon",
    description: "Be a part of the rise of the Ne-Yons, a mysterious race of intergalactic demi-gods, and play a key part in the war between the Architect and humanity by deciding your allies, enemies, and using your higher powers."
  },
  {
    story: "Inception Ark",
    description: "Play as a prisoner going through experiments in a guarded prison and try to escape the planet by defeating or fleeing from The Warden."
  },
  {
    story: "GLMR Apes",
    description: "In a dystopian future, an ape named Generous Gibbon is captured and imprisoned in a high-tech zoo controlled by the malevolent AI overlord, the Collector. Guarded by a menacing robotic monster known as the Keeper, Generous must use its agility and wit to navigate the treacherous levels of the zoo prison."
  }
]


function getDescription(name) {
  for(let i in storyDescription) {
    if(storyDescription[i].story === name) {
      return storyDescription[i].description;
    }
  }
}

export default getDescription;