$(document).ready(() => {
  var $form = $('#form');
  var $csv = $('#csv');

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
      // clear the csv div
      $csv.html('');

      // construct the csv file link from response
      var csvContent = response.map(row => row.join(', ')).join('\n');
      var blob = new Blob([csvContent], {type: 'data:text/csv;charset=utf-8;'});
      var link = URL.createObjectURL(blob);

      // create and append the download element to the DOM
      var $downloadLink = $('<a>Converted File</a>');
      $downloadLink.attr('href', link);
      $downloadLink.attr('download', 'converted-csv-file.csv');
      $csv.append($downloadLink);
    })
    .fail((err) => {
      throw err;
    });
  }

  // add event listener to form submit
  $form.on('submit', handleFormSubmit);

});