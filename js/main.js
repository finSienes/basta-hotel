

$(document).ready(function() {
    $('#startDate, #endDate').datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      todayHighlight: true
    });

    $('#startDate').on('changeDate', function(selected) {
      var startDate = new Date(selected.date.valueOf());
      $('#endDate').datepicker('setStartDate', startDate);
      if ($('#endDate').val() === '') {
        $('#endDate').datepicker('setDate', startDate);
      }
    });

    $('#endDate').on('changeDate', function(selected) {
      var endDate = new Date(selected.date.valueOf());
      $('#startDate').datepicker('setEndDate', endDate);
    });

    $('#searchBtn').click(function() {
      var dateRange = $('#dateRange').val();
      var bedCount = $('#bedCount').val();
      alert("Searching for " + bedCount + " beds from " + dateRange);
    });
  });