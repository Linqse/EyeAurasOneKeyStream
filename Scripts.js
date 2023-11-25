
function toggleStream(username, password, hash, quality) {
    var iframe = document.getElementById('vdoNinjaIframe');
    

    if (iframe.src.includes("vdo.ninja")) {
        iframe.src = "";
        
    } else {
        iframe.src = `https://vdo.ninja/alpha/?room=${username}&pw=${password}&push=${hash}&screenshare=1&quality=${quality}&autostart&noaudio`;
        
    }
}

function toggleView(username, password, hash) {
    var iframe = document.getElementById('vdoNinjaView');


    if (iframe.src.includes("vdo.ninja")) {
        iframe.src = "";

    } else {
        iframe.src = `https://vdo.ninja/alpha/?view=${hash}&room=${username}&password=${password}&solo&autostart`;

    }
}

window.showModal = function(modalId) {
    var modalElement = document.getElementById(modalId);
    if (modalElement) {
        var bootstrapModal = new bootstrap.Modal(modalElement);
        bootstrapModal.show();
    }
}