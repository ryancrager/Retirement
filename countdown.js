// Terminal Leave begins at midnight Central Time on 17 Sep 2028.
// September is daylight time in America/Chicago, so midnight CT = 05:00 UTC.
const target = new Date('2028-09-17T05:00:00Z');

const parts = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
  card: document.querySelector('.countdown-card')
};

function pad(number) {
  return String(number).padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const remaining = target - now;

  if (remaining <= 0) {
    parts.card.innerHTML = `
      <p class="eyebrow">Terminal Leave</p>
      <div class="arrived">Enjoy the next adventure.</div>
      <p class="date-line">17 September 2028</p>
    `;
    clearInterval(timer);
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  parts.days.textContent = days.toLocaleString();
  parts.hours.textContent = pad(hours);
  parts.minutes.textContent = pad(minutes);
  parts.seconds.textContent = pad(seconds);
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
