/* ============================================
   JCI SAILING WEEK 2026 – MAIN JS
   ============================================ */

// ── BOAT DATA (9 boten) ─────────────────────
const boats = [
  {
    id: 1,
    name: "STELLA FAMILIA",
    model: "Bavaria C38 (2024)",
    length_ft: 38,
    cabins: 3,
    bathrooms: 1,
    max_crew: 6,
    price_week: 2239,
    year: 2024,
    location: "Kroatië",
    marina: "Nader te bepalen",
    image: "images/stella.png",
    description: "Gloednieuwe Bavaria C38 uit 2024 — strak design, energiezuinig en vol met modern comfort. Self-tacking jib maakt zeilen gemakkelijk. Met airco én verwarming.",
    extras: ["Self-tacking jib", "Airco + verwarming", "Zonnepanelen 2×175W", "Boegschroef", "Nespresso machine", "JBL Xtreme audio", "Elektrisch toilet", "Autopilot"],
    details: { motor: "40 hp", fuel: "210 L", water: "360 L" }
  },
  {
    id: 2,
    name: "KIRKE",
    model: "Bavaria C38 (2024)",
    length_ft: 37,
    cabins: 3,
    bathrooms: 1,
    max_crew: 8,
    price_week: 2239,
    year: 2024,
    location: "Zadar",
    marina: "Marina Zadar",
    image: "images/krike.png",
    description: "Bavaria C38 uit 2024, ligplaats in Marina Zadar. Self-tacking jib, zonnepanelen en Fusion stereo. Capaciteit 8 personen (6 cabine + 2 salon).",
    extras: ["Self-tacking jib", "Zonnepanelen 2×175W", "Verwarming", "Boegschroef", "Fusion stereo", "Autopilot", "GPS kaartplotter", "Echo sounder"],
    details: { motor: "40 hp", fuel: "210 L", water: "360 L" }
  },
  {
    id: 3,
    name: "TONKA",
    model: "Bavaria Cruiser 41 (2020)",
    length_ft: 41,
    cabins: 3,
    bathrooms: 2,
    max_crew: 8,
    price_week: 2146,
    year: 2020,
    location: "Sukošan",
    marina: "D-Marin Dalmacija Marina",
    image: "images/tonka.png",
    description: "Solide Bavaria Cruiser 41 uit 2020 met dubbele stuurwielen en ruime cockpit. Inclusief SUP en bijboot met buitenboordmotor.",
    extras: ["SUP inbegrepen", "Bijboot + buitenboordmotor", "Bimini top", "Sprayhood", "Zwemplateau", "Autopilot", "GPS + kaartplotter", "Furling zeilen"],
    details: { motor: "Volvo Penta 55 HP", fuel: "210 L", water: "360 L" }
  },
  {
    id: 4,
    name: "PLEIADES",
    model: "Bavaria Cruiser 46 (2018)",
    length_ft: 47,
    cabins: 4,
    bathrooms: 3,
    max_crew: 9,
    price_week: 2340,
    year: 2018,
    location: "Drage",
    marina: "Marina Drage",
    image: "images/pleiades.png",
    description: "Ruime 47-voet Bavaria met 4 cabines en 3 badkamers. Zeilen vernieuwd in 2023. Teak cockpit, airco op walstroom.",
    extras: ["4 cabines / 3 badkamers", "Zeilen vernieuwd 2023", "Teak cockpit", "Boegschroef", "Airco (walstroom)", "Zonnepanelen 2×180W", "Autopilot", "3 douches"],
    details: { motor: "Volvo 50 HP", fuel: "210 L", water: "360 L" }
  },
  {
    id: 5,
    name: "MUDRA",
    model: "Bavaria 46 BT (2019)",
    length_ft: 46,
    cabins: 4,
    bathrooms: 2,
    max_crew: 8,
    price_week: 2829,
    year: 2019,
    location: "Sukošan",
    marina: "D-Marin Dalmacija Marina",
    image: "images/mudra.png",
    description: "Moderne Bavaria 46 BT met breed achterdek en open salon. WiFi aan boord, TV, boegschroef en autopilot.",
    extras: ["WiFi aan boord", "TV + DVD", "Boegschroef", "Autopilot", "Bimini + Sprayhood", "Cockpit douche", "Dinghy", "Elektrische ankerlier"],
    details: { motor: "50 HP", fuel: "210 L", water: "360 L" }
  },
  {
    id: 6,
    name: "NALA",
    model: "Bavaria 46 (2024)",
    length_ft: 46,
    cabins: 4,
    bathrooms: 2,
    max_crew: 8,
    price_week: 3139,
    year: 2024,
    location: "Sukošan",
    marina: "D-Marin Dalmacija Marina",
    image: "images/nala.png",
    description: "Gloednieuwe Bavaria 46 uit 2024 met oven én magnetron, zonnepanelen en buitenspeakers. Airco op walstroom.",
    extras: ["Nieuw 2024", "Airco (walstroom)", "Oven + magnetron", "Zonnepanelen 2×180W", "Buitenspeakers", "Boegschroef", "Autopilot", "Reddingsvlot"],
    details: { motor: "Volvo D2-50 (50 HP)", fuel: "210 L", water: "350 L" }
  },
  {
    id: 7,
    name: "TULIPA",
    model: "Bavaria C46 (2026)",
    length_ft: 46,
    cabins: 5,
    bathrooms: 3,
    max_crew: 10,
    price_week: 3809,
    year: 2026,
    location: "Zadar",
    marina: "Marina Zadar",
    image: "images/tulipa.png",
    description: "Splinternieuwe Bavaria C46 uit 2026, direct vanuit de fabriek. 5 cabines, airco én verwarming, 3 elektrische toiletten en 600W zonnepanelen. De nieuwste en grootste van de vloot.",
    extras: ["Nieuwste model 2026", "5 cabines", "Airco + verwarming", "Zonnepanelen 3×200W", "JBL Xtreme audio", "3 elektrische toiletten", "Self-tacking jib", "Boegschroef", "2× koelkast"],
    details: { motor: "57 HP", fuel: "244 L", water: "554 L" }
  },
  {
    id: 8,
    name: "EVEREST",
    model: "Bavaria 51 BT (2020)",
    length_ft: 51,
    cabins: 5,
    bathrooms: 3,
    max_crew: 10,
    price_week: 3521,
    year: 2020,
    location: "Sukošan",
    marina: "D-Marin Dalmacija Marina",
    image: "images/everest.png",
    description: "Indrukwekkende Bavaria 51 BT uit 2020 — de grootste boot van de vloot. Ruime salon, 5 cabines, cockpit speakers en een krachtige 75pk motor voor comfortabel reizen.",
    extras: ["51 ft — grootste boot", "TV + DVD", "Cockpit speakers", "Boegschroef", "Dinghy (opblaasbaar)", "Elektrische ankerlier", "Autopilot", "GPS chartplotter", "Reddingsvlot"],
    details: { motor: "Volvo Penta 75 HP", fuel: "300 L", water: "560 L" }
  },
  {
    id: 9,
    name: "MY WAY ONE",
    model: "Bavaria Cruiser 51 (2018)",
    length_ft: 51,
    cabins: 5,
    bathrooms: 3,
    max_crew: 10,
    price_week: 3266,
    year: 2018,
    location: "Sukošan",
    marina: "D-Marin Dalmacija Marina",
    image: "images/mywayout.png",
    description: "Ruime Bavaria Cruiser 51 uit 2018 met dubbele stuurwielen. Airco op walstroom, bijboot met buitenboordmotor inbegrepen. Ideaal voor een groep van 10.",
    extras: ["Bijboot + buitenboordmotor", "Airco (walstroom)", "Dubbele stuurwielen", "Zwemplateau", "Autopilot", "GPS + kaartplotter", "Furling zeilen", "VHF radio"],
    details: { motor: "Volvo 72 HP", fuel: "280 L", water: "560 L" }
  },
];

