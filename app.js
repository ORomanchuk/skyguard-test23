const UAV_TYPES = {
  "Sting": { c4: 450 },
  "P1-SUN": { c4: 500 },
  "AS3-IR Merops": { autoWarhead: "КУФ-1,2" },
  "Shulika": { c4: 1200 },
  "Багнет-АА": { c4: 250 }
}

const UAV_MODES = ["Д", "Н", "Д/Н"]
const DETONATORS = ["ЕДП", "ЕДПР", "ЕД-8-Ж"]
const COMBAT_FLIGHT_RESULTS = ["Борт повернуто", "Борт втрачено", "Борт підірвано"]
const TRAINING_FLIGHT_RESULTS = ["Борт повернуто", "Борт втрачено"]
const TRAINING_RETURN_STATUS_OPTIONS = ["Без пошкоджень", "Борт пошкоджено"]
const BATTLE_RESULTS = ["Ціль знищено", "Ціль не знищено"]
const BASE_REASON_OPTIONS = [
  "Ціль візуально не виявлено",
  "Був візуальний контакт",
  "Ціль вийшла з зони ураження",
  "Ціль локаційно втрачено",
  "Ціль знищено суміжними підрозділами",
  "Технічна несправність борта"
]
const REASON_OPTIONS = {
  "Борт повернуто": BASE_REASON_OPTIONS,
  "Борт втрачено": [...BASE_REASON_OPTIONS, "Не вистачило батареї на повернення"],
  "Борт підірвано": [...BASE_REASON_OPTIONS, "Не вистачило батареї на повернення"]
}

const QUICK_VALUE_PRESETS = {
  azimuth: [0, 45, 90, 135, 180, 225, 270, 315],
  course: [0, 45, 90, 135, 180, 225, 270, 315],
  distance: [1000, 2000, 3000, 5000, 7000, 10000, 15000],
  height: [100, 300, 500, 700, 1000, 1200, 1500, 2000],
  az2: [0, 45, 90, 135, 180, 225, 270, 315],
  dist2: [1000, 2000, 3000, 5000, 7000, 10000, 15000],
  h2: [100, 300, 500, 700, 1000, 1200, 1500, 2000]
}

const APP_VERSION = "1.2.0"
const VERSION_STORAGE_KEY = "skyguard-app-version"
const SKIP_SPLASH_KEY = "skyguard-skip-splash"
const RELOAD_TRAINING_MODE_KEY = "skyguard-reload-training-mode"
const SETTINGS_STORAGE_KEY = "skyguard-settings-v2"
const LEGACY_FORM_STORAGE_KEY = "skyguard-form"
const LEGACY_UNIT_STORAGE_KEY = "skyguard-unit"
const LEGACY_CREW_STORAGE_KEY = "skyguard-crew"
const LEGACY_TOWN_STORAGE_KEY = "skyguard-town"
const LEGACY_SERIAL_STORAGE_KEY = "skyguard-serial"
const LEGACY_UAV_STORAGE_KEY = "skyguard-uav-config"
const LEGACY_DISCORD_WEBHOOK_STORAGE_KEY = "skyguard-discord-webhook"
const DISCORD_COMBAT_WEBHOOK_STORAGE_KEY = "skyguard-discord-webhook-combat"
const DISCORD_TRAINING_WEBHOOK_STORAGE_KEY = "skyguard-discord-webhook-training"
const DISCORD_COMBAT_LOCK_STORAGE_KEY = "skyguard-discord-lock-combat"
const DISCORD_TRAINING_LOCK_STORAGE_KEY = "skyguard-discord-lock-training"

