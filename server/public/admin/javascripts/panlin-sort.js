$(function() {

  $.panlinSort = function(selector, url) {
    var token = $('input[name="authenticity_token"]').val();

    $(selector).dataTable({
      bPaginate : false,
      bFilter : false,
      bInfo : false
    }).rowReordering({
      sURL : url,
      sRequestType: "POST",
      fnUpdateAjaxRequest : function(oAjaxRequest, properties, $dataTable) {
        var data = oAjaxRequest.data;
        var id = data.id.split('-')[1];
        data.id = id;
        data.authenticity_token = token;
      },
      fnAlert: function(message) { 
        alert(message);  
      }
    });
  };
});