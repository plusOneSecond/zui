var config = {'debugdisabled': true};

$(function()
{
    $(window).resize(function(){$('#main').css('min-height', $(window).height());}).resize();

    // hljs.initHighlightingOnLoad();
    prettyPrint();

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    })

    // popover demo
    $("[data-toggle=popover]").popover();

    // navbar collapse
    $('.navbar-collapsed .nav > .nav-heading').click(function(event)
    {
        var $nav = $(this).closest('.nav');
        if($nav.hasClass('collapsed'))
        {
            $nav.removeClass('collapsed').children('li:not(.nav-heading)').slideDown('fast');
        }
        else
        {
            $nav.children('li:not(.nav-heading)').slideUp('fast', function(){$nav.addClass('collapsed')});
        }
    });

    // Chosen
    $('.chosen-select').chosen();

    // datetime picker
    $('.form-datetime').datetimepicker(
    {
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1,
        format: 'yyyy-mm-dd hh:ii'
    });
    $('.form-date').datetimepicker(
    {
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format: 'yyyy-mm-dd'
    });
    $('.form-time').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 1,
        minView: 0,
        maxView: 1,
        forceParse: 0,
        format: 'hh:ii'
    });

    KindEditor.ready(function(K) 
    {
      K.create('textarea.kindeditor', 
      {
        allowFileManager : true,
        bodyClass : 'article-content',
        cssPath: 'dist/css/zui.css',
        afterBlur: function(){$('#content').prev('.ke-container').removeClass('focus');},
          afterFocus: function(){$('#content').prev('.ke-container').addClass('focus');}
      });

      K.create('textarea.kindeditorSimple', 
      {
        bodyClass : 'article-content',
        cssPath: 'dist/css/zui.css',
        resizeType : 1,
        allowPreviewEmoticons : false,
        allowImageUpload : false,
        items : [
        'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
        'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
        'insertunorderedlist', '|', 'emoticons', 'image', 'link'],
        afterBlur: function(){$('#contentSimple').prev('.ke-container').removeClass('focus');},
          afterFocus: function(){$('#contentSimple').prev('.ke-container').addClass('focus');}
      });

      K.create('textarea.customStyle',
      {
        themeType : 'simple',
        bodyClass : 'article-content',
        cssPath: 'dist/css/zui.css',
        afterBlur: function(){$('#contentCustom').prev('.ke-container').removeClass('focus');},
          afterFocus: function(){$('#contentCustom').prev('.ke-container').addClass('focus');}
      });

    });
});
