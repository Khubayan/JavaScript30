const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

const togglePlay = function () {
  video.paused ? video.play() : video.pause();
};

const updatePlaybackButton = function () {
  const icon = this.paused ? "||" : "x";
  toggle.textContent = icon;
};

const skip = function () {
  video.currentTime += parseFloat(this.dataset.skip);
};

video.addEventListener("play", updatePlaybackButton);
video.addEventListener("pause", updatePlaybackButton);
skipButtons.forEach((button) => button.addEventListener("click", skip));
