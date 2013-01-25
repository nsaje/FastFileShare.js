jQuery(document).ready(function() {

  var afterUploaded = function(resp) {
    resp = JSON.parse(resp);
    $("#qrcode").attr('src', resp.qrData);
    $("#downloadLink").attr('href', resp.url).html(resp.url);
    $("#beforeUpload").hide();
    $("#afterUpload").show();
  };

  var progressHandler = function(event) {
    if (event.lengthComputable) {
      var percentComplete = (event.loaded / event.total) * 100;
      document.write(percentComplete);
      $("#progressBar").width(percentComplete);
    }
  }

  $(document).ready(function() {
    $('input[type="file"]').dropUpload({
      'uploadUrl' : '/upload',
      'uploaded'  : afterUploaded,
      'dropClass'   : 'file_drop_box well',
      'dropHoverClass': 'file-drop-hover',
      'defaultText'   : 'Drop your files here!',
      'hoverText' : 'Let go to upload!'
    });
  });
});