// ── SAILING ROUTE ───────────────────────────
const routeStops = [
  { pos: [44.1194, 15.2314], name: "Zadar",               day: "Dag 1 & 7 — Start / Einde", startEnd: true },
  { pos: [44.0472, 15.3086], name: "Sukošan / Marina Dalmacija", day: "Dag 1 — Eerste nacht" },
  { pos: [43.9317, 15.1672], name: "Sali, Dugi Otok",     day: "Dag 2 — Eilandleven" },
  { pos: [43.8969, 15.1550], name: "Telašćica Nationaal Park", day: "Dag 3 — Prachtige baai" },
  { pos: [43.7900, 15.2200], name: "Kornati eilanden",    day: "Dag 4 — Nationaal park" },
  { pos: [43.8667, 15.3167], name: "Žut eiland",          day: "Dag 5 — Rustige ankerplaats" },
  { pos: [43.8167, 15.5833], name: "Murter",              day: "Dag 6 — Gezellige haven" },
  { pos: [43.9394, 15.4455], name: "Biograd na Moru",     day: "Dag 7 — Terugreis" },
];

// ── STATE ──────────────────────────────────
let currentSort    = 'default';
let searchQuery    = '';
let selectedBoat   = null;
let groupSize      = null;
let selectedFlight = null;   // key into flightOptions

// ── FLIGHT OPTIONS FOR TRIP CALCULATOR ──────
// Vluchtopties met vaste prijs (bijgewerkt via prices.json / handmatig)
const flightOptions = [
  {
    key: "HV6695",
    label: "Transavia — retour",
    from: "RTM", to: "ZAD",
    dep: "07:10", arr: "09:00",
    returnFrom: "ZAD", returnTo: "RTM",
    returnDep: "09:40", returnArr: "11:40",
    returnFlightNr: "HV6694",
    stops: 0,
    price: 119,          // €72 heen + €47 terug (excl. bagage)
    recommended: true,
    badge: "Aanbevolen",
    pitch: "Direct heen én terug via Rotterdam. Vroeg in Zadar op dag 1, thuis voor de middag op dag 7. Gezamenlijke taxi vanuit Amsterdam (€12–18 p.p.) goedkoper én gezeliger dan de trein naar Schiphol.",
    airline: "Transavia"
  },
  {
    key: "KL1333",
    label: "KLM + Ryanair — retour",
    from: "AMS", to: "ZAD",
    dep: "12:10", arr: "17:05",
    returnFrom: "ZAD", returnTo: "AMS",
    returnDep: "07:00", returnArr: "10:30",
    returnFlightNr: "Croatia Airlines",
    stops: 1,
    price: 419,
    recommended: false,
    badge: "Via Poznań",
    pitch: "Heen via Poznań (KL1333 + FR7252), terug met Croatia Airlines via Zagreb. Self-transfer — je regelt je eigen bagage over. €305 duurder dan Transavia vanuit Rotterdam.",
    airline: "KLM / Ryanair"
  },
  {
    key: "EI603",
    label: "Aer Lingus — retour",
    from: "AMS", to: "ZAD",
    dep: "09:35", arr: "15:30",
    returnFrom: "ZAD", returnTo: "AMS",
    returnDep: "08:50", returnArr: "13:50",
    returnFlightNr: "Ryanair + KLM",
    stops: 1,
    price: 412,
    recommended: false,
    badge: "Via Dublin",
    pitch: "Heen via Dublin (EI603), terug via Krakau (Ryanair + KLM). Self-transfer — let op je eigen bagage. Nog 2 stoelen beschikbaar voor deze prijs. €298 duurder dan Transavia vanuit Rotterdam.",
    airline: "Aer Lingus"
  }
];

