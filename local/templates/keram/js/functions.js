function showMessage(message, positionClass, type){
    if (!positionClass) positionClass = 'toast-bottom-right';
    if (!type) type = 'success';
    toastr.options.progressBar = true;
    toastr.options.closeButton = true;
    toastr.options.positionClass = positionClass;
    toastr.options.closeButton = false;
    toastr.options.progressBar = false;
    toastr.options.timeOut = 3000;
    toastr[type]('',message);
}

function initToastMessagesSection(){
    $('.toast-message').each(function(){
        var type = $(this).attr('message-type');
        var positionClass = $(this).attr('message-position-class');
        var message = $(this).text();
        showMessage(message,positionClass,type);
    });
}

function initConfirmRemoveSection(){
    $('.confirm-remove').click(function(event){
        if (confirm($(this).attr('mess'))){
            var name = $(this).closest('.form-group').find('input[type=hidden]').attr('name');
            if(name && name != undefined){
                $(this).closest('.form-group').find('input[type=hidden]').val("");
                $('#' + name + '_pre').remove();
            }
        }else {
            return false;
        }
    });
}

function initRemoveMultiSection(){
    var $removeButton = $('button.remove-button'),
        $checkAllButton = $('input.remove-all-checkbox'),
        items = [];

    $checkAllButton.change(checkAllItems);
    $('input.remove-checkbox').change(generateItems);
    $removeButton.click(removeItems);

    function checkAllItems(){
        var checked = ($(this).attr('checked')) ? true : false;
        $('input.remove-checkbox').each(function(index,item){
            $(item).attr('checked',checked);
        });
        generateItems();
    }

    function refreshCheckAllButton(){
        var availableItemsCount = $('input.remove-checkbox').length;
        if (availableItemsCount == 0) return false;
        if (items.length == availableItemsCount){
            $checkAllButton.attr('checked',true);
        }else{
            $checkAllButton.attr('checked',false);
        }
    }

    function refreshRemoveButton(){
        if (!items.length)
            $removeButton.addClass('hidden');
        else
            $removeButton.removeClass('hidden');
    }

    function generateItems(){
        items = [];
        $('input.remove-checkbox:checked').each(function(){
            items.push($(this).val());
        });
        refreshRemoveButton();
        refreshCheckAllButton();
    }

    function removeItems(){
        if (!confirm($(this).attr('mess1')+items.length+$(this).attr('mess2'))){
            return false;
        }
        var url = $removeButton.attr('url');
        $.ajax({
            type: "POST",
            url: url,
            data: {items:items}
        }).success(function(response) {
            if (response.result) location.reload();
        });
    }

}

function initGetOverlayWindowSectionFiles(){
    $("[data-role='get-overlay']").click(function(event){
        event.preventDefault();
        var url = $(this).attr('data-url');

        function onClose(event){
            event.preventDefault();
            $("body").removeClass("show-overlays");
            $('.overlays').remove();
        }

        $.ajax({
            url: url
        }).success(function(response) {
            if (response.result){
                $('.overlays').remove();
                $('body').append(response.html);
                $(".overlays.active .to-close").click(onClose);
                $('input[type="file"].file-autoload').on('change', prepareUpload);
                $('input[type="file"].file-autoload').on('change', uploadFiles);
                onClickDeleteFile();
                onSelectFile();
                onSubmitPopupFile();
                setTimeout(function(){
                    $('body').addClass('show-overlays');
                },100);
            }
        });
    });

}

function onSelectFile()
{
    $('.files-container .one-file').on('click',function(){
        $('.files-container .one-file').removeClass('selected');
        $(this).addClass('selected');
    });
}

function onSubmitPopupFile()
{
    $('.submit-selected-files').click(function(){
        var el = $('.files-container .one-file.selected');
        if(el.val() == undefined){
            return false;
        }
        $.ajax({
            url: '/admin/files/getfile/id/'+el.attr('file_id')
        }).success(function(response) {
            if (response.result){
                $('#file_id').val(el.attr('file_id'));
                $('.selected-files-container .one-file').remove();
                $('.selected-files-container').prepend(response.html);
                $('.popup-container .to-close').click();
            }
        });
    });
}

