$(function() {

  var $htmleditor = $('textarea[name="declaration[body]"]');

  $.Editable.DEFAULTS.key = 'rH-9mcbfD-13rscB1vyz==';

  var token = $('input[name="authenticity_token"]').val();
  $htmleditor.editable({
    pasteImage: true,
    pastedImagesUploadURL : "/admin/images/upload",
    preloaderSrc: "/images/preloader.gif",
    inlineMode: false,
    toolbarFixed: false,
    defaultImageAlignment: 'left',
    language: "zh_cn",
    mediaManager: true,
    imageUploadParams : { authenticity_token : token },
    imageUploadURL: "/admin/images/upload",
    imageDeleteURL: "/admin/images/delete",
    imagesLoadURL: "/admin/images/list",
    imageErrorCallback: function (data) {
      console.log(data);
    }
  });

});