const el = {
  unit: document.getElementById("unit"),
  crew: document.getElementById("crew"),
  town: document.getElementById("town"),
  serial: document.getElementById("serial"),
  target: document.getElementById("target"),
  targetType: document.getElementById("targetType"),
  targetTypeBlock: document.getElementById("targetTypeBlock"),
  targetRow: document.getElementById("targetRow"),
  targetSummary: document.getElementById("targetSummary"),
  noTaskTargetBtn: document.getElementById("noTaskTargetBtn"),
  azimuth: document.getElementById("azimuth"),
  course: document.getElementById("course"),
  distance: document.getElementById("distance"),
  height: document.getElementById("height"),
  takeoff: document.getElementById("takeoff"),
  endTime: document.getElementById("endTime"),
  report: document.getElementById("reportPreview"),
  reportBlock: document.getElementById("reportBlock"),
  logBlock: document.getElementById("logBlock"),
  flightLog: document.getElementById("flightLog"),
  afterTakeoff: document.getElementById("afterTakeoff"),
  preTakeoffFields: document.getElementById("preTakeoffFields"),
  combatFields: document.getElementById("combatFields"),
  combatOutcomeBlock: document.getElementById("combatOutcomeBlock"),
  battleResults: document.getElementById("battleResults"),
  flightOutcomeBlock: document.getElementById("flightOutcomeBlock"),
  flightResults: document.getElementById("flightResults"),
  trainingOutcomeBlock: document.getElementById("trainingOutcomeBlock"),
  trainingResults: document.getElementById("trainingResults"),
  trainingReturnStatusBlock: document.getElementById("trainingReturnStatusBlock"),
  trainingReturnStatusOptions: document.getElementById("trainingReturnStatusOptions"),
  reasonBlock: document.getElementById("reasonBlock"),
  reasonOptions: document.getElementById("reasonOptions"),
  destroyCoords: document.getElementById("destroyCoords"),
  az2: document.getElementById("az2"),
  dist2: document.getElementById("dist2"),
  h2: document.getElementById("h2"),
  trainingToggle: document.getElementById("trainingToggle"),
  versionInfoBtn: document.getElementById("versionInfoBtn"),
  versionInfoMenu: document.getElementById("versionInfoMenu"),
  versionInfoCloseBtn: document.getElementById("versionInfoCloseBtn"),
  crewMenuBtn: document.getElementById("crewMenuBtn"),
  crewMenu: document.getElementById("crewMenu"),
  crewMenuCloseBtn: document.getElementById("crewMenuCloseBtn"),
  discordCombatWebhookInput: document.getElementById("discordCombatWebhookInput"),
  discordCombatLockBtn: document.getElementById("discordCombatLockBtn"),
  discordTrainingWebhookInput: document.getElementById("discordTrainingWebhookInput"),
  discordTrainingLockBtn: document.getElementById("discordTrainingLockBtn"),
  quickValueMenu: document.getElementById("quickValueMenu"),
  quickValueTitle: document.getElementById("quickValueTitle"),
  quickValueOptions: document.getElementById("quickValueOptions"),
  quickValueCancelBtn: document.getElementById("quickValueCancelBtn"),
  uavSelectBtn: document.getElementById("uavSelectBtn"),
  uavMenu: document.getElementById("uavMenu"),
  uavTypeOptions: document.getElementById("uavTypeOptions"),
  uavModeOptions: document.getElementById("uavModeOptions"),
  detonatorBlock: document.getElementById("detonatorBlock"),
  detonatorOptions: document.getElementById("detonatorOptions"),
  uavModalSummary: document.getElementById("uavModalSummary"),
  uavConfirmBtn: document.getElementById("uavConfirmBtn"),
  uavClearBtn: document.getElementById("uavClearBtn"),
  uavCancelBtn: document.getElementById("uavCancelBtn"),
  copyReportBtn: document.getElementById("copyReportBtn"),
  sendWhatsBtn: document.getElementById("sendWhatsBtn"),
  sendDiscBtn: document.getElementById("sendDiscBtn")
}

let trainingMode = false
let hasTakenOff = false
let battleResult = ""
let flightResult = ""
let trainingReturnStatus = ""
let selectedReasons = []
let saveToastTimer = null
let isHydratingSettings = false
let appInitialized = false

let uavConfig = emptyUavConfig()
let modalSelection = {
  name: "",
  mode: "",
  detonator: ""
}

const skipSplash = sessionStorage.getItem(SKIP_SPLASH_KEY) === "1"
const reloadTrainingMode = sessionStorage.getItem(RELOAD_TRAINING_MODE_KEY)
sessionStorage.removeItem(SKIP_SPLASH_KEY)
sessionStorage.removeItem(RELOAD_TRAINING_MODE_KEY)

function emptyUavConfig() {
  return {
    name: "",
    mode: "",
    detonator: "",
    autoWarhead: "",
    c4: ""
  }
}

function sanitizeUavConfig(value) {
  if (!value || typeof value !== "object") return emptyUavConfig()
  return {
    name: typeof value.name === "string" ? value.name : "",
    mode: typeof value.mode === "string" ? value.mode : "",
    detonator: typeof value.detonator === "string" ? value.detonator : "",
    autoWarhead: typeof value.autoWarhead === "string" ? value.autoWarhead : "",
    c4: typeof value.c4 === "number" || typeof value.c4 === "string" ? value.c4 : ""
  }
}

function normalizePersistedSettings(value) {
  const payload = value && typeof value === "object" ? value : {}
  return {
    unit: typeof payload.unit === "string" ? payload.unit : "",
    crew: typeof payload.crew === "string" ? payload.crew : "",
    town: typeof payload.town === "string" ? payload.town : "",
    serial: typeof payload.serial === "string" ? payload.serial : "",
    uavConfig: sanitizeUavConfig(payload.uavConfig)
  }
}

function writePersistedSettings(settings) {
  const normalized = normalizePersistedSettings(settings)
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(normalized))
  localStorage.setItem(LEGACY_FORM_STORAGE_KEY, JSON.stringify(normalized))
}

function readLegacySettings() {
  let legacyFormSettings = normalizePersistedSettings(null)
  try {
    legacyFormSettings = normalizePersistedSettings(JSON.parse(localStorage.getItem(LEGACY_FORM_STORAGE_KEY) || "{}"))
  } catch {
    localStorage.removeItem(LEGACY_FORM_STORAGE_KEY)
  }

  let legacyUavConfig = emptyUavConfig()
  try {
    legacyUavConfig = sanitizeUavConfig(JSON.parse(localStorage.getItem(LEGACY_UAV_STORAGE_KEY) || "null"))
  } catch {
    localStorage.removeItem(LEGACY_UAV_STORAGE_KEY)
  }

  return normalizePersistedSettings({
    unit: localStorage.getItem(LEGACY_UNIT_STORAGE_KEY) || legacyFormSettings.unit,
    crew: localStorage.getItem(LEGACY_CREW_STORAGE_KEY) || legacyFormSettings.crew,
    town: localStorage.getItem(LEGACY_TOWN_STORAGE_KEY) || legacyFormSettings.town,
    serial: localStorage.getItem(LEGACY_SERIAL_STORAGE_KEY) || legacyFormSettings.serial,
    uavConfig: legacyUavConfig.name ? legacyUavConfig : legacyFormSettings.uavConfig
  })
}

function readPersistedSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY)
    if (raw) return normalizePersistedSettings(JSON.parse(raw))
  } catch {
    localStorage.removeItem(SETTINGS_STORAGE_KEY)
  }

  const legacySettings = readLegacySettings()
  if (legacySettings.unit || legacySettings.crew || legacySettings.town || legacySettings.serial || legacySettings.uavConfig.name) {
    writePersistedSettings(legacySettings)
  }
  return legacySettings
}

function getCurrentPersistedSettings() {
  return {
    unit: el.unit.value,
    crew: el.crew.value,
    town: el.town.value,
    serial: el.serial.value,
    uavConfig: sanitizeUavConfig(uavConfig)
  }
}

function showSaveToast() {
  const saveToastEl = document.getElementById("saveToast")
  saveToastEl.style.display = "block"
  clearTimeout(saveToastTimer)
  saveToastTimer = setTimeout(() => {
    saveToastEl.style.display = "none"
  }, 1400)
}

function persistSettings(showToastIndicator = true) {
  writePersistedSettings(getCurrentPersistedSettings())
  if (showToastIndicator && !isHydratingSettings) {
    showSaveToast()
  }
}

function applyFieldValue(input, value) {
  input.value = value
  input.defaultValue = value
  input.setAttribute("value", value)
}
function loadFromLocalStorage() {
  const settings = readPersistedSettings()
  isHydratingSettings = true
  applyFieldValue(el.unit, settings.unit)
  applyFieldValue(el.crew, settings.crew)
  applyFieldValue(el.town, settings.town)
  applyFieldValue(el.serial, settings.serial)
  uavConfig = settings.uavConfig.name ? settings.uavConfig : emptyUavConfig()
  updateUavButton()
  updateCrewMenuButton()
  renderFlightLog()
  showWhen(el.logBlock, true)
  isHydratingSettings = false
}

function hideSplash(immediate = false) {
  const splash = document.getElementById("splash")
  if (!splash || splash.dataset.closed === "true") return
  splash.dataset.closed = "true"
  if (immediate) {
    splash.style.display = "none"
    return
  }
  splash.style.opacity = "0"
  splash.style.pointerEvents = "none"
  setTimeout(() => {
    splash.style.display = "none"
  }, 600)
}

function prepareReload(skip = true, nextTrainingMode = null) {
  if (skip) {
    sessionStorage.setItem(SKIP_SPLASH_KEY, "1")
  } else {
    sessionStorage.removeItem(SKIP_SPLASH_KEY)
  }
  if (nextTrainingMode === null) {
    sessionStorage.removeItem(RELOAD_TRAINING_MODE_KEY)
  } else {
    sessionStorage.setItem(RELOAD_TRAINING_MODE_KEY, nextTrainingMode ? "1" : "0")
  }
  window.location.reload()
}

function currentTime() {
  return new Date().toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit"
  })
}

function showWhen(element, visible) {
  element.classList.toggle("hidden", !visible)
}

function updateCrewMenuButton() {
  const crewName = el.crew.value.trim()
  el.crewMenuBtn.textContent = crewName || "Екіпаж"
}

function openCrewMenu() {
  el.crewMenu.style.display = "flex"
  if (el.crew.value.trim()) {
    el.crew.focus()
  } else if (el.unit.value.trim()) {
    el.town.focus()
  } else {
    el.unit.focus()
  }
}

function closeCrewMenu() {
  el.crewMenu.style.display = "none"
}

function openVersionInfo() {
  el.versionInfoMenu.style.display = "flex"
}

function closeVersionInfo() {
  el.versionInfoMenu.style.display = "none"
}

function syncVersionButton() {
  el.versionInfoBtn.textContent = `Версія ${APP_VERSION}`
}

function handleVersionInfoOnLoad() {
  const storedVersion = localStorage.getItem(VERSION_STORAGE_KEY)
  if (storedVersion === APP_VERSION) return
  localStorage.setItem(VERSION_STORAGE_KEY, APP_VERSION)
  const openDelay = skipSplash ? 0 : 1250
  setTimeout(() => openVersionInfo(), openDelay)
}

function syncTrainingTarget() {
  if (trainingMode) {
    el.target.value = "Тренувальний політ"
    el.target.readOnly = true
  } else {
    if (el.target.value === "Тренувальний політ") {
      el.target.value = ""
    }
    el.target.readOnly = false
  }
}

function finishLabel() {
  if (trainingMode) {
    return flightResult === "Борт втрачено" ? "Час втрати борта" : "Час посадки"
  }
  if (battleResult === "Ціль знищено") return "Час знищення цілі"
  if (flightResult === "Борт втрачено") return "Час втрати борта"
  if (flightResult === "Борт підірвано") return "Час підриву борта"
  return "Час посадки"
}

function requiresTrainingReturnStatus() {
  return trainingMode && flightResult === TRAINING_FLIGHT_RESULTS[0]
}

function formatTrainingFlightResult() {
  if (!flightResult) return ""
  if (requiresTrainingReturnStatus() && trainingReturnStatus) {
    return `${flightResult}, ${trainingReturnStatus}`
  }
  return flightResult
}

function formatResultLine() {
  const parts = []
  if (selectedReasons.length) parts.push(selectedReasons.join(", "))
  if (flightResult) parts.push(flightResult)
  return parts.join(", ")
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text)
    toast()
  } catch {
    alert("Не вдалося скопіювати текст до буфера обміну.")
  }
}

function toast() {
  const toastEl = document.getElementById("toast")
  toastEl.style.display = "block"
  setTimeout(() => {
    toastEl.style.display = "none"
  }, 2000)
}

