const DEFAULT_REST_SECONDS = 30;

function svgDataUri(svg) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const poseLibrary = {
  plank: {
    name: "Plank",
    cue: "Keep a straight line from shoulders to heels. Brace your core and avoid sagging hips.",
    image: svgDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360">
        <rect width="100%" height="100%" fill="#f8fafc"/>
        <text x="30" y="45" font-size="28" font-family="Arial" fill="#0f172a">Plank</text>
        <line x1="70" y1="275" x2="530" y2="275" stroke="#94a3b8" stroke-width="6"/>
        <circle cx="140" cy="135" r="24" fill="#0f172a"/>
        <line x1="160" y1="145" x2="330" y2="175" stroke="#0f172a" stroke-width="20" stroke-linecap="round"/>
        <line x1="320" y1="175" x2="445" y2="188" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
        <line x1="180" y1="168" x2="120" y2="255" stroke="#0f172a" stroke-width="15" stroke-linecap="round"/>
        <line x1="360" y1="180" x2="305" y2="270" stroke="#0f172a" stroke-width="15" stroke-linecap="round"/>
        <line x1="440" y1="190" x2="510" y2="270" stroke="#0f172a" stroke-width="15" stroke-linecap="round"/>
      </svg>
    `),
  },
  wallSit: {
    name: "Wall Sit",
    cue: "Back flat to the wall, thighs near parallel, knees stacked over ankles.",
    image: svgDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360">
        <rect width="100%" height="100%" fill="#f8fafc"/>
        <text x="30" y="45" font-size="28" font-family="Arial" fill="#0f172a">Wall Sit</text>
        <rect x="100" y="55" width="20" height="235" fill="#94a3b8"/>
        <line x1="70" y1="290" x2="540" y2="290" stroke="#94a3b8" stroke-width="6"/>
        <circle cx="175" cy="105" r="24" fill="#0f172a"/>
        <line x1="155" y1="130" x2="155" y2="210" stroke="#0f172a" stroke-width="20" stroke-linecap="round"/>
        <line x1="155" y1="160" x2="250" y2="160" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
        <line x1="250" y1="160" x2="250" y2="250" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
        <line x1="155" y1="210" x2="155" y2="285" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
        <line x1="250" y1="250" x2="325" y2="250" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
      </svg>
    `),
  },
  hollowHold: {
    name: "Hollow Hold",
    cue: "Lower back pressed into the floor. Ribs down, arms and legs long.",
    image: svgDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360">
        <rect width="100%" height="100%" fill="#f8fafc"/>
        <text x="30" y="45" font-size="28" font-family="Arial" fill="#0f172a">Hollow Hold</text>
        <line x1="60" y1="270" x2="540" y2="270" stroke="#94a3b8" stroke-width="6"/>
        <circle cx="175" cy="210" r="22" fill="#0f172a"/>
        <line x1="195" y1="205" x2="315" y2="175" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
        <line x1="300" y1="178" x2="405" y2="150" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/>
        <line x1="210" y1="190" x2="120" y2="145" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
        <line x1="315" y1="175" x2="420" y2="240" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
        <line x1="315" y1="175" x2="435" y2="195" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
      </svg>
    `),
  },
  sidePlank: {
    name: "Side Plank",
    cue: "Lift hips high, stack shoulders, and keep the body in one long line.",
    image: svgDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360">
        <rect width="100%" height="100%" fill="#f8fafc"/>
        <text x="30" y="45" font-size="28" font-family="Arial" fill="#0f172a">Side Plank</text>
        <line x1="70" y1="280" x2="540" y2="280" stroke="#94a3b8" stroke-width="6"/>
        <circle cx="220" cy="120" r="22" fill="#0f172a"/>
        <line x1="205" y1="140" x2="305" y2="185" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
        <line x1="305" y1="185" x2="400" y2="225" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
        <line x1="260" y1="165" x2="180" y2="215" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
        <line x1="250" y1="160" x2="240" y2="260" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
        <line x1="305" y1="185" x2="285" y2="275" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
      </svg>
    `),
  },
  gluteBridgeHold: {
    name: "Glute Bridge Hold",
    cue: "Drive through heels, squeeze glutes, and keep ribs down at the top.",
    image: svgDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360">
        <rect width="100%" height="100%" fill="#f8fafc"/>
        <text x="30" y="45" font-size="28" font-family="Arial" fill="#0f172a">Glute Bridge Hold</text>
        <line x1="60" y1="280" x2="540" y2="280" stroke="#94a3b8" stroke-width="6"/>
        <circle cx="145" cy="205" r="22" fill="#0f172a"/>
        <line x1="165" y1="200" x2="245" y2="205" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/>
        <line x1="245" y1="205" x2="340" y2="160" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
        <line x1="340" y1="160" x2="430" y2="220" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
        <line x1="210" y1="205" x2="180" y2="255" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
        <line x1="410" y1="205" x2="410" y2="280" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
        <line x1="430" y1="220" x2="485" y2="280" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
      </svg>
    `),
  },
};

const elements = {
  poseSelect: document.getElementById("poseSelect"),
  durationInput: document.getElementById("durationInput"),
  repsInput: document.getElementById("repsInput"),
  restInput: document.getElementById("restInput"),
  customImageInput: document.getElementById("customImageInput"),
  audioToggle: document.getElementById("audioToggle"),
  wakeLockToggle: document.getElementById("wakeLockToggle"),
  startBtn: document.getElementById("startBtn"),
  pauseBtn: document.getElementById("pauseBtn"),
  resetBtn: document.getElementById("resetBtn"),
  savePresetBtn: document.getElementById("savePresetBtn"),
  loadPresetBtn: document.getElementById("loadPresetBtn"),
  installBtn: document.getElementById("installBtn"),
  installStatus: document.getElementById("installStatus"),
  phaseBadge: document.getElementById("phaseBadge"),
  poseBadge: document.getElementById("poseBadge"),
  poseTitle: document.getElementById("poseTitle"),
  instructionText: document.getElementById("instructionText"),
  timerValue: document.getElementById("timerValue"),
  sessionProgressLabel: document.getElementById("sessionProgressLabel"),
  repProgressName: document.getElementById("repProgressName"),
  repProgressLabel: document.getElementById("repProgressLabel"),
  sessionProgressBar: document.getElementById("sessionProgressBar"),
  repProgressBar: document.getElementById("repProgressBar"),
  currentRepStat: document.getElementById("currentRepStat"),
  repDurationStat: document.getElementById("repDurationStat"),
  restDurationStat: document.getElementById("restDurationStat"),
  summaryWork: document.getElementById("summaryWork"),
  summaryRest: document.getElementById("summaryRest"),
  summaryTotal: document.getElementById("summaryTotal"),
  poseImage: document.getElementById("poseImage"),
};

const state = {
  poseKey: "plank",
  duration: 30,
  reps: 3,
  rest: DEFAULT_REST_SECONDS,
  phase: "idle",
  secondsLeft: 30,
  currentRep: 0,
  timerId: null,
  deferredPrompt: null,
  wakeLock: null,
};

function populatePoses() {
  Object.entries(poseLibrary).forEach(([key, pose]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = pose.name;
    elements.poseSelect.appendChild(option);
  });
}

function getPose() {
  return poseLibrary[state.poseKey];
}

function getCustomImage() {
  const value = elements.customImageInput.value.trim();
  return value || getPose().image;
}

function speak(text) {
  if (!elements.audioToggle.checked || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function vibrate(pattern) {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

function clearTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

async function requestWakeLock() {
  if (!elements.wakeLockToggle.checked || !("wakeLock" in navigator)) return;
  try {
    state.wakeLock = await navigator.wakeLock.request("screen");
  } catch {
    elements.installStatus.textContent = "Wake lock unavailable";
  }
}

async function releaseWakeLock() {
  if (state.wakeLock) {
    try {
      await state.wakeLock.release();
    } catch {}
    state.wakeLock = null;
  }
}

function totalSeconds() {
  return state.duration * state.reps + state.rest * Math.max(state.reps - 1, 0);
}

function elapsedSeconds() {
  if (state.phase === "idle") return 0;
  if (state.phase === "complete") return totalSeconds();

  const completedWork = state.duration * Math.max(state.currentRep - (state.phase === "work" ? 1 : 0), 0);
  const completedRest = state.rest * Math.max(state.currentRep - 1, 0);
  const live =
    state.phase === "work"
      ? state.duration - state.secondsLeft
      : state.phase === "rest"
      ? state.rest - state.secondsLeft
      : 0;

  return Math.min(totalSeconds(), completedWork + completedRest + live);
}

function updateSummary() {
  const work = state.duration * state.reps;
  const rest = state.rest * Math.max(state.reps - 1, 0);
  elements.summaryWork.textContent = `${work}s`;
  elements.summaryRest.textContent = `${rest}s`;
  elements.summaryTotal.textContent = `${work + rest}s`;
}

function setInputsDisabled(disabled) {
  [
    elements.poseSelect,
    elements.durationInput,
    elements.repsInput,
    elements.restInput,
    elements.customImageInput,
  ].forEach((el) => {
    el.disabled = disabled;
  });
}

function render() {
  const pose = getPose();
  const sessionPct = Math.round((elapsedSeconds() / Math.max(totalSeconds(), 1)) * 100);

  let phaseLabel = "Ready";
  let instruction = "Choose your settings and press Start.";
  let repPct = 0;

  if (state.phase === "prep") {
    phaseLabel = "Get Ready";
    instruction = "Set your position and prepare to hold.";
  } else if (state.phase === "work") {
    phaseLabel = `Working • Rep ${state.currentRep} of ${state.reps}`;
    instruction = pose.cue;
    repPct = Math.round(((state.duration - state.secondsLeft) / Math.max(state.duration, 1)) * 100);
  } else if (state.phase === "rest") {
    phaseLabel = `Rest • Next rep ${Math.min(state.currentRep + 1, state.reps)} of ${state.reps}`;
    instruction = "Recover, breathe steadily, and reset your form.";
    repPct = Math.round(((state.rest - state.secondsLeft) / Math.max(state.rest, 1)) * 100);
  } else if (state.phase === "complete") {
    phaseLabel = "Complete";
    instruction = "Session finished. You can restart or adjust your settings.";
    repPct = 100;
  }

  elements.phaseBadge.textContent = phaseLabel;
  elements.poseBadge.textContent = pose.name;
  elements.poseTitle.textContent = pose.name;
  elements.instructionText.textContent = instruction;
  elements.timerValue.textContent = String(state.secondsLeft);
  elements.sessionProgressLabel.textContent = `${sessionPct}%`;
  elements.repProgressLabel.textContent = `${repPct}%`;
  elements.repProgressName.textContent = state.phase === "rest" ? "Rest progress" : "Rep progress";
  elements.sessionProgressBar.style.width = `${sessionPct}%`;
  elements.repProgressBar.style.width = `${repPct}%`;
  elements.currentRepStat.textContent = `${state.currentRep} / ${state.reps}`;
  elements.repDurationStat.textContent = `${state.duration}s`;
  elements.restDurationStat.textContent = `${state.rest}s`;
  elements.poseImage.src = getCustomImage();

  const locked = ["prep", "work", "rest"].includes(state.phase);
  setInputsDisabled(locked);
  elements.startBtn.disabled = !(state.phase === "idle" || state.phase === "complete");
  elements.pauseBtn.disabled = !locked;

  updateSummary();
}

function resetWorkout() {
  clearTimer();
  releaseWakeLock();
  state.phase = "idle";
  state.currentRep = 0;
  state.secondsLeft = state.duration;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  render();
}

async function startWorkout() {
  clearTimer();
  await requestWakeLock();
  state.currentRep = 1;
  state.phase = "prep";
  state.secondsLeft = 3;
  speak(`Starting ${getPose().name}. Get ready.`);
  vibrate([100, 50, 100]);
  render();
  startTicking();
}

function pauseWorkout() {
  clearTimer();
  state.phase = "idle";
  releaseWakeLock();
  render();
}

function advancePhase() {
  if (state.phase === "prep") {
    state.phase = "work";
    state.secondsLeft = state.duration;
    speak(`Rep ${state.currentRep}. Hold.`);
    vibrate(150);
    render();
    return;
  }

  if (state.phase === "work") {
    if (state.currentRep >= state.reps) {
      state.phase = "complete";
      clearTimer();
      releaseWakeLock();
      speak("Workout complete. Nice work.");
      vibrate([200, 100, 200]);
      render();
      return;
    }

    state.phase = "rest";
    state.secondsLeft = state.rest;
    speak(`Rest for ${state.rest} seconds.`);
    vibrate([80, 50, 80]);
    render();
    return;
  }

  if (state.phase === "rest") {
    state.currentRep += 1;
    state.phase = "work";
    state.secondsLeft = state.duration;
    speak(`Rep ${state.currentRep}. Hold.`);
    vibrate(150);
    render();
  }
}

function handleCountdownCues() {
  if (state.phase === "work" && [3, 2, 1].includes(state.secondsLeft)) {
    speak(String(state.secondsLeft));
  }
  if (state.phase === "rest" && [5, 4, 3, 2, 1].includes(state.secondsLeft)) {
    speak(String(state.secondsLeft));
  }
}

function startTicking() {
  clearTimer();
  state.timerId = setInterval(() => {
    if (state.secondsLeft > 1) {
      state.secondsLeft -= 1;
      handleCountdownCues();
      render();
      return;
    }

    state.secondsLeft = 0;
    render();
    advancePhase();
  }, 1000);
}

function savePreset() {
  const preset = {
    poseKey: state.poseKey,
    duration: state.duration,
    reps: state.reps,
    rest: state.rest,
    customImage: elements.customImageInput.value.trim(),
    audioEnabled: elements.audioToggle.checked,
    wakeLockEnabled: elements.wakeLockToggle.checked,
  };
  localStorage.setItem("isometricWorkoutPreset", JSON.stringify(preset));
  elements.installStatus.textContent = "Preset saved";
}

function loadPreset() {
  const raw = localStorage.getItem("isometricWorkoutPreset");
  if (!raw) {
    elements.installStatus.textContent = "No saved preset";
    return;
  }

  try {
    const preset = JSON.parse(raw);
    state.poseKey = preset.poseKey || "plank";
    state.duration = Math.max(5, Number(preset.duration) || 30);
    state.reps = Math.max(1, Number(preset.reps) || 3);
    state.rest = Math.max(5, Number(preset.rest) || DEFAULT_REST_SECONDS);
    elements.poseSelect.value = state.poseKey;
    elements.durationInput.value = state.duration;
    elements.repsInput.value = state.reps;
    elements.restInput.value = state.rest;
    elements.customImageInput.value = preset.customImage || "";
    elements.audioToggle.checked = Boolean(preset.audioEnabled);
    elements.wakeLockToggle.checked = Boolean(preset.wakeLockEnabled);
    state.secondsLeft = state.duration;
    elements.installStatus.textContent = "Preset loaded";
    render();
  } catch {
    elements.installStatus.textContent = "Saved preset invalid";
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        await navigator.serviceWorker.register("./sw.js");
        elements.installStatus.textContent = "Offline ready";
      } catch {
        elements.installStatus.textContent = "Service worker failed";
      }
    });
  }
}

function setupInstallPrompt() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.deferredPrompt = event;
    elements.installBtn.hidden = false;
    elements.installStatus.textContent = "Install available";
  });

  elements.installBtn.addEventListener("click", async () => {
    if (!state.deferredPrompt) return;
    state.deferredPrompt.prompt();
    await state.deferredPrompt.userChoice;
    state.deferredPrompt = null;
    elements.installBtn.hidden = true;
    elements.installStatus.textContent = "Install prompt shown";
  });
}

function wireEvents() {
  elements.poseSelect.addEventListener("change", (event) => {
    state.poseKey = event.target.value;
    render();
  });

  elements.durationInput.addEventListener("input", (event) => {
    state.duration = Math.max(5, Number(event.target.value) || 5);
    if (state.phase === "idle") state.secondsLeft = state.duration;
    render();
  });

  elements.repsInput.addEventListener("input", (event) => {
    state.reps = Math.max(1, Number(event.target.value) || 1);
    render();
  });

  elements.restInput.addEventListener("input", (event) => {
    state.rest = Math.max(5, Number(event.target.value) || 5);
    render();
  });

  elements.customImageInput.addEventListener("input", render);
  elements.audioToggle.addEventListener("change", render);
  elements.wakeLockToggle.addEventListener("change", render);

  elements.startBtn.addEventListener("click", startWorkout);
  elements.pauseBtn.addEventListener("click", pauseWorkout);
  elements.resetBtn.addEventListener("click", resetWorkout);
  elements.savePresetBtn.addEventListener("click", savePreset);
  elements.loadPresetBtn.addEventListener("click", loadPreset);

  document.addEventListener("visibilitychange", async () => {
    if (document.visibilityState === "visible" && ["prep", "work", "rest"].includes(state.phase)) {
      await requestWakeLock();
    }
  });
}

function init() {
  populatePoses();
  elements.poseSelect.value = state.poseKey;
  elements.durationInput.value = state.duration;
  elements.repsInput.value = state.reps;
  elements.restInput.value = state.rest;
  state.secondsLeft = state.duration;
  wireEvents();
  setupInstallPrompt();
  registerServiceWorker();
  render();
}

init();