// ── PLAYLIST ────────────────────────────────
function selectVideo(item) {
  const id   = item.dataset.id;
  const desc = item.dataset.desc;
  // Update active state
  document.querySelectorAll('.playlist-item').forEach(i => i.classList.remove('active'));
  item.classList.add('active');
  // Swap main player
  const wrapper = document.getElementById('main-video-wrapper');
  const thumbEl = document.getElementById('main-video-thumb');
  const thumbImg = document.getElementById('main-video-thumb-img');
  const descEl = document.getElementById('main-video-desc');
  if (!wrapper) return;
  // If an iframe is playing, replace it with the new thumb
  wrapper.dataset.videoId = id;
  wrapper.innerHTML = `
    <div class="video-thumb" id="main-video-thumb" onclick="loadVideo(this.closest('.video-wrapper'), true)">
      <img id="main-video-thumb-img" src="https://img.youtube.com/vi/${id}/maxresdefault.jpg" alt="">
      <div class="play-btn"><svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.55)"/><polygon points="32,24 60,40 32,56" fill="white"/></svg></div>
    </div>`;
  if (descEl) descEl.textContent = desc;
}

// ── RENDER BOATS ────────────────────────────
function renderBoats() {
  const grid = document.getElementById('boats-grid');
  if (!grid) return;

  let filtered = [...boats];

  if (groupSize !== null) {
    filtered = filtered.filter(b => b.max_crew >= groupSize);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(b =>
      b.name.toLowerCase().includes(q) ||
      b.model.toLowerCase().includes(q) ||
      b.marina.toLowerCase().includes(q)
    );
  }

  if (currentSort === 'price-asc')  filtered.sort((a,b) => a.price_week - b.price_week);
  if (currentSort === 'price-desc') filtered.sort((a,b) => b.price_week - a.price_week);
  if (currentSort === 'length')     filtered.sort((a,b) => b.length_ft - a.length_ft);
  if (currentSort === 'cabins')     filtered.sort((a,b) => b.cabins - a.cabins);

  const info = document.getElementById('boats-filter-info');
  if (info) {
    info.innerHTML = groupSize === null
      ? 'Kies eerst een groepsgrootte hierboven om boten te filteren.'
      : `${filtered.length} ${filtered.length === 1 ? 'boot' : 'boten'} geschikt voor <strong>t/m ${groupSize} personen</strong>.`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-muted)">
      <div style="font-size:2rem;margin-bottom:12px">⚓</div>
      <p>Geen boten gevonden voor deze selectie.</p>
    </div>`;
    populateBoatSelect(filtered);
    return;
  }

  grid.innerHTML = filtered.map(b => boatCard(b)).join('');

  grid.querySelectorAll('.boat-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card    = btn.closest('.boat-card');
      const details = card.querySelector('.boat-details');
      const isOpen  = details.classList.contains('open');
      details.classList.toggle('open', !isOpen);
      btn.textContent = isOpen ? 'Meer info ↓' : 'Minder ↑';
    });
  });

  grid.querySelectorAll('.boat-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      if (selectedBoat === id) {
        selectedBoat = null;
        card.classList.remove('selected');
      } else {
        grid.querySelectorAll('.boat-card').forEach(c => c.classList.remove('selected'));
        selectedBoat = id;
        card.classList.add('selected');
        const sel = document.getElementById('f-boat');
        if (sel) sel.value = id.toString();
        updatePriceCalc();
      }
    });
  });

  populateBoatSelect(filtered);
}

function boatCard(boat) {
  const selected = selectedBoat === boat.id ? 'selected' : '';
  const allExtras = boat.extras.map(e => `<span class="extra-tag">${e}</span>`).join('');
  const isNew = boat.year >= 2024;

  return `
    <div class="boat-card ${selected}" data-id="${boat.id}">
      <div class="boat-img-wrap">
        <img src="${boat.image}" alt="${boat.name}" loading="lazy" onerror="this.style.display='none'">
        <span class="boat-badge">${isNew ? '✦ ' : ''}${boat.year}</span>
      </div>
      <div class="boat-body">
        <div class="boat-name">${boat.name}</div>
        <div class="boat-model">${boat.model} &bull; ${boat.marina}</div>
        <div class="boat-specs">
          <div class="spec-item">
            <span class="spec-label">Lengte</span>
            <span class="spec-value">${boat.length_ft} ft</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Cabines</span>
            <span class="spec-value">${boat.cabins}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Max. personen</span>
            <span class="spec-value">${boat.max_crew} pers.</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Badkamers</span>
            <span class="spec-value">${boat.bathrooms}</span>
          </div>
        </div>
        <div class="boat-footer">
          <div class="boat-price">
            <span class="price-from">Vanaf</span>
            <span class="price-val">&euro;${boat.price_week.toLocaleString('nl-NL')}</span>
            <span class="price-unit">per week</span>
          </div>
          <button class="boat-toggle">Meer info ↓</button>
        </div>
      </div>
      <div class="boat-details">
        <div class="boat-details-inner">
          <p>${boat.description}</p>
          <div class="boat-extras-list">${allExtras}</div>
          <div class="boat-detail-grid">
            <div class="boat-detail-row"><span>Motor</span><span>${boat.details.motor}</span></div>
            <div class="boat-detail-row"><span>Brandstoftank</span><span>${boat.details.fuel}</span></div>
            <div class="boat-detail-row"><span>Watertank</span><span>${boat.details.water}</span></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function populateBoatSelect(filteredBoats) {
  const sel = document.getElementById('f-boat');
  if (!sel) return;
  const list = filteredBoats || boats;
  sel.innerHTML = '<option value="">-- Nog geen voorkeur --</option>' +
    list.map(b => `<option value="${b.id}" ${selectedBoat === b.id ? 'selected' : ''}>${b.name} – ${b.model} (€${b.price_week.toLocaleString('nl-NL')}/week)</option>`).join('');
}

// ── PRICE CALCULATOR ────────────────────────
function updatePriceCalc() {
  const slider = document.getElementById('person-slider');
  if (!slider) return;

  const n = parseInt(slider.value);
  const countEl = document.getElementById('calc-person-count');
  if (countEl) countEl.textContent = n;

  // Update person icons row
  const iconsEl = document.getElementById('calc-person-icons');
  if (iconsEl) {
    iconsEl.innerHTML = Array.from({ length: 10 }, (_, i) =>
      `<span class="person-icon ${i < n ? 'active' : ''}" title="${i + 1}">👤</span>`
    ).join('');
  }

  const eligible = boats.filter(b => b.max_crew >= n);
  const container = document.getElementById('calc-results');
  if (!container) return;

  if (eligible.length === 0) {
    container.innerHTML = '<p class="calc-empty">Geen boten geschikt voor dit aantal personen.</p>';
    return;
  }

  const sorted = [...eligible].sort((a, b) => (a.price_week / n) - (b.price_week / n));
  const minPP = sorted[0].price_week / n;
  const maxPP = sorted[sorted.length - 1].price_week / n;
  const range = maxPP - minPP || 1;

  // Check if a boat is selected
  const sel = selectedBoat;

  container.innerHTML = sorted.map((b, i) => {
    const pp   = Math.round(b.price_week / n);
    const barW = 20 + ((pp - minPP) / range) * 75;
    const isSel = sel === b.id;
    const isCheapest = i === 0;

    return `
      <div class="calc-card ${isSel ? 'calc-selected' : ''}" data-id="${b.id}">
        ${isCheapest ? '<span class="calc-badge">Voordeligst</span>' : ''}
        ${isSel      ? '<span class="calc-badge sel-badge">Jouw keuze</span>' : ''}
        <div class="calc-card-top">
          <div class="calc-name">${b.name}</div>
          <div class="calc-model">${b.model.split('(')[0].trim()} &bull; max ${b.max_crew} pers.</div>
        </div>
        <div class="calc-bar-wrap">
          <div class="calc-bar" style="width:${barW}%"></div>
        </div>
        <div class="calc-card-bottom">
          <div class="calc-pp">
            <span class="calc-pp-num">&euro;${pp.toLocaleString('nl-NL')}</span>
            <span class="calc-pp-label">/ persoon</span>
          </div>
          <div class="calc-total-small">&euro;${b.price_week.toLocaleString('nl-NL')} totaal</div>
        </div>
      </div>
    `;
  }).join('');

  // Click calc card → select that boat
  container.querySelectorAll('.calc-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      selectedBoat = id;
      renderBoats();
      updatePriceCalc();
      updateTripSummary();
      const sel = document.getElementById('f-boat');
      if (sel) sel.value = id.toString();
      document.getElementById('boten')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── FLIGHT PICKER ────────────────────────────
function renderFlightPicker() {
  const el = document.getElementById('flight-picker');
  if (!el) return;
  el.innerHTML = flightOptions.map(f => {
    const isSel = selectedFlight === f.key;
    const stopsLabel = f.stops === 0
      ? '<span class="fp-direct">Direct</span>'
      : `<span class="fp-stop">${f.stops} stop</span>`;
    const totalPrice = f.price; // already the retour total
    const returnRow = f.returnFrom ? `
        <div class="fp-route fp-route-return">
          <span class="fp-dir-label">Terug</span>
          <span class="fp-airport">${f.returnFrom}</span>
          <span class="fp-time">${f.returnDep}</span>
          <span class="fp-arrow">&#9992;</span>
          <span class="fp-time">${f.returnArr}</span>
          <span class="fp-airport">${f.returnTo}</span>
          <span class="fp-direct">Direct</span>
        </div>` : '';
    return `
      <div class="fp-card ${isSel ? 'fp-selected' : ''} ${f.recommended ? 'fp-recommended' : ''}" data-key="${f.key}">
        ${f.badge ? `<span class="fp-badge ${f.recommended ? 'fp-badge-gold' : 'fp-badge-grey'}">${f.badge}</span>` : ''}
        <div class="fp-top">
          <div class="fp-airline">${f.airline}</div>
          <div class="fp-price-tag">${totalPrice !== null ? `&euro;${totalPrice} <span class="fp-price-sub">retour</span>` : `<span class="fp-price-sub fp-price-check">Zie Google Flights</span>`}</div>
        </div>
        <div class="fp-route">
          <span class="fp-dir-label">Heen</span>
          <span class="fp-airport">${f.from}</span>
          <span class="fp-time">${f.dep}</span>
          <span class="fp-arrow">&#9992;</span>
          <span class="fp-time">${f.arr}</span>
          <span class="fp-airport">${f.to}</span>
          ${stopsLabel}
        </div>
        ${returnRow}
        <p class="fp-pitch">${f.pitch}</p>
        <div class="fp-select-btn">${isSel ? '&#10003; Geselecteerd' : 'Selecteer deze vlucht'}</div>
      </div>`;
  }).join('');

  el.querySelectorAll('.fp-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedFlight = card.dataset.key;
      renderFlightPicker();
      updateTripSummary();
    });
  });
}