function migrateLegacyDiscordWebhook() {
  const legacyWebhook = localStorage.getItem(LEGACY_DISCORD_WEBHOOK_STORAGE_KEY)
  if (legacyWebhook && !localStorage.getItem(DISCORD_COMBAT_WEBHOOK_STORAGE_KEY)) {
    localStorage.setItem(DISCORD_COMBAT_WEBHOOK_STORAGE_KEY, legacyWebhook)
  }
  localStorage.removeItem(LEGACY_DISCORD_WEBHOOK_STORAGE_KEY)
}

function getDiscordModeConfig() {
  return trainingMode ? {
    webhookKey: DISCORD_TRAINING_WEBHOOK_STORAGE_KEY,
    lockKey: DISCORD_TRAINING_LOCK_STORAGE_KEY,
    modeLabel: "Тренувальний політ",
    input: el.discordTrainingWebhookInput,
    lockButton: el.discordTrainingLockBtn
  } : {
    webhookKey: DISCORD_COMBAT_WEBHOOK_STORAGE_KEY,
    lockKey: DISCORD_COMBAT_LOCK_STORAGE_KEY,
    modeLabel: "Бойовий політ",
    input: el.discordCombatWebhookInput,
    lockButton: el.discordCombatLockBtn
  }
}

function setDiscordWebhookLockState(isLocked, config) {
  const unlockLabel = `Розблокувати API для режиму: ${config.modeLabel}`
  const lockLabel = `Заблокувати API для режиму: ${config.modeLabel}`
  localStorage.setItem(config.lockKey, isLocked ? "1" : "0")
  config.input.disabled = isLocked
  config.lockButton.innerHTML = isLocked ? "&#128274;" : "&#128275;"
  config.lockButton.setAttribute("aria-label", isLocked ? unlockLabel : lockLabel)
  config.lockButton.title = isLocked ? unlockLabel : lockLabel
}

function syncDiscordWebhookFields() {
  migrateLegacyDiscordWebhook()
  ;[
    {
      webhookKey: DISCORD_COMBAT_WEBHOOK_STORAGE_KEY,
      lockKey: DISCORD_COMBAT_LOCK_STORAGE_KEY,
      modeLabel: "Бойовий політ",
      input: el.discordCombatWebhookInput,
      lockButton: el.discordCombatLockBtn
    },
    {
      webhookKey: DISCORD_TRAINING_WEBHOOK_STORAGE_KEY,
      lockKey: DISCORD_TRAINING_LOCK_STORAGE_KEY,
      modeLabel: "Тренувальний політ",
      input: el.discordTrainingWebhookInput,
      lockButton: el.discordTrainingLockBtn
    }
  ].forEach(config => {
    config.input.value = localStorage.getItem(config.webhookKey) || ""
    const storedValue = localStorage.getItem(config.lockKey)
    const isLocked = storedValue === "1" || (storedValue !== "0" && Boolean(config.input.value.trim()))
    setDiscordWebhookLockState(isLocked, config)
  })
}

function toggleDiscordWebhookLock(config) {
  const nextState = !config.input.disabled
  setDiscordWebhookLockState(nextState, config)
  if (!nextState) config.input.focus()
}

function persistDiscordWebhook(config) {
  const webhook = config.input.value.trim()
  if (webhook) {
    localStorage.setItem(config.webhookKey, webhook)
  } else {
    localStorage.removeItem(config.webhookKey)
  }
  return webhook
}

function openCrewMenuWithDiscordFocus() {
  openCrewMenu()
  syncDiscordWebhookFields()
  const config = getDiscordModeConfig()
  if (config.input.disabled) {
    setDiscordWebhookLockState(false, config)
  }
  config.input.focus()
}

async function sendReportToDiscord() {
  const config = getDiscordModeConfig()
  const webhook = config.input.disabled ? (localStorage.getItem(config.webhookKey) || "") : persistDiscordWebhook(config)
  if (!webhook) {
    alert("Введіть Discord webhook URL.")
    openCrewMenuWithDiscordFocus()
    return
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: el.report.textContent || "Доповідь відсутня." })
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    alert("Доповідь успішно надіслано в Discord.")
  } catch {
    alert("Не вдалося надіслати доповідь у Discord. Перевірте webhook URL.")
  }
}

function targetLabel() {
  const value = el.target.value.trim()
  if (!value) return "Без видачі"
  if (value === "Тренувальний політ") return value
  const number = parseInt(value, 10)
  if (!Number.isNaN(number)) {
    if (number >= 1 && number <= 6999) return `${value} (Skymap)`
    if (number >= 7000 && number <= 9999) return `${value} (Віраж)`
  }
  return value
}

function fullTargetLabel() {
  const base = targetLabel()
  const targetType = el.targetType.value.trim()
  return targetType ? `${targetType} ${base}` : base
}

function targetSummaryLabel() {
  return trainingMode ? targetLabel() : fullTargetLabel()
}

function updateTargetSummary() {
  el.targetSummary.textContent = hasTakenOff ? targetSummaryLabel() : ""
}

function updateTargetTypeButtons() {
  document.querySelectorAll(".targetTypeRow button").forEach(button => {
    const buttonValue = button.textContent.trim()
    button.classList.toggle("active", buttonValue === el.targetType.value.trim())
  })
}

function formatUavLine() {
  if (!uavConfig.name) return "БПЛА: не обрано"
  return `БПЛА: «${uavConfig.name}» (${uavConfig.mode}) № ${el.serial.value}`
}

