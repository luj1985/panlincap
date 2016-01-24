$(function() {
  
  
  $.Editable.DEFAULTS.key = 'rH-9mcbfD-13rscB1vyz==';


  $('textarea[name="member[description]"]').editable({
    preloaderSrc: "/images/preloader.gif",
    inlineMode: false,
    language: "zh_cn",
    mediaManager: true,
    imageUploadURL: "/admin/images/upload",
    imageDeleteURL: "/admin/images/delete",
    imagesLoadURL: "/admin/images/list",
    imageErrorCallback: function (data) {
      console.log(data);
    }
  });


  $('textarea[name="member[description_en]').editable({
    preloaderSrc: "/images/preloader.gif",
    inlineMode: false,
    language: "zh_cn",
    mediaManager: true,
    imageUploadURL: "/admin/images/upload",
    imageDeleteURL: "/admin/images/delete",
    imagesLoadURL: "/admin/images/list",
    imageErrorCallback: function (data) {
      console.log(data);
    }
  });


  var $progress = $('#progress'),
      $img = $('#member-img'),
      $imgfield = $('input[name="member[avatar]"]');

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


  $('#multi-lang a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
});