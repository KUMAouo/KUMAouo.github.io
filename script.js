let learnedWordsCount = 0;

function showSection(sectionId) {
    // 隱藏所有內容
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    // 顯示選定的內容
    document.getElementById(sectionId).classList.add('active');
}

function addVocabulary() {
    const vocabList = document.getElementById('vocabList');
    const newWord = document.createElement('div');
    newWord.textContent = '新單詞 ' + (learnedWordsCount + 1);
    vocabList.appendChild(newWord);
    learnedWordsCount++;
    document.getElementById('learnedWords').textContent = learnedWordsCount;
}

// 預設顯示詞彙模組
showSection('vocabulary');