function formatWarheadUsage() {
  if (!uavConfig.name) return ""
  if (uavConfig.autoWarhead) return `Витрата БЧ: ${uavConfig.autoWarhead} - 1 шт.`
  return `Витрата БЧ: ${uavConfig.detonator} - 1 шт., C4 - ${uavConfig.c4}гр.`
}

function updateUavButton() {
  if (!uavConfig.name) {
    el.uavSelectBtn.textContent = "Обрати БПЛА"
    return
  }
  const payloadText = uavConfig.autoWarhead ? uavConfig.autoWarhead : `${uavConfig.detonator}, C4 ${uavConfig.c4}гр.`
  el.uavSelectBtn.textContent = `${uavConfig.name} (${uavConfig.mode}) • ${payloadText}`
}
function renderChoiceButtons(container, items, currentValue, onPick) {
  container.innerHTML = ""
  if (currentValue) {
    const activeButton = document.createElement("button")
    activeButton.type = "button"
    activeButton.className = "choiceBtn active"
    activeButton.textContent = currentValue
    activeButton.onclick = () => onPick("")
    container.appendChild(activeButton)
    return
  }
  items.forEach(item => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = "choiceBtn"
    button.textContent = item
    button.onclick = () => onPick(item)
    container.appendChild(button)
  })
}

function renderExclusiveResultButtons(container, items, activeValue, onPick) {
  container.innerHTML = ""
  if (activeValue) {
    const activeButton = document.createElement("button")
    activeButton.type = "button"
    activeButton.className = "resultBtn active"
    activeButton.textContent = activeValue
    activeButton.onclick = () => onPick("")
    container.appendChild(activeButton)
    return
  }
  items.forEach(item => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = "resultBtn"
    button.textContent = item
    button.onclick = () => onPick(item)
    container.appendChild(button)
  })
}

function canConfirmUav() {
  if (!modalSelection.name || !modalSelection.mode) return false
  const currentType = UAV_TYPES[modalSelection.name]
  if (!currentType) return false
  if (currentType.autoWarhead) return true
  return Boolean(modalSelection.detonator)
}

function renderUavModal() {
  renderChoiceButtons(el.uavTypeOptions, Object.keys(UAV_TYPES), modalSelection.name, value => {
    modalSelection.name = value
    if (UAV_TYPES[value]?.autoWarhead) {
      modalSelection.detonator = ""
    }
    renderUavModal()
  })

  renderChoiceButtons(el.uavModeOptions, UAV_MODES, modalSelection.mode, value => {
    modalSelection.mode = value
    renderUavModal()
  })

  const currentType = UAV_TYPES[modalSelection.name]
  const needsDetonator = currentType && !currentType.autoWarhead
  showWhen(el.detonatorBlock, Boolean(needsDetonator))

  if (needsDetonator) {
    renderChoiceButtons(el.detonatorOptions, DETONATORS, modalSelection.detonator, value => {
      modalSelection.detonator = value
      renderUavModal()
    })
    el.uavModalSummary.textContent = modalSelection.name ? `C4 буде встановлено автоматично: ${currentType.c4}гр.` : ""
  } else if (currentType && currentType.autoWarhead) {
    el.uavModalSummary.textContent = `БЧ буде встановлено автоматично: ${currentType.autoWarhead}`
    el.detonatorOptions.innerHTML = ""
  } else {
    el.uavModalSummary.textContent = "Оберіть тип БПЛА та режим"
    el.detonatorOptions.innerHTML = ""
  }

  el.uavConfirmBtn.disabled = !canConfirmUav()
}

function openUavModal() {
  modalSelection = {
    name: uavConfig.name,
    mode: uavConfig.mode,
    detonator: uavConfig.detonator
  }
  renderUavModal()
  el.uavMenu.style.display = "flex"
}

function closeUavModal() {
  el.uavMenu.style.display = "none"
}

function clearUavSelection() {
  modalSelection = { name: "", mode: "", detonator: "" }
  renderUavModal()
}

function confirmUavSelection() {
  if (!canConfirmUav()) return
  const currentType = UAV_TYPES[modalSelection.name]
  uavConfig = {
    name: modalSelection.name,
    mode: modalSelection.mode,
    detonator: currentType.autoWarhead ? "" : modalSelection.detonator,
    autoWarhead: currentType.autoWarhead || "",
    c4: currentType.c4 || ""
  }
  closeUavModal()
  updateUavButton()
  persistSettings()
  updatePreview()
}

function sanitizeNumericInput(input) {
  input.value = input.value.replace(/[^0-9]/g, "")
}

function validateAngularInput(input, label) {
  const value = input.value.trim()
  if (!value) return true
  const numericValue = Number(value)
  if (Number.isNaN(numericValue) || numericValue < 0 || numericValue > 359) {
    alert(`${label} має бути в межах від 0 до 359.`)
    input.value = ""
    updatePreview()
    input.focus()
    return false
  }
  return true
}

function setValue(field, value) {
  const input = document.getElementById(field)
  if (!input) return
  input.value = String(value)
  updatePreview()
}

function openQuickValueMenu(field) {
  const presets = QUICK_VALUE_PRESETS[field] || []
  el.quickValueTitle.textContent = document.querySelector(`[data-quick-field="${field}"]`)?.textContent || "Швидкі значення"
  el.quickValueOptions.innerHTML = ""
  presets.forEach(value => {
    const button = document.createElement("button")
    button.type = "button"
    button.textContent = String(value)
    button.onclick = () => {
      setValue(field, value)
      closeQuickValueMenu()
    }
    el.quickValueOptions.appendChild(button)
  })
  el.quickValueMenu.style.display = "flex"
}

