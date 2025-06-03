

onload = () => {
  document.body.classList.remove("container");

  const leftPupil = document.querySelector('.panda__eye--left .panda__eye-pupil');
  const rightPupil = document.querySelector('.panda__eye--right .panda__eye-pupil');

  function blink() {
    leftPupil.classList.add('blink');
    rightPupil.classList.add('blink');

    setTimeout(() => {
      leftPupil.classList.remove('blink');
      rightPupil.classList.remove('blink');
    }, 300);
  }

  // Blink every 4 seconds
  setInterval(blink, 2000);
};
