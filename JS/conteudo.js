function validaBusca() {
    if (document.querySelector('#inputlupa').value == '') {
        alert("Não podia ter deixado em branco")
        return false;
    }
}

document.querySelector('#formbusca').onsubmit=validaBusca;