function closeQuickValueMenu() {
  el.quickValueMenu.style.display = "none"
}

function setTargetType(value) {
  el.targetType.value = el.targetType.value === value ? "" : value
  updateTargetTypeButtons()
  updateTargetSummary()
  updatePreview()
}

function setNoAssignmentTarget() {
  if (trainingMode) return
  el.target.value = "Ціль без видачі"
  updatePreview()
}

function autoTakeoff() {
  el.takeoff.value = currentTime()
  updatePreview()
}

function autoEnd() {
  el.endTime.value = currentTime()
  updatePreview()
}

function renderReasonButtons() {
  el.reasonOptions.innerHTML = ""
  const options = REASON_OPTIONS[flightResult] || []
  options.forEach(item => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = selectedReasons.includes(item) ? "reasonBtn active" : "reasonBtn"
    button.textContent = item
    button.onclick = () => toggleReason(item)
    el.reasonOptions.appendChild(button)
  })
}

function setBattleResult(value) {
  battleResult = value
  flightResult = ""
  trainingReturnStatus = ""
  selectedReasons = []
  refreshPostTakeoffView()
  updatePreview()
}

function setFlightResult(value) {
  flightResult = value
  trainingReturnStatus = ""
  selectedReasons = []
  refreshPostTakeoffView()
  updatePreview()
}

function setTrainingResult(value) {
  flightResult = value
  if (value !== TRAINING_FLIGHT_RESULTS[0]) {
    trainingReturnStatus = ""
  }
  refreshPostTakeoffView()
  updatePreview()
}

function setTrainingReturnStatus(value) {
  trainingReturnStatus = value
  refreshPostTakeoffView()
  updatePreview()
}

function toggleReason(value) {
  if (selectedReasons.includes(value)) {
    selectedReasons = selectedReasons.filter(item => item !== value)
  } else {
    selectedReasons = [...selectedReasons, value]
  }
  renderReasonButtons()
  updatePreview()
}

function updateOutcomeVisibility() {
  showWhen(el.combatOutcomeBlock, hasTakenOff && !trainingMode)
  showWhen(el.trainingOutcomeBlock, hasTakenOff && trainingMode)
  showWhen(el.trainingReturnStatusBlock, hasTakenOff && requiresTrainingReturnStatus())
  showWhen(el.combatFields, !trainingMode)
  showWhen(el.noTaskTargetBtn, !trainingMode)
  if (trainingMode) {
    showWhen(el.flightOutcomeBlock, false)
    showWhen(el.reasonBlock, false)
    showWhen(el.destroyCoords, false)
  } else {
    showWhen(el.flightOutcomeBlock, hasTakenOff && battleResult === "Ціль не знищено")
    showWhen(el.reasonBlock, hasTakenOff && battleResult === "Ціль не знищено" && Boolean(flightResult))
    showWhen(el.destroyCoords, hasTakenOff && battleResult === "Ціль знищено")
  }
}

function refreshPostTakeoffView() {
  renderExclusiveResultButtons(el.battleResults, BATTLE_RESULTS, battleResult, setBattleResult)
  renderExclusiveResultButtons(el.flightResults, COMBAT_FLIGHT_RESULTS, flightResult, setFlightResult)
  renderExclusiveResultButtons(el.trainingResults, TRAINING_FLIGHT_RESULTS, flightResult, setTrainingResult)
  renderExclusiveResultButtons(el.trainingReturnStatusOptions, TRAINING_RETURN_STATUS_OPTIONS, trainingReturnStatus, setTrainingReturnStatus)
  renderReasonButtons()
  showWhen(el.targetRow, !hasTakenOff)
  showWhen(el.targetTypeBlock, !hasTakenOff && !trainingMode)
  showWhen(el.targetSummary, hasTakenOff)
  updateTargetTypeButtons()
  updateTargetSummary()
  updateOutcomeVisibility()
}

function toggleTraining() {
  trainingMode = el.trainingToggle.checked
  battleResult = ""
  flightResult = ""
  trainingReturnStatus = ""
  selectedReasons = []
  syncTrainingTarget()
  if (trainingMode) {
    el.targetType.value = ""
  }
  document.body.classList.toggle("training", trainingMode)
  updateTargetTypeButtons()
  updateTargetSummary()
  refreshPostTakeoffView()
  updatePreview()
}

function validateTakeoff() {
  if (!el.crew.value.trim()) return alert("Вкажіть екіпаж"), false
  if (!el.unit.value.trim()) return alert("Вкажіть підрозділ"), false
  if (!uavConfig.name) return alert("Вкажіть назву БПЛА"), false
  if (!el.serial.value.trim()) return alert("Вкажіть серійний номер"), false
  if (!el.target.value.trim()) return alert("Вкажіть номер цілі"), false
  if (!el.town.value.trim()) return alert("Вкажіть район виконання завдань"), false
  return true
}
function buildTakeoffReport() {
  return [
    `Екіпаж: «${el.crew.value}», ${el.unit.value}`,
    `Час зльоту: ${el.takeoff.value} Ціль: ${targetLabel()}`,
    `Висота: ${el.height.value} м`,
    trainingMode ? "" : `А: ${el.azimuth.value}°; К: ${el.course.value}°; Д: ${el.distance.value} м`,
    formatUavLine(),
    `Р-н виконання завдань: н.п. ${el.town.value}`
  ].filter(Boolean).join("\n")
}

