$(function() {

  var $htmleditor = $('textarea[name="article[body]"]');

  $.Editable.DEFAULTS.key = 'rH-9mcbfD-13rscB1vyz==';

  $htmleditor.editable({
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

});