"use strict";

function homeScreen() {
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
      }
    });
    startButton.addEventListener("mouseout", () => {
      if (nameEntered) {
        startButton.style.backgroundColor = "black";
        startButton.style.color = "white";
      }
    });

    // Add start button click effect only when button is clickable
    startButton.addEventListener("click", () => {
      if (nameEntered) {
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
          homePanel.childNodes.forEach((child) => {
            homePanel.removeChild(child);
          });

          // Create mode selection screen
          createModeSelectionScreen();
        }, 200);
      }
    });
  }

  function createModeSelectionScreen() {
    // Add mode selection title
    const modeSelectionTitle = document.createElement("h1");
    modeSelectionTitle.style.textAlign = "center";
    modeSelectionTitle.style.margin = "0";
    modeSelectionTitle.style.padding = "0";
    modeSelectionTitle.style.fontSize = "3em";
    modeSelectionTitle.style.fontWeight = "normal";
    modeSelectionTitle.style.color = "black";
    modeSelectionTitle.innerHTML = "Select Mode:";
    homePanel.appendChild(modeSelectionTitle);

    // Add join game button
    const joinGameButton = document.createElement("button");
    joinGameButton.style.position = "absolute";
    joinGameButton.style.top = "35%";
    joinGameButton.style.left = "25%";
    joinGameButton.style.width = "50%";
    joinGameButton.style.height = "20%";
    joinGameButton.style.backgroundColor = "black";
    joinGameButton.style.transition = "all 0.2s";
    joinGameButton.style.borderRadius = "1em";
    joinGameButton.style.color = "white";
    joinGameButton.style.fontSize = "2em";
    joinGameButton.style.fontFamily = "Racing Sans One";
    joinGameButton.innerHTML = "Join Game";
    homePanel.appendChild(joinGameButton);

    // Add create game button
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
