<div class="profile-container">
  <span class="profile-icon">
    <img class="wallet-connect" src="/WalletConnect.svg" alt="Connect wallet" />
  </span>
</div>


<style>
  .profile-icon {
    position: absolute;
    top: 2vw;
    right: 2vw;
    height: 7vw;
    width: 7vw;
    cursor: pointer;
    z-index: 1;
    border: 0.1vw solid rgba(51, 226, 230, 0.5);
    border-radius: 50%;
    background-color: rgba(51, 226, 230, 0.1);
    backdrop-filter: blur(2vw);
    opacity: 0.7;
  }

  .wallet-connect {
    width: 80%;
    padding-left: 10%;
    padding-top: 25%;
  }

  .profile-icon:hover {
    background-color: rgba(51, 226, 230, 0.2);
    filter: drop-shadow(0 0 1vw rgba(51, 226, 230, 0.5));
    opacity: 0.9;
  }


  @media only screen and (max-width: 600px) {
    .profile-icon {
      width: 3em;
      height: 3em;
      top: 1em;
      right: 0.5em;
    }
  }
</style>