<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html>

<head>
    <title>Инвестиционная компания UMG</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="keywords" content="Umg" />
    <meta name="description" content="Sokol keram" /><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <?$APPLICATION->ShowHead()?>

    <link rel="icon" type="image/png" href="<?= SITE_TEMPLATE_PATH ?>/images/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="<?= SITE_TEMPLATE_PATH ?>/images/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="/js/manifest.json">
    <link rel="mask-icon" href="/js/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="generator" content="Bootply" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta content="<?if($_SERVER["SERVER_PROTOCOL"] == "HTTP/1.1")echo 'http://'; else echo "https://"; ?><?= $_SERVER["SERVER_NAME"] ?>" property="og:url" />
    <meta content="Сокол Керам" property="og:title" />
    <meta content="Сокол Керам" property="og:description" />
    <meta content="<?= SITE_TEMPLATE_PATH ?>/images/news-gag-3-test.PNG" property="og:image" />

    <link href="<?= SITE_TEMPLATE_PATH ?>/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?= SITE_TEMPLATE_PATH ?>/css/owl.carousel.css" rel="stylesheet">
    <link rel="stylesheet" href="<?= SITE_TEMPLATE_PATH ?>/css/social-likes_classic.css">
    <link href="<?= SITE_TEMPLATE_PATH ?>/css/jquery.slider-rm.css" rel="stylesheet">
    <link href="<?= SITE_TEMPLATE_PATH ?>/css/styles.css" rel="stylesheet">

    <script src="<?= SITE_TEMPLATE_PATH ?>/js/jquery.min.js"></script>
    <script src="<?= SITE_TEMPLATE_PATH ?>/js/bootstrap.min.js"></script>
    <script src="<?= SITE_TEMPLATE_PATH ?>/js/owl.carousel.js"></script>
    <script src="<?= SITE_TEMPLATE_PATH ?>/js/social-likes.min.js"></script>
    <script src="<?= SITE_TEMPLATE_PATH ?>/js/jquery.mobile.custom.min.js"></script>
    <script src="<?= SITE_TEMPLATE_PATH ?>/js/jquery.slider-rm.js"></script>
    <script src="<?= SITE_TEMPLATE_PATH ?>/js/jquery.maskedinput.min.js"></script>
    <script src="<?= SITE_TEMPLATE_PATH ?>/js/uploadprogress.js"></script>
    <script src="<?= SITE_TEMPLATE_PATH ?>/js/scripts.js"></script>
    <script src="<?= SITE_TEMPLATE_PATH ?>/js/functions.js"></script>
    <link href="<?= SITE_TEMPLATE_PATH ?>/images/favicon.ico" rel="shortcut icon" />
    <script src="https://www.google.com/recaptcha/api.js?hl=ru"></script>


    <? /*exit('4345');*/ ?>
</head>

