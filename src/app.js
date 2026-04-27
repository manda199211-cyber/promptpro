
let PROMPT_DATA = {};
let NEGATIVE_DATA = {};
let currentMode = 'positive';
let currentLang = 'en';
let selectedCategory = null;
let positivePrompts = [];
let negativePrompts = [];
function getCurrentData() {
  return currentMode === 'positive' ? PROMPT_DATA : NEGATIVE_DATA;
}
function getSelected() {
  return currentMode === 'positive' ? positivePrompts : negativePrompts;
}
async function init() {
  try {
    const result = await window.electronAPI.loadPromptData();
    if (result.success) {
      PROMPT_DATA = result.positive;
      NEGATIVE_DATA = result.negative;
      renderCategories();
      updateStats();
      updateAllPreviews();
      console.log('✅ 数据加载成功');
    } else {
      console.error('数据加载失败:', result.error);
      document.getElementById('promptList').innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">⚠️</div>
          <p>数据加载失败</p>
          <span>${result.error}</span>
        </div>
      `;
    }
  } catch (err) {
    console.error('初始化错误:', err);
  }
}
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.getElementById('langBadge').textContent = lang === 'en' ? 'EN' : '中文';
  updateAllPreviews();
}
function switchMode(mode) {
  currentMode = mode;
  selectedCategory = null;
  const appContainer = document.querySelector('.app-container');
  const draftPage = document.getElementById('draftPage');
  if (mode === 'draft') {
    appContainer.style.display = 'none';
    draftPage.style.display = 'grid';
    renderDraftGroups();
    return;
  } else {
    appContainer.style.display = '';
    draftPage.style.display = 'none';
  }
  document.querySelectorAll('.mode-tab').forEach(tab => {
    const isActive = tab.getAttribute('data-mode') === mode;
    tab.classList.toggle('active', isActive);
    tab.classList.toggle('negative-active', isActive && mode === 'negative');
  });
  document.body.classList.toggle('negative-mode', mode === 'negative');
  document.getElementById('catLabel').innerHTML = `
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/></svg>
    ${mode === 'positive' ? '正向类别' : '反向类别'}
  `;
  document.getElementById('searchInput').value = '';
  renderCategories();
  document.getElementById('promptList').innerHTML = `
    <div class="empty-state">
      <div class="empty-icon">${mode === 'positive' ? '🎯' : '🚫'}</div>
      <p>选择左侧类别开始</p>
      <span>${mode === 'positive' ? '正向提示词' : '反向提示词'}等你探索</span>
    </div>
  `;
  document.getElementById('promptTitle').innerHTML = `
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
    选择类别查看${mode === 'positive' ? '正向' : '反向'}提示词
  `;
}
function renderCategories(filter = '') {
  const list = document.getElementById('categoryList');
  list.innerHTML = '';
  const data = getCurrentData();
  const keys = Object.keys(data).sort();
  const lf = filter.toLowerCase();
  keys.forEach(key => {
    if (lf && !key.toLowerCase().includes(lf)) return;
    const count = data[key].length;
    const el = document.createElement('div');
    el.className = 'cat-item' + (key === selectedCategory ? ' active' : '');
    el.setAttribute('data-key', key);
    el.innerHTML = `<span class="cat-name">${key}</span><span class="cat-count">${count}</span>`;
    el.onclick = () => selectCategory(key);
    list.appendChild(el);
  });
}
function filterCategories() {
  renderCategories(document.getElementById('searchInput').value);
}
function selectCategory(key) {
  selectedCategory = key;
  const data = getCurrentData();
  const selected = getSelected();
  document.querySelectorAll('.cat-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-key') === key);
  });
  const list = document.getElementById('promptList');
  list.innerHTML = '';
  const items = data[key];
  items.forEach((p, idx) => {
    const card = document.createElement('div');
    const isSel = selected.some(s => s.english === p.english);
    card.className = 'pmt-card' + (isSel ? ' selected' : '');
    card.style.animationDelay = (idx * 0.02) + 's';
    card.setAttribute('data-en', p.english);
    card.innerHTML = `
      <div class="pmt-name">
        <span class="check"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></span>
        ${p.name}
      </div>
      <div class="pmt-en">${p.english}</div>
      <div class="pmt-zh">${p.chinese}</div>
    `;
    card.onclick = () => togglePrompt(p, card);
    list.appendChild(card);
  });
  document.getElementById('promptTitle').innerHTML = `
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
    ${key} <span style="opacity:0.5;font-weight:400">(${items.length})</span>
  `;
}
function togglePrompt(prompt, card) {
  const selected = getSelected();
  const idx = selected.findIndex(s => s.english === prompt.english);
  if (idx >= 0) {
    selected.splice(idx, 1);
    card.classList.remove('selected');
  } else {
    selected.push({ ...prompt, category: selectedCategory });
    card.classList.add('selected');
  }
  updateAllPreviews();
}
function updateAllPreviews() {
  const posChipBox = document.getElementById('selectedChips');
  if (positivePrompts.length === 0) {
    posChipBox.innerHTML = '<div class="empty-chips"><span>点击提示词添加</span></div>';
  } else {
    posChipBox.innerHTML = '';
    positivePrompts.forEach((p, i) => {
      const chip = document.createElement('div');
      chip.className = 'chip';
      chip.innerHTML = `<span class="chip-cat">${shortCat(p.category)}</span>${p.name}<button class="chip-remove" onclick="removePositive(${i})">×</button>`;
      posChipBox.appendChild(chip);
    });
  }
  const negChipBox = document.getElementById('negSelectedChips');
  if (negativePrompts.length === 0) {
    negChipBox.innerHTML = '<div class="empty-chips"><span>切换到反向模式添加</span></div>';
  } else {
    negChipBox.innerHTML = '';
    negativePrompts.forEach((p, i) => {
      const chip = document.createElement('div');
      chip.className = 'chip';
      chip.innerHTML = `<span class="chip-cat">${shortCat(p.category)}</span>${p.name}<button class="chip-remove" onclick="removeNegative(${i})">×</button>`;
      negChipBox.appendChild(chip);
    });
  }
  document.getElementById('posCount').textContent = positivePrompts.length;
  document.getElementById('negCount').textContent = negativePrompts.length;
  const posText = currentLang === 'en' 
    ? (positivePrompts.length ? positivePrompts.map(p => p.english).join(',\n') : '等待选择正向提示词...')
    : (positivePrompts.length ? positivePrompts.map(p => p.chinese).join('，\n') : '等待选择正向提示词...');
  const negText = currentLang === 'en'
    ? (negativePrompts.length ? negativePrompts.map(p => p.english).join(',\n') : '等待选择反向提示词...')
    : (negativePrompts.length ? negativePrompts.map(p => p.chinese).join('，\n') : '等待选择反向提示词...');
  document.getElementById('englishPreview').textContent = posText;
  document.getElementById('negativePreview').textContent = negText;
}
function removePositive(idx) {
  positivePrompts.splice(idx, 1);
  updateAllPreviews();
  refreshCardStates();
}
function removeNegative(idx) {
  negativePrompts.splice(idx, 1);
  updateAllPreviews();
  refreshCardStates();
}
function refreshCardStates() {
  const selected = getSelected();
  document.querySelectorAll('.pmt-card').forEach(card => {
    const en = card.getAttribute('data-en');
    card.classList.toggle('selected', selected.some(s => s.english === en));
  });
}
async function doCopy(text) {
  try { await navigator.clipboard.writeText(text); }
  catch { if (window.electronAPI) { await window.electronAPI.copyToClipboard(text); } }
}
async function copyEnglish() {
  const text = currentLang === 'en'
    ? positivePrompts.map(p => p.english).join(', ')
    : positivePrompts.map(p => p.chinese).join('， ');
  if (!text) { showToast('请先选择正向提示词', false); return; }
  await doCopy(text);
  showToast(currentLang === 'en' ? 'Positive Prompt 已复制!' : '正向提示词已复制!');
}
async function copyNegative() {
  const text = currentLang === 'en'
    ? negativePrompts.map(p => p.english).join(', ')
    : negativePrompts.map(p => p.chinese).join('， ');
  if (!text) { showToast('请先选择反向提示词', false); return; }
  await doCopy(text);
  showToast(currentLang === 'en' ? 'Negative Prompt 已复制!' : '反向提示词已复制!');
}
async function copyAll() {
  const posText = currentLang === 'en'
    ? positivePrompts.map(p => p.english).join(', ')
    : positivePrompts.map(p => p.chinese).join('， ');
  const negText = currentLang === 'en'
    ? negativePrompts.map(p => p.english).join(', ')
    : negativePrompts.map(p => p.chinese).join('， ');
  if (!posText && !negText) { showToast('请先选择提示词', false); return; }
  let result = '';
  if (posText) result += (currentLang === 'en' ? 'Positive Prompt:\n' : '正向提示词：\n') + posText;
  if (posText && negText) result += '\n\n';
  if (negText) result += (currentLang === 'en' ? 'Negative Prompt:\n' : '反向提示词：\n') + negText;
  await doCopy(result);
  showToast(currentLang === 'en' ? 'All Prompts 已复制!' : '全部提示词已复制!');
}
function clearAll() {
  positivePrompts = [];
  negativePrompts = [];
  updateAllPreviews();
  refreshCardStates();
}
function toggleTheme() {
  document.body.classList.toggle('light');
  localStorage.setItem('mprompt-theme', document.body.classList.contains('light') ? 'light' : 'dark');
}
(function() {
  if (localStorage.getItem('mprompt-theme') === 'light') document.body.classList.add('light');
})();
function showToast(msg, success = true) {
  const toast = document.getElementById('toast');
  document.getElementById('toastText').textContent = msg;
  toast.style.background = success ? 'var(--success)' : 'var(--danger)';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}
function shortCat(cat) {
  if (!cat) return '';
  return cat.substring(0, 4);
}
function updateStats() {
  const posTotal = Object.values(PROMPT_DATA).reduce((s, arr) => s + arr.length, 0);
  const posCats = Object.keys(PROMPT_DATA).length;
  const negTotal = Object.values(NEGATIVE_DATA).reduce((s, arr) => s + arr.length, 0);
  const negCats = Object.keys(NEGATIVE_DATA).length;
  document.getElementById('statsFooter').innerHTML =
    `<strong>${posCats + negCats}</strong> 类别 · <strong>${posTotal + negTotal}</strong> 提示词`;
}
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'C') { e.preventDefault(); copyNegative(); }
  if (e.key === 'Escape') clearAll();
  if (e.key === 'Tab' && !e.shiftKey && !e.metaKey && !e.ctrlKey) {
    e.preventDefault();
    switchMode(currentMode === 'positive' ? 'negative' : 'positive');
  }
  if (e.key === 'l' && !e.metaKey && !e.ctrlKey) {
    setLang(currentLang === 'en' ? 'zh' : 'en');
  }
});
init();
const DRAFT_KEY = 'mprompt-drafts';
let draftData = [];
let selectedDraftGroup = null;
function loadDrafts() {
  try {
    draftData = JSON.parse(localStorage.getItem(DRAFT_KEY)) || [];
  } catch { draftData = []; }
  return draftData;
}
function saveDrafts() {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(draftData));
}
function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
function renderDraftGroups() {
  loadDrafts();
  const container = document.getElementById('draftGroups');
  container.innerHTML = '';
  if (draftData.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding:20px;">
        <div class="empty-icon">📝</div>
        <p style="font-size:12px;">还没有草稿分组</p>
        <span style="font-size:11px;">点击上方"新建分组"开始</span>
      </div>
    `;
  } else {
    draftData.forEach(group => {
      const el = document.createElement('div');
      el.className = 'draft-group-item' + (group.id === selectedDraftGroup ? ' active' : '');
      el.innerHTML = `
        <div class="draft-group-name">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M14 14V4.5L9.5 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14H3V2h6.5v1z"/></svg>
          ${escapeHtml(group.name)}
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <span class="draft-group-count">${group.prompts.length}</span>
          <div class="draft-group-actions">
            <button class="draft-group-btn" onclick="event.stopPropagation();renameDraftGroup('${group.id}')" title="重命名">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5z"/></svg>
            </button>
            <button class="draft-group-btn delete" onclick="event.stopPropagation();deleteDraftGroup('${group.id}')" title="删除">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H5.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1h2.5a1 1 0 0 1 1 1v1z"/></svg>
            </button>
          </div>
        </div>
      `;
      el.onclick = () => selectDraftGroup(group.id);
      container.appendChild(el);
    });
  }
  const totalPrompts = draftData.reduce((s, g) => s + g.prompts.length, 0);
  document.getElementById('draftStats').innerHTML =
    `<strong>${draftData.length}</strong> 分组 · <strong>${totalPrompts}</strong> 条提示词`;
  if (selectedDraftGroup) {
    const group = draftData.find(g => g.id === selectedDraftGroup);
    if (!group) {
      selectedDraftGroup = null;
      document.getElementById('addPromptBtn').style.display = 'none';
    }
  }
}
function addDraftGroup() {
  showDraftModal('新建分组', '分组名称', '我的提示词', (name) => {
    if (!name || !name.trim()) return;
    loadDrafts();
    const group = { id: genId(), name: name.trim(), prompts: [] };
    draftData.push(group);
    saveDrafts();
    selectedDraftGroup = group.id;
    renderDraftGroups();
    selectDraftGroup(group.id);
  });
}
function renameDraftGroup(id) {
  loadDrafts();
  const group = draftData.find(g => g.id === id);
  if (!group) return;
  showDraftModal('重命名分组', '分组名称', group.name, (name) => {
    if (!name || !name.trim()) return;
    group.name = name.trim();
    saveDrafts();
    renderDraftGroups();
    if (selectedDraftGroup === id) {
      document.getElementById('draftGroupTitle').innerHTML = `
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M14.854 2.854a.5.5 0 0 0-.708-.708l-10 10a.5.5 0 0 0 .708.708l10-10z"/></svg>
        ${escapeHtml(group.name)} <span style="opacity:0.5;font-weight:400">(${group.prompts.length})</span>
      `;
    }
  });
}
function deleteDraftGroup(id) {
  loadDrafts();
  const group = draftData.find(g => g.id === id);
  if (!group) return;
  showDraftConfirm(`确定删除分组「${group.name}」？`, `共 ${group.prompts.length} 条提示词将被删除。`, () => {
    draftData = draftData.filter(g => g.id !== id);
    saveDrafts();
    if (selectedDraftGroup === id) {
      selectedDraftGroup = null;
      document.getElementById('addPromptBtn').style.display = 'none';
      document.getElementById('draftPromptList').innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📝</div>
          <p>选择分组查看</p>
        </div>
      `;
      document.getElementById('draftGroupTitle').innerHTML = `
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M14.854 2.854a.5.5 0 0 0-.708-.708l-10 10a.5.5 0 0 0 .708.708l10-10z"/></svg>
        选择分组查看
      `;
      updateDraftPreview();
    }
    renderDraftGroups();
  });
}
function selectDraftGroup(id) {
  selectedDraftGroup = id;
  loadDrafts();
  const group = draftData.find(g => g.id === id);
  if (!group) return;
  document.querySelectorAll('.draft-group-item').forEach(el => {
    el.classList.toggle('active', el.onclick.toString().includes(id));
  });
  renderDraftGroups();
  document.getElementById('addPromptBtn').style.display = 'flex';
  document.getElementById('draftGroupTitle').innerHTML = `
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M14.854 2.854a.5.5 0 0 0-.708-.708l-10 10a.5.5 0 0 0 .708.708l10-10z"/></svg>
    ${escapeHtml(group.name)} <span style="opacity:0.5;font-weight:400">(${group.prompts.length})</span>
  `;
  renderDraftPrompts(group);
  updateDraftPreview();
}
function renderDraftPrompts(group) {
  const list = document.getElementById('draftPromptList');
  list.innerHTML = '';
  if (group.prompts.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">✏️</div>
        <p>还没有提示词</p>
        <span>点击"添加提示词"开始编辑</span>
      </div>
    `;
    return;
  }
  group.prompts.forEach((prompt, idx) => {
    const card = document.createElement('div');
    card.className = 'draft-prompt-card';
    card.innerHTML = `
      <div class="draft-prompt-header">
        <input class="draft-prompt-title" value="${escapeAttr(prompt.title)}" 
               onchange="updateDraftPromptTitle('${group.id}', ${idx}, this.value)"
               placeholder="标题" />
        <div class="draft-prompt-actions">
          <button class="draft-prompt-btn" onclick="duplicateDraftPrompt('${group.id}', ${idx})" title="复制">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3z"/></svg>
          </button>
          <button class="draft-prompt-btn" onclick="moveDraftPrompt('${group.id}', ${idx}, -1)" title="上移" ${idx === 0 ? 'disabled' : ''}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg>
          </button>
          <button class="draft-prompt-btn" onclick="moveDraftPrompt('${group.id}', ${idx}, 1)" title="下移" ${idx === group.prompts.length - 1 ? 'disabled' : ''}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>
          </button>
          <button class="draft-prompt-btn delete" onclick="deleteDraftPrompt('${group.id}', ${idx})" title="删除">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H5.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1h2.5a1 1 0 0 1 1 1v1z"/></svg>
          </button>
        </div>
      </div>
      <textarea class="draft-prompt-content" 
                placeholder="输入提示词内容..."
                onchange="updateDraftPromptContent('${group.id}', ${idx}, this.value)"
      >${escapeHtml(prompt.content)}</textarea>
    `;
    list.appendChild(card);
  });
}
function addDraftPrompt() {
  if (!selectedDraftGroup) return;
  loadDrafts();
  const group = draftData.find(g => g.id === selectedDraftGroup);
  if (!group) return;
  group.prompts.push({ title: '提示词 ' + (group.prompts.length + 1), content: '' });
  saveDrafts();
  renderDraftPrompts(group);
  renderDraftGroups();
  updateDraftPreview();
  const list = document.getElementById('draftPromptList');
  list.scrollTop = list.scrollHeight;
  const lastTitle = list.querySelector('.draft-prompt-card:last-child .draft-prompt-title');
  if (lastTitle) lastTitle.focus();
}
function updateDraftPromptTitle(groupId, idx, value) {
  loadDrafts();
  const group = draftData.find(g => g.id === groupId);
  if (!group || !group.prompts[idx]) return;
  group.prompts[idx].title = value;
  saveDrafts();
  updateDraftPreview();
}
function updateDraftPromptContent(groupId, idx, value) {
  loadDrafts();
  const group = draftData.find(g => g.id === groupId);
  if (!group || !group.prompts[idx]) return;
  group.prompts[idx].content = value;
  saveDrafts();
  updateDraftPreview();
}
function duplicateDraftPrompt(groupId, idx) {
  loadDrafts();
  const group = draftData.find(g => g.id === groupId);
  if (!group || !group.prompts[idx]) return;
  const orig = group.prompts[idx];
  const copy = { title: orig.title + ' (副本)', content: orig.content };
  group.prompts.splice(idx + 1, 0, copy);
  saveDrafts();
  renderDraftPrompts(group);
  renderDraftGroups();
  updateDraftPreview();
}
function moveDraftPrompt(groupId, idx, dir) {
  loadDrafts();
  const group = draftData.find(g => g.id === groupId);
  if (!group) return;
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= group.prompts.length) return;
  [group.prompts[idx], group.prompts[newIdx]] = [group.prompts[newIdx], group.prompts[idx]];
  saveDrafts();
  renderDraftPrompts(group);
  updateDraftPreview();
}
function deleteDraftPrompt(groupId, idx) {
  loadDrafts();
  const group = draftData.find(g => g.id === groupId);
  if (!group) return;
  group.prompts.splice(idx, 1);
  saveDrafts();
  renderDraftPrompts(group);
  renderDraftGroups();
  updateDraftPreview();
}
function updateDraftPreview() {
  loadDrafts();
  const currentGroup = draftData.find(g => g.id === selectedDraftGroup);
  const currentText = currentGroup ? currentGroup.prompts
    .map(p => p.content)
    .filter(c => c.trim())
    .join('\n\n') : '';
  document.getElementById('draftPreviewText').textContent = currentText || '暂无内容...';
  const allText = draftData
    .map(g => {
      const contents = g.prompts.map(p => p.content).filter(c => c.trim());
      return contents.length ? `[${g.name}]\n${contents.join('\n\n')}` : '';
    })
    .filter(t => t)
    .join('\n\n---\n\n');
  document.getElementById('draftAllPreviewText').textContent = allText || '暂无内容...';
}
async function copyDraft() {
  const currentGroup = draftData.find(g => g.id === selectedDraftGroup);
  if (!currentGroup) { showToast('请先选择分组', false); return; }
  const text = currentGroup.prompts.map(p => p.content).filter(c => c.trim()).join(', ');
  if (!text) { showToast('当前分组没有内容', false); return; }
  await doCopy(text);
  showToast('草稿已复制!');
}
async function copyAllDrafts() {
  loadDrafts();
  const text = draftData
    .map(g => g.prompts.map(p => p.content).filter(c => c.trim()).join(', '))
    .filter(t => t)
    .join(', ');
  if (!text) { showToast('没有草稿内容', false); return; }
  await doCopy(text);
  showToast('全部草稿已复制!');
}
function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escapeAttr(str) {
  return str.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function showDraftModal(title, label, defaultValue, onConfirm) {
  const modal = document.createElement('div');
  modal.className = 'draft-modal-overlay';
  modal.innerHTML = `
    <div class="draft-modal">
      <div class="draft-modal-header">
        <h3>${title}</h3>
        <button class="draft-modal-close" onclick="closeDraftModal()">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
        </button>
      </div>
      <div class="draft-modal-body">
        <label>${label}</label>
        <input type="text" id="draftModalInput" value="${escapeAttr(defaultValue)}" placeholder="请输入..." />
      </div>
      <div class="draft-modal-footer">
        <button class="btn btn-secondary" onclick="closeDraftModal()">取消</button>
        <button class="btn btn-primary" id="draftModalConfirm">确定</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  const input = document.getElementById('draftModalInput');
  input.focus();
  input.select();
  input.onkeydown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      confirmDraftModal();
    }
    if (e.key === 'Escape') {
      closeDraftModal();
    }
  };
  document.getElementById('draftModalConfirm').onclick = confirmDraftModal;
  function confirmDraftModal() {
    const value = input.value;
    closeDraftModal();
    onConfirm(value);
  }
}
function showDraftConfirm(title, message, onConfirm) {
  const modal = document.createElement('div');
  modal.className = 'draft-modal-overlay';
  modal.innerHTML = `
    <div class="draft-modal draft-modal-confirm">
      <div class="draft-modal-header">
        <h3>${title}</h3>
      </div>
      <div class="draft-modal-body">
        <p>${message}</p>
      </div>
      <div class="draft-modal-footer">
        <button class="btn btn-secondary" onclick="closeDraftModal()">取消</button>
        <button class="btn btn-danger" id="draftModalConfirm">删除</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('draftModalConfirm').onclick = () => {
    closeDraftModal();
    onConfirm();
  };
}
function closeDraftModal() {
  const modal = document.querySelector('.draft-modal-overlay');
  if (modal) modal.remove();
}