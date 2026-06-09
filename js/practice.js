const questions = [
  { cat:'math', q:'If f(x) = x² - 3x + 2, what is f(0) + f(1) + f(2)?', opts:['3','2','1','0'], ans:0 },
  { cat:'cs', q:'What is the time complexity of binary search on a sorted array of n elements?', opts:['O(n)','O(log n)','O(n log n)','O(1)'], ans:1 },
  { cat:'reasoning', q:'If A=1, B=2, Z=26, what does CAB equal?', opts:['312','123','321','213'], ans:1 },
  { cat:'math', q:'The number of ways to arrange the letters of the word "NIMCET" is:', opts:['720','360','180','540'], ans:0 },
  { cat:'english', q:'Choose the synonym of "Ubiquitous":', opts:['Rare','Omnipresent','Hidden','Brief'], ans:1 },
  { cat:'cs', q:'In a stack, which operation removes an element?', opts:['Push','Pop','Peek','Insert'], ans:1 },
  { cat:'reasoning', q:'Find the next number: 2, 6, 12, 20, 30, ?', opts:['40','42','44','46'], ans:1 },
];

let curQ = 0, answered = false, filteredQs = [...questions];

function renderQ() {
  answered = false;
  const q = filteredQs[curQ];
  document.getElementById('mcq-area').innerHTML = `
    <div class="q-meta">
      <div class="q-num">${curQ + 1}</div>
      <div class="q-text">${q.q}</div>
    </div>
    <div class="options">
      ${q.opts.map((o, i) => `
        <div class="opt" id="opt-${i}" onclick="selectOpt(${i})">
          <div class="opt-letter">${String.fromCharCode(65 + i)}</div>${o}
        </div>`).join('')}
    </div>
    <p style="font-size:.8rem;color:#999;margin-top:.75rem">
      Question ${curQ + 1} of ${filteredQs.length} &bull;
      <span style="color:#0f9d9f;font-weight:600">${q.cat.toUpperCase()}</span>
    </p>`;
}

function selectOpt(i) {
  if (answered) return;
  answered = true;
  const ans = filteredQs[curQ].ans;
  document.querySelectorAll('.opt').forEach((o, idx) => {
    if (idx === ans) o.classList.add('correct');
    else if (idx === i && i !== ans) o.classList.add('wrong');
  });
}

function revealAnswer() {
  if (!answered) {
    answered = true;
    document.getElementById('opt-' + filteredQs[curQ].ans).classList.add('correct');
  }
}

function nextQ() { if (curQ < filteredQs.length - 1) { curQ++; renderQ(); } }
function prevQ() { if (curQ > 0) { curQ--; renderQ(); } }

function filterMCQ(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filteredQs = cat === 'all' ? [...questions] : questions.filter(q => q.cat === cat);
  curQ = 0;
  renderQ();
}

document.addEventListener('DOMContentLoaded', renderQ);