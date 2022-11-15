const digitsToWord = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  20:'twenty',
}

function getMinutesInWord(minutes) {
  let minutesWord = digitsToWord[minutes];

  if (minutes == 15 || minutes == 30) {
    minutesWord = minutes == 15 ? 'quarter' : 'half';
  }

  return minutesWord;
}


// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  let words = '';
  let [hour, minutes] = time.split(':');
  hour = Number(hour);
  minutes = Number(minutes);

  if (time === '0:00') {
    return 'midnight';
  }

  if (minutes === 0) {
    return `${digitsToWord[hour]} o\'clock`;
  }

  if (minutes <= 30) {
    words = `${getMinutesInWord(minutes)} past ${digitsToWord[hour]}`;
    return words
  }


  let missingMinutes = 60 - minutes;
  if (missingMinutes == 15 || missingMinutes == 30) {
    missingMinutes = missingMinutes == 15 ? 'quarter' : 'half';
  }
  const minutesInWord = typeof missingMinutes === 'string' ? missingMinutes : digitsToWord[missingMinutes];

  const nextHour = hour + 1;
  words = `${minutesInWord} to ${digitsToWord[nextHour]}`;

  return words;
}

module.exports = { convertTimeToWords };