// ── TRIP SUMMARY ─────────────────────────────
function updateTripSummary() {
  const summaryEl = document.getElementById('trip-summary');
  const innerEl   = document.getElementById('trip-summary-inner');
  if (!summaryEl || !innerEl) return;

  const slider = document.getElementById('person-slider');
  const n = slider ? parseInt(slider.value) : 6;

  const boat   = boats.find(b => b.id === selectedBoat);
  const flight = flightOptions.find(f => f.key === selectedFlight);

  if (!boat && !flight) { summaryEl.style.display = 'none'; return; }
  summaryEl.style.display = 'block';

  const boatPP   = boat   ? Math.round(boat.price_week / n) : null;
  const flightPP = (flight && flight.price !== null) ? flight.price : null; // retour totaal
  const foodDay  = parseInt(document.getElementById('ec-food-day')?.value  || 70);
  const apaTotal = parseInt(document.getElementById('ec-apa-total')?.value || 600);
  const foodPP   = foodDay * 7;
  const apaPP    = Math.round(apaTotal / n);
  const total    = (boatPP || 0) + (flightPP || 0) + foodPP + apaPP;

  const rows = [];
  if (boat) rows.push({
    label: `Boot: ${boat.name}`,
    sub: `&euro;${boat.price_week.toLocaleString('nl-NL')} &divide; ${n} pers.`,
    val: `&euro;${boatPP}`
  });
  if (flight) rows.push({
    label: `&#9992; Retourvlucht: ${flight.airline}`,
    sub: `Heen: ${flight.from} ${flight.dep}&rarr;${flight.to} ${flight.arr} &nbsp;|&nbsp; Terug: ${flight.returnFrom||'—'} ${flight.returnDep||'—'}&rarr;${flight.returnTo||'—'}`,
    val: flightPP !== null ? `&euro;${flightPP}` : `<span style="font-size:.8em;color:var(--jci-gold)">check Google Flights</span>`
  });
  rows.push({
    label: 'Eten &amp; drinken',
    sub: `&euro;${foodDay}/dag &times; 7 dagen`,
    val: `&euro;${foodPP}`
  });
  rows.push({
    label: 'APA (haven, brandstof, overig)',
    sub: `&euro;${apaTotal} totaal &divide; ${n} pers.`,
    val: `&euro;${apaPP}`
  });

  innerEl.innerHTML = `
    <div class="ts-rows">
      ${rows.map(r => `
        <div class="ts-row">
          <div class="ts-row-left">
            <div class="ts-row-label">${r.label}</div>
            <div class="ts-row-sub">${r.sub}</div>
          </div>
          <div class="ts-row-val">${r.val}</div>
        </div>`).join('')}
      <div class="ts-total-row">
        <div class="ts-total-label">Totaal per persoon</div>
        <div class="ts-total-val">&euro;${total.toLocaleString('nl-NL')}</div>
      </div>
    </div>
    ${!boat ? '<p class="ts-hint">&#8593; Selecteer ook een boot hierboven voor de volledige berekening.</p>' : ''}
    ${!flight ? '<p class="ts-hint">&#8593; Selecteer ook een vlucht hierboven.</p>' : ''}
    <a href="#aanmelden" class="btn btn-primary ts-cta">Ik doe mee &rarr;</a>
  `;
}

