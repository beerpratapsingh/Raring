$(document).ready(function() {
  $('.star-rating label').on('click', function() {
    var getRatedValue = $(this).attr('title');
    var addRateClass = $(this).attr('title').replace(/\s/g,'').toLowerCase();
    //$("#ratingStatus").append(getRatedValue);
    //$("#ratingStatus").removeClass(addRateClass);
    $('#ratingStatus').removeAttr('class');
    if(getRatedValue === 'Outstanding'){
      $(this).parents('.star-rating').siblings('#ratingStatus').addClass('green');
    } else if(getRatedValue === 'Very Good'){
      $(this).parents('.star-rating').siblings('#ratingStatus').addClass('blue');
    } else if(getRatedValue === 'Good'){
      $(this).parents('.star-rating').siblings('#ratingStatus').addClass('skyblue');
    } else if(getRatedValue === 'Poor'){
      $(this).parents('.star-rating').siblings('#ratingStatus').addClass('orange');
    } else if(getRatedValue === 'Very Poor'){
      $(this).parents('.star-rating').siblings('#ratingStatus').addClass('red');
    }
    document.querySelector('#ratingStatus').innerHTML = getRatedValue;
  })
})