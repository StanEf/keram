var files;

function prepareUpload(event)
{  files = event.target.files; }

function uploadFiles(event){
    event.stopPropagation();
    event.preventDefault();
    var data = new FormData();
    $.each(files, function(key, value)
    {
        data.append(key, value);
    });
    $.ajax({
        url: '/admin/files/upload/',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(res)
        {
            if(res.result){
                var output_files = res.files;
                $.each(output_files, function(index, item) {
                    $('.files-container.'+item.type+'s').prepend(item.html);
                });
                onClickDeleteFile();
                onSelectFile();
                onSubmitPopup();
            }
        }
    });
}

function uploadSlides(event){
    if($(this).attr('type') != 'file')
        return false;
    event.stopPropagation();
    event.preventDefault();
    var data = new FormData();
    $.each(files, function(key, value)
    {
        data.append(key, value);
    });
    var that = this;
    $.ajax({
        url: $(this).attr('url'),
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(res)
        {
            if(res['url']){
                $('input[name='+$(that).attr('id')+']').val(res['url']);
                $('#' + $(that).attr('id') + '_img').attr('src', res['url']);
                $('#' + $(that).attr('id') + '_img').attr('url', res['url']);
                $('#' + $(that).attr('id') + '_pre').show();
                $('#' + $(that).attr('id') + '_img').closest('.card').show();
                $('#' + $(that).attr('id') + '_pre').closest('.form-group').css('height', 20 + $('#' + $(that).attr('id') + '_pre').height() + 'px');
            }
        }
    });
}

function uploadJobsFile(event){
    event.stopPropagation();
    event.preventDefault();
    var data = new FormData();
    $.each(files, function(key, value)
    {
        data.append(key, value);
    });
    var that = this;
    $.ajax({
        url: $(this).attr('url'),
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(res)
        {
            if(res['url']){
                $('input[name='+$(that).attr('id')+']').val(res['url']);
                $('#' + $(that).attr('id') + '_file').val(res['url']);
                $('#' + $(that).attr('id') + '_pre').show();
                $('#' + $(that).attr('id') + '_file').closest('.card').show();
                $(that).closest('.form-group').css('margin-bottom', '45px');
            }
        }
    });
}

function uploadAnketa(event){
    event.stopPropagation();
    event.preventDefault();
    var data = new FormData();
    $.each(files, function(key, value)
    {
        data.append(key, value);
    });
    var that = this;
    $.ajax({
        url: $(this).attr('url'),
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(res)
        {
            if(res['url']){
                $('input[name='+$(that).attr('id')+']').val(res['url']);
            }
        }
    });
}

function uploadSendCv(event){
    var lang = $('.lang').attr('lang');
    var name = $(this).closest('.vacance-item').find('.vacance-toggle .title-vacance').text();
    event.stopPropagation();
    event.preventDefault();
    var data = new FormData();
    $.each(files, function(key, value)
    {
        data.append(key, value);
    });
    var that = this;
    $.ajax({
        url: '/' + lang + '/online-anketa/sendcv/name/' + name,
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(res)
        {
            if(res['0'] != 'error'){
                $(that).closest('.file_upload').find('.btn').html('<span class="uploaded-icon"></span>' + res['1']);
            }
        }
    });
}

function onClickDeleteFile(){
    $(".one-file .delete-file").on('click', function (event) {
        if (!confirm('Действительно хотите удалить файл ?')){
            event.preventDefault();
        }else{
            var file_id = $(this).closest('.one-file').attr('file_id');
            $.ajax({
                url: '/admin/files/remove/id/'+file_id+'/'
            }).success(function(response) {
                if (response.result){
                    $('.one-file[file_id="'+file_id+'"]').remove();
                }
            });
        }
    });
}