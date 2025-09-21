// Feature voice guidance in Hindi
function speakFeature(feature, link) {
  // Create speech message
  const msg = new SpeechSynthesisUtterance(`आपने ${feature} चुना`);
  msg.lang = 'hi-IN'; // Hindi voice
  msg.rate = 1;       // normal speed
  window.speechSynthesis.speak(msg);

  // Navigate to the page after voice (1.5s delay)
  setTimeout(() => {
    if (link) window.location.href = link;
  }, 1500);
}

// Daily Tip randomizer in Hindi
const tips = [
  "💡 आज का सुझाव: नियमित रूप से पानी पिएं और थोड़ी सैर करें।",
  "💡 आज का सुझाव: दिन में 5 मिनट गहरी सांस लें।",
  "💡 आज का सुझाव: दवा समय पर लें।",
  "💡 आज का सुझाव: सुबह हल्का योग करें।",
  "💡 आज का सुझाव: थोड़ी धूप में समय बिताएं।"
];

// Display a random tip on page load
document.addEventListener('DOMContentLoaded', () => {
  const dailyTip = document.getElementById('dailyTip');
  if(dailyTip) {
    dailyTip.textContent = tips[Math.floor(Math.random() * tips.length)];
  }
});
