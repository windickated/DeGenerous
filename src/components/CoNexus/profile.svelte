<script>
  export let user;
  export let codes;

  let isProfileClosed = true;
  let isLogged = false;
  let signUp = false;
  let walletConnected = false;
  let walletAddress;

  let userMail;
  let userPassword;
  let refCode;

  export const newUser = {
    id: 1,
    mail: undefined,
    password: undefined,
    first_name: undefined,
    last_name: undefined,
    role: "user",
  };
  let newUserPasswordConfirmation;

  let loginValidationWarning;
  let refCodeValidationWarning;
  let newUserValidationWarning;


  function profileTabHandle() {
    if(isProfileClosed) {
      isProfileClosed = false;
    } else {
      emptyFields();
      isProfileClosed = true;
      if(signUp) {
        signUp = false;
      }
    }
  }

  function logIn(event) {
    if(isLogged) {
      console.log(`User "${user.mail}" is logged out`);
      isLogged = false;
    } else {
      if(userMail === user.mail && userPassword === user.password) {
        console.log(`User "${userMail}" is logged in`);
        isLogged = true;
        emptyFields();
      } else {
        loginValidationWarning.style.display = 'block';
        event.preventDefault();
      }
    }
  }

  function createNewUser(event) {
    if(signUp) {
      if(newUser.mail === undefined || newUser.password === undefined) {
        newUserValidationWarning.style.display = 'block';
        newUserValidationWarning.innerHTML = 'Fill in all required fields!';
        event.preventDefault();
      } else if(newUser.password === newUserPasswordConfirmation) {
        console.log('User created.', newUser);
        signUp = false;
        undefine(newUser);
      } else {
        newUserValidationWarning.style.display = 'block';
        newUserValidationWarning.innerHTML = 'Passwords do not match!';
        event.preventDefault();
      }
    } else {
      codes.map((code) => {
        if(refCode === code.code && !code.is_used) {
          console.log('Used referral code: ', refCode);
          signUp = true;
          emptyFields();
        } else {
          refCodeValidationWarning.style.display = 'block';
          event.preventDefault();
        }
      })
    }
  }

  function connectWallet() {
    if(walletConnected) {
      console.log('Wallet disconnected.')
      walletConnected = false;
    } else {
      walletConnected = true;
      console.log('Wallet connected.')
      walletAddress = '0xeb0a...60c1';
    }
  }

  function emptyFields() {
    userMail = '';
    userPassword = '';
    refCode = '';
    newUserPasswordConfirmation = '';
    if(!signUp && !isLogged) {
      loginValidationWarning.style.display = 'none';
      refCodeValidationWarning.style.display = 'none';
    }
  }

  function undefine(user) {
      user.mail = undefined;
      user.password = undefined;
      user.first_name = undefined;
      user.last_name = undefined;
      newUserValidationWarning.style.display = 'none';
    }
</script>