// ── EXTRA COSTS SLIDERS ──────────────────────
function initExtraCosts() {
  const foodSlider = document.getElementById('ec-food-slider');
  const foodInput  = document.getElementById('ec-food-day');
  const apaSlider  = document.getElementById('ec-apa-slider');
  const apaInput   = document.getElementById('ec-apa-total');
  if (!foodSlider) return;

  function updateFood() {
    const v = parseInt(foodSlider.value);
    foodInput.value = v;
    const total = v * 7;
    const el = document.getElementById('ec-food-total');
    if (el) el.textContent = `€${total}`;
    updateTripSummary();
  }
  function updateApa() {
    const v = parseInt(apaSlider.value);
    apaInput.value = v;
    const n = parseInt(document.getElementById('person-slider')?.value || 6);
    const el = document.getElementById('ec-apa-pp');
    const note = document.getElementById('ec-apa-pp-note');
    if (el) el.textContent = `€${Math.round(v / n)}`;
    if (note) note.textContent = `(bij ${n} pers.)`;
    updateTripSummary();
  }

  foodSlider.addEventListener('input', () => { foodInput.value = foodSlider.value; updateFood(); });
  foodInput.addEventListener('input', () => {
    let v = Math.max(40, Math.min(100, parseInt(foodInput.value) || 70));
    foodSlider.value = v; foodInput.value = v; updateFood();
  });
  apaSlider.addEventListener('input', () => { apaInput.value = apaSlider.value; updateApa(); });
  apaInput.addEventListener('input', () => {
    let v = Math.max(400, Math.min(800, parseInt(apaInput.value) || 600));
    apaSlider.value = v; apaInput.value = v; updateApa();
  });

  updateFood();
  updateApa();
}

