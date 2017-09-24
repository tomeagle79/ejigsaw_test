
$('header').sticky();

$('header').on('sticky-start', function () {
  $(this).css({
    fontSize:  '2rem',
    background: '#ffa949',
    marginTop: '0',
    borderBottom: '3px solid black'
  });
});

$('header').on('sticky-end', function () {
  $(this).css({
    fontSize:  '5.625rem',
    background: 'transparent',
    border: 'none'
  });
});

console.log("I am the new main.js file!")
