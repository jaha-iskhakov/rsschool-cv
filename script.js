const lightContainer = document.createElement('div');
lightContainer.className = "light__container";
const background = document.body.querySelector('.background')
background.append(lightContainer)
setInterval(createSnowFlake, 40);
function createSnowFlake() {
    const light_flake = document.createElement('span');
    light_flake.innerHTML = '';
    // snow_flake.classList.add('fas');
    light_flake.classList.add('fa-light');
    light_flake.style.left = Math.random() * 1000 + 'px';
    light_flake.style.top = Math.random() * 1500 + 'px';
    light_flake.style.animationDuration = Math.random() * 3 + 4 + 's';
    light_flake.style.opacity = `${Math.random()}`;
    light_flake.style.height = light_flake.style.width = Math.random() * 3 + 0.5 + 'px';
    lightContainer.append(light_flake);
    setTimeout(() => {
        light_flake.remove();
    }, (Math.random() * 3 + 4)*1000 );
}