function initPriceCalc() {
  const slider = document.getElementById('person-slider');
  if (!slider) return;
  slider.addEventListener('input', () => {
    updatePriceCalc();
    updateTripSummary();
    // refresh APA per-person note when group size changes
    const apaSlider = document.getElementById('ec-apa-slider');
    if (apaSlider) {
      const n = parseInt(slider.value);
      const v = parseInt(apaSlider.value);
      const el = document.getElementById('ec-apa-pp');
      const note = document.getElementById('ec-apa-pp-note');
      if (el) el.textContent = `€${Math.round(v / n)}`;
      if (note) note.textContent = `(bij ${n} pers.)`;
    }
  });
  updatePriceCalc();
  renderFlightPicker();
}

// ── GROUP SIZE SELECTOR ─────────────────────
function initGroupSelector() {
  document.querySelectorAll('.group-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.group-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      groupSize = parseInt(btn.dataset.size);
      // Sync slider to group size
      const slider = document.getElementById('person-slider');
      if (slider) {
        slider.value = groupSize;
        updatePriceCalc();
      }
      renderBoats();
    });
  });
}

// ── NAV ─────────────────────────────────────
function initNav() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  document.getElementById('hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('open');
    });
  });
}

// ── SORT / SEARCH ────────────────────────────
function initControls() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSort = btn.dataset.sort;
      renderBoats();
    });
  });

  const searchInput = document.getElementById('boat-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderBoats();
    });
  }
}

// ── MAP ──────────────────────────────────────
function initMap() {
  if (!document.getElementById('sailing-map') || typeof L === 'undefined') return;

  const map = L.map('sailing-map', {
    center: [43.97, 15.35],
    zoom: 9,
    zoomControl: true,
    scrollWheelZoom: false
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  const routeCoords = routeStops.map(s => s.pos);
  L.polyline([...routeCoords, routeStops[0].pos], {
    color: '#FFD700',
    weight: 3,
    opacity: 0.85,
    dashArray: '10, 6',
    lineJoin: 'round'
  }).addTo(map);

  routeStops.forEach((stop, i) => {
    const iconHtml = `<div class="marker-dot${stop.startEnd ? ' start' : ''}">${stop.startEnd ? '⚓' : i + 1}</div>`;
    const icon = L.divIcon({
      className: stop.startEnd ? 'map-marker start-end' : 'map-marker',
      html: iconHtml,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16]
    });

    L.marker(stop.pos, { icon }).addTo(map)
      .bindPopup(`<strong>${stop.name}</strong><br><span class="pop-day">${stop.day}</span>`);
  });

  const legendEl = document.getElementById('route-stops');
  if (legendEl) {
    legendEl.innerHTML = routeStops.map((stop, i) => `
      <div class="route-stop-item" data-idx="${i}">
        <div class="stop-num ${stop.startEnd ? 'gold' : ''}">${stop.startEnd ? '⚓' : i + 1}</div>
        <div class="stop-info">
          <span class="stop-name">${stop.name}</span>
          <span class="stop-day">${stop.day}</span>
        </div>
      </div>
    `).join('');

    legendEl.querySelectorAll('.route-stop-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.idx);
        map.setView(routeStops[idx].pos, 11, { animate: true });
      });
    });
  }
}

// ── FORM ────────────────────────────────────
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name     = form.name.value.trim();
  const lastname = form.lastname.value.trim();
  const email    = form.email.value.trim();
  const phone    = form.phone.value.trim();
  const boatId   = form.boat.value;
  const exp      = form.experience.value;
  const msg      = form.message.value.trim();
  const wa       = form.whatsapp.checked;

  const boatLabel = boatId
    ? (boats.find(b => b.id === parseInt(boatId))?.name || 'Geen voorkeur')
    : 'Geen voorkeur';

  const body = encodeURIComponent(
    `Naam: ${name} ${lastname}\n` +
    `E-mail: ${email}\n` +
    (phone ? `Telefoon: ${phone}\n` : '') +
    `Voorkeur boot: ${boatLabel}\n` +
    `Zeilerervaring: ${exp}\n` +
    (msg ? `Opmerkingen: ${msg}\n` : '') +
    `WhatsApp groep: ${wa ? 'Ja' : 'Nee'}\n`
  );

  window.location.href = `mailto:sailing@jci.nl?subject=Aanmelding%20JCI%20Sailing%20Week%202026%20%E2%80%93%20${encodeURIComponent(name + ' ' + lastname)}&body=${body}`;

  setTimeout(() => {
    document.getElementById('success-modal').style.display = '';
    form.reset();
    selectedBoat = null;
    renderBoats();
    updatePriceCalc();
  }, 400);

  return false;
}

function closeModal() {
  document.getElementById('success-modal').style.display = 'none';
}

