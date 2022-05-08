const videoContianer = document.querySelector('.description__video-container');
const video = document.querySelector('.description__video');
const videoButton = document.querySelector('.description__video-play-button');

const AUTOPLAY__FRAGMENT = '?&autoplay=1';

const removeActiveClass = () => {
  videoContianer.classList.remove('description__video-container--active');
};

removeActiveClass();

const playVideo = () => {
  let videoSrc = video.src;
  video.src = videoSrc + AUTOPLAY__FRAGMENT;
};

videoButton.addEventListener('click', () => {
  videoContianer.classList.add('description__video-container--active');
  playVideo();
});