function initDatepickers()
{
    $('.styled-datepicker').datepicker({autoclose: true, todayHighlight: true, format: "yyyy-mm-dd"});
    $('.styled-datepicker-time input').datetimepicker({
        format: 'YYYY-MM-DD HH:mm',
    });
}

function initAdvancedSelects()
{
    $('select.advanced-select').each(function(){
        var that = $(this);
        var elId = that.attr('id');
        var advancedValue = that.attr('advanced-value');
        if(advancedValue != ''){
            $.each(advancedValue.split(','), function(index, item) {
                var strId = item.replace("'","");
                strId = strId.replace("'","");
                that.find('option[value="'+strId+'"]').attr('selected','selected');
            });
        }
        that.select2();
        if(that.attr('multiple') == 'multiple'){
            $('<textarea class="hidden" name="'+elId+'" id="'+elId+'-advanced-display"></textarea>').insertAfter($(this));
            that.attr('name',elId+'_no');

            var displayId = elId + '-advanced-display';

            function getSelectedOptions(sel, fn) {
                var opts = [], opt;
                for (var i=0, len=sel.options.length; i<len; i++) {
                    opt = sel.options[i];
                    if ( opt.selected ) {
                        opts.push(opt);
                        if (fn) {
                            fn(opt);
                        }
                    }
                }
                return opts;
            }

            function callback(opt) {
                var display = document.getElementById(displayId);
                display.innerHTML += "'" + opt.value + "'" + ',';
            }

            document.getElementById(elId).onchange = function(e) {
                var display = document.getElementById(displayId);
                display.innerHTML = '';
                getSelectedOptions(this, callback);
                var str = display.innerHTML.slice(0, -1);
                display.innerHTML = str;
            };

            $('#'+elId).change();
        }

    });
}

function initCkeditorSection(){
    $('[data-role=ckeditor]').each(function(){
        CKEDITOR.replace(this);
    });
}

function initToLoadLinksOnDocumentsItem() {
    var url, link_type, link_select, field_type_select, multi_checkbox;
    var evChange = $('#doc-item-add #content_type');
    link_select = $('#doc-item-add #content_id').closest('.form-group');
    field_type_select = $('#doc-item-add #field_type').closest('.form-group');
    //multi_checkbox = $('#doc-item-add #multi_select').closest('.form-group');
    url = evChange.attr('data');
    changeLinksEdit(evChange);
    $(document).on('change', '#doc-item-add #content_type', function () {
        changeLinks($(this));
    });

    function changeLinks(that) {
        switch (that.val()){
            case 'block':
                link_type = 'block';
                loadDataLinks();
                //resetLinksData(field_type_select);
                link_select.show();
                field_type_select.hide();
                break;
            case 'slider':
                link_type = 'slider';
                loadDataLinks();
                //resetLinksData(field_type_select);
                link_select.show();
                //multi_checkbox.show();
                field_type_select.hide();
                break;
            default:
                link_select.hide();
                field_type_select.show();
                //multi_checkbox.hide();
                resetLinksData(link_select);
                break;
        }
    }

    function changeLinksEdit(that) {
        switch (that.val()){
            case 'block':
                link_type = 'block';
                link_select.show();
                field_type_select.hide();
                break;
            case 'slider':
                link_type = 'slider';
                link_select.show();
                field_type_select.hide();
               // multi_checkbox.show();
                break;
            default:
                link_select.hide();
                //multi_checkbox.hide();
                field_type_select.show();
                resetLinksData(link_select);
                break;
        }
    }

    /**
     *  Load Ajax data from two tables - directories and documents
     */

    function loadDataLinks() {
        var current_link = $('#lid').val();
        var select = '';
        $.post(url, { link:link_type }, function (e) {
            link_select.find('select').html('');
            var i=0;
            var l=e.length;
            while (i < l){
                if(current_link == e[i]['id']){
                    select = 'select';
                }else {
                    select = '';
                }
                link_select.find('select').append('<option  ' + select + ' value="' + e[i]['id'] + '"> ' + e[i]['name'] + '</option>');
                i++;
            }
        });
    }

    /**
     * Reset Select data
     */

    function resetLinksData(selectData) {
        selectData.find('select').html('<option selected value="0">Не выбрано</option>');
    }

}

