#© 2026 Azure-Oxide Architecture Portfolio. Static rendering live via GitHub Actions.
// 1. Clock Tracker
function updateClock() {
const now = new Date();
document.getElementById('live-clock').innerText = now.toUTCString().replace('GMT', 'UTC');
}
setInterval(updateClock, 1000);
updateClock();
// 2. Matrix Rain Background Effect for Terminal Viewconst canvas = document.getElementById('matrix-canvas');const ctx = canvas.getContext('2d');
function resizeCanvas() {canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);const katakana = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEF';
const alphabet = katakana.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;
const rainDrops = Array.from({ length: columns }).fill(1);
function drawMatrix() {ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
ctx.fillRect(0, 0, canvas.width, canvas.height);
// Alternate colors randomly between Azure blue and Oxide Greenctx.fillStyle = Math.random() > 0.5 ? '#007FFF' : '#4ade80';
ctx.font = fontSize + 'px monospace';
for (let i = 0; i < rainDrops.length; i++) {
const text = alphabet[Math.floor(Math.random() * alphabet.length)];
ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
rainDrops[i] = 0;
}
rainDrops[i]++;
}}setInterval(drawMatrix, 35);
// 3. Interactive Pipeline Button Simulation Functionfunction simulateBuild(buttonElement, successMessage) {const statusLabel = buttonElement.querySelector('.status-label');
statusLabel.innerText = "RUNNING...";
statusLabel.className = "text-[10px] text-yellow-400 mt-2 status-label animate-pulse";
buttonElement.style.borderColor = "#facc15";
setTimeout(() => {statusLabel.innerText = "✔ " + successMessage;statusLabel.className = "text-[10px] text-emerald-400 mt-2 status-label font-bold";
buttonElement.style.borderColor = "#4ade80";
}, 1200);
}