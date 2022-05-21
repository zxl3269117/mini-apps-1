$(document).ready(() => {
  var $form = $('#form');

  // add event handler to form id="form"
  var handleFormSubmit = (event) => {
    event.preventDefault();

    // construct the form data to be sent
    var form = document.getElementById('form');
    var fd = new FormData(form);

    // ajax request with information in form
    $.ajax({
      url: '/convert',
      method: 'POST',
      contentType: false, // no text data is being sent, so set to false
      processData: false, // no text data is being sent, so set to false
      data: fd
    })
    .done((response) => {
      // clear the DIV that shows csv response
      var $csv = $('#csv');
      $csv.html('');
      // render the view by append the response to id="csv"
      console.log('response data', response);
      $csv.append(response);
    })
    .fail((err) => {
      console.log(err);
    });
  }

  // add event listener to form submit
  $form.on('submit', handleFormSubmit);

});