/**
 *
 */

function initDocCommentSelect() {
    var modStatus = $('#moder_form #status').closest('.form-group');;
    var commentSelect = $('#moder_form #comment_id').closest('.form-group');;
    setComment($('#moder_form #status').val());
    $(document).on('change', '#moder_form #status', function () {
        setComment($(this).val());
    });


    function setComment(modStatus) {
        switch (modStatus){
            case '170': //170 id moder status in BD
                commentSelect.show();
                break;
            default:
                commentSelect.hide();
                break;
        }
    }
}

function initFiles()
{
    $("[data-autoload='file']").each(function(){
        var dataElementName = $(this).attr('data-element-name');
        if(dataElementName != ''){
            var file_id = $('input[name="'+dataElementName+'"]').val();
            if(file_id){
                var filesContainer = $(this).parent().parent().find('.selected-files-container');
                $.ajax({
                    url: '/admin/files/getfile/id/'+file_id
                }).success(function(response) {
                    if (response.result){
                        filesContainer.find('.one-file').remove();
                        filesContainer.prepend(response.html);
                    }
                });
            }
        }
    });

    $("[data-autoload='image']").each(function(){
        var that = $(this);
        var file_id = $(this).attr('file_id');
        if(file_id){
            $.ajax({
                url: '/admin/files/getfile/id/'+file_id
            }).success(function(response) {
                if (response.result){
                    that.attr('src',response.url);
                }
            });
        }
    });
}

function initLinksRolesPrivilegesSection(){
    var $button = $('button.links-roles-privileges-submit'),
        $checkAllByRole = $('input.check-all-by-role'),
        $checkAllByPrivilege = $('input.check-all-by-privilege'),
        items = [];

    $checkAllByRole.change(checkAllByRole);
    $checkAllByPrivilege.change(checkAllByPrivilege);
    $('input.link-checkbox').change(generateItems);
    $button.click(submitItems);

    function checkAllByRole(){
        var checked = ($(this).attr('checked')) ? true : false;
        $('input.link-checkbox[role_id="'+$(this).attr('role_id')+'"]').each(function(index,item){
            $(item).attr('checked',checked);
        });
        generateItems();
    }

    function checkAllByPrivilege(){
        var checked = ($(this).attr('checked')) ? true : false;
        $('input.link-checkbox[privilege_id="'+$(this).attr('privilege_id')+'"]').each(function(index,item){
            $(item).attr('checked',checked);
        });
        generateItems();
    }

    function generateItems(){
        items = [];
        $('input.link-checkbox:checked').each(function(){
            items.push({resource_id:$(this).attr('resource_id'),privilege_id:$(this).attr('privilege_id'),role_id:$(this).attr('role_id')});
        });
    }

    function submitItems(){
        var url = $button.attr('url');
        $.ajax({
            type: "POST",
            url: url,
            data: {items:items}
        }).success(function(response) {
            if (response.result) location.reload();
        });
    }

}

function initModal() {
    var parentIDinput = '';
    $('[data-toggle="modal"]').click(function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        var adv_select = $(this).closest('.form-group').find('.advanced-select');
        if(adv_select && adv_select != undefined){
            parentIDinput = adv_select.attr('id');
            if(parentIDinput == undefined)
                parentIDinput = '';
        }
        $.get(url, function(data) {
            $(data).modal();
        });
        return false;
    });

    $(document).on('submit', '.modal form', function () {
        var reload = $(this).attr('reload');
        if(parentIDinput)
            var advSelect = parentIDinput;
        else
            var advSelect = $(this).attr('advanced-select');
        var adv_val = $(this).attr('adv_val');
        var adv_title = $(this).attr('adv_title');
        var selected_items = $('#' + advSelect + '-advanced-display').val();
        $.post($(this).attr('action'), $(this).serialize(), function (res) {
            $('.modal').modal('hide');
            if(reload)
                location.reload();
            if(advSelect){
                //alert(advSelect + '-advanced-display');
                //alert(res[adv_val]);
                $('#' + advSelect).append('<option selected value="' + res[adv_val] + '">' + res[adv_title] + '</option>');
                $('#' + advSelect).select2({data:[{id:res[adv_val], text: res[adv_title]}]});
                if(selected_items && selected_items != undefined) {
                    $('#' + advSelect + '-advanced-display').text(selected_items + ",'" + res[adv_val] + "'");
                }else {
                    $('#' + advSelect + '-advanced-display').text("'" + res[adv_val] + "'");
                }

            }
        });
        return false;
    });
}