<body  module="default" controller="index" referer="" loc="ru">
<?$APPLICATION->ShowPanel(); ?>
<div id="content-wrapper">
    <nav class="navbar navbar-fixed-top header">
        <div class="col-md-12">
            <div class="container">
                <div class="navbar-header">

                    <a href="/index.html" class="navbar-brand"><img src="<?= SITE_TEMPLATE_PATH ?>/images/logo.png" /></a>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse1">
                        <i class="fa fa-search"></i>
                    </button>

                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse2">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                </div>
                <div class="collapse navbar-collapse" id="navbar-collapse1">
                    <form class="navbar-form hidden-sm hidden-md hidden-lg form-search">
                        <div class="input-group">
                            <input type="text" class="form-control srch-term" placeholder="Поиск..." name="srch-term"/>
                            <div class="input-group-btn">
                                <button class="btn btn-default btn-primary btn-search" type="submit"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                    <ul class="nav navbar-nav navbar-right hidden-xs social-header">
                        <li><a href="#" ><i class="linkedin"></i></a></li>
                        <li><a href="#" ><i class="youtube"></i></a></li>
                        <li><a href="#" ><i class="facebook"></i></a></li>
                        <li><a href="#" ><i class="instagram"></i></a></li>
                    </ul>
                </div>
                <div class="collapse navbar-collapse" id="navbar-collapse2">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="contacts/index.htm" tppabs="http://www.umgukraine.com/ru/contacts">Контакты</a></li>
                    </ul>
                    <ul class="nav navbar-nav hidden-sm hidden-md hidden-lg mob-menu">
                        <li class="subm"><a id="page_about" href="about/index.htm" tppabs="http://www.umgukraine.com/ru/about">О компании<span class="fa fa-angle-down"></span></a>

                            <ul class="sub-menu">
                                <li><a href="about/index.htm#bl1" tppabs="http://www.umgukraine.com/ru/about#bl1">О компании</a></li>
                                <li><a href="about/index.htm#bl2_1" tppabs="http://www.umgukraine.com/ru/about#bl2_1">Миссия / Визия</a></li>
                                <!--<li><a href="#bl2_2"></a></li>-->
                                <li><a href="about/index.htm#bl5_1" tppabs="http://www.umgukraine.com/ru/about#bl5_1">Ценности</a></li>
                                <li><a href="about/index.htm#bl6" tppabs="http://www.umgukraine.com/ru/about#bl6">Команда</a></li>
                                <li><a href="about/index.htm#bl5" tppabs="http://www.umgukraine.com/ru/about#bl5">Наш подход к инвестициям</a></li>
                                <li><a href="about/index.htm#bl4" tppabs="http://www.umgukraine.com/ru/about#bl4">Структура бизнесов под управлением</a></li>
                                <li><a href="about/index.htm#bl7" tppabs="http://www.umgukraine.com/ru/about#bl7">Наша история</a></li>
                            </ul>
                        </li>
                        <li class="subm"><a id="products_view" href="#">Бизнес<span class="fa fa-angle-down"></span></a>
                            <ul class="sub-menu">
                                <li><a href="products/glina/index.htm" tppabs="http://www.umgukraine.com/ru/products/glina">Добыча глины                                                                                    </a>
                                    <ul>
                                    </ul>

                                </li>
                                <li><a href="products/flux-and-dolomite-production/index.htm" tppabs="http://www.umgukraine.com/ru/products/flux-and-dolomite-production">Добыча известняков и доломитов                                                                                    </a>
                                    <ul>
                                    </ul>

                                </li>
                                <li class="subm"><a href="products/zshm/index.htm" tppabs="http://www.umgukraine.com/ru/products/zshm">Переработка и продажа золошлаковых материалов и металлургических шлаков                                                                                            <span class="fa fa-angle-right"></span>
                                    </a>
                                    <ul>
                                        <li><a href="products/micro/index.htm" tppabs="http://www.umgukraine.com/ru/products/micro">Микросфера</a></li>
                                        <li><a href="products/suhaja-zola/index.htm" tppabs="http://www.umgukraine.com/ru/products/suhaja-zola">Сухая зола</a></li>
                                        <li><a href="products/zola/index.htm" tppabs="http://www.umgukraine.com/ru/products/zola">Золошлаковая смесь</a></li>
                                        <li><a href="products/ugolnyiy-shlak/index.htm" tppabs="http://www.umgukraine.com/ru/products/ugolnyiy-shlak">Угольный шлак</a></li>
                                        <li><a href="products/granulirovannyiy-domennyiy-shlak/index.htm" tppabs="http://www.umgukraine.com/ru/products/granulirovannyiy-domennyiy-shlak">Гранулированный доменный шлак</a></li>
                                        <li><a href="products/otvalnyiy-domennyiy-shlak/index.htm" tppabs="http://www.umgukraine.com/ru/products/otvalnyiy-domennyiy-shlak">Отвальный доменный шлак</a></li>
                                        <li><a href="products/uvlazhnennaja-zola/index.htm" tppabs="http://www.umgukraine.com/ru/products/uvlazhnennaja-zola">Увлажненная зола </a></li>
                                    </ul>

                                </li>
                                <li><a href="products/gas/index.htm" tppabs="http://www.umgukraine.com/ru/products/gas">Переработка и продажа редких и технических газов                                                                                    </a>
                                    <ul>
                                    </ul>

                                </li>
                                <li><a href="products/mineral/index.htm" tppabs="http://www.umgukraine.com/ru/products/mineral">Продажа минеральных удобрений                                                                                    </a>
                                    <ul>
                                    </ul>

                                </li>
                                <li><a href="products/prodazha-i-pererabotka-zernovyh-i-maslenichnyh-kultur/index.htm" tppabs="http://www.umgukraine.com/ru/products/prodazha-i-pererabotka-zernovyh-i-maslenichnyh-kultur">Продажа зерновых и масличных культур                                                                                    </a>
                                    <ul>
                                    </ul>

                                </li>
                                <li><a href="products/zemleustroitelnoe-i-promyshlennoe-proektirovanie/index.htm" tppabs="http://www.umgukraine.com/ru/products/zemleustroitelnoe-i-promyshlennoe-proektirovanie">Землеустроительное и промышленное проектирование                                                                                     </a>
                                    <ul>
                                    </ul>

                                </li>

                            </ul>
                        </li>
                        <li class="subm"><a id="page_ustrazvitie" href="ustrazvitie/index.htm" tppabs="http://www.umgukraine.com/ru/ustrazvitie">Устойчивое развитие<span class="fa fa-angle-down"></span></a>
                            <ul class="sub-menu">
                                <li><a href="ustrazvitie/index.htm#bl1" tppabs="http://www.umgukraine.com/ru/ustrazvitie#bl1">Наш подход</a></li>
                                <li><a href="ustrazvitie/index.htm#bl4" tppabs="http://www.umgukraine.com/ru/ustrazvitie#bl4">Проекты наших бизнесов</a></li>
                                <li><a href="ustrazvitie/index.htm#bl5" tppabs="http://www.umgukraine.com/ru/ustrazvitie#bl5">Линия доверия</a></li>
                            </ul>
                        </li>
                        <li class="subm"><a id="press-center_index" href="press-center/index.htm" tppabs="http://www.umgukraine.com/ru/press-center">Пресс-центр<span class="fa fa-angle-down"></span></a>
                            <ul class="sub-menu">
                                <li><a href="press-center/index.htm#bl1" tppabs="http://www.umgukraine.com/ru/press-center#bl1">Новости</a></li>
                                <li><a href="press-center/index.htm#bl5" tppabs="http://www.umgukraine.com/ru/press-center#bl5">СМИ о нас</a></li>
                                <li><a href="press-center/index.htm#bl3" tppabs="http://www.umgukraine.com/ru/press-center#bl3">Корпоративный блог</a></li>
                                <li><a href="press-center/index.htm#bl4" tppabs="http://www.umgukraine.com/ru/press-center#bl4">Видео</a></li>
                                <li><a href="press-center/index.htm#contacts" tppabs="http://www.umgukraine.com/ru/press-center#contacts">Контакты для прессы</a></li>
                            </ul>
                        </li>
                        <li class="subm"><a id="page_kariera" href="kariera/index.htm" tppabs="http://www.umgukraine.com/ru/kariera">Карьера<span class="fa fa-angle-down"></span></a>
                            <ul class="sub-menu">
                                <li><a href="kariera/index.htm#bl1" tppabs="http://www.umgukraine.com/ru/kariera#bl1">Кого мы ищем</a></li>
                                <li><a href="kariera/index.htm#bl4" tppabs="http://www.umgukraine.com/ru/kariera#bl4">Наши люди</a></li>
                                <li><a href="kariera/index.htm#bl3" tppabs="http://www.umgukraine.com/ru/kariera#bl3">Список вакансий</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="lang-block">
                    <a href="#" class="btn btn-default btn-plus dropdown-toggle" data-toggle="dropdown"><span class="lang" lang="ru">RU</span> <small><i class="fa fa-chevron-down"></i></small></a>
                    <ul class="nav dropdown-menu">

                        <li><a onclick="location.href = $(this).attr('href')" class="" href="index.htm" tppabs="http://www.umgukraine.com/ru/"><span class="lang">RU</a></li>

                        <li><a onclick="location.href = $(this).attr('href')" class="" href="javascript:if(confirm('http://www.umgukraine.com/ua/  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?'))window.location='http://www.umgukraine.com/ua/'" tppabs="http://www.umgukraine.com/ua/"><span class="lang">UA</a></li>

                        <li><a onclick="location.href = $(this).attr('href')" class="" href="javascript:if(confirm('http://www.umgukraine.com/en/  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?'))window.location='http://www.umgukraine.com/en/'" tppabs="http://www.umgukraine.com/en/"><span class="lang">EN</a></li>
                    </ul>
                </div>            </div>
        </div>
    </nav>
    <div class="navbar navbar-default" id="subnav">
        <div class="col-md-12">
            <div class="container">
                <div class="navbar-header">
                    <ul class="nav pull-left nav-menu hidden-xs">
                        <li class="subm"><a id="page_about" href="about/index.htm" tppabs="http://www.umgukraine.com/ru/about">О компании<span class="fa fa-angle-down"></span></a>
                            <ul class="sub-menu">
                                <li><a href="about/index.htm#bl1" tppabs="http://www.umgukraine.com/ru/about#bl1">О компании</a></li>
                                <li><a href="about/index.htm#bl2_1" tppabs="http://www.umgukraine.com/ru/about#bl2_1">Миссия / Визия</a></li>
                                <!--<li><a href="#bl2_2"></a></li>-->
                                <li><a href="about/index.htm#bl5_1" tppabs="http://www.umgukraine.com/ru/about#bl5_1">Ценности</a></li>
                                <li><a href="about/index.htm#bl6" tppabs="http://www.umgukraine.com/ru/about#bl6">Команда</a></li>
                                <li><a href="about/index.htm#bl5" tppabs="http://www.umgukraine.com/ru/about#bl5">Наш подход к инвестициям</a></li>
                                <li><a href="about/index.htm#bl4" tppabs="http://www.umgukraine.com/ru/about#bl4">Структура бизнесов под управлением</a></li>
                                <li><a href="about/index.htm#bl7" tppabs="http://www.umgukraine.com/ru/about#bl7">Наша история</a></li>
                            </ul>

                        </li>
                        <li class="subm"><a id="products_view" href="#">Бизнес<span class="fa fa-angle-down"></span></a>
                            <ul class="sub-menu">
                                <li><a href="products/glina/index.htm" tppabs="http://www.umgukraine.com/ru/products/glina">Добыча глины                                                                                    </a>
                                    <ul>
                                    </ul>

                                </li>
                                <li><a href="products/flux-and-dolomite-production/index.htm" tppabs="http://www.umgukraine.com/ru/products/flux-and-dolomite-production">Добыча известняков и доломитов                                                                                    </a>
                                    <ul>
                                    </ul>

                                </li>
                                <li><a href="products/zshm/index.htm" tppabs="http://www.umgukraine.com/ru/products/zshm">Переработка и продажа золошлаковых материалов и металлургических шлаков                                                                                            <span class="fa fa-angle-right">
                                    </a>
                                    <ul>
                                        <li><a href="products/micro/index.htm" tppabs="http://www.umgukraine.com/ru/products/micro">Микросфера</a></li>
                                        <li><a href="products/suhaja-zola/index.htm" tppabs="http://www.umgukraine.com/ru/products/suhaja-zola">Сухая зола</a></li>
                                        <li><a href="products/zola/index.htm" tppabs="http://www.umgukraine.com/ru/products/zola">Золошлаковая смесь</a></li>
                                        <li><a href="products/ugolnyiy-shlak/index.htm" tppabs="http://www.umgukraine.com/ru/products/ugolnyiy-shlak">Угольный шлак</a></li>
                                        <li><a href="products/granulirovannyiy-domennyiy-shlak/index.htm" tppabs="http://www.umgukraine.com/ru/products/granulirovannyiy-domennyiy-shlak">Гранулированный доменный шлак</a></li>
                                        <li><a href="products/otvalnyiy-domennyiy-shlak/index.htm" tppabs="http://www.umgukraine.com/ru/products/otvalnyiy-domennyiy-shlak">Отвальный доменный шлак</a></li>
                                        <li><a href="products/uvlazhnennaja-zola/index.htm" tppabs="http://www.umgukraine.com/ru/products/uvlazhnennaja-zola">Увлажненная зола </a></li>
                                    </ul>

                                </li>
                                <li><a href="products/gas/index.htm" tppabs="http://www.umgukraine.com/ru/products/gas">Переработка и продажа редких и технических газов                                                                                    </a>
                                    <ul>
                                    </ul>

                                </li>
                                <li><a href="products/mineral/index.htm" tppabs="http://www.umgukraine.com/ru/products/mineral">Продажа минеральных удобрений                                                                                    </a>
                                    <ul>
                                    </ul>

                                </li>
                                <li><a href="products/prodazha-i-pererabotka-zernovyh-i-maslenichnyh-kultur/index.htm" tppabs="http://www.umgukraine.com/ru/products/prodazha-i-pererabotka-zernovyh-i-maslenichnyh-kultur">Продажа зерновых и масличных культур                                                                                    </a>
                                    <ul>
                                    </ul>

                                </li>
                                <li><a href="products/zemleustroitelnoe-i-promyshlennoe-proektirovanie/index.htm" tppabs="http://www.umgukraine.com/ru/products/zemleustroitelnoe-i-promyshlennoe-proektirovanie">Землеустроительное и промышленное проектирование                                                                                     </a>
                                    <ul>
                                    </ul>

                                </li>

                            </ul>
                        </li>
                        <li class="subm"><a id="page_ustrazvitie" href="ustrazvitie/index.htm" tppabs="http://www.umgukraine.com/ru/ustrazvitie">Устойчивое развитие<span class="fa fa-angle-down"></span></a>
                            <ul class="sub-menu">
                                <li><a href="ustrazvitie/index.htm#bl1" tppabs="http://www.umgukraine.com/ru/ustrazvitie#bl1">Наш подход</a></li>
                                <li><a href="ustrazvitie/index.htm#bl4" tppabs="http://www.umgukraine.com/ru/ustrazvitie#bl4">Проекты наших бизнесов</a></li>
                                <li><a href="ustrazvitie/index.htm#bl5" tppabs="http://www.umgukraine.com/ru/ustrazvitie#bl5">Линия доверия</a></li>
                            </ul>
                        </li>
                        <li class="subm"><a id="press-center_index" href="press-center/index.htm" tppabs="http://www.umgukraine.com/ru/press-center">Пресс-центр<span class="fa fa-angle-down"></span></a>
                            <ul class="sub-menu">
                                <li><a href="press-center/index.htm#bl1" tppabs="http://www.umgukraine.com/ru/press-center#bl1">Новости</a></li>
                                <li><a href="press-center/index.htm#bl5" tppabs="http://www.umgukraine.com/ru/press-center#bl5">СМИ о нас</a></li>
                                <li><a href="press-center/index.htm#bl3" tppabs="http://www.umgukraine.com/ru/press-center#bl3">Корпоративный блог</a></li>
                                <li><a href="press-center/index.htm#bl4" tppabs="http://www.umgukraine.com/ru/press-center#bl4">Видео</a></li>
                                <li><a href="press-center/index.htm#contacts" tppabs="http://www.umgukraine.com/ru/press-center#contacts">Контакты для прессы</a></li>
                            </ul>
                        </li>
                        <li class="subm"><a id="page_kariera" href="kariera/index.htm" tppabs="http://www.umgukraine.com/ru/kariera">Карьера<span class="fa fa-angle-down"></span></a>
                            <ul class="sub-menu">
                                <li><a href="kariera/index.htm#bl1" tppabs="http://www.umgukraine.com/ru/kariera#bl1">Кого мы ищем</a></li>
                                <li><a href="kariera/index.htm#bl4" tppabs="http://www.umgukraine.com/ru/kariera#bl4">Наши люди</a></li>
                                <li><a href="kariera/index.htm#bl3" tppabs="http://www.umgukraine.com/ru/kariera#bl3">Список вакансий</a></li>
                            </ul>
                        </li>

                    </ul>
                    <button type="button" class="navbar-toggle tabsearch" data-toggle="collapse" data-target="#tab-search">
                        <i class="fa fa-search"></i>
                    </button>

                    <form method="get" id="tab-search" class="navbar-form pull-right hidden-xs hidden-sm form-search" action="http://www.umgukraine.com/ru/search">
                        <div class="input-group">
                            <input value="" type="text" class="form-control srch-term" placeholder="Поиск..." name="s" />
                            <div class="input-group-btn">
                                <button class="btn btn-default btn-primary btn-search" type="submit"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                    <ul class="nav navbar-nav hidden-sm hidden-md hidden-lg social-header">
                        <li><a href="javascript:if(confirm('https://www.linkedin.com/company/3961207?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A3961207%2Cidx%3A2-4-5%2CtarId%3A1467724932271%2Ctas%3AUMG  \n\nThis file was not retrieved by Teleport Pro, because it is addressed using an unsupported protocol (e.g., gopher).  \n\nDo you want to open it from the server?'))window.location='https://www.linkedin.com/company/3961207?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A3961207%2Cidx%3A2-4-5%2CtarId%3A1467724932271%2Ctas%3AUMG'" tppabs="https://www.linkedin.com/company/3961207?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A3961207%2Cidx%3A2-4-5%2CtarId%3A1467724932271%2Ctas%3AUMG"><i class="linkedin"></i></a></li>
                        <li><a href="javascript:if(confirm('https://www.youtube.com/channel/UCRF-kfdHvQZCSYn_OZ4v2bA  \n\nThis file was not retrieved by Teleport Pro, because it is addressed using an unsupported protocol (e.g., gopher).  \n\nDo you want to open it from the server?'))window.location='https://www.youtube.com/channel/UCRF-kfdHvQZCSYn_OZ4v2bA'" tppabs="https://www.youtube.com/channel/UCRF-kfdHvQZCSYn_OZ4v2bA"><i class="youtube"></i></a></li>
                        <li><a href="javascript:if(confirm('https://www.facebook.com/umgcompany/  \n\nThis file was not retrieved by Teleport Pro, because it is addressed using an unsupported protocol (e.g., gopher).  \n\nDo you want to open it from the server?'))window.location='https://www.facebook.com/umgcompany/'" tppabs="https://www.facebook.com/umgcompany/"><i class="facebook"></i></a></li>
                        <li><a href="javascript:if(confirm('https://www.instagram.com/umg.company/  \n\nThis file was not retrieved by Teleport Pro, because it is addressed using an unsupported protocol (e.g., gopher).  \n\nDo you want to open it from the server?'))window.location='https://www.instagram.com/umg.company/'" tppabs="https://www.instagram.com/umg.company/"><i class="instagram"></i></a></li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
<div id="main" class="front-page">

