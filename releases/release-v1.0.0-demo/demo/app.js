// Sample data for three cities. Replace with real API calls later.
const cities = [
  {
    id: 'desmoines',
    name: 'DES MOINES',
    bg: 'https://images.unsplash.com/photo-1502784444185-0b9c9a4f2f16?auto=format&fit=crop&w=1600&q=60',
    temp: 92,
    condition: 'Hot',
    wind: 'SE 6 mph',
    gusts: 'NONE',
    feels_like: 94,
    alerts: ['HEAT ADVISORY NOW IN EFFECT UNTIL 8 PM CDT THURSDAY']
  },
  {
    id: 'indianapolis',
    name: 'INDIANAPOLIS',
    bg: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=60',
    temp: 80,
    condition: 'Sunny',
    wind: 'NE 8 mph',
    gusts: 'NONE',
    feels_like: 82,
    alerts: []
  },
  {
    id: 'orlando',
    name: 'ORLANDO',
    bg: 'https://images.unsplash.com/photo-1505483531331-3f9a4f4b3f7a?auto=format&fit=crop&w=1600&q=60',
    temp: 86,
    condition: 'Showers',
    wind: 'E 12 mph',
    gusts: '20 mph',
    feels_like: 88,
    alerts: ['FLASH FLOOD WATCH UNTIL 2 AM EDT']
  }
];

const citySelect = document.getElementById('citySelect');
const cityName = document.getElementById('cityName');
const timeEl = document.getElementById('time');
const alertBar = document.getElementById('alertBar');
const alertText = document.getElementById('alertText');
const tempValue = document.getElementById('tempValue');
const condition = document.getElementById('condition');
const wind = document.getElementById('wind');
const gusts = document.getElementById('gusts');
const feels = document.getElementById('feels');

function populateCities(){
  cities.forEach((c, i) => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.name;
    citySelect.appendChild(opt);
  });
}

function getCityById(id){
  return cities.find(c => c.id === id) || cities[0];
}

function updateTime(){
  const now = new Date();
  const h = now.getHours() % 12 || 12;
  const m = now.getMinutes().toString().padStart(2,'0');
  timeEl.textContent = `${h}:${m}`;
}

// Apply city data to UI
function updateUI(cityId){
  const c = getCityById(cityId);
  cityName.textContent = c.name;
  tempValue.textContent = `${c.temp}°`;
  condition.textContent = c.condition;
  wind.textContent = c.wind;
  gusts.textContent = c.gusts;
  feels.textContent = `${c.feels_like}°`;

  // background
  document.body.style.backgroundImage = `url('${c.bg}')`;

  // alerts
  if (c.alerts && c.alerts.length){
    alertText.textContent = c.alerts.join(' — ');
    alertBar.classList.remove('hidden');
  } else {
    alertBar.classList.add('hidden');
  }
}

// wire events
citySelect.addEventListener('change', (e) => {
  updateUI(e.target.value);
});

// initial
populateCities();
citySelect.value = cities[0].id;
updateTime();
updateUI(citySelect.value);

// update clock every minute
setInterval(updateTime, 60*1000);
