(function () {
  "use strict";

  const translations = {
    es: {
      flag: "img/flag-ar.png", langName: "Español",
      subtitle: "Análisis Acústico Local",
      clearAll: "Limpiar Todo",
      removeAudio: "Quitar",
      playAudio: "Reproducir audio",
      localEngine: "Motor ONNX",
      loadModel: "Cargar .onnx",
      noCloud: "Procesa audios sin enviar datos a la nube.",
      uploadAudio: "Carga de Audios",
      dragDrop: "Arrastra o haz clic aquí",
      formats: "WAV, MP3, M4A, OGG, FLAC o AAC",
      chooseFiles: "Seleccionar archivos",
      chooseFolder: "Seleccionar carpeta",
      ctrlClick: "Mantén Ctrl + Clic para subir varios",
      thresholdTitle: "Ajustes de Inferencia",
      threshold: "Umbral de Detección",
      minDuration: "Duración mínima",
      adjustSens: "Ajusta el umbral del modelo para calibrar la detección de cantos de Telmatobius rubigo. Un valor alto reduce falsos positivos, pero puede perder cantos débiles.",
      queue: "Cola de Procesamiento",
      analyzing: "Analizando en local...",
      startAnalysis: "Iniciar Análisis",
      results: "Resultados de Inferencia",
      eventsFound: "Se hallaron {n} eventos acústicos.",
      stopAudio: "Detener Audio",
      playMinute: "Reproducir minuto",
      playSelected: "Reproducir seleccionado",
      downloadCsv: "Descargar CSV",
      file: "Archivo",
      start: "Inicio (s)",
      end: "Fin (s)",
      duration: "Duración",
      label: "Etiqueta",
      action: "Acción",
      privacyTitle: "Procesamiento 100% Local",
      privacyDesc: "Por motivos de privacidad e investigación, todos los audios y modelos de inteligencia artificial se ejecutan directamente en la memoria de tu navegador mediante ONNX Runtime Web. Ningún archivo sale de tu computadora ni se envía a servidores externos.",
      close: "Cerrar",
      btnEditOn: "Activar Edición Interactiva",
      btnEditOff: "Desactivar Edición",
      editBannerInfo: "Haz clic en un segmento para seleccionarlo. Doble clic para deseleccionar. Etiqueta disponible:",
      createHint: "Arrastra sobre el espectrograma o la amplitud para crear un nuevo segmento Telmatobius.",
      editBannerNone: "Ninguna selección",
      editBannerSelected: "Seleccionado",
      labelTelma: "Telmatobius",
      delete: "Borrar",
      welcomeTitle: "Bienvenido a TelmatoFinder",
      welcomeP1: "La aplicación está alojada como un sitio web normal, pero el modelo y análisis acústico se ejecutan dentro de tu navegador utilizando ONNX Runtime Web.",
      welcomeP2: "Al subir tus audios, tu navegador ejecuta la inferencia localmente. Ningún archivo o dato es enviado a servidores externos. Privacidad 100% garantizada.",
      projectVideo: "Si quieres saber más del proyecto, mira este video.",
      btnAccept: "Aceptar y Continuar",
      btnDecline: "Declinar",
      declineMsg: "Debes aceptar los términos de procesamiento local para utilizar esta herramienta.",
      landscapeTitle: "Cuenca de la Laguna de los Pozuelos, Jujuy",
      loadExamples: "Cargar ejemplos",
      examplesTitle: "Ejemplos incluidos",
      examplesDesc: "Cinco audios reales de testing_location usados como out-of-sample en el flujo de inferencia.",
      modelAuto: "Modelo automático",
      modelReady: "modelo listo",
      modelFallback: "sin ONNX, modo heurístico",
      segment: "minuto"
    },
    en: {
      flag: "img/flag-ca.png", langName: "English",
      subtitle: "Local Acoustic Analysis",
      clearAll: "Clear All",
      removeAudio: "Remove",
      playAudio: "Play audio",
      localEngine: "ONNX Engine",
      loadModel: "Load .onnx",
      noCloud: "Process audio without sending data to the cloud.",
      uploadAudio: "Upload Audio",
      dragDrop: "Drag & drop or click here",
      formats: "WAV, MP3, M4A, OGG, FLAC or AAC",
      chooseFiles: "Choose files",
      chooseFolder: "Choose folder",
      ctrlClick: "Hold Ctrl + Click to select multiple",
      thresholdTitle: "Inference Settings",
      threshold: "Detection Threshold",
      minDuration: "Minimum duration",
      adjustSens: "Adjust the model threshold to calibrate Telmatobius rubigo call detection. A high value reduces false positives, but can miss weak calls.",
      queue: "Processing Queue",
      analyzing: "Analysing locally...",
      startAnalysis: "Start Analysis",
      results: "Inference Results",
      eventsFound: "{n} acoustic events found.",
      stopAudio: "Stop Audio",
      playMinute: "Play minute",
      playSelected: "Play selected",
      downloadCsv: "Download CSV",
      file: "File",
      start: "Start (s)",
      end: "End (s)",
      duration: "Duration",
      label: "Label",
      action: "Action",
      privacyTitle: "100% Local Processing",
      privacyDesc: "For privacy and research purposes, all audio and AI models run directly in your browser memory using ONNX Runtime Web. No files leave your computer or are sent to external servers.",
      close: "Close",
      btnEditOn: "Enable Interactive Edit",
      btnEditOff: "Disable Edit Mode",
      editBannerInfo: "Click a segment to select. Double-click to deselect. Available label:",
      createHint: "Drag over the spectrogram or waveform to create a new Telmatobius segment.",
      editBannerNone: "No selection",
      editBannerSelected: "Selected",
      labelTelma: "Telmatobius",
      delete: "Delete",
      welcomeTitle: "Welcome to TelmatoFinder",
      welcomeP1: "This application is hosted as a normal website, but the acoustic model and analysis run entirely inside your browser using ONNX Runtime Web.",
      welcomeP2: "When you upload audio files, your browser runs inference locally. No files or data are sent to external servers. 100% privacy guaranteed.",
      projectVideo: "If you want to know more about the project, watch this video.",
      btnAccept: "Accept and Continue",
      btnDecline: "Decline",
      declineMsg: "You must accept the local processing terms to use this tool.",
      landscapeTitle: "Pozuelos Lagoon Basin, Jujuy",
      loadExamples: "Load examples",
      examplesTitle: "Included examples",
      examplesDesc: "Five real testing_location audios used as out-of-sample contexts in the inference workflow.",
      modelAuto: "Automatic model",
      modelReady: "model ready",
      modelFallback: "no ONNX, heuristic mode",
      segment: "minute"
    },
    pt: {
      flag: "img/flag-br.png", langName: "Português",
      subtitle: "Análise Acústica Local",
      clearAll: "Limpar Tudo",
      removeAudio: "Remover",
      playAudio: "Reproduzir áudio",
      localEngine: "Motor ONNX",
      loadModel: "Carregar .onnx",
      noCloud: "Processe áudios sem enviar dados para a nuvem.",
      uploadAudio: "Carregar Áudio",
      dragDrop: "Arraste ou clique aqui",
      formats: "WAV, MP3, M4A, OGG, FLAC ou AAC",
      chooseFiles: "Selecionar arquivos",
      chooseFolder: "Selecionar pasta",
      ctrlClick: "Segure Ctrl + Clique para vários",
      thresholdTitle: "Configurações de Inferência",
      threshold: "Limiar de Detecção",
      minDuration: "Duração mínima",
      adjustSens: "Ajuste o limiar do modelo para calibrar a detecção de Telmatobius rubigo.",
      queue: "Fila de Processamento",
      analyzing: "Analisando localmente...",
      startAnalysis: "Iniciar Análise",
      results: "Resultados da Inferência",
      eventsFound: "{n} eventos acústicos encontrados.",
      stopAudio: "Parar Áudio",
      playMinute: "Reproduzir minuto",
      playSelected: "Reproduzir selecionado",
      downloadCsv: "Baixar CSV",
      file: "Arquivo",
      start: "Início (s)",
      end: "Fim (s)",
      duration: "Duração",
      label: "Rótulo",
      action: "Ação",
      privacyTitle: "Processamento 100% Local",
      privacyDesc: "Por motivos de privacidade e pesquisa, todos os áudios e modelos de IA rodam diretamente na memória do seu navegador através do ONNX Runtime Web. Nenhum arquivo sai do seu computador.",
      close: "Fechar",
      btnEditOn: "Ativar Edição Interativa",
      btnEditOff: "Desativar Edição",
      editBannerInfo: "Clique em um segmento para selecionar. Duplo clique para desmarcar. Rótulo disponível:",
      createHint: "Arraste no espectrograma ou na amplitude para criar um novo segmento Telmatobius.",
      editBannerNone: "Nenhuma seleção",
      editBannerSelected: "Selecionado",
      labelTelma: "Telmatobius",
      delete: "Apagar",
      welcomeTitle: "Bem-vindo ao TelmatoFinder",
      welcomeP1: "O aplicativo é hospedado como um site normal, mas o modelo acústico é executado dentro do seu navegador usando ONNX Runtime Web.",
      welcomeP2: "Ao enviar seus áudios, seu navegador executa a inferência localmente. Nenhum arquivo é enviado para servidores externos. Privacidade 100% garantida.",
      projectVideo: "Se quiser saber mais sobre o projeto, assista a este vídeo.",
      btnAccept: "Aceitar e Continuar",
      btnDecline: "Recusar",
      declineMsg: "Você deve aceitar os termos de processamento local para usar esta ferramenta.",
      landscapeTitle: "Bacia da Lagoa de Pozuelos, Jujuy",
      loadExamples: "Carregar exemplos",
      examplesTitle: "Exemplos incluídos",
      examplesDesc: "Cinco áudios reais de testing_location usados como contextos out-of-sample.",
      modelAuto: "Modelo automático",
      modelReady: "modelo pronto",
      modelFallback: "sem ONNX, modo heurístico",
      segment: "minuto"
    },
    fr: {
      flag: "img/flag-qc.png", langName: "Français (Québec)",
      subtitle: "Analyse Acoustique Locale",
      clearAll: "Tout Effacer",
      removeAudio: "Retirer",
      playAudio: "Lire audio",
      localEngine: "Moteur ONNX",
      loadModel: "Charger .onnx",
      noCloud: "Traitez les audios sans envoyer de données.",
      uploadAudio: "Charger Audio",
      dragDrop: "Glissez ou cliquez ici",
      formats: "WAV, MP3, M4A, OGG, FLAC ou AAC",
      chooseFiles: "Choisir fichiers",
      chooseFolder: "Choisir dossier",
      ctrlClick: "Maintenez Ctrl + Clic pour plusieurs",
      thresholdTitle: "Paramètres d'Inférence",
      threshold: "Seuil de Détection",
      minDuration: "Durée minimale",
      adjustSens: "Ajustez le seuil du modèle pour calibrer la détection de Telmatobius rubigo.",
      queue: "File d'attente",
      analyzing: "Analyse locale...",
      startAnalysis: "Démarrer",
      results: "Résultats d'Inférence",
      eventsFound: "{n} événements trouvés.",
      stopAudio: "Arrêter l'Audio",
      playMinute: "Lire la minute",
      playSelected: "Lire la sélection",
      downloadCsv: "Télécharger CSV",
      file: "Fichier",
      start: "Début (s)",
      end: "Fin (s)",
      duration: "Durée",
      label: "Étiquette",
      action: "Action",
      privacyTitle: "Traitement 100% Local",
      privacyDesc: "Tous les modèles audio et IA s'exécutent directement dans la mémoire de votre navigateur via ONNX Runtime Web. Aucun fichier n'est envoyé à des serveurs.",
      close: "Fermer",
      btnEditOn: "Activer l'Édition Interactive",
      btnEditOff: "Désactiver l'Édition",
      editBannerInfo: "Cliquez sur un segment pour le sélectionner. Double-cliquez pour désélectionner. Étiquette disponible:",
      createHint: "Glissez sur le spectrogramme ou l'amplitude pour créer un nouveau segment Telmatobius.",
      editBannerNone: "Aucune sélection",
      editBannerSelected: "Sélectionné",
      labelTelma: "Telmatobius",
      delete: "Supprimer",
      welcomeTitle: "Bienvenue sur TelmatoFinder",
      welcomeP1: "L'application est hébergée comme un site normal, mais le modèle acoustique s'exécute dans votre navigateur via ONNX Runtime Web.",
      welcomeP2: "Lorsque vous téléchargez vos audios, votre navigateur exécute l'inférence localement. Aucun fichier n'est envoyé à des serveurs externes.",
      projectVideo: "Pour en savoir plus sur le projet, regardez cette vidéo.",
      btnAccept: "Accepter et Continuer",
      btnDecline: "Refuser",
      declineMsg: "Vous devez accepter les conditions de traitement local pour utiliser cet outil.",
      landscapeTitle: "Bassin de la lagune de Pozuelos, Jujuy",
      loadExamples: "Charger exemples",
      examplesTitle: "Exemples inclus",
      examplesDesc: "Cinq audios réels de testing_location utilisés comme contextes out-of-sample.",
      modelAuto: "Modèle automatique",
      modelReady: "modèle prêt",
      modelFallback: "sans ONNX, mode heuristique",
      segment: "minute"
    },
    gn: {
      flag: "img/flag-py.png", langName: "Guaraní",
      subtitle: "Ñe'ẽrypu Pysyrõha Local",
      clearAll: "Mopotĩmba",
      removeAudio: "Nohẽ",
      playAudio: "Ehendu audio",
      localEngine: "Motor ONNX",
      loadModel: "Emoinge .onnx",
      noCloud: "Ndojeguerahái mba'eve umi servidor-pe.",
      uploadAudio: "Ñe'ẽrypu Ñemoinge",
      dragDrop: "Eity térã eikutu ko'ápe",
      formats: "WAV, MP3, M4A, OGG, FLAC térã AAC",
      chooseFiles: "Eiporavo archivo",
      chooseFolder: "Eiporavo carpeta",
      ctrlClick: "Ejopy Ctrl + Clic emoinge hetave hag̃ua",
      thresholdTitle: "Ñemboheko Inferencia",
      threshold: "Detección Renda",
      minDuration: "Pukukue michĩvéva",
      adjustSens: "Emyatyrõ umbral eikuaa porãve hag̃ua Telmatobius rubigo purahéi.",
      queue: "Oñemba'apohína",
      analyzing: "Ojesareko hína local-pe...",
      startAnalysis: "Ñepyrũ Hesaho",
      results: "Mba'e Osẽva",
      eventsFound: "Ojejuhu {n} ñe'ẽrypu.",
      stopAudio: "Mombytu Audio",
      playMinute: "Ehendu minuto",
      playSelected: "Ehendu poravopyre",
      downloadCsv: "Mboguejy CSV",
      file: "Téra",
      start: "Ñepyrũ (s)",
      end: "Paha (s)",
      duration: "Pukukue",
      label: "Téraete",
      action: "Mba'e",
      privacyTitle: "Oñemba'apo 100% Local",
      privacyDesc: "Opaite ñe'ẽrypu oñemba'apo nde navegador-pe ONNX Runtime Web rupive. Ndojeguerahái mba'eve internet-pe.",
      close: "Mboty",
      btnEditOn: "Oñemoñepyrũ Ñemyatyrõ",
      btnEditOff: "Oñemboty Ñemyatyrõ",
      editBannerInfo: "Eikutu peteĩ vore eiporavo hag̃ua. Mokõi klik embogue hag̃ua. Téraete ojepurúva:",
      createHint: "Embotyryry espectrograma térã amplitud ári emoheñói hag̃ua segmento Telmatobius.",
      editBannerNone: "Ne'ĩra eiporavo",
      editBannerSelected: "Ojeiporavo",
      labelTelma: "Telmatobius",
      delete: "Mbogue",
      welcomeTitle: "Maitei TelmatoFinder-pe",
      welcomeP1: "Ko tembipuru oiko nde navegador-pe ONNX Runtime Web rupive.",
      welcomeP2: "Nde eikévo, opa mba'e ojejapóna ko'ápe. Ndojeguerahái mba'eve internet-pe. Privacidad 100%.",
      projectVideo: "Eikuaasevéramo proyecto rehe, ehecha ko video.",
      btnAccept: "Moneĩ ha Segi",
      btnDecline: "Mbotove",
      declineMsg: "Eikotevẽ emoneĩ umi término eipuru hag̃ua ko tembipuru.",
      landscapeTitle: "Laguna Pozuelos, Jujuy",
      loadExamples: "Emoinge techapyrã",
      examplesTitle: "Techapyrã oikeva",
      examplesDesc: "Po audio añetegua testing_location-gui, out-of-sample contexto ramo.",
      modelAuto: "Modelo automático",
      modelReady: "modelo oĩma",
      modelFallback: "ONNX ndaipóri, heurístico",
      segment: "minuto"
    }
  };

  const TARGET_SAMPLE_RATE = 16000;
  const SEGMENT_SECONDS = 60;
  const N_FFT = 1024;
  const HOP_LENGTH = 512;
  const N_MELS = 64;
  const MAX_DISPLAY_HZ = 2000;

  const state = {
    lang: "es",
    accepted: false,
    session: null,
    modelReady: false,
    modelMode: "loading",
    files: [],
    decoded: new Map(),
    examples: [],
    detections: [],
    fileRows: [],
    isAnalyzing: false,
    isEditMode: false,
    selectedId: null,
    editorDrag: null,
    playback: null,
    playbackFrame: null,
    playbackLastDraw: 0,
    activeAudio: null,
    playTimer: null,
    melFilters: null,
    hann: null
  };

  const $ = (id) => document.getElementById(id);

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    state.lang = localStorage.getItem("telmatofinder_lang") || "es";
    state.accepted = false;
    bindEvents();
    buildLanguageControls();
    translatePage();
    hideMissingImages();
    renderIcons();
    renderExamples();
    updateWelcomeModal();
    if (state.accepted) loadDefaultModel();
  }

  function bindEvents() {
    $("acceptTermsButton").addEventListener("click", () => {
      localStorage.removeItem("telmatofinder_terms");
      state.accepted = true;
      updateWelcomeModal();
      loadDefaultModel();
    });
    $("declineTermsButton").addEventListener("click", () => {
      $("declineMessage").classList.remove("hidden");
      $("declineMessage").classList.add("flex");
    });
    $("privacyInfoButton").addEventListener("click", () => $("privacyPopup").classList.remove("hidden"));
    $("closePrivacyButton").addEventListener("click", () => $("privacyPopup").classList.add("hidden"));
    $("privacyOkButton").addEventListener("click", () => $("privacyPopup").classList.add("hidden"));
    $("audioInput").addEventListener("change", (event) => addFiles(event.target.files));
    $("folderInput").addEventListener("change", (event) => addFiles(event.target.files));
    $("chooseFilesButton").addEventListener("click", () => $("audioInput").click());
    $("chooseFolderButton").addEventListener("click", () => $("folderInput").click());
    $("modelInput").addEventListener("change", handleModelUpload);
    $("clearAllButton").addEventListener("click", clearAll);
    $("analyseButton").addEventListener("click", analyseFiles);
    $("loadExamplesButton").addEventListener("click", loadAllExamples);
    $("toggleEditButton").addEventListener("click", toggleEditMode);
    $("stopAudioButton").addEventListener("click", stopPlayback);
    $("downloadCsvButton").addEventListener("click", exportCSV);
    $("thresholdInput").addEventListener("input", () => $("thresholdValue").textContent = Number($("thresholdInput").value).toFixed(3));
    $("minDurationInput").addEventListener("input", () => $("minDurationValue").textContent = `${Number($("minDurationInput").value).toFixed(2)} s`);
    $("languageTrigger").addEventListener("click", (event) => {
      event.stopPropagation();
      $("languageMenu").classList.toggle("language-menu-open");
    });
    $("languageMenu").addEventListener("click", (event) => event.stopPropagation());
    document.addEventListener("click", () => $("languageMenu").classList.remove("language-menu-open"));

    const dropZone = $("dropZone");
    ["dragenter", "dragover"].forEach((name) => dropZone.addEventListener(name, (event) => {
      event.preventDefault();
      dropZone.classList.add("drop-active");
    }));
    ["dragleave", "drop"].forEach((name) => dropZone.addEventListener(name, (event) => {
      event.preventDefault();
      dropZone.classList.remove("drop-active");
    }));
    dropZone.addEventListener("drop", (event) => addFiles(event.dataTransfer.files));

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") $("languageMenu").classList.remove("language-menu-open");
      handleEditKeydown(event);
    });
    window.addEventListener("resize", debounce(renderMinuteEditor, 150));
  }

  function buildLanguageControls() {
    const modal = $("modalLanguageButtons");
    const menu = $("languageMenu");
    modal.innerHTML = "";
    menu.innerHTML = "";
    Object.entries(translations).forEach(([key, value]) => {
      const modalButton = document.createElement("button");
      modalButton.className = "text-lg transition-transform hover:scale-110 p-1.5 rounded-lg border";
      modalButton.title = value.langName;
      modalButton.innerHTML = flagMarkup(value.flag, value.langName, "language-flag-lg");
      modalButton.addEventListener("click", () => setLang(key));
      modal.appendChild(modalButton);

      const menuButton = document.createElement("button");
      menuButton.className = "w-full text-left px-4 py-2.5 text-sm hover:bg-emerald-50 flex items-center gap-3 text-slate-600 border-l-4 border-transparent";
      menuButton.innerHTML = `${flagMarkup(value.flag, value.langName, "language-flag")} ${escapeHtml(value.langName)}`;
      menuButton.addEventListener("click", () => setLang(key));
      menu.appendChild(menuButton);
    });
  }

  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem("telmatofinder_lang", lang);
    $("languageMenu").classList.remove("language-menu-open");
    translatePage();
    renderExamples();
    renderQueue();
    renderResults();
    renderMinuteEditor();
  }

  function flagMarkup(src, alt, className = "language-flag") {
    return `<img class="${className}" src="${escapeHtml(src)}" alt="${escapeHtml(alt)} flag">`;
  }

  function translatePage() {
    const dict = translations[state.lang];
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (dict[key]) node.textContent = dict[key];
    });
    $("languageLabel").innerHTML = `${flagMarkup(dict.flag, dict.langName, "language-flag")} <span>${escapeHtml(dict.langName)}</span>`;
    $("thresholdValue").textContent = Number($("thresholdInput").value).toFixed(3);
    $("minDurationValue").textContent = `${Number($("minDurationInput").value).toFixed(2)} s`;
    updateTranslationNotice(dict);
    updateEditUi();
    renderIcons();
  }

  function updateTranslationNotice(dict) {
    const notice = $("translationNotice");
    const text = $("translationNoticeText");
    const message = ["pt", "gn"].includes(state.lang)
      ? `You selected ${dict.langName}. This translation was prepared with assistance from an LLM; please excuse any language errors.`
      : "";
    text.textContent = message;
    notice.classList.toggle("hidden", !message);
  }

  function updateWelcomeModal() {
    $("welcomeModal").classList.toggle("hidden", state.accepted);
  }

  function hideMissingImages() {
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => {
        if (img.classList.contains("partner-logo")) img.classList.add("missing");
        if (img.classList.contains("hero-bg")) img.style.opacity = "0";
      });
    });
  }

  async function loadDefaultModel() {
    setModelStatus("loading", "model.onnx");
    try {
      await waitForOrt();
      state.session = await window.ort.InferenceSession.create("model.onnx", { executionProviders: ["wasm"] });
      state.modelReady = true;
      state.modelMode = "onnx";
      setModelStatus("ready", translations[state.lang].modelReady);
      $("modelLabel").textContent = translations[state.lang].modelAuto;
    } catch (error) {
      state.modelReady = false;
      state.modelMode = "heuristic";
      setModelStatus("error", translations[state.lang].modelFallback);
      console.warn("ONNX model was not loaded:", error);
    }
  }

  async function handleModelUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".onnx")) {
      alert("Invalid file type. Need .onnx");
      return;
    }
    try {
      await waitForOrt();
      const buffer = await file.arrayBuffer();
      state.session = await window.ort.InferenceSession.create(buffer, { executionProviders: ["wasm"] });
      state.modelReady = true;
      state.modelMode = "onnx-upload";
      $("modelLabel").textContent = file.name;
      setModelStatus("ready", translations[state.lang].modelReady);
    } catch (error) {
      state.modelReady = false;
      state.modelMode = "heuristic";
      setModelStatus("error", translations[state.lang].modelFallback);
    }
  }

  function waitForOrt() {
    return new Promise((resolve, reject) => {
      let tries = 0;
      const timer = setInterval(() => {
        tries += 1;
        if (window.ort) {
          clearInterval(timer);
          window.ort.env.wasm.numThreads = Math.min(4, navigator.hardwareConcurrency || 1);
          resolve();
        } else if (tries > 80) {
          clearInterval(timer);
          reject(new Error("ONNX Runtime Web did not load."));
        }
      }, 100);
    });
  }

  function setModelStatus(kind, text) {
    $("modelStatus").textContent = text;
    $("onnxDot").className = `w-2.5 h-2.5 rounded-full shadow-inner ${kind === "ready" ? "status-dot-ready" : kind === "error" ? "status-dot-error" : "status-dot-loading animate-pulse"}`;
    $("onnxIcon").className = `p-2 rounded-lg ${kind === "ready" ? "bg-emerald-50 text-emerald-600" : kind === "error" ? "bg-rose-50 text-rose-600" : "bg-slate-100 text-slate-400"}`;
  }

  async function renderExamples() {
    try {
      const response = await fetch("examples/manifest.json", { cache: "no-store" });
      state.examples = response.ok ? await response.json() : [];
    } catch {
      state.examples = [];
    }
    const list = $("examplesList");
    if (!state.examples.length) {
      list.innerHTML = '<p class="text-sm text-slate-500 md:col-span-5">No examples found yet.</p>';
      return;
    }
    list.innerHTML = state.examples.map((item, index) => `
      <button class="example-card" data-example-index="${index}">
        <strong>${escapeHtml(item.title || item.file)}</strong>
        <span>${escapeHtml(item.description || item.file)}</span>
      </button>
    `).join("");
    list.querySelectorAll("[data-example-index]").forEach((button) => {
      button.addEventListener("click", () => loadExample(Number(button.dataset.exampleIndex)));
    });
  }

  async function loadAllExamples() {
    for (let i = 0; i < state.examples.length; i += 1) {
      await loadExample(i, false);
    }
    renderQueue();
  }

  async function loadExample(index, shouldRender = true) {
    const item = state.examples[index];
    if (!item) return;
    const response = await fetch(`examples/${item.file}`);
    const blob = await response.blob();
    const file = new File([blob], item.file, { type: "audio/wav" });
    addFiles([file], shouldRender);
  }

  function addFiles(fileList, shouldRender = true) {
    Array.from(fileList || []).forEach((file) => {
      if (!isAudioFile(file)) return;
      const id = randomId();
      state.files.push({
        id,
        file,
        name: file.webkitRelativePath || file.name,
        size: file.size,
        status: "Pendiente",
        url: URL.createObjectURL(file)
      });
    });
    if (shouldRender) renderQueue();
  }

  function isAudioFile(file) {
    return file.type.startsWith("audio/") || /\.(wav|mp3|m4a|ogg|flac|aac)$/i.test(file.name);
  }

  function renderQueue() {
    $("queuePanel").classList.toggle("hidden", state.files.length === 0);
    $("queueCount").textContent = `(${state.files.length})`;
    $("queueList").innerHTML = state.files.map((audio) => `
      <div class="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl border border-slate-100 transition">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-mono text-xs font-bold border border-emerald-100">${escapeHtml(extension(audio.name))}</div>
          <div class="min-w-0">
            <p class="text-sm font-semibold text-slate-800 truncate max-w-[52vw] md:max-w-md">${escapeHtml(audio.name)}</p>
            <p class="text-xs text-slate-500">${formatBytes(audio.size)}</p>
          </div>
        </div>
        <div class="queue-actions">
          <span class="text-xs px-3 py-1 rounded-full font-bold border ${statusClass(audio.status)}">${escapeHtml(audio.status)}</span>
          <button type="button" class="queue-play" data-play-audio="${audio.id}" title="${translations[state.lang].playAudio}">
            <span>${translations[state.lang].playAudio}</span>
          </button>
          <button type="button" class="queue-remove" data-remove-audio="${audio.id}" ${state.isAnalyzing ? "disabled" : ""} title="${translations[state.lang].removeAudio}">
            <span>${translations[state.lang].removeAudio}</span>
          </button>
        </div>
      </div>
    `).join("");
    document.querySelectorAll("[data-play-audio]").forEach((button) => {
      button.addEventListener("click", () => playAudio(button.dataset.playAudio));
    });
    document.querySelectorAll("[data-remove-audio]").forEach((button) => {
      button.addEventListener("click", () => removeAudio(button.dataset.removeAudio));
    });
    renderIcons();
  }

  async function analyseFiles() {
    if (!state.files.length || state.isAnalyzing) return;
    state.isAnalyzing = true;
    state.detections = [];
    state.fileRows = [];
    state.selectedId = null;
    $("progressWrap").classList.remove("hidden");
    setProgress(0);
    $("analyseButton").disabled = true;
    $("analyseButton").innerHTML = `<i data-lucide="activity" class="w-4 h-4 animate-spin"></i><span>${translations[state.lang].analyzing}</span>`;
    renderIcons();

    for (let i = 0; i < state.files.length; i += 1) {
      const audio = state.files[i];
      audio.status = "Analizando...";
      renderQueue();
      try {
        const decoded = await decodeAudio(audio);
        const segmentCount = Math.max(1, Math.ceil(decoded.samples.length / (TARGET_SAMPLE_RATE * SEGMENT_SECONDS)));
        let maxProbability = 0;
        let eventCount = 0;
        for (let segmentIndex = 0; segmentIndex < segmentCount; segmentIndex += 1) {
          const segment = sliceSegment(decoded.samples, segmentIndex);
          const probabilities = state.modelReady ? await runOnnxSegment(segment) : runHeuristicSegment(segment);
          const smoothed = smooth(probabilities, 3);
          maxProbability = Math.max(maxProbability, maxValue(smoothed));
          const events = probabilitiesToEvents(smoothed, {
            threshold: Number($("thresholdInput").value),
            minDuration: Number($("minDurationInput").value),
            mergeGap: 0.12,
            segmentIndex,
            segmentStart: segmentIndex * SEGMENT_SECONDS
          });
          events.forEach((event) => {
            eventCount += 1;
            state.detections.push({
              id: randomId(),
              audioId: audio.id,
              filename: audio.name,
              fileUrl: audio.url,
              segmentIndex,
              segmentStartSec: segmentIndex * SEGMENT_SECONDS,
              startSec: event.startSec,
              endSec: event.endSec,
              peakProbability: event.peakProbability,
              label: "Telmatobius"
            });
          });
        }
        state.fileRows.push({ audioId: audio.id, filename: audio.name, maxProbability, eventCount });
        audio.status = "Completado";
      } catch (error) {
        audio.status = "Error";
        console.error(error);
      }
      setProgress(Math.round(((i + 1) / state.files.length) * 100));
      await nextFrame();
    }
    state.isAnalyzing = false;
    $("analyseButton").disabled = false;
    $("analyseButton").innerHTML = `<i data-lucide="play" class="w-4 h-4"></i><span>${translations[state.lang].startAnalysis}</span>`;
    renderQueue();
    renderResults();
    renderMinuteEditor();
    renderIcons();
  }

  async function decodeAudio(audio) {
    if (state.decoded.has(audio.id)) return state.decoded.get(audio.id);
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const arrayBuffer = await audio.file.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer.slice(0));
    const mixed = mixChannels(audioBuffer);
    const resampled = resampleLinear(mixed, audioBuffer.sampleRate, TARGET_SAMPLE_RATE);
    const decoded = {
      audioId: audio.id,
      samples: resampled,
      durationSec: audioBuffer.duration,
      sampleRate: TARGET_SAMPLE_RATE
    };
    state.decoded.set(audio.id, decoded);
    await audioContext.close();
    return decoded;
  }

  function mixChannels(audioBuffer) {
    const out = new Float32Array(audioBuffer.length);
    for (let channel = 0; channel < audioBuffer.numberOfChannels; channel += 1) {
      const data = audioBuffer.getChannelData(channel);
      for (let i = 0; i < data.length; i += 1) out[i] += data[i] / audioBuffer.numberOfChannels;
    }
    return out;
  }

  function resampleLinear(samples, fromRate, toRate) {
    if (fromRate === toRate) return samples;
    const ratio = fromRate / toRate;
    const length = Math.max(1, Math.round(samples.length / ratio));
    const out = new Float32Array(length);
    for (let i = 0; i < length; i += 1) {
      const p = i * ratio;
      const left = Math.floor(p);
      const right = Math.min(left + 1, samples.length - 1);
      const w = p - left;
      out[i] = samples[left] * (1 - w) + samples[right] * w;
    }
    return out;
  }

  function sliceSegment(samples, index) {
    const segmentLength = TARGET_SAMPLE_RATE * SEGMENT_SECONDS;
    const out = new Float32Array(segmentLength);
    const start = index * segmentLength;
    out.set(samples.subarray(start, Math.min(start + segmentLength, samples.length)));
    return out;
  }

  async function runOnnxSegment(segment) {
    const mel = computeLogMel(segment);
    const inputName = state.session.inputNames[0];
    const candidateDims = [[1, 1, N_MELS, mel.frames], [1, N_MELS, mel.frames]];
    let output = null;
    let lastError = null;
    for (const dims of candidateDims) {
      try {
        const tensor = new window.ort.Tensor("float32", mel.values, dims);
        const feeds = {};
        feeds[inputName] = tensor;
        output = await state.session.run(feeds);
        break;
      } catch (error) {
        lastError = error;
      }
    }
    if (!output) throw lastError || new Error("ONNX inference failed.");
    const raw = Array.from(output[state.session.outputNames[0]].data, Number);
    return normaliseOutput(raw, mel.frames);
  }

  function computeLogMel(samples) {
    if (!state.melFilters) state.melFilters = createMelFilterBank();
    if (!state.hann) state.hann = createHannWindow();
    const padded = new Float32Array(samples.length + N_FFT);
    padded.set(samples, Math.floor(N_FFT / 2));
    const frames = Math.floor((padded.length - N_FFT) / HOP_LENGTH) + 1;
    const values = new Float32Array(N_MELS * frames);
    const real = new Float32Array(N_FFT);
    const imag = new Float32Array(N_FFT);
    for (let frame = 0; frame < frames; frame += 1) {
      const offset = frame * HOP_LENGTH;
      for (let i = 0; i < N_FFT; i += 1) {
        real[i] = padded[offset + i] * state.hann[i];
        imag[i] = 0;
      }
      fft(real, imag);
      const power = new Float32Array(N_FFT / 2 + 1);
      for (let bin = 0; bin < power.length; bin += 1) power[bin] = real[bin] * real[bin] + imag[bin] * imag[bin];
      for (let mel = 0; mel < N_MELS; mel += 1) {
        const filter = state.melFilters[mel];
        let energy = 0;
        for (let bin = filter.start; bin <= filter.end; bin += 1) energy += power[bin] * filter.weights[bin - filter.start];
        values[mel * frames + frame] = 10 * Math.log10(Math.max(energy, 1e-10));
      }
    }
    standardise(values);
    return { values, frames };
  }

  function createMelFilterBank() {
    const minMel = hzToMel(40);
    const maxMel = hzToMel(TARGET_SAMPLE_RATE / 2);
    const points = [];
    for (let i = 0; i < N_MELS + 2; i += 1) points.push(minMel + (maxMel - minMel) * i / (N_MELS + 1));
    const bins = points.map((mel) => Math.floor((N_FFT + 1) * melToHz(mel) / TARGET_SAMPLE_RATE));
    const filters = [];
    for (let mel = 1; mel <= N_MELS; mel += 1) {
      const left = Math.max(0, bins[mel - 1]);
      const centre = Math.max(left + 1, bins[mel]);
      const right = Math.min(N_FFT / 2, Math.max(centre + 1, bins[mel + 1]));
      const weights = [];
      for (let bin = left; bin <= right; bin += 1) {
        weights.push(bin < centre ? (bin - left) / Math.max(1, centre - left) : (right - bin) / Math.max(1, right - centre));
      }
      filters.push({ start: left, end: right, weights });
    }
    return filters;
  }

  function createHannWindow() {
    const out = new Float32Array(N_FFT);
    for (let i = 0; i < N_FFT; i += 1) out[i] = 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (N_FFT - 1));
    return out;
  }

  function hzToMel(hz) { return 2595 * Math.log10(1 + hz / 700); }
  function melToHz(mel) { return 700 * (10 ** (mel / 2595) - 1); }

  function fft(real, imag) {
    const n = real.length;
    for (let i = 1, j = 0; i < n; i += 1) {
      let bit = n >> 1;
      for (; j & bit; bit >>= 1) j ^= bit;
      j ^= bit;
      if (i < j) {
        [real[i], real[j]] = [real[j], real[i]];
        [imag[i], imag[j]] = [imag[j], imag[i]];
      }
    }
    for (let len = 2; len <= n; len <<= 1) {
      const angle = -2 * Math.PI / len;
      const wLenR = Math.cos(angle);
      const wLenI = Math.sin(angle);
      for (let i = 0; i < n; i += len) {
        let wr = 1;
        let wi = 0;
        for (let j = 0; j < len / 2; j += 1) {
          const ur = real[i + j];
          const ui = imag[i + j];
          const vr = real[i + j + len / 2] * wr - imag[i + j + len / 2] * wi;
          const vi = real[i + j + len / 2] * wi + imag[i + j + len / 2] * wr;
          real[i + j] = ur + vr;
          imag[i + j] = ui + vi;
          real[i + j + len / 2] = ur - vr;
          imag[i + j + len / 2] = ui - vi;
          const nextR = wr * wLenR - wi * wLenI;
          wi = wr * wLenI + wi * wLenR;
          wr = nextR;
        }
      }
    }
  }

  function runHeuristicSegment(segment) {
    const frames = Math.floor(segment.length / HOP_LENGTH) + 1;
    const values = new Float32Array(frames);
    for (let frame = 0; frame < frames; frame += 1) {
      const start = frame * HOP_LENGTH;
      let sum = 0;
      for (let i = 0; i < HOP_LENGTH && start + i < segment.length; i += 1) sum += Math.abs(segment[start + i]);
      values[frame] = sum / HOP_LENGTH;
    }
    standardise(values);
    return Array.from(values, (value) => 1 / (1 + Math.exp(-value)));
  }

  function probabilitiesToEvents(probabilities, options) {
    const frameStep = HOP_LENGTH / TARGET_SAMPLE_RATE;
    const events = [];
    let start = null;
    let peak = 0;
    for (let i = 0; i < probabilities.length; i += 1) {
      const value = probabilities[i];
      if (value >= options.threshold) {
        if (start === null) start = i;
        peak = Math.max(peak, value);
      } else if (start !== null) {
        events.push(frameRunToEvent(start, i - 1, peak, frameStep, options.segmentStart));
        start = null;
        peak = 0;
      }
    }
    if (start !== null) events.push(frameRunToEvent(start, probabilities.length - 1, peak, frameStep, options.segmentStart));
    return mergeAndFilter(events, options.minDuration, options.mergeGap);
  }

  function frameRunToEvent(startFrame, endFrame, peak, frameStep, segmentStart) {
    return {
      startSec: Math.max(0, segmentStart + startFrame * frameStep - 0.03),
      endSec: segmentStart + (endFrame + 1) * frameStep + 0.03,
      peakProbability: peak
    };
  }

  function mergeAndFilter(events, minDuration, mergeGap) {
    const merged = [];
    events.forEach((event) => {
      const previous = merged[merged.length - 1];
      if (previous && event.startSec - previous.endSec <= mergeGap) {
        previous.endSec = Math.max(previous.endSec, event.endSec);
        previous.peakProbability = Math.max(previous.peakProbability, event.peakProbability);
      } else {
        merged.push({ ...event });
      }
    });
    return merged.filter((event) => event.endSec - event.startSec >= minDuration);
  }

  function renderResults() {
    const hasAnalysedAudio = state.decoded.size > 0;
    $("resultsPanel").classList.toggle("hidden", !hasAnalysedAudio && state.detections.length === 0);
    $("eventsFoundText").textContent = translations[state.lang].eventsFound.replace("{n}", state.detections.length);
    $("eventsTableBody").innerHTML = state.detections.length ? state.detections.map((det) => {
      const selected = det.id === state.selectedId;
      return `
        <tr class="transition group ${state.isEditMode ? "cursor-pointer hover:bg-emerald-50/50" : "hover:bg-slate-50"} ${selected ? "row-selected" : ""}" data-event-id="${det.id}">
          <td class="px-6 py-4 font-semibold text-sm text-slate-800">${escapeHtml(det.filename)}</td>
          <td class="px-6 py-4 font-mono text-sm text-center text-slate-600">${det.startSec.toFixed(3)}</td>
          <td class="px-6 py-4 font-mono text-sm text-center text-slate-600">${det.endSec.toFixed(3)}</td>
          <td class="px-6 py-4 font-mono text-sm text-center text-slate-500">${(det.endSec - det.startSec).toFixed(3)}</td>
          <td class="px-6 py-4 text-center"><span class="label-pill ${labelClass(det.label)}">${escapeHtml(localLabel(det.label))}</span></td>
          <td class="px-6 py-4 text-center">
            <button class="play-event inline-flex items-center justify-center p-2 rounded-lg transition shadow-sm ${selected ? "bg-emerald-700 text-white hover:bg-emerald-800" : "bg-slate-100 text-slate-600 hover:bg-emerald-700 hover:text-white"}" data-event-id="${det.id}" title="Play segment">
              <i data-lucide="play" class="w-4 h-4"></i>
            </button>
          </td>
        </tr>
      `;
    }).join("") : '<tr><td class="px-6 py-5 text-sm text-slate-500" colspan="6">No labelled segments yet. Enable edit mode and drag on the minute view to create one.</td></tr>';

    document.querySelectorAll("tr[data-event-id]").forEach((row) => {
      row.addEventListener("click", () => {
        if (!state.isEditMode) return;
        selectEvent(row.dataset.eventId);
      });
      row.addEventListener("dblclick", () => clearSelection());
    });
    document.querySelectorAll(".play-event").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        playEvent(button.dataset.eventId);
      });
    });
    updateEditUi();
    renderIcons();
  }

  async function renderMinuteEditor() {
    const container = $("minuteEditor");
    if (!state.decoded.size) {
      container.innerHTML = "";
      return;
    }
    const groups = buildMinuteGroups();
    container.innerHTML = groups.map((group, index) => `
      <article class="canvas-card" data-group-index="${index}">
        <header>
          <div>
            <h3>${escapeHtml(group.audio.name)}</h3>
            <small>${translations[state.lang].segment} ${group.segmentIndex + 1}: ${group.segmentStart.toFixed(1)}-${group.segmentEnd.toFixed(1)} s</small>
          </div>
          <div class="canvas-actions">
            <button type="button" data-action="play-minute" data-group-index="${index}">${translations[state.lang].playMinute}</button>
            <button type="button" data-action="play-selected" data-group-index="${index}" ${group.events.some((ev) => ev.id === state.selectedId) ? "" : "disabled"}>${translations[state.lang].playSelected}</button>
            <small>${group.events.length} events</small>
          </div>
        </header>
        <p class="canvas-hint">${translations[state.lang].createHint}</p>
        <canvas class="editor-canvas" width="980" height="360" data-group-index="${index}" aria-label="Spectrogram and waveform editor"></canvas>
      </article>
    `).join("");
    await nextFrame();
    container.querySelectorAll("[data-action='play-minute']").forEach((button) => {
      button.addEventListener("click", () => playMinute(groups[Number(button.dataset.groupIndex)]));
    });
    container.querySelectorAll("[data-action='play-selected']").forEach((button) => {
      button.addEventListener("click", () => playSelectedInGroup(groups[Number(button.dataset.groupIndex)]));
    });
    const canvases = container.querySelectorAll("canvas[data-group-index]");
    canvases.forEach((canvas) => {
      const group = groups[Number(canvas.dataset.groupIndex)];
      drawEditorCanvas(canvas, group);
      canvas.addEventListener("pointerdown", (event) => handleCanvasPointerDown(event, canvas, group));
      canvas.addEventListener("pointermove", (event) => handleCanvasPointerMove(event, canvas, group));
      canvas.addEventListener("pointerup", (event) => handleCanvasPointerUp(event, canvas, group));
      canvas.addEventListener("pointerleave", () => handleCanvasPointerCancel(canvas, group));
      canvas.addEventListener("dblclick", () => clearSelection());
    });
  }

  function buildMinuteGroups() {
    const groups = [];
    state.files.forEach((audio) => {
      const decoded = state.decoded.get(audio.id);
      if (!decoded) return;
      const segmentCount = Math.max(1, Math.ceil(decoded.samples.length / (TARGET_SAMPLE_RATE * SEGMENT_SECONDS)));
      for (let segmentIndex = 0; segmentIndex < segmentCount; segmentIndex += 1) {
        const segmentStart = segmentIndex * SEGMENT_SECONDS;
        const segmentEnd = Math.min(segmentStart + SEGMENT_SECONDS, decoded.samples.length / TARGET_SAMPLE_RATE);
        const events = state.detections.filter((det) => det.audioId === audio.id && det.segmentIndex === segmentIndex);
        if (events.length || segmentIndex < 3) {
          groups.push({ audio, decoded, segmentIndex, segmentStart, segmentEnd, events });
        }
      }
    });
    return groups;
  }

  function drawEditorCanvas(canvas, group) {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(720, Math.floor(rect.width || canvas.width));
    canvas.width = width;
    canvas.height = 360;
    const ctx = canvas.getContext("2d");
    const wave = { x: 48, y: 16, w: width - 72, h: 86 };
    const spec = { x: 48, y: 124, w: width - 72, h: 190 };
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWaveform(ctx, group, wave);
    drawSpectrogram(ctx, group, spec);
    drawAxes(ctx, spec, wave, group);
    drawDetections(ctx, group, spec, wave);
    drawCreationPreview(ctx, group, spec, wave);
    drawPlaybackLine(ctx, group, spec, wave);
  }

  function drawSpectrogram(ctx, group, box) {
    const startSample = Math.floor(group.segmentStart * TARGET_SAMPLE_RATE);
    const endSample = Math.floor(group.segmentEnd * TARGET_SAMPLE_RATE);
    const samples = group.decoded.samples.subarray(startSample, endSample);
    const frames = Math.max(1, Math.floor((samples.length - N_FFT) / HOP_LENGTH));
    const freqBins = Math.max(8, Math.floor(MAX_DISPLAY_HZ / (TARGET_SAMPLE_RATE / N_FFT)));
    const image = ctx.createImageData(box.w, box.h);
    const real = new Float32Array(N_FFT);
    const imag = new Float32Array(N_FFT);
    if (!state.hann) state.hann = createHannWindow();
    const columns = Math.min(520, Math.max(1, frames));
    const energies = [];
    for (let col = 0; col < columns; col += 1) {
      const frame = Math.floor(col * frames / columns);
      const offset = frame * HOP_LENGTH;
      for (let i = 0; i < N_FFT; i += 1) {
        real[i] = (samples[offset + i] || 0) * state.hann[i];
        imag[i] = 0;
      }
      fft(real, imag);
      const column = [];
      for (let bin = 1; bin <= freqBins; bin += 1) {
        const power = real[bin] * real[bin] + imag[bin] * imag[bin];
        const db = 10 * Math.log10(Math.max(power, 1e-10));
        column.push(db);
      }
      energies.push(column);
    }
    const smoothed = smoothSpectrogram(energies, 3, 2);
    const flattened = smoothed.flat().sort((a, b) => a - b);
    const low = percentile(flattened, 0.34);
    const high = percentile(flattened, 0.995);
    const range = Math.max(1, high - low);
    for (let x = 0; x < box.w; x += 1) {
      const position = x * (columns - 1) / Math.max(1, box.w - 1);
      const left = Math.floor(position);
      const right = Math.min(columns - 1, left + 1);
      const wx = position - left;
      const leftCol = smoothed[left] || smoothed[0] || [];
      const rightCol = smoothed[right] || leftCol;
      for (let y = 0; y < box.h; y += 1) {
        const binPosition = (1 - y / Math.max(1, box.h - 1)) * (freqBins - 1);
        const lowerBin = Math.floor(binPosition);
        const upperBin = Math.min(freqBins - 1, lowerBin + 1);
        const wy = binPosition - lowerBin;
        const a = interpolate(leftCol[lowerBin], leftCol[upperBin], wy);
        const b = interpolate(rightCol[lowerBin], rightCol[upperBin], wy);
        const db = interpolate(a, b, wx);
        const normalised = clamp((db - low) / range, 0, 1);
        const value = smoothStep(Math.pow(normalised, 1.28));
        const color = spectrogramColor(value);
        const idx = (y * box.w + x) * 4;
        image.data[idx] = color[0];
        image.data[idx + 1] = color[1];
        image.data[idx + 2] = color[2];
        image.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(image, box.x, box.y);
  }

  function drawWaveform(ctx, group, box) {
    const startSample = Math.floor(group.segmentStart * TARGET_SAMPLE_RATE);
    const endSample = Math.floor(group.segmentEnd * TARGET_SAMPLE_RATE);
    const samples = group.decoded.samples.subarray(startSample, endSample);
    ctx.fillStyle = "#000000";
    ctx.fillRect(box.x, box.y, box.w, box.h);
    ctx.strokeStyle = "rgba(255,255,255,0.14)";
    ctx.lineWidth = 1;
    for (let y = 0; y <= 4; y += 1) {
      const gy = box.y + (y / 4) * box.h;
      ctx.beginPath();
      ctx.moveTo(box.x, gy);
      ctx.lineTo(box.x + box.w, gy);
      ctx.stroke();
    }
    ctx.strokeStyle = "#ff1f1f";
    ctx.lineWidth = 1.4;
    const mid = box.y + box.h / 2;
    const robustPeak = waveformRobustPeak(samples) || 1;
    const scale = (box.h * 0.28) / robustPeak;
    ctx.beginPath();
    for (let x = 0; x < box.w; x += 1) {
      const a = Math.floor(x * samples.length / box.w);
      const b = Math.floor((x + 1) * samples.length / box.w);
      let min = 0;
      let max = 0;
      for (let i = a; i < b; i += 1) {
        const v = samples[i] || 0;
        min = Math.min(min, v);
        max = Math.max(max, v);
      }
      ctx.moveTo(box.x + x, clamp(mid - max * scale, box.y, box.y + box.h));
      ctx.lineTo(box.x + x, clamp(mid - min * scale, box.y, box.y + box.h));
    }
    ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,0.32)";
    ctx.beginPath();
    ctx.moveTo(box.x, mid);
    ctx.lineTo(box.x + box.w, mid);
    ctx.stroke();
  }

  function drawAxes(ctx, spec, wave, group) {
    ctx.strokeStyle = "#111827";
    ctx.fillStyle = "#0f172a";
    ctx.lineWidth = 1;
    ctx.font = "11px sans-serif";
    ctx.fillText("Oscillogram", wave.x, wave.y - 5);
    ctx.fillText("Spectrogram", spec.x, spec.y - 6);
    ctx.strokeRect(spec.x, spec.y, spec.w, spec.h);
    ctx.strokeRect(wave.x, wave.y, wave.w, wave.h);
    ctx.save();
    ctx.translate(12, spec.y + spec.h / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("Frequency (Hz)", -40, 0);
    ctx.restore();
    ctx.save();
    ctx.translate(12, wave.y + wave.h / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("Amplitude", -31, 0);
    ctx.restore();
    ctx.fillText(String(MAX_DISPLAY_HZ), 16, spec.y + 5);
    ctx.fillText("0", 33, spec.y + spec.h);
    ctx.fillText("Time (s)", spec.x + spec.w / 2 - 24, spec.y + spec.h + 38);
    for (let i = 0; i <= 12; i += 1) {
      const x = spec.x + (i / 12) * spec.w;
      const sec = group.segmentStart + (i / 12) * SEGMENT_SECONDS;
      ctx.fillText(Math.round(sec).toString(), x - 7, spec.y + spec.h + 17);
      ctx.strokeStyle = "rgba(51,65,85,0.18)";
      ctx.beginPath();
      ctx.moveTo(x, spec.y);
      ctx.lineTo(x, spec.y + spec.h);
      ctx.moveTo(x, wave.y);
      ctx.lineTo(x, wave.y + wave.h);
      ctx.stroke();
    }
  }

  function drawDetections(ctx, group, spec, wave) {
    group.events.forEach((det) => {
      const startX = timeToX(det.startSec, group.segmentStart, spec);
      const endX = timeToX(det.endSec, group.segmentStart, spec);
      const selected = det.id === state.selectedId;
      ctx.fillStyle = selected ? "rgba(251, 191, 36, 0.34)" : labelFill(det.label);
      ctx.strokeStyle = selected ? "#fef08a" : labelStroke(det.label);
      ctx.lineWidth = selected ? 3.5 : 2.5;
      [spec, wave].forEach((box) => {
        ctx.fillRect(startX, box.y, Math.max(2, endX - startX), box.h);
      ctx.strokeRect(startX, box.y, Math.max(2, endX - startX), box.h);
      });
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 11px sans-serif";
      ctx.shadowColor = "rgba(0,0,0,0.8)";
      ctx.shadowBlur = 3;
      ctx.fillText(localLabel(det.label), startX + 4, spec.y + 14);
      ctx.shadowBlur = 0;
    });
  }

  function drawCreationPreview(ctx, group, spec, wave) {
    const drag = state.editorDrag;
    if (!drag || drag.groupKey !== groupKey(group) || !drag.moved) return;
    const start = Math.min(drag.startSec, drag.currentSec);
    const end = Math.max(drag.startSec, drag.currentSec);
    const startX = timeToX(start, group.segmentStart, spec);
    const endX = timeToX(end, group.segmentStart, spec);
    ctx.fillStyle = "rgba(20, 184, 166, 0.26)";
    ctx.strokeStyle = "#0f766e";
    ctx.setLineDash([6, 4]);
    ctx.lineWidth = 2;
    [spec, wave].forEach((box) => {
      ctx.fillRect(startX, box.y, Math.max(2, endX - startX), box.h);
      ctx.strokeRect(startX, box.y, Math.max(2, endX - startX), box.h);
    });
    ctx.setLineDash([]);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 11px sans-serif";
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    ctx.shadowBlur = 3;
    ctx.fillText("new Telmatobius", startX + 4, spec.y + spec.h - 8);
    ctx.shadowBlur = 0;
  }

  function drawPlaybackLine(ctx, group, spec, wave) {
    if (!state.playback || !state.activeAudio || !playbackMatchesGroup(group)) return;
    const sec = state.activeAudio.currentTime;
    if (sec < group.segmentStart || sec > group.segmentEnd) return;
    const x = timeToX(sec, group.segmentStart, spec);
    ctx.save();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.shadowColor = "rgba(0,0,0,0.9)";
    ctx.shadowBlur = 5;
    ctx.beginPath();
    ctx.moveTo(x, wave.y);
    ctx.lineTo(x, spec.y + spec.h);
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = "#ef4444";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, wave.y);
    ctx.lineTo(x, spec.y + spec.h);
    ctx.stroke();
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.arc(x, wave.y + 8, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function handleCanvasPointerDown(event, canvas, group) {
    if (state.playback && playbackMatchesGroup(group) && (!state.isEditMode || isNearPlaybackLine(event, canvas, group))) {
      canvas.setPointerCapture(event.pointerId);
      state.playback.dragging = true;
      seekPlaybackToCanvasEvent(event, canvas, group);
      return;
    }
    if (!state.isEditMode) return;
    canvas.setPointerCapture(event.pointerId);
    const sec = canvasEventToSec(event, canvas, group);
    const clicked = group.events.find((det) => sec >= det.startSec && sec <= det.endSec);
    state.editorDrag = {
      groupKey: groupKey(group),
      startSec: sec,
      currentSec: sec,
      clickedId: clicked ? clicked.id : null,
      moved: false
    };
  }

  function handleCanvasPointerMove(event, canvas, group) {
    if (state.playback?.dragging && playbackMatchesGroup(group)) {
      seekPlaybackToCanvasEvent(event, canvas, group);
      return;
    }
    if (!state.editorDrag || state.editorDrag.groupKey !== groupKey(group)) return;
    const sec = canvasEventToSec(event, canvas, group);
    if (Math.abs(sec - state.editorDrag.startSec) > 0.04) state.editorDrag.moved = true;
    state.editorDrag.currentSec = sec;
    drawEditorCanvas(canvas, group);
  }

  function handleCanvasPointerUp(event, canvas, group) {
    if (state.playback?.dragging && playbackMatchesGroup(group)) {
      seekPlaybackToCanvasEvent(event, canvas, group);
      state.playback.dragging = false;
      return;
    }
    if (!state.isEditMode || !state.editorDrag || state.editorDrag.groupKey !== groupKey(group)) return;
    const drag = state.editorDrag;
    state.editorDrag = null;
    const endSec = canvasEventToSec(event, canvas, group);
    if (drag.moved && Math.abs(endSec - drag.startSec) >= 0.08) {
      createEventFromRange(group, drag.startSec, endSec);
      return;
    }
    if (drag.clickedId) {
      selectEvent(drag.clickedId);
      return;
    }
    drawEditorCanvas(canvas, group);
  }

  function handleCanvasPointerCancel(canvas, group) {
    if (!state.editorDrag || state.editorDrag.groupKey !== groupKey(group)) return;
    state.editorDrag = null;
    drawEditorCanvas(canvas, group);
  }

  function seekPlaybackToCanvasEvent(event, canvas, group) {
    if (!state.activeAudio || !state.playback) return;
    const sec = canvasEventToSec(event, canvas, group);
    const minSec = Number.isFinite(state.playback.startSec) ? state.playback.startSec : group.segmentStart;
    const maxSec = Number.isFinite(state.playback.endSec) ? state.playback.endSec : group.segmentEnd;
    state.activeAudio.currentTime = clamp(sec, minSec, maxSec);
    redrawVisibleEditorCanvases();
  }

  function isNearPlaybackLine(event, canvas, group) {
    if (!state.activeAudio || !state.playback) return false;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const pointerX = (event.clientX - rect.left) * scaleX;
    const box = { x: 48, w: canvas.width - 72 };
    const lineX = timeToX(state.activeAudio.currentTime, group.segmentStart, box);
    return Math.abs(pointerX - lineX) <= 14;
  }

  function canvasEventToSec(event, canvas, group) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const x = (event.clientX - rect.left) * scaleX;
    const spec = { x: 48, y: 124, w: canvas.width - 72, h: 190 };
    return clamp(group.segmentStart + ((x - spec.x) / spec.w) * SEGMENT_SECONDS, group.segmentStart, group.segmentEnd);
  }

  function createEventFromRange(group, a, b) {
    const startSec = clamp(Math.min(a, b), group.segmentStart, group.segmentEnd);
    const endSec = clamp(Math.max(a, b), group.segmentStart, group.segmentEnd);
    if (endSec - startSec < 0.05) return;
    const det = {
      id: randomId(),
      audioId: group.audio.id,
      filename: group.audio.name,
      fileUrl: group.audio.url,
      segmentIndex: group.segmentIndex,
      segmentStartSec: group.segmentStart,
      startSec,
      endSec,
      peakProbability: 1,
      label: "Telmatobius"
    };
    state.detections.push(det);
    state.detections.sort((x, y) => x.filename.localeCompare(y.filename) || x.startSec - y.startSec);
    state.selectedId = det.id;
    renderResults();
    renderMinuteEditor();
  }

  function toggleEditMode() {
    state.isEditMode = !state.isEditMode;
    if (!state.isEditMode) clearSelection(false);
    updateEditUi();
    renderResults();
    renderMinuteEditor();
  }

  function updateEditUi() {
    const dict = translations[state.lang];
    $("editBanner").classList.toggle("hidden", !state.isEditMode);
    $("editPulse").classList.toggle("hidden", !state.isEditMode);
    $("toggleEditButton").className = state.isEditMode
      ? "flex-1 lg:flex-none items-center justify-center flex gap-2 px-4 py-2 rounded-lg transition font-bold shadow-sm text-sm border bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100"
      : "flex-1 lg:flex-none items-center justify-center flex gap-2 px-4 py-2 rounded-lg transition font-bold shadow-sm text-sm border bg-white text-slate-700 border-slate-300 hover:bg-slate-50";
    $("toggleEditButton").querySelector("span").textContent = state.isEditMode ? dict.btnEditOff : dict.btnEditOn;
    const selected = state.detections.find((det) => det.id === state.selectedId);
    $("selectedSegmentMsg").textContent = selected ? `${dict.editBannerSelected}: ${selected.startSec.toFixed(3)}-${selected.endSec.toFixed(3)} s` : dict.editBannerNone;
  }

  function selectEvent(id) {
    state.selectedId = id;
    updateEditUi();
    renderResults();
    renderMinuteEditor();
  }

  function clearSelection(rerender = true) {
    state.selectedId = null;
    updateEditUi();
    if (rerender) {
      renderResults();
      renderMinuteEditor();
    }
  }

  function handleEditKeydown(event) {
    if (!state.isEditMode || !state.selectedId) return;
    if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;
    if (event.key === "1") updateLabel(state.selectedId, "Telmatobius");
    if (event.key === "Backspace" || event.key === "Delete") deleteEvent(state.selectedId);
  }

  function updateLabel(id, label) {
    state.detections = state.detections.map((det) => det.id === id ? { ...det, label } : det);
    renderResults();
    renderMinuteEditor();
  }

  function deleteEvent(id) {
    state.detections = state.detections.filter((det) => det.id !== id);
    state.selectedId = null;
    renderResults();
    renderMinuteEditor();
  }

  function removeAudio(audioId) {
    const audio = state.files.find((item) => item.id === audioId);
    if (!audio) return;
    const selected = state.detections.find((det) => det.id === state.selectedId);
    if (selected && selected.audioId === audioId) state.selectedId = null;
    state.detections = state.detections.filter((det) => det.audioId !== audioId);
    state.fileRows = state.fileRows.filter((row) => row.audioId !== audioId);
    state.decoded.delete(audioId);
    state.files = state.files.filter((item) => item.id !== audioId);
    URL.revokeObjectURL(audio.url);
    renderQueue();
    renderResults();
    renderMinuteEditor();
  }

  function playEvent(id) {
    const det = state.detections.find((item) => item.id === id);
    if (!det) return;
    playRange(det.fileUrl, det.startSec, det.endSec, {
      audioId: det.audioId,
      segmentIndex: det.segmentIndex
    });
  }

  function playAudio(audioId) {
    const audio = state.files.find((item) => item.id === audioId);
    if (!audio) return;
    playRange(audio.url, 0, null, { audioId: audio.id, segmentIndex: null });
  }

  function playMinute(group) {
    playRange(group.audio.url, group.segmentStart, group.segmentEnd, {
      audioId: group.audio.id,
      segmentIndex: group.segmentIndex
    });
  }

  function playSelectedInGroup(group) {
    const det = group.events.find((item) => item.id === state.selectedId);
    if (det) playEvent(det.id);
  }

  function playRange(url, startSec, endSec, metadata = {}) {
    stopPlayback();
    const audio = new Audio(url);
    audio.preload = "auto";
    audio.controls = false;
    state.activeAudio = audio;
    state.playback = {
      audioId: metadata.audioId || null,
      segmentIndex: Number.isInteger(metadata.segmentIndex) ? metadata.segmentIndex : null,
      startSec: Number.isFinite(startSec) ? startSec : 0,
      endSec: Number.isFinite(endSec) ? endSec : null,
      dragging: false
    };

    const startPlayback = () => {
      const safeStart = Math.max(0, startSec || 0);
      try {
        audio.currentTime = safeStart;
      } catch {
        audio.addEventListener("canplay", () => {
          try { audio.currentTime = safeStart; } catch { /* browser-specific seek guard */ }
        }, { once: true });
      }
      const promise = audio.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch((error) => {
          console.warn("Audio playback was blocked or failed:", error);
        });
      }
      startPlaybackAnimation();
    };

    if (Number.isFinite(endSec)) {
      const stopAtEnd = () => {
        if (audio.currentTime >= endSec) stopPlayback();
      };
      audio.addEventListener("timeupdate", stopAtEnd);
      state.playTimer = setTimeout(stopPlayback, Math.max(500, (endSec - startSec + 0.25) * 1000));
    }

    audio.addEventListener("ended", stopPlayback, { once: true });
    if (audio.readyState >= 1) startPlayback();
    else audio.addEventListener("loadedmetadata", startPlayback, { once: true });
    audio.load();
  }

  function startPlaybackAnimation() {
    stopPlaybackAnimation();
    const tick = (timestamp) => {
      if (!state.activeAudio || !state.playback) {
        state.playbackFrame = null;
        return;
      }
      if (timestamp - state.playbackLastDraw > 80 || state.playback.dragging) {
        state.playbackLastDraw = timestamp;
        redrawVisibleEditorCanvases();
      }
      state.playbackFrame = requestAnimationFrame(tick);
    };
    state.playbackFrame = requestAnimationFrame(tick);
  }

  function stopPlaybackAnimation() {
    if (state.playbackFrame) {
      cancelAnimationFrame(state.playbackFrame);
      state.playbackFrame = null;
    }
  }

  function redrawVisibleEditorCanvases() {
    const groups = buildMinuteGroups();
    document.querySelectorAll("canvas[data-group-index]").forEach((canvas) => {
      const group = groups[Number(canvas.dataset.groupIndex)];
      if (group) drawEditorCanvas(canvas, group);
    });
  }

  function playbackMatchesGroup(group) {
    if (!state.playback || !group) return false;
    if (state.playback.audioId !== group.audio.id) return false;
    if (Number.isInteger(state.playback.segmentIndex)) {
      return state.playback.segmentIndex === group.segmentIndex;
    }
    const current = state.activeAudio ? state.activeAudio.currentTime : 0;
    return current >= group.segmentStart && current <= group.segmentEnd;
  }

  function stopPlayback() {
    if (state.activeAudio) {
      state.activeAudio.pause();
      state.activeAudio = null;
    }
    state.playback = null;
    stopPlaybackAnimation();
    if (state.playTimer) {
      clearTimeout(state.playTimer);
      state.playTimer = null;
    }
    redrawVisibleEditorCanvases();
  }

  function exportCSV() {
    if (!state.detections.length) return;
    const rows = [
      ["filename", "segment_index", "segment_start_sec", "start_sec", "end_sec", "duration_sec", "peak_probability", "label"],
      ...state.detections.map((det) => [
        det.filename,
        det.segmentIndex,
        det.segmentStartSec.toFixed(3),
        det.startSec.toFixed(3),
        det.endSec.toFixed(3),
        (det.endSec - det.startSec).toFixed(3),
        det.peakProbability.toFixed(6),
        det.label
      ])
    ];
    const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "telmatofinder_detections_postedited.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  function clearAll() {
    stopPlayback();
    state.files.forEach((audio) => URL.revokeObjectURL(audio.url));
    state.files = [];
    state.decoded.clear();
    state.detections = [];
    state.fileRows = [];
    state.selectedId = null;
    $("audioInput").value = "";
    $("progressWrap").classList.add("hidden");
    setProgress(0);
    renderQueue();
    renderResults();
    renderMinuteEditor();
  }

  function standardise(values) {
    let sum = 0;
    for (const value of values) sum += value;
    const mean = sum / values.length;
    let variance = 0;
    for (const value of values) variance += (value - mean) ** 2;
    const std = Math.sqrt(variance / values.length) || 1;
    for (let i = 0; i < values.length; i += 1) values[i] = (values[i] - mean) / std;
  }

  function normaliseOutput(raw, frames) {
    const values = raw.length === frames ? raw : resampleSeries(raw, frames);
    const min = Math.min(...values);
    const max = Math.max(...values);
    return values.map((value) => min >= 0 && max <= 1 ? value : 1 / (1 + Math.exp(-value)));
  }

  function smooth(values, radius) {
    const out = new Array(values.length);
    for (let i = 0; i < values.length; i += 1) {
      let sum = 0;
      let count = 0;
      for (let j = Math.max(0, i - radius); j <= Math.min(values.length - 1, i + radius); j += 1) {
        sum += values[j];
        count += 1;
      }
      out[i] = sum / count;
    }
    return out;
  }

  function resampleSeries(values, targetLength) {
    if (!values.length) return new Array(targetLength).fill(0);
    const out = new Array(targetLength);
    const scale = (values.length - 1) / Math.max(1, targetLength - 1);
    for (let i = 0; i < targetLength; i += 1) {
      const p = i * scale;
      const left = Math.floor(p);
      const right = Math.min(values.length - 1, left + 1);
      const w = p - left;
      out[i] = values[left] * (1 - w) + values[right] * w;
    }
    return out;
  }

  function percentile(sortedValues, p) {
    if (!sortedValues.length) return 0;
    const idx = clamp((sortedValues.length - 1) * p, 0, sortedValues.length - 1);
    const left = Math.floor(idx);
    const right = Math.min(sortedValues.length - 1, left + 1);
    const weight = idx - left;
    return sortedValues[left] * (1 - weight) + sortedValues[right] * weight;
  }

  function waveformRobustPeak(samples) {
    const step = Math.max(1, Math.floor(samples.length / 4000));
    const values = [];
    for (let i = 0; i < samples.length; i += step) values.push(Math.abs(samples[i] || 0));
    values.sort((a, b) => a - b);
    return Math.max(percentile(values, 0.999), 0.006);
  }

  function smoothSpectrogram(matrix, timeRadius, freqRadius) {
    if (!matrix.length) return matrix;
    const columns = matrix.length;
    const bins = matrix[0].length;
    const temp = Array.from({ length: columns }, () => new Array(bins).fill(0));
    const out = Array.from({ length: columns }, () => new Array(bins).fill(0));

    for (let x = 0; x < columns; x += 1) {
      for (let y = 0; y < bins; y += 1) {
        let sum = 0;
        let weightSum = 0;
        for (let dx = -timeRadius; dx <= timeRadius; dx += 1) {
          const xx = clamp(x + dx, 0, columns - 1);
          const weight = timeRadius + 1 - Math.abs(dx);
          sum += matrix[xx][y] * weight;
          weightSum += weight;
        }
        temp[x][y] = sum / weightSum;
      }
    }

    for (let x = 0; x < columns; x += 1) {
      for (let y = 0; y < bins; y += 1) {
        let sum = 0;
        let weightSum = 0;
        for (let dy = -freqRadius; dy <= freqRadius; dy += 1) {
          const yy = clamp(y + dy, 0, bins - 1);
          const weight = freqRadius + 1 - Math.abs(dy);
          sum += temp[x][yy] * weight;
          weightSum += weight;
        }
        out[x][y] = sum / weightSum;
      }
    }

    return out;
  }

  function interpolate(a, b, t) {
    return (a || 0) * (1 - t) + (b || 0) * t;
  }

  function smoothStep(value) {
    const v = clamp(value, 0, 1);
    return v * v * (3 - 2 * v);
  }

  function spectrogramColor(value) {
    const v = clamp(value, 0, 1);
    const stops = [
      [0.00, 0, 0, 0],
      [0.14, 0, 12, 28],
      [0.30, 0, 49, 72],
      [0.48, 0, 111, 96],
      [0.66, 21, 170, 64],
      [0.84, 135, 218, 28],
      [1.00, 245, 255, 118]
    ];
    for (let i = 0; i < stops.length - 1; i += 1) {
      const a = stops[i];
      const b = stops[i + 1];
      if (v >= a[0] && v <= b[0]) {
        const t = (v - a[0]) / Math.max(0.0001, b[0] - a[0]);
        return [
          Math.round(a[1] * (1 - t) + b[1] * t),
          Math.round(a[2] * (1 - t) + b[2] * t),
          Math.round(a[3] * (1 - t) + b[3] * t)
        ];
      }
    }
    return [250, 250, 210];
  }

  function inferno(value) {
    const v = Math.max(0, Math.min(1, value));
    const r = Math.round(12 + 240 * Math.min(1, v * 1.45));
    const g = Math.round(8 + 220 * Math.max(0, v - 0.22) / 0.78);
    const b = Math.round(40 + 130 * Math.max(0, 0.55 - v) / 0.55);
    return [r, g, b];
  }

  function labelFill(label) {
    return "rgba(251, 191, 36, 0.24)";
  }

  function labelStroke(label) {
    return "#facc15";
  }

  function labelClass(label) {
    return "label-telmatobius";
  }

  function localLabel(label) {
    const dict = translations[state.lang];
    return dict.labelTelma;
  }

  function timeToX(sec, segmentStart, box) {
    return box.x + ((sec - segmentStart) / SEGMENT_SECONDS) * box.w;
  }

  function groupKey(group) {
    return `${group.audio.id}:${group.segmentIndex}`;
  }

  function statusClass(status) {
    if (status === "Completado") return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (status === "Error") return "bg-rose-50 text-rose-700 border-rose-200";
    if (status === "Analizando...") return "bg-amber-50 text-amber-700 border-amber-200";
    return "bg-slate-100 text-slate-600 border-slate-200";
  }

  function setProgress(value) {
    $("progressBar").style.width = `${value}%`;
  }

  function extension(name) {
    return (name.split(".").pop() || "AUD").substring(0, 3).toUpperCase();
  }

  function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    const units = ["KB", "MB", "GB"];
    let value = bytes / 1024;
    let unit = 0;
    while (value >= 1024 && unit < units.length - 1) {
      value /= 1024;
      unit += 1;
    }
    return `${value.toFixed(value >= 10 ? 1 : 2)} ${units[unit]}`;
  }

  function csvCell(value) {
    const text = String(value ?? "");
    return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
  }

  function maxValue(values) {
    let max = 0;
    for (const value of values) max = Math.max(max, value);
    return max;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function randomId() {
    return Math.random().toString(36).slice(2, 11);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function debounce(fn, delay) {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  function nextFrame() {
    return new Promise((resolve) => requestAnimationFrame(resolve));
  }

  function renderIcons() {
    if (window.lucide) window.lucide.createIcons();
  }
}());
