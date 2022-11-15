const digits = {
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

function getMinutesWord(minutes) {
  let minutesWord = digits[minutes];

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
    return `${digits[hour]} o\'clock`;
  }

  if (minutes <= 30) {
    words = `${getMinutesWord(minutes)} past ${digits[hour]}`;
    return words
  }


  let missingMinutes = 60 - minutes;
  if (missingMinutes == 15 || missingMinutes == 30) {
    missingMinutes = missingMinutes == 15 ? 'quarter' : 'half';
  }
  const finalMinutes = typeof missingMinutes === 'string' ? missingMinutes : digits[missingMinutes];

  const nextHour = hour + 1;
  words = `${finalMinutes} to ${digits[nextHour]}`;

  return words;
}

module.exports = { convertTimeToWords };