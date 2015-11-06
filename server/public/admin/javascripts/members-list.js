$(function() {
  var token = $('input[name="authenticity_token"]').val();

  $('#list').dataTable({
    bPaginate : false,
    bFilter : false,
    bInfo : false
  }).rowReordering({
    sURL:"members/reorder",
    sRequestType: "POST",
    fnUpdateAjaxRequest : function(oAjaxRequest, properties, $dataTable) {
      var data = oAjaxRequest.data;
      var id = data.id.split('-')[1];
      data.id = id;
      data.authenticity_token = token;
      console.log(data);
    },
    fnAlert: function(message) { 
      alert(message);  
    }
  });
});