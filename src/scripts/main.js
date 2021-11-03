import QRious from 'qrious';

const qrform = document.getElementById('generateqr');
const hastag = qrform.elements['hastag'];
const socialplatform = qrform.elements['socialmediaplatforms'];
const qrcode = document.getElementById('qrcode');
const printBtn = document.getElementById('printqr');

const qr = new QRious({
    element: qrcode,
    size: 250,
    value: 'NaN'
});

qrform.addEventListener('submit', (event) => {
    event.preventDefault();
    let qrvalue = hastag.value + "_" + socialplatform.value;

    qr.value = qrvalue;
});

qrform.addEventListener('reset', (event) => {
    qr.value = 'NaN';
});

printBtn.addEventListener('click', () => {
    var dataUrl = qrcode.toDataURL();
    var windowContent = '<!DOCTYPE html>';
    windowContent += '<html>'
    windowContent += '<head><title>QRCode Generator</title></head>';
    windowContent += '<body style="display:flex; justify-content:center; align-items:center;">'
    windowContent += '<img style="width:60%;" src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';
    var printWin = window.open('','','width=340,height=260');
    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.document.close();
    printWin.focus();
    printWin.print();
    printWin.close();
})