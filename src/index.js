"use strict";

const playerColors = ["yellow", "red", "blue", "green", "orange"];

function homeScreen() {
  // Create info
  let info = {
    name: "",
    names: ["", "", "", "", ""],
    code: "",
    peer: null,
    conns: [],
    number: 0,
    isHost: false,
  };

  // Set background for home screen
  const homeScreenBackground = document.createElement("img");
  homeScreenBackground.src = "assets/backgrounds/home.png";
  homeScreenBackground.style.position = "absolute";
  homeScreenBackground.style.top = "0";
  homeScreenBackground.style.left = "0";
  homeScreenBackground.style.height = "100%";
  homeScreenBackground.style.width = "100%";
  document.body.appendChild(homeScreenBackground);

  // Create home panel
  const homePanel = document.createElement("div");
  homePanel.style.position = "absolute";
  homePanel.style.top = "calc(50% - 14em)";
  homePanel.style.left = "calc(50% - 16em)";
  homePanel.style.width = "32em";
  homePanel.style.height = "28em";
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
        info.peer = new Peer();

        info.peer.on("open", (id) => {
          const conn = info.peer.connect(gameCodeEntry.value);

          info.conns.push(conn);

          // Wait for connection to be established
          conn.on("open", () => {
            createPlayersScreen();
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
      info.peer = new Peer();

      info.peer.on("open", (id) => {
        // Save game code and set default color
        info.code = id;
        info.number = 0;
        info.names[0] = info.name;
        info.isHost = true;

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

    // Add player list
    const playerList = [];
    for (let i = 0; i < 5; i++) {
      const player = document.createElement("div");
      player.style.position = "absolute";
      player.style.top = `calc(25% + ${i * 1.9}em)`;
      player.style.left = "15%";
      player.style.width = "70%";
      player.style.height = "1.5em";
      player.style.backgroundColor = "white";
      player.style.color = "black";
      player.style.border = `0.2em solid ${playerColors[i]}`;
      player.style.fontSize = "1.5em";
      player.style.fontFamily = "Racing Sans One";
      player.innerHTML = `(${i + 1}) Waiting ...`;
      homePanel.appendChild(player);
      playerList.push(player);
    }

    // Add start game button
    const startGameButton = document.createElement("button");
    startGameButton.style.position = "absolute";
    startGameButton.style.top = "80%";
    startGameButton.style.left = "25%";
    startGameButton.style.width = "50%";
    startGameButton.style.height = "15%";
    startGameButton.style.backgroundColor = info.isHost ? "black" : "grey";
    startGameButton.style.transition = "all 0.2s";
    startGameButton.style.borderRadius = "1em";
    startGameButton.style.color = "white";
    startGameButton.style.fontSize = "2em";
    startGameButton.style.fontFamily = "Racing Sans One";
    startGameButton.innerHTML = "Start Game";
    homePanel.appendChild(startGameButton);

    // Add start game button hover effect
    startGameButton.addEventListener("mouseover", () => {
      if (info.isHost) {
        startGameButton.style.backgroundColor = "white";
        startGameButton.style.color = "black";
      }
    });
    startGameButton.addEventListener("mouseout", () => {
      startGameButton.style.backgroundColor = "black";
      startGameButton.style.color = "white";
    });

    // Add start game button click effect
    startGameButton.addEventListener("click", () => {
      // Send start game message to all players
      for (let i = 0; i < info.conns.length; i++) {
        info.conns[i].send("start-game");
      }
    });

    // Handle connection
    if (info.isHost) {
      // Set self
      playerList[info.number].innerHTML = `(${info.number + 1}) ${
        info.name
      } ⭐`;

      info.peer.on("connection", (conn) => {
        // Make sure there is room
        if (info.conns.length >= 4) {
          conn.send("game-full");
          return;
        }

        // Save connection
        info.conns.push(conn);

        // Get player name and reply with the player number
        conn.on("data", (data) => {
          // Update player list
          const number = info.conns.length;
          info.names[number] = data;
          playerList[number].innerHTML = `(${number + 1}) ${data}`;

          // Reply with player number
          conn.send(`you-are ${number}`);

          // Send existing players to new player
          for (let i = 0; i < number; i++) {
            conn.send(`player-joined ${i} ${info.names[i]}`);
          }

          // Send new player to existing players
          for (let i = 0; i < number - 1; i++) {
            info.conns[i].send(`player-joined ${number} ${data}`);
          }
        });
      });
    } else {
      const hostConn = info.conns[0];

      // Send player name
      hostConn.send(info.name);

      // Parse server inputs
      hostConn.on("data", (data) => {
        // Split data
        const [type, ...args] = data.split(" ");

        // Handle data
        if (type === "you-are") {
          // Save player number
          info.number = parseInt(args[0]);
          info.names[info.number] = info.name;

          // Update player list
          playerList[info.number].innerHTML = `(${info.number + 1}) ${
            info.name
          } ⭐`;
        } else if (type === "start-game") {
          // Play noise
          const noise = new Audio("assets/audio/clang.mp3");
          noise.play();
          setTimeout(() => {
            setInterval(() => {
              // copy noise
              for (let i = 0; i < 30; i++) {
                const noiseCopy = noise.cloneNode();
                noiseCopy.play();
              }
            }, 100);
          }, 5000);
        } else if (type === "player-joined") {
          // Update player list
          const number = parseInt(args[0]);
          const name = args[1];
          info.names[number] = name;
          playerList[number].innerHTML = `(${number + 1}) ${name}`;
        } else {
          console.log(`Unknown data type: ${type}`);
        }
      });
    }
  }

  createStartScreen();
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