function buildCombatFinishReport() {
  const lines = [
    `Екіпаж: «${el.crew.value}», ${el.unit.value}`,
    `Час зльоту: ${el.takeoff.value}`,
    `${finishLabel()}: ${el.endTime.value}`,
    `Ціль: ${fullTargetLabel()}`,
    formatUavLine()
  ]
  if (battleResult === "Ціль знищено") {
    let destroyLine = "Ціль знищено"
    if (el.az2.value || el.dist2.value || el.h2.value) {
      destroyLine += ` А: ${el.az2.value}°; Д: ${el.dist2.value} м; В: ${el.h2.value} м`
    }
    lines.push(destroyLine)
  } else {
    lines.push("Ціль не знищено")
    const resultLine = formatResultLine()
    if (resultLine) lines.push(`Результат: ${resultLine}`)
  }
  lines.push(formatWarheadUsage())
  lines.push(`Р-н виконання завдань: н.п. ${el.town.value}`)
  return lines.filter(Boolean).join("\n")
}

function buildTrainingFinishReport() {
  const lines = [
    `Екіпаж: «${el.crew.value}», ${el.unit.value}`,
    `Час зльоту: ${el.takeoff.value}`,
    `${finishLabel()}: ${el.endTime.value}`,
    `Ціль: ${targetLabel()}`,
    formatUavLine()
  ]
  if (flightResult) lines.push(`Результат: ${formatTrainingFlightResult()}`)
  lines.push(`Р-н виконання завдань: н.п. ${el.town.value}`)
  return lines.filter(Boolean).join("\n")
}

function buildCombatInterimReport() {
  const lines = [
    `Екіпаж: «${el.crew.value}», ${el.unit.value}`,
    `Час зльоту: ${el.takeoff.value}`,
    `Ціль: ${fullTargetLabel()}`,
    formatUavLine()
  ]
  if (battleResult) lines.push(`Результат бою: ${battleResult}`)
  const resultLine = formatResultLine()
  if (resultLine) lines.push(`Результат: ${resultLine}`)
  lines.push(`Р-н виконання завдань: н.п. ${el.town.value}`)
  return lines.filter(Boolean).join("\n")
}

function buildTrainingInterimReport() {
  const lines = [
    `Екіпаж: «${el.crew.value}», ${el.unit.value}`,
    `Час зльоту: ${el.takeoff.value}`,
    `Ціль: ${targetLabel()}`,
    formatUavLine()
  ]
  if (flightResult) lines.push(`Результат: ${formatTrainingFlightResult()}`)
  lines.push(`Р-н виконання завдань: н.п. ${el.town.value}`)
  return lines.filter(Boolean).join("\n")
}

function buildCurrentReport() {
  if (!hasTakenOff) return buildTakeoffReport()
  if (!el.endTime.value) return trainingMode ? buildTrainingInterimReport() : buildCombatInterimReport()
  return trainingMode ? buildTrainingFinishReport() : buildCombatFinishReport()
}

function updatePreview() {
  el.report.textContent = buildCurrentReport()
}

function takeoff() {
  if (!validateTakeoff()) return
  if (!el.takeoff.value) el.takeoff.value = currentTime()
  hasTakenOff = true
  showWhen(el.afterTakeoff, true)
  showWhen(el.reportBlock, true)
  showWhen(el.logBlock, true)
  showWhen(el.preTakeoffFields, false)
  refreshPostTakeoffView()
  updatePreview()
}

function validateFinish() {
  if (trainingMode) {
    if (requiresTrainingReturnStatus() && !trainingReturnStatus) {
      alert("Для результату «Борт повернуто» обов'язково вкажіть стан борта.")
      return false
    }
    return true
  }
  if (!battleResult) return alert("Вкажіть результат бою"), false
  if (battleResult === "Ціль не знищено" && !flightResult) return alert("Вкажіть результат польоту"), false
  return true
}

function finish() {
  if (!validateFinish()) return
  if (!el.endTime.value.trim()) el.endTime.value = currentTime()
  const reportText = trainingMode ? buildTrainingFinishReport() : buildCombatFinishReport()
  saveFlightLog()
  el.report.textContent = reportText
}

function saveFlightLog() {
  const log = JSON.parse(localStorage.getItem("flightLog") || "[]")
  const now = new Date()
  const stamp = `${String(now.getDate()).padStart(2, "0")}.${String(now.getMonth() + 1).padStart(2, "0")}.${now.getFullYear()} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`
  const targetText = trainingMode ? targetLabel() : fullTargetLabel()
  const resultText = trainingMode ? (formatTrainingFlightResult() || "-") : (battleResult === "Ціль знищено" ? battleResult : `${battleResult || "-"} / ${flightResult || "-"}`)
  log.unshift(`${stamp} | ${targetText} | ${resultText}`)
  if (log.length > 50) log.pop()
  localStorage.setItem("flightLog", JSON.stringify(log))
  renderFlightLog()
}

function renderFlightLog() {
  const log = JSON.parse(localStorage.getItem("flightLog") || "[]")
  el.flightLog.innerHTML = ""
  log.forEach(item => {
    const div = document.createElement("div")
    div.className = "logEntry"
    div.textContent = item
    el.flightLog.appendChild(div)
  })
}

async function copyFlightLog() {
  const log = JSON.parse(localStorage.getItem("flightLog") || "[]")
  await copy(log.join("\n"))
}

function clearFlightLog() {
  if (!confirm("Очистити журнал польотів?")) return
  localStorage.removeItem("flightLog")
  renderFlightLog()
}

