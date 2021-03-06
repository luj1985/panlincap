$(function() {

  $.Editable.DEFAULTS.key = 'rH-9mcbfD-13rscB1vyz==';

  var token = $('input[name="authenticity_token"]').val();

  $('textarea[name="declaration[body]"],textarea[name="declaration[body_en]"]').editable({
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
    editorClass: 'panlin-style',
    imageErrorCallback: function (err) {
      window.alert(err);
    }
  });

});