// ── SMOOTH SCROLL ────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ── VIDEO AUTOPLAY ON SCROLL ─────────────────
function loadVideo(wrapper, withSound) {
  const id = wrapper.dataset.videoId;
  if (!id || id.startsWith('VIDEO_ID')) return; // placeholder — no real ID yet
  const mute = withSound ? 0 : 1;
  wrapper.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${id}?autoplay=1&mute=${mute}&rel=0&playsinline=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>`;
}

function initVideoAutoplay() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const wrapper = entry.target;
        // Only swap if still showing thumbnail (not already an iframe)
        if (wrapper.querySelector('.video-thumb')) {
          loadVideo(wrapper, false); // muted autoplay
        }
        observer.unobserve(wrapper);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.video-wrapper').forEach(wrapper => {
    observer.observe(wrapper);
  });
}

// ── REVEAL ──────────────────────────────────
function initReveal() {
  const items = document.querySelectorAll('.why-card, .video-card, .flow-step, .cost-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  items.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(el);
  });
}

// ── AANBEVOLEN VLUCHTEN ──────────────────────
// Vul hier de vluchtgegevens in. Per vlucht:
//   direction: "heen" of "terug"
//   airline:   naam van de luchtvaartmaatschappij
//   flightNr:  vluchtnummer (bv. "KL1785")
//   from / to: luchthavencodes (bv. "AMS", "ZAD")
//   dep / arr: vertrektijd / aankomsttijd (bv. "07:10", "10:35")
//   date:      datum (bv. "29 aug 2026")
//   stops:     aantal tussenstops (0 = direct)
//   duration:  totale vluchttijd (bv. "2u 25m")
//   note:      optionele opmerking (bv. "Vroeg opstaan, mooie aankomsttijd")
const recommendedFlights = [
  // ── HEENVLUCHTEN (29 aug 2026) ──
  {
    direction: "heen",
    airline: "Transavia",
    flightNr: "HV6695",
    from: "RTM", to: "ZAD",
    dep: "07:10", arr: "09:00",
    date: "29 aug 2026",
    stops: 0, duration: "1u 50m",
    note: "✓ Direct — vroegste aankomst Zadar"
  },
  {
    direction: "heen",
    airline: "KLM + Ryanair",
    flightNr: "KL1333",
    from: "AMS", to: "ZAD",
    dep: "12:10", arr: "17:05",
    date: "29 aug 2026",
    stops: 1, duration: "4u 55m",
    note: "Via Poznań · KL1333 + FR7252"
  },
  {
    direction: "heen",
    airline: "Aer Lingus",
    flightNr: "EI603",
    from: "AMS", to: "ZAD",
    dep: "09:35", arr: "15:30",
    date: "29 aug 2026",
    stops: 1, duration: "5u 55m",
    note: "Via Dublin · EI603"
  },
  // ── TERUGVLUCHTEN (5 sep 2026) ──
  {
    direction: "terug",
    airline: "Transavia",
    flightNr: "HV6694",
    from: "ZAD", to: "RTM",
    dep: "09:40", arr: "11:40",
    date: "5 sep 2026",
    stops: 0, duration: "2u 00m",
    note: "✓ Direct — thuis voor de middag · 7 tickets beschikbaar"
  },
  {
    direction: "terug",
    airline: "Croatia Airlines",
    flightNr: "OU—",
    from: "ZAD", to: "AMS",
    dep: "07:00", arr: "10:30",
    date: "5 sep 2026",
    stops: 1, duration: "3u 30m",
    note: "Via Zagreb · bij KLM/Ryanair heen"
  },
  {
    direction: "terug",
    airline: "Ryanair + KLM",
    flightNr: "FR—",
    from: "ZAD", to: "AMS",
    dep: "08:50", arr: "13:50",
    date: "5 sep 2026",
    stops: 1, duration: "5u 00m",
    note: "Via Krakau · bij Aer Lingus heen · ⚠ 2 stoelen"
  },
];

// ── RENDER FLIGHTS ────────────────────────────
function renderFlights() {
  const heen  = recommendedFlights.filter(f => f.direction === "heen");
  const terug = recommendedFlights.filter(f => f.direction === "terug");

  function flightCard(f) {
    const stopsLabel = f.stops === 0 ? '<span class="badge-direct">Direct</span>'
                     : `<span class="badge-stop">${f.stops} tussenstop</span>`;
    const depDate = f.direction === "heen" ? "20260829" : "20260905";
    const retDate = f.direction === "heen" ? "20260905" : "";

    // Airline-specific booking deep-links
    let bookingBtn = '';
    if (f.airline === "Transavia") {
      const tvLink = `https://www.transavia.com/nl-NL/vluchten/zoeken/#outbound/${f.from}/${f.to}/${depDate}/1adults`;
      bookingBtn = `<a href="${tvLink}" target="_blank" rel="noopener" class="fc-btn fc-btn-primary">✈ Boek bij Transavia</a>`;
    } else if (f.airline === "Ryanair") {
      const ryLink = `https://www.ryanair.com/nl/nl/trip/flights/select?adults=1&teens=0&children=0&infants=0&dateOut=${depDate.slice(0,4)+'-'+depDate.slice(4,6)+'-'+depDate.slice(6)}&originIata=${f.from}&destinationIata=${f.to}&isConnectedFlight=false&discount=0&promoCode=&isReturn=false`;
      bookingBtn = `<a href="${ryLink}" target="_blank" rel="noopener" class="fc-btn fc-btn-primary">✈ Boek bij Ryanair</a>`;
    }
    const gfLink = `https://www.google.com/travel/flights?q=${encodeURIComponent(f.flightNr + ' ' + f.date)}`;
    const ssLink = `https://www.skyscanner.nl/vluchten/${f.from.toLowerCase()}/${f.to.toLowerCase()}/${f.direction === "heen" ? "260829" : "260905"}/`;

    return `
      <div class="flight-card" data-fnr="${f.flightNr}">
        <div class="fc-left">
          <div class="fc-airline">${f.airline}</div>
          <div class="fc-number">${f.flightNr}</div>
          <div class="fc-live-price" title="Laagste gevonden prijs (handbagage)">—</div>
        </div>
        <div class="fc-route">
          <div class="fc-time-block">
            <span class="fc-time fc-dep-time">${f.dep}</span>
            <span class="fc-airport">${f.from}</span>
          </div>
          <div class="fc-line">
            <span class="fc-duration">${f.duration}</span>
            <div class="fc-track"><div class="fc-dot"></div><div class="fc-dash"></div><div class="fc-plane">✈</div><div class="fc-dash"></div><div class="fc-dot"></div></div>
            ${stopsLabel}
          </div>
          <div class="fc-time-block">
            <span class="fc-time fc-arr-time">${f.arr}</span>
            <span class="fc-airport">${f.to}</span>
          </div>
        </div>
        <div class="fc-right">
          <div class="fc-date">${f.date}</div>
          <div class="fc-seats" style="display:none"></div>
          ${f.note ? `<div class="fc-note">${f.note}</div>` : ''}
          <div class="fc-actions">
            ${bookingBtn}
            <a href="#" target="_blank" rel="noopener" class="fc-btn fc-btn-kiwi" style="display:none">Boek via Kiwi</a>
            <a href="${gfLink}" target="_blank" rel="noopener" class="fc-btn fc-btn-google">Google Flights</a>
            <a href="${ssLink}" target="_blank" rel="noopener" class="fc-btn fc-btn-ss">Skyscanner</a>
          </div>
        </div>
      </div>`;
  }

  const heenEl  = document.getElementById('flights-heen');
  const terugEl = document.getElementById('flights-terug');
  if (heenEl)  heenEl.innerHTML  = heen.map(flightCard).join('');
  if (terugEl) terugEl.innerHTML = terug.map(flightCard).join('');
}

