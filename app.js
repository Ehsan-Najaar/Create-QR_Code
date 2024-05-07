// elements
const generateBtn = document.querySelector("button");
const qrCodeBox = document.querySelector(".qr-code");
const qrInput = document.querySelector("form input");
const qrImage = document.querySelector(".qr-code img");

// Generate qrcode
function QrCode() {
  let qrValue = qrInput.value;
  // if input value is empty
  if (!qrValue) {
    return alert("لطفا یک متن یا آدرس وارد بکن");
  }
  generateBtn.innerText = "درحال تولید QR Code";
  // qr code api
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImage.addEventListener("load", () => {
    qrCodeBox.classList.remove("hidden");
    generateBtn.innerText = "تولید QR Code";
  });
}
// MouseEvent
generateBtn.addEventListener("click", () => {
  QrCode();
});
// Enter Key Event
qrInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") QrCode();
});

// Keyup Event
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    qrCodeBox.classList.add("hidden");
  }
});