function slidesUpload() {
    $(document).on('change', '#file1, #file2, #file,#file_ru, #file_ua, #file_en, #album_img, #photo, #head_img, #image1, #image2, #image3, #value', prepareUpload);
    $(document).on('change', '#file1, #file2,#album_img, #photo , #head_img, #image1, #image2, #image3, #value', uploadSlides);
    for(var i = 0; i<langs.length;i++) {
        $(document).on('change', '#image1_' + langs[i] + ', #image2_' + langs[i], prepareUpload);
        $(document).on('change', '#image1_' + langs[i] + ', #image2_' + langs[i], uploadSlides);
    }

    $(document).on('change', '#file, #file_ru, #file_ua, #file_en', uploadJobsFile);
    if($('#file1_pre').css('display') == 'block'){
        $('#file1_pre').closest('.form-group').css('height', 20 + $('#file1_pre').height() + 'px');
    }
    if($('#file2_pre').css('display') == 'block'){
        $('#file2_pre').closest('.form-group').css('height', 20 + $('#file2_pre').height() + 'px');
    }
    if($('#image1_pre').css('display') == 'block'){
        $('#image1_pre').closest('.form-group').css('height', 20 + $('#image1_pre').height() + 'px');
    }
    if($('#image2_pre').css('display') == 'block'){
        $('#image2_pre').closest('.form-group').css('height', 20 + $('#image2_pre').height() + 'px');
    }
    if($('#image3_pre').css('display') == 'block'){
        $('#image3_pre').closest('.form-group').css('height', 20 + $('#image3_pre').height() + 'px');
    }
    if($('#head_img_pre').css('display') == 'block'){
        $('#head_img_pre').closest('.form-group').css('height', 20 + $('#head_img_pre').height() + 'px');
    }
    for(var i = 0; i<langs.length;i++){
        if($('#image1_'+ langs[i] +'_pre').css('display') == 'block'){
            $('#image1_'+ langs[i] +'_pre').closest('.form-group').css('height', 20 + $('#image1_'+ langs[i] +'_pre').height() + 'px');
        }
        if($('#image2_'+ langs[i] +'_pre').css('display') == 'block'){
            $('#image2_'+ langs[i] +'_pre').closest('.form-group').css('height', 20 + $('#image2_'+ langs[i] +'_pre').height() + 'px');
        }
    }

}

function onlineAnketa() {
    $(document).on('change', '#anketa_file', prepareUpload);
    $(document).on('change', '#anketa_file', uploadAnketa);
}

function newsLoad() {
    $(document).on('click', '#load_more', function () {
        var that = this;
        var current_page = $(that).attr('current');
        var last_page = $(that).attr('last');
        $.post($(this).attr('href') + '/page/' + (parseInt(current_page) + 1), {}, function (res) {
            $('.contents-news .col-md-12').append(res);
            var new_current_page = parseInt(current_page) + 1;
            $(that).attr('current', new_current_page);
            if(new_current_page >= last_page){
                $(that).parent().remove();
            }

        });
        return false;
    });

    $(document).on('click', '#load_more_multi', function () {
        var that = this;
        var current_page = $(that).attr('current');
        var last_page = $(that).attr('last');
        var app = $(that).closest('.multimedia-container').find('.clearfix')
        $.post($(this).attr('href') + '/page/' + (parseInt(current_page) + 1), {}, function (res) {
            $(res).insertBefore(app);
            var new_current_page = parseInt(current_page) + 1;
            $(that).attr('current', new_current_page);
            if(new_current_page >= last_page){
                $(that).parent().remove();
            }

        });
        return false;
    });

    $(document).on('click', '#load_more_bio', function () {
        var that = this;
        var current_page = $(that).attr('current');
        var last_page = $(that).attr('last');
        $.post($(this).attr('href') + '/page/' + (parseInt(current_page) + 1), {}, function (res) {
            $('.peoples').append(res);
            var new_current_page = parseInt(current_page) + 1;
            $(that).attr('current', new_current_page);
            if(new_current_page >= last_page){
                $(that).parent().remove();
            }

        });
        return false;
    });
}

