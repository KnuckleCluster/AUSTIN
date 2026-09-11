/**
 * AUSTIN — app logic
 * No audio files are read or referenced here. Playback is either a
 * Spotify embed (if a spotifyId is set on the track in tracks.js) or a
 * set of "search this track" links out to Spotify / YouTube Music.
 */

const trackListEl = document.getElementById("track-list");
const stopEl = document.getElementById("stop");
const stopScrim = document.getElementById("stop-scrim");
const stopClose = document.getElementById("stop-close");
const stopMile = document.getElementById("stop-mile");
const stopTitle = document.getElementById("stop-title");
const stopLength = document.getElementById("stop-length");
const stopMeaning = document.getElementById("stop-meaning");
const stopListen = document.getElementById("stop-listen");
const stopGenius = document.getElementById("stop-genius");

let lastFocused = null;

function renderTrackList() {
  const frag = document.createDocumentFragment();

  TRACKS.forEach((track) => {
    const li = document.createElement("li");
    li.className = "stop-row";

    li.innerHTML = `
      <button class="stop-row__btn" data-id="${track.id}" aria-haspopup="dialog">
        <span class="stop-row__marker">${track.mile}</span>
        <span class="stop-row__title">${track.title}</span>
        <span class="stop-row__length">${track.length || ""}</span>
      </button>
    `;

    frag.appendChild(li);
  });

  trackListEl.appendChild(frag);
}

function searchUrl(base, query) {
  return `${base}${encodeURIComponent(query)}`;
}

/**
 * Accepts whatever someone pastes into tracks.js — a bare ID, a full
 * open.spotify.com share link, an open.spotify.com/embed link, or a
 * spotify:track:ID URI — and pulls out just the track ID.
 */
function extractSpotifyId(raw) {
  if (!raw) return "";
  const trimmed = String(raw).trim();

  let match = trimmed.match(/spotify:track:([a-zA-Z0-9]+)/);
  if (match) return match[1];

  match = trimmed.match(/track\/([a-zA-Z0-9]+)/);
  if (match) return match[1];

  if (/^[a-zA-Z0-9]+$/.test(trimmed)) return trimmed;

  return "";
}

function renderListenSection(track) {
  const spotifyId = extractSpotifyId(track.spotifyId);

  if (spotifyId) {
    stopListen.innerHTML = `
      <div class="listen-embed">
        <iframe
          src="https://open.spotify.com/embed/track/${spotifyId}?theme=0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    `;
    return;
  }

  const query = `Post Malone ${track.title} Austin`;
  const spotify = searchUrl("https://open.spotify.com/search/", query);
  const ytMusic = searchUrl("https://music.youtube.com/search?q=", query);

  stopListen.innerHTML = `
    <div class="listen-links">
      <a href="${spotify}" target="_blank" rel="noopener">Find on Spotify →</a>
      <a href="${ytMusic}" target="_blank" rel="noopener">Find on YouTube Music →</a>
    </div>
    <p class="listen-hint">No embed wired up for this track yet — see the note at the top of tracks.js to add one.</p>
  `;
}

function openStop(id) {
  const track = TRACKS.find((t) => t.id === id);
  if (!track) return;

  stopMile.textContent = `Mile ${track.mile}`;
  stopTitle.textContent = track.title;
  stopLength.textContent = track.length || "";
  stopMeaning.textContent = track.meaning;
  stopGenius.href = searchUrl("https://genius.com/search?q=", `Post Malone ${track.title}`);

  lastFocused = document.activeElement;
  stopEl.hidden = false;
  document.body.style.overflow = "hidden";
  stopClose.focus();

  // render the embed/links after the panel is visible, not before —
  // an iframe built while its parent is still `hidden` can fail to load
  renderListenSection(track);
}

function closeStop() {
  stopEl.hidden = true;
  document.body.style.overflow = "";
  // stop any embedded playback by clearing the iframe
  stopListen.innerHTML = "";
  if (lastFocused) lastFocused.focus();
}

trackListEl.addEventListener("click", (event) => {
  const btn = event.target.closest(".stop-row__btn");
  if (!btn) return;
  openStop(Number(btn.dataset.id));
});

stopClose.addEventListener("click", closeStop);
stopScrim.addEventListener("click", closeStop);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !stopEl.hidden) closeStop();
});

renderTrackList();
