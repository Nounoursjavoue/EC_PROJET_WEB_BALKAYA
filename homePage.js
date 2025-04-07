import { BrowserMultiFormatReader } from 'https://cdn.jsdelivr.net/npm/@zxing/browser@0.0.10/+esm';

const codeReader = new BrowserMultiFormatReader();

window.addEventListener('load', () => {
  const videoElement = document.getElementById('video');
  const resultElement = document.getElementById('result');

  codeReader.listVideoInputDevices()
    .then(videoInputDevices => {
      const selectedDeviceId = videoInputDevices[0].deviceId;

      codeReader.decodeFromVideoDevice(selectedDeviceId, videoElement, (result, err) => {
        if (result) {
          resultElement.textContent = `Code détecté : ${result.text}`;
          // Pour ne scanner qu'une fois, tu peux arrêter ici :
          codeReader.reset();
        }
      });
    })
    .catch(err => {
      console.error('Erreur caméra :', err);
      resultElement.textContent = 'Erreur lors de l’accès à la caméra.';
    });
});
