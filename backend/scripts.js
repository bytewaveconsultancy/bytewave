// Smooth video handling
const video = document.querySelector('video');
document.addEventListener('visibilitychange', () => {
if(document.hidden){ video.pause(); }
  else { video.play(); }
});