<div class="profile-container">
  <span class="profile-icon" on:click={profileTabHandle} on:keydown={profileTabHandle} role="button" tabindex="-1" />

  <section class="user-profile closed-{isProfileClosed}">
    <div class="log-in">
      <button class="close-button" on:click={profileTabHandle}>Close</button>
      {#if isLogged}
        <button class="login-button" on:click={logIn}>Log out</button>
      {:else if !isLogged}
        <button class="how-button" on:click={() => window.open('https://degenerousdao.gitbook.io/wiki', '_blank')}>How to sign up?</button>
      {/if}
    </div>

    <hr>

    {#if isLogged}

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

        <button class="wallet-button" on:click={connectWallet}>
          {#if !walletConnected}
            Connect wallet
          {:else if walletConnected}
            {walletAddress}
          {/if}
        </button>
        
      </div>

      <hr>

      <p class="refferal-codes-legend">Your refferal codes</p>
      <div class="refferal-codes">
        {#each codes as code}
          <p class="ref-code" class:used={code.is_used} class:not-used={!code.is_used}>{code.code}</p>
        {/each}
      </div>

    {:else if !isLogged && !signUp}

      <form class="login-form">
        <label class="input-label" for="user-mail">Mail</label>
        <input class="user-input" type="email" id="user-mail" placeholder="Enter your email" required bind:value={userMail}>
        <label class="input-label" for="user-password">Password</label>
        <input class="user-input" type="password" id="user-password" placeholder="Enter your password" minlength="8" required bind:value={userPassword}>
        <p class="validation-check" bind:this={loginValidationWarning}>Invalid credentials!</p>
        <button class="submit-button" type="submit" on:click={logIn}>Log-in</button>
      </form>

      <hr>

      <form class="ref-code-form">
        <input class="user-input" type="text" id="refferal-code" placeholder="Enter your refferal code" minlength="16" maxlength="16" required bind:value={refCode}>
        <p class="validation-check" bind:this={refCodeValidationWarning}>This code is not valid!</p>
        <button class="submit-button" type="submit" on:click={createNewUser}>Sign-up</button>
      </form>

    {:else if !isLogged && signUp}

      <form class="signup-form">
        <label class="input-label" for="new-user-mail">Mail</label>
        <input class="user-input" type="email" id="new-user-mail" placeholder="Your email" required bind:value={newUser.mail}>
        <label class="input-label" for="new-user-password">Password</label>
        <input class="user-input" type="password" id="new-user-password" placeholder="Your password" minlength="8" required bind:value={newUser.password}>
        <input class="user-input" type="password" id="confirm-new-user-password" placeholder="Confirm password" required bind:value={newUserPasswordConfirmation}>
        <label class="input-label" for="user-first-name">First name</label>
        <input class="user-input" type="text" id="user-first-name" placeholder="Your First name" bind:value={newUser.first_name}>
        <label class="input-label" for="user-last-name">Last name</label>
        <input class="user-input" type="text" id="user-last-name" placeholder="Your Last name" bind:value={newUser.last_name}>
        <p class="validation-check" bind:this={newUserValidationWarning}>Fill in all required fields!</p>
        <button class="submit-button" type="submit" on:click={createNewUser}>Create account</button>
      </form>

    {/if}

  </section>
</div>


<style>
  .login-form, .signup-form, .ref-code-form {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .input-label {
    font-size: 1.5vw;
    line-height: 1.5vw;
    margin-bottom: 0.5vw;
    color: rgba(255, 255, 255, 0.5);
  }

  .user-input {
    width: 30vw;
    font-size: 2vw;
    line-height: 2.5vw;
    padding: 2vw;
    margin-bottom: 2vw;
    color: rgba(51, 226, 230, 0.75);
    border: 0.1vw solid rgba(51, 226, 230, 0.5);
    border-radius: 2.5vw;
    background-color: rgba(1, 0, 32, 0.75);
    outline: none;
  }

  .submit-button {
    width: 30vw;
    padding: 1vw;
    color: rgba(51, 226, 230, 0.75);
    background-color: rgba(51, 226, 230, 0.1);
    cursor: pointer;
  }

  .validation-check {
    display: none;
    font-size: 1.5vw;
    margin-bottom: 2vw;
    color: rgba(255, 50, 50, 0.8);
  }

  hr {
    margin: 2vw 0;
    border: 0.1vw solid rgba(51, 226, 230, 0.5);
  }

  .user-profile {
    position: absolute;
    right: 2vw;
    top: 2vw;
    padding: 2.5vw 5vw;
    border: 0.1vw solid rgba(51, 226, 230, 0.5);
    border-radius: 2.5vw;
    background-color: rgba(1, 0, 32, 0.5);
    -webkit-backdrop-filter: blur(2vw);
    backdrop-filter: blur(2vw);
    z-index: 3;
  }

  .closed-false {
    display: block;
  }

  .closed-true {
    display: none;
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

  button:hover, button:active {
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

  .refferal-codes {
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

  .used {
    color: rgba(255, 255, 255, 0.35);
    -webkit-text-stroke: 0.05vw rgba(255, 0, 0, 0.35);
  }

  .not-used {
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

  .profile-icon:hover, .profile-icon:active {
    filter: drop-shadow(0 0 1vw rgba(51, 226, 230, 0.5));
		opacity: 0.75;
  }


  @media only screen and (max-width: 600px) {
    .input-label {
      font-size: 0.9em;
      line-height: 0.9em;
      padding-bottom: 0.5em;
    }

    .user-input {
      width: 80vw;
      font-size: 1.4em;
      line-height: 1.6em;
      margin-bottom: 1em;
    }

    .submit-button {
      width: 50vw;
    }

    hr {
      margin: 2em 0;
    }

    .user-profile {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      padding-top: 5%;
      padding-bottom: 5%;
      border-radius: 0;
      background-color: rgba(1, 0, 32, 0.85);
    }

    button {
      font-size: 1.4em;
      line-height: 1.4em;
      padding: 0.25em 1em;
    }

    .user-prop, .user-prop-value, .refferal-codes-legend {
      font-size: 1.2em;
      line-height: 2.5em;
    }

    .refferal-codes {
      width: 85vw;
    }

    .ref-code {
      font-size: inherit;
      line-height: 2.5em;
    }

    .profile-icon {
      width: 3em;
      height: 3em;
      top: 1em;
      right: 0.5em;
    }
  }
</style>