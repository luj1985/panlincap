$(function() {
  var $progress = $('#progress'),
      $img = $('#investee-img'),
      $imgfield = $('input[name="investee[logo]"]');

  $('#upload').fileupload({
    dataType : 'json',
    paramName : 'file',
    type : 'POST',
    done : function(e, data) {
      var result = data.result;
      $imgfield.val(result.link);
      $img.attr('src', result.link)
    },
    progressall: function (e, data) {
      var progress = parseInt(data.loaded / data.total * 100, 10);
      $progress.html(progress + "%");
      if (progress === 100) {
        $progress.html('');
      }
    }
  });
})