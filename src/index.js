"use strict";

function homeScreen() {
  // Create info
  let info = {
    name: "",
    code: "",
    conns: [],
    color: "",
  };

  // Set background for home screen
  const homeScreenBackground = document.createElement("img");
  homeScreenBackground.src = "assets/backgrounds/home.png";
  homeScreenBackground.style.position = "absolute";
  homeScreenBackground.style.top = "0";
  homeScreenBackground.style.left = "0";
  homeScreenBackground.style.height = "100%";
  document.body.appendChild(homeScreenBackground);

  // Create home panel
  const homePanel = document.createElement("div");
  homePanel.style.position = "absolute";
  homePanel.style.top = "25%";
  homePanel.style.left = "calc(50% - 15em)";
  homePanel.style.width = "30em";
  homePanel.style.height = "50%";
  homePanel.style.backgroundColor = "white";
  homePanel.style.border = "1px solid black";
  homePanel.style.borderRadius = "1em";
  document.body.appendChild(homePanel);

  function createStartScreen() {
    homePanel.innerHTML = "";

    // Add title
    const title = document.createElement("h1");
    title.style.textAlign = "center";
    title.style.margin = "0";
    title.style.padding = "0";
    title.style.fontSize = "3em";
    title.style.fontWeight = "normal";
    title.style.color = "black";
    title.innerHTML = "Ethel & Marv:";
    homePanel.appendChild(title);

    // Add subtitle
    const subtitle = document.createElement("h2");
    subtitle.style.textAlign = "center";
    subtitle.style.margin = "0";
    subtitle.style.padding = "0";
    subtitle.style.fontSize = "2em";
    subtitle.style.fontWeight = "normal";
    subtitle.style.color = "black";
    subtitle.innerHTML = "Grand Prix";
    homePanel.appendChild(subtitle);

    // Add name entry
    const nameEntry = document.createElement("input");
    nameEntry.style.position = "absolute";
    nameEntry.style.top = "40%";
    nameEntry.style.left = "25%";
    nameEntry.style.width = "50%";
    nameEntry.style.height = "20%";
    nameEntry.style.backgroundColor = "white";
    nameEntry.style.border = "1px solid black";
    nameEntry.style.borderRadius = "1em";
    nameEntry.style.fontSize = "2em";
    nameEntry.style.fontFamily = "Racing Sans One";
    nameEntry.style.textAlign = "center";
    nameEntry.placeholder = "Enter Name";
    nameEntry.maxLength = "8";
    homePanel.appendChild(nameEntry);

    // Add start button
    const startButton = document.createElement("button");
    startButton.style.position = "absolute";
    startButton.style.bottom = "10%";
    startButton.style.left = "25%";
    startButton.style.width = "50%";
    startButton.style.height = "20%";
    startButton.style.backgroundColor = "gray";
    startButton.style.transition = "all 0.2s";
    startButton.style.borderRadius = "1em";
    startButton.style.color = "white";
    startButton.style.fontSize = "2em";
    startButton.style.fontFamily = "Racing Sans One";
    startButton.innerHTML = "Start";
    homePanel.appendChild(startButton);

    // Make button only clickable when name is entered
    let nameEntered = false;
    nameEntry.addEventListener("input", () => {
      if (nameEntry.value.length > 0) {
        nameEntered = true;
        startButton.style.backgroundColor = "black";
      } else {
        nameEntered = false;
        startButton.style.backgroundColor = "gray";
      }
    });

    // Add start button hover effect only when button is clickable
    startButton.addEventListener("mouseover", () => {
      if (nameEntered) {
        startButton.style.backgroundColor = "white";
        startButton.style.color = "black";
      } else {
        startButton.style.backgroundColor = "gray";
        startButton.style.color = "white";
      }
    });
    startButton.addEventListener("mouseout", () => {
      if (nameEntered) {
        startButton.style.backgroundColor = "black";
        startButton.style.color = "white";
      } else {
        startButton.style.backgroundColor = "gray";
        startButton.style.color = "white";
      }
    });

    // Add start button click effect only when button is clickable
    startButton.addEventListener("click", () => {
      if (nameEntered) {
        // Set info
        info.name = nameEntry.value;

        // Set start button click effect
        startButton.style.backgroundColor = "white";
        startButton.style.color = "black";
        startButton.style.transform = "scale(0.9)";

        // Have home panel children fade out
        homePanel.childNodes.forEach((child) => {
          child.style.transition = "all 0.2s";
          child.style.opacity = "0";
        });

        // Remove all children from home panel after 0.2s
        setTimeout(() => {
          // Create mode selection screen
          createModeSelectionScreen();
        }, 200);
      }
    });
  }

  function createModeSelectionScreen() {
    homePanel.innerHTML = "";

    // Add mode selection title
    const modeSelectionTitle = document.createElement("h1");
    modeSelectionTitle.style.textAlign = "center";
    modeSelectionTitle.style.margin = "0";
    modeSelectionTitle.style.padding = "0";
    modeSelectionTitle.style.fontSize = "2em";
    modeSelectionTitle.style.fontWeight = "normal";
    modeSelectionTitle.style.color = "black";
    modeSelectionTitle.innerHTML = `Welcome, ${info.name}!`;
    homePanel.appendChild(modeSelectionTitle);

    // Add game code entry
    const gameCodeEntry = document.createElement("input");
    gameCodeEntry.style.position = "absolute";
    gameCodeEntry.style.top = "20%";
    gameCodeEntry.style.left = "10%";
    gameCodeEntry.style.width = "45%";
    gameCodeEntry.style.height = "20%";
    gameCodeEntry.style.borderTopLeftRadius = "1em";
    gameCodeEntry.style.borderBottomLeftRadius = "1em";
    gameCodeEntry.style.backgroundColor = "white";
    gameCodeEntry.style.border = "1px solid black";
    gameCodeEntry.style.fontSize = "2em";
    gameCodeEntry.style.fontFamily = "Racing Sans One";
    gameCodeEntry.style.textAlign = "center";
    gameCodeEntry.style.boxSizing = "border-box";
    gameCodeEntry.placeholder = "Enter Code";
    homePanel.appendChild(gameCodeEntry);

    // Add join game button
    const joinGameButton = document.createElement("button");
    joinGameButton.style.position = "absolute";
    joinGameButton.style.top = "20%";
    joinGameButton.style.left = "55%";
    joinGameButton.style.width = "35%";
    joinGameButton.style.height = "20%";
    joinGameButton.style.borderTopRightRadius = "1em";
    joinGameButton.style.borderBottomRightRadius = "1em";
    joinGameButton.style.backgroundColor = "gray";
    joinGameButton.style.transition = "all 0.2s";
    joinGameButton.style.color = "white";
    joinGameButton.style.fontSize = "2em";
    joinGameButton.style.fontFamily = "Racing Sans One";
    joinGameButton.innerHTML = "Join";
    homePanel.appendChild(joinGameButton);

    // Make button only clickable when code is entered
    let codeEntered = false;
    gameCodeEntry.addEventListener("input", () => {
      if (gameCodeEntry.value.length > 0) {
        codeEntered = true;
        joinGameButton.style.backgroundColor = "black";
        joinGameButton.style.color = "white";
      } else {
        codeEntered = false;
        joinGameButton.style.backgroundColor = "gray";
        joinGameButton.style.color = "white";
      }
    });

    // Add join game button hover effect only when button is clickable
    joinGameButton.addEventListener("mouseover", () => {
      if (codeEntered) {
        joinGameButton.style.backgroundColor = "white";
        joinGameButton.style.color = "black";
      } else {
        joinGameButton.style.backgroundColor = "gray";
        joinGameButton.style.color = "white";
      }
    });
    joinGameButton.addEventListener("mouseout", () => {
      if (codeEntered) {
        joinGameButton.style.backgroundColor = "black";
        joinGameButton.style.color = "white";
      } else {
        joinGameButton.style.backgroundColor = "gray";
        joinGameButton.style.color = "white";
      }
    });

    // Add join game button click effect only when button is clickable
    joinGameButton.addEventListener("click", () => {
      if (codeEntered) {
        // Set button text
        joinGameButton.innerHTML = "Joining...";

        // Try to create connection
        const peer = new Peer();

        peer.on("open", (id) => {
          const conn = peer.connect(gameCodeEntry.value);

          // Wait for connection to be established
          conn.on("open", () => {
            console.log("Connection established.");
          });
        });
      }
    });

    // Add 'or' text
    const orText = document.createElement("h1");
    orText.style.position = "absolute";
    orText.style.top = "45%";
    orText.style.left = "25%";
    orText.style.width = "50%";
    orText.style.height = "10%";
    orText.style.textAlign = "center";
    orText.style.margin = "0";
    orText.style.padding = "0";
    orText.style.fontSize = "3em";
    orText.style.fontWeight = "normal";
    orText.style.color = "black";
    orText.innerHTML = "or";
    homePanel.appendChild(orText);

    // Add create game button
    const createGameButton = document.createElement("button");
    createGameButton.style.position = "absolute";
    createGameButton.style.top = "65%";
    createGameButton.style.left = "25%";
    createGameButton.style.width = "50%";
    createGameButton.style.height = "20%";
    createGameButton.style.backgroundColor = "black";
    createGameButton.style.transition = "all 0.2s";
    createGameButton.style.borderRadius = "1em";
    createGameButton.style.color = "white";
    createGameButton.style.fontSize = "2em";
    createGameButton.style.fontFamily = "Racing Sans One";
    createGameButton.innerHTML = "Create Game";
    homePanel.appendChild(createGameButton);

    // Add create game button hover effect
    createGameButton.addEventListener("mouseover", () => {
      createGameButton.style.backgroundColor = "white";
      createGameButton.style.color = "black";
    });
    createGameButton.addEventListener("mouseout", () => {
      createGameButton.style.backgroundColor = "black";
      createGameButton.style.color = "white";
    });

    // Add create game button click effect
    createGameButton.addEventListener("click", () => {
      // Set button text
      createGameButton.innerHTML = "Creating...";

      // Try to create connection
      const peer = new Peer();

      peer.on("open", (id) => {
        // Save game code and set default color
        info.code = id;
        info.color = "yellow";

        createPlayersScreen();
      });
    });
  }

  function createPlayersScreen() {
    homePanel.innerHTML = "";

    // Add code copy button
    const copyCodeButton = document.createElement("button");
    copyCodeButton.style.position = "absolute";
    copyCodeButton.style.top = "5%";
    copyCodeButton.style.left = "25%";
    copyCodeButton.style.width = "50%";
    copyCodeButton.style.height = "15%";
    copyCodeButton.style.backgroundColor = "black";
    copyCodeButton.style.transition = "all 0.2s";
    copyCodeButton.style.borderRadius = "1em";
    copyCodeButton.style.color = "white";
    copyCodeButton.style.fontSize = "2em";
    copyCodeButton.style.fontFamily = "Racing Sans One";
    copyCodeButton.innerHTML = "Copy Code";
    homePanel.appendChild(copyCodeButton);

    // Add copy code button hover effect
    copyCodeButton.addEventListener("mouseover", () => {
      copyCodeButton.style.backgroundColor = "white";
      copyCodeButton.style.color = "black";
    });
    copyCodeButton.addEventListener("mouseout", () => {
      copyCodeButton.style.backgroundColor = "black";
      copyCodeButton.style.color = "white";
    });

    // Add copy code button click effect
    copyCodeButton.addEventListener("click", () => {
      // Copy code to clipboard
      navigator.clipboard.writeText(info.code);

      // Set button text
      copyCodeButton.innerHTML = "Copied!";

      // Reset button text
      setTimeout(() => {
        copyCodeButton.innerHTML = "Copy Code";
      }, 1000);
    });
  }

  // createStartScreen();

  info.code = "asdf";
  info.color = "yellow";
  createPlayersScreen();
}

function main() {
  // Setup document
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.overflow = "hidden";
  document.body.style.width = "100%";
  document.body.style.height = "100%";
  document.body.style.fontFamily = "Racing Sans One";

  // Create home screen
  homeScreen();
}

main();
