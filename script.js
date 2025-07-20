function updateData() {
    $.ajax({
      url: 'get_data.php',
      method: 'GET',
      success: function(response) {
        const data = JSON.parse(response);
        $('#suhu').text(data.suhu + ' °C');
        $('#status_suhu').text(data.status_suhu);
        $('#kelembaban').text(data.kelembaban + ' %');
        $('#status_kelembaban').text(data.status_kelembaban);
        $('#cahaya').text(data.cahaya + ' %');
        $('#status_cahaya').text(data.status_cahaya);
        $('#status_pintu').text(data.status_pintu);
        $('#update_time').text(data.waktu);
      }
    });
  }
  
  setInterval(updateData, 1000);
  