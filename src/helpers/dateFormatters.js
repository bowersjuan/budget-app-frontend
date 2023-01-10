/**
 * formatDate - takes in a date string and uses the date constructor and new operator to return a date object version of the specified date so the month, date and year can be accessed easily and returned as a string
 * @param {string} date
 * @returns {string}
 */
function formatDate(date) {
  /**
   * formatOrdinalSuffix - takes in a number data type and returns the ordinal suffix correlating to it as a string. Can then be added to a human readable date or ordering string
   * @param {number} n
   * @returns {string} formatted oridinal suffix for that number
   */
  function formatOrdinalSuffix(n) {
    var s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }
  // Ref: https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number/13627586#13627586

  let dateObj = new Date(date + "T00:00");
  const dateArray = dateObj.toDateString().split(" ");
  return `${dateArray[1]} ${formatOrdinalSuffix(Number(dateArray[2]))}, ${
    dateArray[3]
  }`;
}

export { formatDate };