function newFlight() {
  prepareReload(true, trainingMode)
}

function bindDiscordInputs() {
  ;[
    { lockKey: DISCORD_COMBAT_LOCK_STORAGE_KEY, webhookKey: DISCORD_COMBAT_WEBHOOK_STORAGE_KEY, input: el.discordCombatWebhookInput },
    { lockKey: DISCORD_TRAINING_LOCK_STORAGE_KEY, webhookKey: DISCORD_TRAINING_WEBHOOK_STORAGE_KEY, input: el.discordTrainingWebhookInput }
  ].forEach(config => {
    config.input.addEventListener("input", () => {
      if (localStorage.getItem(config.lockKey) !== "1") persistDiscordWebhook(config)
    })
    config.input.addEventListener("change", () => {
      if (localStorage.getItem(config.lockKey) !== "1") persistDiscordWebhook(config)
    })
  })
}

function initializeApp() {
  if (appInitialized) return
  appInitialized = true
  if (skipSplash) {
    hideSplash(true)
  } else {
    setTimeout(() => hideSplash(), 1200)
  }

  syncVersionButton()
  loadFromLocalStorage()
  syncDiscordWebhookFields()
  handleVersionInfoOnLoad()

  if (reloadTrainingMode !== null) {
    el.trainingToggle.checked = reloadTrainingMode === "1"
  }

  trainingMode = el.trainingToggle.checked
  document.body.classList.toggle("training", trainingMode)
  syncTrainingTarget()
  updateTargetTypeButtons()
  refreshPostTakeoffView()
  updatePreview()

  document.querySelectorAll("[data-quick-field]").forEach(button => {
    button.onclick = () => openQuickValueMenu(button.dataset.quickField)
  })

  el.quickValueCancelBtn.onclick = closeQuickValueMenu
  el.quickValueMenu.onclick = event => {
    if (event.target === el.quickValueMenu) closeQuickValueMenu()
  }

  ;[el.azimuth, el.course, el.distance, el.height, el.az2, el.dist2, el.h2].forEach(input => {
    input.addEventListener("input", () => sanitizeNumericInput(input))
  })
  el.azimuth.addEventListener("change", () => validateAngularInput(el.azimuth, "Азимут"))
  el.azimuth.addEventListener("blur", () => validateAngularInput(el.azimuth, "Азимут"))
  el.course.addEventListener("change", () => validateAngularInput(el.course, "Курс"))
  el.course.addEventListener("blur", () => validateAngularInput(el.course, "Курс"))
  el.az2.addEventListener("change", () => validateAngularInput(el.az2, "Азимут"))
  el.az2.addEventListener("blur", () => validateAngularInput(el.az2, "Азимут"))

  el.uavSelectBtn.onclick = openUavModal
  el.uavCancelBtn.onclick = closeUavModal
  el.uavClearBtn.onclick = clearUavSelection
  el.uavConfirmBtn.onclick = confirmUavSelection
  el.uavMenu.onclick = event => {
    if (event.target === el.uavMenu) closeUavModal()
  }

  el.copyReportBtn.onclick = () => copy(el.report.textContent)
  el.sendWhatsBtn.onclick = () => window.open("https://wa.me/?text=" + encodeURIComponent(el.report.textContent), "_blank")
  el.sendDiscBtn.onclick = sendReportToDiscord

  el.crewMenuBtn.onclick = () => {
    openCrewMenu()
    syncDiscordWebhookFields()
  }
  el.crewMenuCloseBtn.onclick = closeCrewMenu
  el.crewMenu.onclick = event => {
    if (event.target === el.crewMenu) closeCrewMenu()
  }

  el.versionInfoBtn.onclick = openVersionInfo
  el.versionInfoCloseBtn.onclick = closeVersionInfo
  el.versionInfoMenu.onclick = event => {
    if (event.target === el.versionInfoMenu) closeVersionInfo()
  }

  el.discordCombatLockBtn.onclick = () => toggleDiscordWebhookLock({ lockKey: DISCORD_COMBAT_LOCK_STORAGE_KEY, modeLabel: "Бойовий політ", input: el.discordCombatWebhookInput, lockButton: el.discordCombatLockBtn })
  el.discordTrainingLockBtn.onclick = () => toggleDiscordWebhookLock({ lockKey: DISCORD_TRAINING_LOCK_STORAGE_KEY, modeLabel: "Тренувальний політ", input: el.discordTrainingWebhookInput, lockButton: el.discordTrainingLockBtn })
  bindDiscordInputs()

  ;[el.unit, el.crew, el.town, el.serial].forEach(input => {
    input.addEventListener("input", () => {
      persistSettings()
      updateCrewMenuButton()
      updatePreview()
    })
    input.addEventListener("change", () => {
      persistSettings()
      updateCrewMenuButton()
      updatePreview()
    })
  })

  ;[el.target, el.azimuth, el.course, el.distance, el.height, el.takeoff, el.endTime, el.targetType, el.az2, el.dist2, el.h2].forEach(input => {
    input.addEventListener("input", updatePreview)
    input.addEventListener("change", updatePreview)
  })
}

window.toggleTraining = toggleTraining
window.setTargetType = setTargetType
window.setNoAssignmentTarget = setNoAssignmentTarget
window.autoTakeoff = autoTakeoff
window.autoEnd = autoEnd
window.takeoff = takeoff
window.finish = finish
window.newFlight = newFlight
window.copyFlightLog = copyFlightLog
window.clearFlightLog = clearFlightLog

initializeApp()
