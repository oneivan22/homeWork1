const changeProposal = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      const { word, divisibility } = arr[i];
      let newWord = ''; 
      for (let j = 0; j < word.length; j++) {
        let isEven = (j + 1) % 2 === 0;
        if ((divisibility === 'чётный' && isEven) || (divisibility === 'нечётный' && !isEven)) {
          newWord += word[j].toUpperCase();
        } else {
          newWord += word[j].toLowerCase();
        }
      }
      result.push(newWord);
    }
  
    return result;
  };

  console.log(
    changeProposal([
      { word: 'чётный текст', divisibility: 'чётный' },
      { word: 'нечётный текст', divisibility: 'нечётный' },
      { word: 'этот текст тоже должен быть с каждым большим чётным символом', divisibility: 'чётный' },
      { word: 'а у этого текста должен быть каждый нечётный большой символ', divisibility: 'нечётный' },
    ])
  );
  