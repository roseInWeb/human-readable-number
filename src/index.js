module.exports = function toReadable (num) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 
               'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let arr = `${num}`.split('');
  if (num < 100) {
    if (num < 20) {
      return units[num];
    } else if (num >= 20) {
      if (num % 10 === 0) {
        return dozens[num / 10 - 2];
      } else {
        return `${dozens[Math.trunc(num / 10) - 2]} ${units[arr[1]]}`;
      }
    }
  } else if (num > 99 && num < 1000) {
    if (num % 100 === 0) {
      return `${units[num / 100]} hundred`;
    } else if (+(arr[1] + arr[2]) < 20) {
      return `${units[Math.trunc(num / 100)]} hundred ${units[+(arr[1] + arr[2])]}`;
    } else if (num % 10 === 0) {
      return `${units[Math.trunc(num / 100)]} hundred ${dozens[+(arr[1]) - 2]}`;
    } else {
      return `${units[Math.trunc(num / 100)]} hundred ${dozens[+(arr[1]) - 2]} ${units[arr[2]]}`;
    }
  }
}
