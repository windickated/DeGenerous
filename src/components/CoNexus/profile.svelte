<script>
  const user = {
    id: 1,
    mail: "testuser@gmail.com",
    password: "12345678",
    first_name: "Joe",
    last_name: "Smith",
    role: "user"
  }

  const someDate = new Date();
  const codes = [
    {
      code: "5b70d9e4b08a0e29",
      is_used: false,
      updated_at: someDate
    },
    {
      code: "698fd356259462f0",
      is_used: true,
      updated_at: someDate
    },
    {
      code: "d28f37d717646b61",
      is_used: false,
      updated_at: someDate
    },
    {
      code: "46986af6d8d56470",
      is_used: false,
      updated_at: someDate
    },
    {
      code: "580777e35ba7a5b4",
      is_used: false,
      updated_at: someDate
    },
    {
      code: "e242cbc2a388a1d5",
      is_used: true,
      updated_at: someDate
    },
    {
      code: "b7ffcdd80bd08e21",
      is_used: true,
      updated_at: someDate
    },
    {
      code: "96b6b6c5f563f25f",
      is_used: true,
      updated_at: someDate
    },
    {
      code: "a1bbb2eb423d9f98",
      is_used: false,
      updated_at: someDate
    },
    {
      code: "f9db805d44031dc0",
      is_used: true,
      updated_at: someDate
    }
  ]
</script>


<div class="profile-container">
  <span class="profile-icon" />

  <section class="user-profile" tabindex="-1">
    <div class="log-in">
      <button class="close-button">Close</button>
      <button class="login-button">Log out</button>
    </div>

    <hr>

    <div class="user-profile-info">
      <div class="user-property">
        <p class="user-prop">Mail:</p>
        <p class="user-prop">Password:</p>
        <p class="user-prop">First name:</p>
        <p class="user-prop">Last name:</p>
      </div>
      <div class="property-value">
        <p class="user-prop-value mail">{user.mail}</p>
        <p class="user-prop-value password">{user.password}</p>
        <p class="user-prop-value first-name">{user.first_name}</p>
        <p class="user-prop-value last-name">{user.last_name}</p>
      </div>
    </div>

    <hr>

    <div class="wallet-connect">
      <p class="user-prop">Your wallet:</p>
      <button class="wallet-button">Connect wallet</button>
    </div>

    <hr>

    <p class="refferal-codes-legend">Your refferal codes</p>
    <div class="refferal-codes">
      {#each codes as code}
        <p class="ref-code used-{code.is_used}">{code.code}</p>
      {/each}
    </div>

  </section>
</div>


<style>
  hr {
    margin: 2vw 0;
    border: 0.1vw solid rgba(51, 226, 230, 0.5);
  }

  .user-profile {
    display: none;
    position: absolute;
    right: 2vw;
    top: 2vw;
    padding: 2.5vw 5vw;
    border: 0.1vw solid rgba(51, 226, 230, 0.5);
    border-radius: 2.5vw;
    background-color: rgba(1, 0, 32, 0.5);
    backdrop-filter: blur(2vw);
    z-index: 3;
  }

  .user-profile-info, .log-in, .wallet-connect {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .user-property, .property-value {
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
  }

  .user-property {
    align-items: end;
  }

  button {
    padding: 1vw 2vw;
    border: 0.05vw solid rgba(51, 226, 230, 0.75);
    border-radius: 2vw;
    font-size: 2vw;
    line-height: 3vw;
    color: rgba(51, 226, 230, 0.75);
    background-color: rgba(51, 226, 230, 0.1);
    filter: drop-shadow(0 0 0.1vw rgba(51, 226, 230, 0.4));
  }

  button:hover {
    color: rgba(51, 226, 230, 1);
    background-color: rgba(51, 226, 230, 0.5);
    filter: drop-shadow(0 0 1vw rgba(51, 226, 230, 0.4));
  }

  .user-prop {
    font-size: 2vw;
    line-height: 4vw;
    margin-right: 5vw;
    color: rgba(255, 255, 255, 0.5);
  }

  .user-prop-value, .refferal-codes-legend {
    font-size: 2vw;
    line-height: 4vw;
    color: rgba(255, 255, 255, 0.7);
  }

  .refferal-codes-legend {
    text-align: center;
  }

  .refferal-codes{
    width: 40vw;
    padding: 1vw 2vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    border: 0.1vw solid rgba(51, 226, 230, 0.5);
    border-radius: 2.5vw;
    background-color: rgba(51, 226, 230, 0.1);
  }

  .ref-code {
    font-size: 1.8vw;
    line-height: 4vw;
    color: rgba(255, 255, 255, 0.5);
  }

  .used-true {
    color: rgba(255, 255, 255, 0.35);
    -webkit-text-stroke: 0.05vw rgba(255, 0, 0, 0.35);
  }

  .used-false {
    color: rgba(255, 255, 255, 0.75);
    filter: drop-shadow(0 0 0.1vw rgba(51, 226, 230, 0.9));
  }

  .profile-icon {
    position: absolute;
    top: 2vw;
    right: 2vw;
    height: 7vw;
    width: 7vw;
    cursor: pointer;
    background-image: url('/profileIcon.avif');
    background-size: contain;
    opacity: 0.4;
    z-index: 1;
  }

  .profile-icon:hover {
    filter: drop-shadow(0 0 1vw rgba(51, 226, 230, 0.5));
		opacity: 0.75;
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