function activeMenu() {
    var controller = $('body').attr('controller');
    var action = $('body').attr('action');
    $('.nav-menu ul a').removeClass('active');
    $('#'+controller+'_'+action).addClass('active');
}

function online_anketa() {


    $('.add_more a').click(function(e){
        var skill = 0, education = 0;
        $('.skils .item').each(function () {
            $(this).find('input, select, textarea').each(function () {
                if(!$(this).attr('index') || $(this).attr('index') == undefined || $(this).attr('index') == '0') {
                    var base_name = $(this).attr('base_name');
                    $(this).attr('name', 'work[' + skill + '][' + base_name + ']');
                    $(this).attr('index', skill);
                }
            })
            skill++;
        });

        $('.education .item').each(function () {
            $(this).find('input, select, textarea').each(function () {
                if(!$(this).attr('index') || $(this).attr('index') == undefined || $(this).attr('index') == '0') {
                    var base_name = $(this).attr('base_name');
                    $(this).attr('name', 'education[' + education + '][' + base_name + ']');
                    $(this).attr('index', education);
                }
            })
            education++;
        });

    });
    
}


function sendContact() {

    $(document).on('submit', '.feedback', function () {
        var recaptcha = $('#g-recaptcha-response').val();
        var that = $(this).serialize();
        $.post('/ru/online-anketa/recapcha/', {recaptcha: recaptcha}, function (res) {
            if(res){
                $.post('/ru/online-anketa/recapcha/', that, function (data) {
                    location.reload();
                })
            }
        })

        return false;
    });
}


function tagfilter() {
    $(document).on('change', '#tag_filter select', function () {
        var url = $(this).closest('#tag_filter').attr('action');
        var home = $(this).closest('#tag_filter').attr('home');
        if($(this).val() == 'all'){
            location.href = home;
        }else {
            location.href = url + '/i/' + $(this).val() + '/tag/' + $(this).find('option:selected').attr('synonim');
        }
        return false;
    })
}


function newSubscribe() {

    $(document).on('submit', '#subscribe_form', function () {
        var recaptcha = $('#g-recaptcha-response').val();
        var that = $(this).serialize();
        var locale = $('body').attr('loc');
        $.post('/' + locale + '/subscribe/new/', {recaptcha: recaptcha}, function (res) {
            if(res){
                $.post('/' + locale + '/subscribe/new/', that, function (data) {
                    location.href = data;
                })
            }
        })
        return false;
    });

    $(document).on('click', '#go_to_sub', function () {
        var email = $('#sub_mail').val();
        //if(email){
            location.href = '/' + $(this).closest('form').attr('lang') + '/' + 'subscribe/index/email/' + email;
        //}
        return false;
    });
}


function sendCV() {
    $(document).on('change', '.vacance-item input[type=file]', prepareUpload);
    $(document).on('change', '.vacance-item input[type=file]', uploadSendCv);
}

function ckEditorRel() {

    if($.inArray(window.location.hostname, hosts) !== -1){
        var host = window.location.hostname;
        CKEDITOR.on('dialogDefinition', function(ev) {
            var editor = ev.editor;
            editor.dataProcessor.htmlFilter.addRules(
                {
                    elements :
                        {
                            a : function( element )
                            {

                                    if (!element.attributes.rel) {
                                        element.attributes.rel = 'nofollow';
                                    }
                            }
                        }
                });
        });
    }
}

function relNoFollow() {
    var href, strposUMG, strposUMG2;
    $('a').each(function () {
        href = $(this).attr('href');
        strposUMG = strpos(href, 'umgukraine.com', null);
        strposUMG2 = strpos(href, '/', null);
        if(!strposUMG){
            if(strposUMG2 != 0) {
                console.log(href);
                $(this).attr('rel', 'nofollow');
            }
        }
    });
}

function strpos (haystack, needle, offset) {
    var i = (haystack+'').indexOf(needle, (offset || 0));
    return i === -1 ? false : i;
}