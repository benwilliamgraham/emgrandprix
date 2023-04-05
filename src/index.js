"use strict";

async function main() {
  // Setup document
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.overflow = "hidden";
  document.body.style.width = "100%";
  document.body.style.height = "100%";
  document.body.style.fontFamily = "Racing Sans One";

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
  homePanel.style.left = "25%";
  homePanel.style.width = "50%";
  homePanel.style.height = "50%";
  homePanel.style.backgroundColor = "white";
  homePanel.style.border = "1px solid black";
  homePanel.style.borderRadius = "1em";
  document.body.appendChild(homePanel);

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

  // Add start button
  const startButton = document.createElement("button");
  startButton.style.position = "absolute";
  startButton.style.bottom = "10%";
  startButton.style.left = "25%";
  startButton.style.width = "50%";
  startButton.style.height = "20%";
  startButton.style.backgroundColor = "black";
  startButton.style.transition = "all 0.2s";
  startButton.style.borderRadius = "1em";
  startButton.style.color = "white";
  startButton.style.fontSize = "2em";
  startButton.style.fontFamily = "Racing Sans One";
  startButton.innerHTML = "Start";
  homePanel.appendChild(startButton);

  // Add start button hover effect
  startButton.addEventListener("mouseover", () => {
    startButton.style.backgroundColor = "white";
    startButton.style.color = "black";
  });
  startButton.addEventListener("mouseout", () => {
    startButton.style.backgroundColor = "black";
    startButton.style.color = "white";
  });
}

main();
