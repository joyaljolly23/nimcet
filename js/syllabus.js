const topics = {
  math: {
    title: 'Mathematics Topics',
    items: ['Set Theory & Relations','Functions & Graphs','Limits & Continuity',
      'Differentiation','Integration','Differential Equations','Matrices & Determinants',
      'Probability & Statistics','Linear Programming','Coordinate Geometry',
      'Trigonometry','Complex Numbers','Sequence & Series','Permutation & Combination','Number Theory']
  },
  cs: {
    title: 'Computer Science Topics',
    items: ['Data Structures','Algorithms & Complexity','Operating Systems','DBMS & SQL',
      'Computer Networks','Programming in C','OOP Concepts','Theory of Computation',
      'Software Engineering','Computer Organization','Boolean Algebra','Compiler Design','Web Technologies']
  },
  reasoning: {
    title: 'Analytical Ability Topics',
    items: ['Number Series','Letter Series','Coding-Decoding','Blood Relations',
      'Direction Sense','Seating Arrangement','Syllogism','Logical Deduction',
      'Data Sufficiency','Analogies']
  },
  english: {
    title: 'English Language Topics',
    items: ['Reading Comprehension','Vocabulary & Synonyms','Antonyms','Error Correction',
      'Sentence Completion','Para Jumbles','Idioms & Phrases','Grammar Rules']
  },
  gk: {
    title: 'General Knowledge Topics',
    items: ['Current Affairs','Indian History','Science & Tech','Geography',
      'Awards & Honours','Sports','Books & Authors']
  }
};

function showTopics(sub) {
  document.querySelectorAll('.sub-card').forEach(c => c.classList.remove('active'));
  event.currentTarget.classList.add('active');
  const panel = document.getElementById('topics-panel');
  document.getElementById('panel-title').textContent = topics[sub].title;
  document.getElementById('topics-list').innerHTML = topics[sub].items
    .map(i => `<div class="topic-item"><i class="ti ti-check"></i>${i}</div>`).join('');
  panel.classList.add('show');
}