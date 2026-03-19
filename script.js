```javascript
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
```

---
