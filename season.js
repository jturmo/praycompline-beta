<script>
function show_hide_me () {
  var myDate = new Date();
  var year = myDate.getFullYear();
  var month = myDate.getMonth(); // 0 = January, 3 = April
  var date = myDate.getDate();

  // Easter and Lent season dates from 2025 to 2055
  var seasonDates = {
    2025: {easterStart: new Date(2025, 3, 20), easterEnd: new Date(2025, 5, 9), lentStart: new Date(2025, 2, 5), lentEnd: new Date(2025, 3, 19)}, 
    2026: {easterStart: new Date(2026, 3, 5), easterEnd: new Date(2026, 5, 24), lentStart: new Date(2026, 1, 18), lentEnd: new Date(2026, 4, 4)}, 
    2027: {easterStart: new Date(2027, 2, 28), easterEnd: new Date(2027, 4, 17), lentStart: new Date(2027, 1, 10), lentEnd: new Date(2027, 2, 27)}, 
    2028: {easterStart: new Date(2028, 3, 16), easterEnd: new Date(2028, 5, 4), lentStart: new Date(2028, 2, 1), lentEnd: new Date(2028, 3, 15)}, 
    2029: {easterStart: new Date(2029, 3, 1), easterEnd: new Date(2029, 5, 20), lentStart: new Date(2029, 1, 14), lentEnd: new Date(2029, 2, 31)}, 
    2030: {easterStart: new Date(2030, 3, 21), easterEnd: new Date(2030, 5, 9), lentStart: new Date(2030, 2, 6), lentEnd: new Date(2030, 3, 20)}, 
    2031: {easterStart: new Date(2031, 3, 13), easterEnd: new Date(2031, 5, 1), lentStart: new Date(2031, 1, 26), lentEnd: new Date(2031, 3, 12)}, 
    2032: {easterStart: new Date(2032, 2, 28), easterEnd: new Date(2032, 4, 16), lentStart: new Date(2032, 1, 11), lentEnd: new Date(2032, 2, 27)}, 
    2033: {easterStart: new Date(2033, 3, 17), easterEnd: new Date(2033, 5, 6), lentStart: new Date(2033, 2, 2), lentEnd: new Date(2033, 3, 16)}, 
    2034: {easterStart: new Date(2034, 3, 9), easterEnd: new Date(2034, 5, 28), lentStart: new Date(2034, 1, 21), lentEnd: new Date(2034, 3, 8)}, 
    2035: {easterStart: new Date(2035, 2, 25), easterEnd: new Date(2035, 4, 14), lentStart: new Date(2035, 1, 7), lentEnd: new Date(2035, 2, 24)}, 
    2036: {easterStart: new Date(2036, 3, 13), easterEnd: new Date(2036, 6, 1), lentStart: new Date(2036, 2, 27), lentEnd: new Date(2036, 3, 12)}, 
    2037: {easterStart: new Date(2037, 3, 5), easterEnd: new Date(2037, 5, 24), lentStart: new Date(2037, 1, 18), lentEnd: new Date(2037, 3, 4)}, 
    2038: {easterStart: new Date(2038, 3, 25), easterEnd: new Date(2038, 6, 13), lentStart: new Date(2038, 2, 10), lentEnd: new Date(2038, 3, 24)}, 
    2039: {easterStart: new Date(2039, 3, 10), easterEnd: new Date(2039, 5, 29), lentStart: new Date(2039, 1, 23), lentEnd: new Date(2039, 3, 9)}, 
    2040: {easterStart: new Date(2040, 3, 1), easterEnd: new Date(2040, 5, 20), lentStart: new Date(2040, 1, 14), lentEnd: new Date(2040, 3, 31)}, 
    2041: {easterStart: new Date(2041, 3, 21), easterEnd: new Date(2041, 6, 9), lentStart: new Date(2041, 2, 5), lentEnd: new Date(2041, 3, 20)}, 
    2042: {easterStart: new Date(2042, 3, 6), easterEnd: new Date(2042, 5, 25), lentStart: new Date(2042, 1, 18), lentEnd: new Date(2042, 3, 5)}, 
    2043: {easterStart: new Date(2043, 2, 29), easterEnd: new Date(2043, 5, 17), lentStart: new Date(2043, 1, 11), lentEnd: new Date(2043, 2, 28)}, 
    2044: {easterStart: new Date(2044, 3, 17), easterEnd: new Date(2044, 6, 5), lentStart: new Date(2044, 2, 1), lentEnd: new Date(2044, 3, 16)}, 
    2045: {easterStart: new Date(2045, 3, 9), easterEnd: new Date(2045, 5, 28), lentStart: new Date(2045, 1, 21), lentEnd: new Date(2045, 3, 8)}, 
    2046: {easterStart: new Date(2046, 2, 25), easterEnd: new Date(2046, 5, 14), lentStart: new Date(2046, 1, 7), lentEnd: new Date(2046, 2, 24)}, 
    2047: {easterStart: new Date(2047, 3, 14), easterEnd: new Date(2047, 6, 2), lentStart: new Date(2047, 1, 27), lentEnd: new Date(2047, 3, 13)}, 
    2048: {easterStart: new Date(2048, 3, 5), easterEnd: new Date(2048, 5, 24), lentStart: new Date(2048, 1, 16), lentEnd: new Date(2048, 3, 4)}, 
    2049: {easterStart: new Date(2049, 3, 18), easterEnd: new Date(2049, 6, 6), lentStart: new Date(2049, 2, 2), lentEnd: new Date(2049, 3, 17)}, 
    2050: {easterStart: new Date(2050, 3, 10), easterEnd: new Date(2050, 5, 29), lentStart: new Date(2050, 1, 23), lentEnd: new Date(2050, 3, 9)}, 
    2051: {easterStart: new Date(2051, 3, 2), easterEnd: new Date(2051, 5, 21), lentStart: new Date(2051, 1, 14), lentEnd: new Date(2051, 3, 1)}, 
    2052: {easterStart: new Date(2052, 3, 21), easterEnd: new Date(2052, 6, 9), lentStart: new Date(2052, 2, 6), lentEnd: new Date(2052, 3, 20)}, 
    2053: {easterStart: new Date(2053, 3, 6), easterEnd: new Date(2053, 5, 25), lentStart: new Date(2053, 1, 18), lentEnd: new Date(2053, 3, 5)}, 
    2054: {easterStart: new Date(2054, 2, 29), easterEnd: new Date(2054, 5, 17), lentStart: new Date(2054, 1, 11), lentEnd: new Date(2054, 2, 28)}, 
    2055: {easterStart: new Date(2055, 3, 18), easterEnd: new Date(2055, 6, 6), lentStart: new Date(2055, 2, 2), lentEnd: new Date(2055, 3, 17)}
  };
  
  var currentSeason = seasonDates[year];
  
  if (myDate >= currentSeason.lentStart && myDate <= currentSeason.lentEnd) {
    // Show Lent elements
    $('.lent').show();
    $('.easter').hide();
  } else if (myDate >= currentSeason.easterStart && myDate <= currentSeason.easterEnd) {
    // Show Easter elements
    $('.easter').show();
    $('.lent').hide();
  } else {
    // Outside Lent and Easter
    $('.lent').hide();
    $('.easter').hide();
  }
}

show_hide_me();
</script>
