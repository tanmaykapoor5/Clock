const clock = document.getElementById('#banner');

setInterval(function () {
    let date = new Date();
    banner.innerHTML = date.toLocaleTimeString();
}, 1000);