// ── LOAD LIVE PRICES FROM prices.json ────────
function loadLivePrices() {
  fetch('prices.json?v=' + Date.now())
    .then(r => { if (!r.ok) throw new Error('no prices.json'); return r.json(); })
    .then(data => {
      const retour = data.retour || {};
      const fetchedAt = data.fetched_at ? new Date(data.fetched_at) : null;

      // Update flight cards in the vluchten section (match on heen flight number)
      Object.entries(retour).forEach(([heenFnr, info]) => {
        // Heen card
        const heenCard = document.querySelector(`.flight-card[data-fnr="${heenFnr}"]`);
        if (heenCard) {
          const priceEl = heenCard.querySelector('.fc-live-price');
          if (priceEl) { priceEl.textContent = `€${info.price_eur} retour`; priceEl.classList.add('fc-price-loaded'); }
          const depEl = heenCard.querySelector('.fc-dep-time');
          const arrEl = heenCard.querySelector('.fc-arr-time');
          if (depEl && info.heen_dep && info.heen_dep !== '—') depEl.textContent = info.heen_dep;
          if (arrEl && info.heen_arr && info.heen_arr !== '—') arrEl.textContent = info.heen_arr;
          const seatsEl = heenCard.querySelector('.fc-seats');
          if (seatsEl && info.seats_left != null) {
            seatsEl.textContent = info.seats_left <= 5 ? `⚠ Nog ${info.seats_left} plekken` : '';
            seatsEl.style.display = info.seats_left <= 5 ? 'block' : 'none';
          }
          if (info.booking_url) {
            const kiwiBtn = heenCard.querySelector('.fc-btn-kiwi');
            if (kiwiBtn) { kiwiBtn.href = info.booking_url; kiwiBtn.style.display = 'block'; }
          }
        }
        // Terugvlucht card (match on terug_flight number)
        if (info.terug_flight && info.terug_flight !== '—') {
          const terugCard = document.querySelector(`.flight-card[data-fnr="${info.terug_flight}"]`);
          if (terugCard) {
            const priceEl = terugCard.querySelector('.fc-live-price');
            if (priceEl) { priceEl.textContent = `€${info.price_eur} retour`; priceEl.classList.add('fc-price-loaded'); }
            const depEl = terugCard.querySelector('.fc-dep-time');
            const arrEl = terugCard.querySelector('.fc-arr-time');
            if (depEl && info.terug_dep && info.terug_dep !== '—') depEl.textContent = info.terug_dep;
            if (arrEl && info.terug_arr && info.terug_arr !== '—') arrEl.textContent = info.terug_arr;
            if (info.booking_url) {
              const kiwiBtn = terugCard.querySelector('.fc-btn-kiwi');
              if (kiwiBtn) { kiwiBtn.href = info.booking_url; kiwiBtn.style.display = 'block'; }
            }
          }
        }
        // Update flightOptions price with live retour price
        const opt = flightOptions.find(f => f.key === heenFnr);
        if (opt) {
          opt.price = info.price_eur;
          opt.returnDep = info.terug_dep || opt.returnDep;
          opt.returnArr = info.terug_arr || opt.returnArr;
          opt.returnFlightNr = info.terug_flight !== '—' ? info.terug_flight : opt.returnFlightNr;
        }
      });

      // Re-render flight picker with live prices
      renderFlightPicker();

      // Show timestamp
      if (fetchedAt) {
        const ts = document.getElementById('prices-timestamp');
        if (ts) {
          ts.textContent = `Prijzen bijgewerkt: ${fetchedAt.toLocaleDateString('nl-NL', {day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})}`;
          ts.style.display = 'block';
        }
      }
    })
    .catch(() => {
      // prices.json not yet generated — silent fail, cards still show booking buttons
    });
}

// ── INIT ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderBoats();
  initControls();
  initGroupSelector();
  initPriceCalc();
  initSmoothScroll();
  initMap();
  initVideoAutoplay();
  renderFlights();
  loadLivePrices();
  initExtraCosts();
  setTimeout(initReveal, 100);
});
