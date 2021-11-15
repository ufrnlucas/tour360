(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"minWidth":20,"shadow":false,"data":{"textToSpeechConfig":{"volume":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1},"name":"Player14994","locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt"},"gap":10,"scrollBarColor":"#000000","propagateClick":false,"scrollBarVisible":"rollOver","paddingTop":0,"id":"rootPlayer","horizontalAlign":"left","children":["this.MainViewer","this.Container_15E77977_1EDA_834D_41B8_64DFC58D69EA"],"paddingBottom":0,"paddingLeft":0,"mouseWheelEnabled":true,"width":"100%","paddingRight":0,"toolTipHorizontalAlign":"center","scripts":{"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"translate":TDV.Tour.Script.translate,"quizShowScore":TDV.Tour.Script.quizShowScore,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"existsKey":TDV.Tour.Script.existsKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"cloneCamera":TDV.Tour.Script.cloneCamera,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getKey":TDV.Tour.Script.getKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isPanorama":TDV.Tour.Script.isPanorama,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"clone":TDV.Tour.Script.clone,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"openLink":TDV.Tour.Script.openLink,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"init":TDV.Tour.Script.init,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizStart":TDV.Tour.Script.quizStart,"unregisterKey":TDV.Tour.Script.unregisterKey,"initQuiz":TDV.Tour.Script.initQuiz,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"registerKey":TDV.Tour.Script.registerKey,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizFinish":TDV.Tour.Script.quizFinish,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlays":TDV.Tour.Script.getOverlays,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeech":TDV.Tour.Script.textToSpeech,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"downloadFile":TDV.Tour.Script.downloadFile,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMainViewer":TDV.Tour.Script.getMainViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"mixObject":TDV.Tour.Script.mixObject,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPixels":TDV.Tour.Script.getPixels,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setLocale":TDV.Tour.Script.setLocale,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"shareSocial":TDV.Tour.Script.shareSocial,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setValue":TDV.Tour.Script.setValue,"setMapLocation":TDV.Tour.Script.setMapLocation,"playAudioList":TDV.Tour.Script.playAudioList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF},"verticalAlign":"top","backgroundPreloadEnabled":true,"downloadEnabled":false,"backgroundColorRatios":[0],"contentOpaque":false,"height":"100%","backgroundColor":["#FFFFFF"],"backgroundColorDirection":"vertical","desktopMipmappingEnabled":false,"backgroundOpacity":1,"borderRadius":0,"definitions": [{"shadow":false,"propagateClick":false,"cursor":"hand","width":40,"transparencyActive":true,"paddingTop":0,"id":"IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B","horizontalAlign":"center","pressedIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B_pressed.png","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","height":40,"backgroundOpacity":0,"borderRadius":0,"iconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B.png","mode":"push","rollOverIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B_rollover.png","class":"IconButton","borderSize":0,"data":{"name":"Button1162"},"minWidth":0,"minHeight":0},{"buttonRestart":"this.IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65","displayPlayOverlay":true,"viewerArea":"this.MainViewer","class":"VideoPlayer","buttonPause":"this.IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED","clickAction":"play_pause","displayPlaybackBar":true,"id":"MainViewerVideoPlayer"},{"shadow":false,"propagateClick":false,"gap":4,"scrollBarColor":"#000000","scrollBarVisible":"rollOver","width":392.01,"children":["this.IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35","this.IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65","this.IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674","this.IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82","this.Container_55DC4FA8_5E27_15CF_41BD_E12B3B6C43C0","this.IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E","this.IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60","this.IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D","this.IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842"],"paddingTop":0,"id":"Container_55DC4FA8_5E27_15CF_419E_B6601832ABA2","horizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","contentOpaque":false,"height":184.78,"layout":"horizontal","backgroundOpacity":0,"borderRadius":0,"scrollBarMargin":2,"overflow":"hidden","class":"Container","scrollBarOpacity":0.5,"borderSize":0,"data":{"name":"Container1156"},"minWidth":392,"minHeight":20,"scrollBarWidth":10},{"shadow":false,"propagateClick":false,"cursor":"hand","width":40,"transparencyActive":true,"paddingTop":0,"id":"IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED","horizontalAlign":"center","pressedIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED_pressed.png","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","height":40,"backgroundOpacity":0,"borderRadius":0,"iconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED.png","mode":"toggle","class":"IconButton","borderSize":0,"data":{"name":"Button1163"},"minWidth":0,"minHeight":0},{"shadow":false,"propagateClick":false,"cursor":"hand","width":40,"transparencyActive":true,"paddingTop":0,"id":"IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5","horizontalAlign":"center","pressedIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5_pressed.png","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","height":40,"backgroundOpacity":0,"borderRadius":0,"iconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5.png","mode":"push","rollOverIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5_rollover.png","class":"IconButton","borderSize":0,"data":{"name":"Button1164"},"minWidth":0,"minHeight":0},{"displayOriginPosition":{"hfov":165,"class":"RotationalCameraDisplayPosition","yaw":37.21,"pitch":-90,"stereographicFactor":1},"initialPosition":{"class":"PanoramaCameraPosition","yaw":37.21,"pitch":-2.81},"id":"panorama_14F6A465_1FA0_5FAD_41AE_37285481A8E9_camera","hoverFactor":0,"class":"PanoramaCamera","displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000,"easing":"linear"},{"class":"TargetRotationalCameraDisplayMovement","duration":3000,"easing":"cubic_in_out","targetPitch":-2.81,"targetStereographicFactor":0}],"automaticZoomSpeed":10},{"shadow":false,"propagateClick":false,"cursor":"hand","width":40,"transparencyActive":true,"paddingTop":0,"id":"IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674","horizontalAlign":"center","pressedIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674_pressed.png","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","height":40,"backgroundOpacity":0,"borderRadius":0,"iconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674.png","mode":"push","rollOverIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674_rollover.png","class":"IconButton","borderSize":0,"data":{"name":"Button1159"},"minWidth":0,"minHeight":0},{"aaEnabled":true,"buttonZoomOut":"this.IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35","gyroscopeVerticalDraggingEnabled":true,"buttonPlayLeft":"this.IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674","surfaceSelectionEnabled":false,"displayPlaybackBar":true,"viewerArea":"this.MainViewer","buttonMoveLeft":"this.IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82","class":"PanoramaPlayer","buttonPause":"this.IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED","buttonMoveUp":"this.IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B","buttonPlayRight":"this.IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60","buttonRestart":"this.IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65","mouseControlMode":"drag_rotation","buttonMoveDown":"this.IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5","touchControlMode":"drag_rotation","zoomEnabled":true,"buttonZoomIn":"this.IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842","buttonMoveRight":"this.IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"class":"PlayList","items":[{"camera":"this.panorama_14F6A465_1FA0_5FAD_41AE_37285481A8E9_camera","media":"this.panorama_14F6A465_1FA0_5FAD_41AE_37285481A8E9","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"video":{"height":644,"width":1144,"class":"VideoResource","levels":[{"width":1144,"framerate":23.98,"posterURL":"media/video_12CB59AE_1FA0_28BE_41AD_1CE8723F91ED_poster.jpg","url":"media/video_12CB59AE_1FA0_28BE_41AD_1CE8723F91ED.mp4","height":644,"class":"VideoResourceLevel","type":"video/mp4","bitrate":1325}]},"loop":false,"height":720,"thumbnailUrl":"media/video_12CB59AE_1FA0_28BE_41AD_1CE8723F91ED_t.jpg","width":1280,"autoplay":true,"id":"video_12CB59AE_1FA0_28BE_41AD_1CE8723F91ED","label":trans('video_12CB59AE_1FA0_28BE_41AD_1CE8723F91ED.label'),"class":"Video","data":{"label":"IMPROCESSO 5"},"scaleMode":"fit_inside"},{"shadow":false,"propagateClick":false,"cursor":"hand","width":40,"transparencyActive":true,"paddingTop":0,"id":"IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35","horizontalAlign":"center","pressedIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35_pressed.png","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","height":40,"backgroundOpacity":0,"borderRadius":0,"iconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35.png","mode":"push","rollOverIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35_rollover.png","class":"IconButton","borderSize":0,"data":{"name":"Button1157"},"minWidth":0,"minHeight":0},{"minWidth":1,"gap":1,"scrollBarColor":"#000000","propagateClick":false,"scrollBarVisible":"rollOver","children":["this.Container_55DC4FA8_5E27_15CF_419E_B6601832ABA2"],"paddingTop":0,"id":"Container_15E77977_1EDA_834D_41B8_64DFC58D69EA","horizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"width":"100%","paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"top","bottom":"0%","contentOpaque":false,"height":185,"layout":"horizontal","backgroundOpacity":0,"borderRadius":0,"scrollBarMargin":2,"overflow":"scroll","class":"Container","left":"0%","scrollBarOpacity":0.5,"borderSize":0,"data":{"name":"Container16156"},"shadow":false,"minHeight":1,"scrollBarWidth":10},{"class":"PlayList","items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_12CB59AE_1FA0_28BE_41AD_1CE8723F91ED","class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_3592170E_2503_B283_41B3_CB08DC58CA36, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3592170E_2503_B283_41B3_CB08DC58CA36, 0)"}],"id":"playList_3592170E_2503_B283_41B3_CB08DC58CA36"},{"shadow":false,"propagateClick":false,"cursor":"hand","width":40,"transparencyActive":true,"paddingTop":0,"id":"IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842","horizontalAlign":"center","pressedIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842_pressed.png","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","height":40,"backgroundOpacity":0,"borderRadius":0,"iconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842.png","mode":"push","rollOverIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842_rollover.png","class":"IconButton","borderSize":0,"data":{"name":"Button1168"},"minWidth":0,"minHeight":0},{"shadow":false,"propagateClick":false,"cursor":"hand","width":40,"transparencyActive":true,"paddingTop":0,"id":"IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E","horizontalAlign":"center","pressedIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E_pressed.png","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","height":40,"backgroundOpacity":0,"borderRadius":0,"iconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E.png","mode":"push","rollOverIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E_rollover.png","class":"IconButton","borderSize":0,"data":{"name":"Button1165"},"minWidth":0,"minHeight":0},{"toolTipShadowOpacity":1,"toolTipShadowColor":"#333333","toolTipBackgroundColor":"#F6F6F6","toolTipDisplayTime":600,"playbackBarBorderRadius":4,"playbackBarRight":0,"playbackBarBorderColor":"#AAAAAA","toolTipBorderRadius":6,"transitionMode":"blending","width":"100%","subtitlesTextShadowHorizontalLength":1,"translationTransitionDuration":1000,"subtitlesPaddingBottom":5,"id":"MainViewer","playbackBarLeft":0,"paddingLeft":0,"subtitlesBorderSize":0,"paddingRight":0,"subtitlesPaddingRight":5,"toolTipShadowHorizontalLength":0,"subtitlesShadow":false,"playbackBarProgressBorderRadius":0,"progressBackgroundColorRatios":[0,1],"toolTipTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#222222","#444444"],"toolTipTextShadowBlurRadius":3,"playbackBarProgressBorderColor":"#000000","toolTipShadowSpread":0,"transitionDuration":500,"playbackBarHeadHeight":30,"progressOpacity":1,"toolTipShadowBlurRadius":3,"subtitlesFontColor":"#FFFFFF","progressRight":10,"progressBarBackgroundColorDirection":"vertical","playbackBarOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"firstTransitionDuration":0,"height":"100%","playbackBarHeadBorderSize":0,"toolTipTextShadowOpacity":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadShadow":true,"progressBarBorderColor":"#000000","toolTipPaddingLeft":6,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColorRatios":[0,1],"progressBorderColor":"#AAAAAA","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBackgroundColorDirection":"vertical","subtitlesTextShadowColor":"#000000","playbackBarHeadBorderRadius":0,"subtitlesGap":0,"class":"ViewerArea","toolTipPaddingRight":6,"vrPointerSelectionTime":2000,"toolTipFontWeight":"normal","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"toolTipFontColor":"#606060","playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"surfaceReticleColor":"#FFFFFF","progressBarOpacity":1,"borderSize":0,"progressBarBackgroundColor":["#222222","#444444"],"surfaceReticleOpacity":0.6,"progressBottom":1,"minWidth":100,"vrPointerSelectionColor":"#FF6600","subtitlesTextDecoration":"none","minHeight":50,"playbackBarBottom":10,"subtitlesTextShadowBlurRadius":0,"toolTipFontFamily":"Arial","progressHeight":20,"vrPointerColor":"#FFFFFF","progressBackgroundOpacity":1,"progressBorderSize":2,"subtitlesEnabled":true,"playbackBarHeadShadowOpacity":0.7,"progressBarBorderRadius":4,"playbackBarProgressOpacity":1,"propagateClick":false,"progressBarBorderSize":0,"playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionOpacity":1,"subtitlesFontFamily":"Arial","paddingTop":0,"subtitlesBackgroundColor":"#000000","subtitlesTextShadowVerticalLength":1,"subtitlesPaddingLeft":5,"displayTooltipInSurfaceSelection":true,"subtitlesBottom":50,"paddingBottom":0,"toolTipHorizontalAlign":"center","playbackBarHeadShadowBlurRadius":3,"toolTipFontStyle":"normal","playbackBarBackgroundOpacity":1,"playbackBarHeight":20,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderRadius":4,"playbackBarHeadWidth":6,"toolTipFontSize":"12px","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBackgroundColorDirection":"vertical","progressLeft":10,"top":0,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipOpacity":1,"subtitlesFontWeight":"normal","toolTipBorderColor":"#767676","subtitlesOpacity":1,"subtitlesBorderColor":"#FFFFFF","playbackBarBorderSize":2,"borderRadius":0,"subtitlesPaddingTop":5,"playbackBarProgressBackgroundColorRatios":[0,1],"toolTipPaddingBottom":4,"toolTipBorderSize":3,"playbackBarProgressBorderSize":0,"displayTooltipInTouchScreens":true,"toolTipShadowVerticalLength":0,"subtitlesVerticalAlign":"bottom","doubleClickAction":"toggle_fullscreen","subtitlesHorizontalAlign":"center","playbackBarBackgroundColorDirection":"vertical","toolTipPaddingTop":4,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeadOpacity":1,"left":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesTextShadowOpacity":1,"shadow":false,"data":{"name":"Main Viewer"}},{"shadow":false,"propagateClick":false,"cursor":"hand","width":40,"transparencyActive":true,"paddingTop":0,"id":"IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82","horizontalAlign":"center","pressedIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82_pressed.png","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","height":40,"backgroundOpacity":0,"borderRadius":0,"iconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82.png","mode":"push","rollOverIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82_rollover.png","class":"IconButton","borderSize":0,"data":{"name":"Button1160"},"minWidth":0,"minHeight":0},{"shadow":false,"propagateClick":false,"cursor":"hand","width":40,"transparencyActive":true,"paddingTop":0,"id":"IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D","horizontalAlign":"center","pressedIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D_pressed.png","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","height":40,"backgroundOpacity":0,"borderRadius":0,"iconURL":"skin/IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D.png","mode":"toggle","class":"IconButton","borderSize":0,"data":{"name":"Button1167"},"minWidth":0,"minHeight":0},{"thumbnailUrl":"media/panorama_14F6A465_1FA0_5FAD_41AE_37285481A8E9_t.jpg","hfov":360,"hfovMin":"135%","id":"panorama_14F6A465_1FA0_5FAD_41AE_37285481A8E9","partial":false,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_14F6A465_1FA0_5FAD_41AE_37285481A8E9_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"tags":"ondemand","rowCount":4,"url":"media/panorama_14F6A465_1FA0_5FAD_41AE_37285481A8E9_0/{face}/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":24},{"width":6144,"tags":"ondemand","rowCount":2,"url":"media/panorama_14F6A465_1FA0_5FAD_41AE_37285481A8E9_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":12},{"width":3072,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_14F6A465_1FA0_5FAD_41AE_37285481A8E9_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":6},{"width":12288,"tags":"mobilevr2gen","rowCount":1,"url":"media/panorama_14F6A465_1FA0_5FAD_41AE_37285481A8E9_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":6}]}}],"label":trans('panorama_14F6A465_1FA0_5FAD_41AE_37285481A8E9.label'),"class":"Panorama","pitch":0,"vfov":180,"hfovMax":130,"data":{"label":"Sem nome_Cena2"},"overlays":["this.overlay_2A195DDE_2503_F183_419D_4F8551B7501D"]},{"shadow":false,"propagateClick":false,"gap":4,"scrollBarColor":"#000000","minHeight":20,"scrollBarVisible":"rollOver","width":40,"children":["this.IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B","this.IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED","this.IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5"],"paddingTop":0,"id":"Container_55DC4FA8_5E27_15CF_41BD_E12B3B6C43C0","horizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","contentOpaque":false,"height":"100%","layout":"vertical","backgroundOpacity":0,"borderRadius":0,"scrollBarMargin":2,"overflow":"hidden","class":"Container","scrollBarWidth":10,"scrollBarOpacity":0.5,"data":{"name":"Container1161"},"minWidth":20,"borderSize":0},{"shadow":false,"propagateClick":false,"cursor":"hand","width":40,"transparencyActive":true,"paddingTop":0,"id":"IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60","horizontalAlign":"center","pressedIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60_pressed.png","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","height":40,"backgroundOpacity":0,"borderRadius":0,"iconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60.png","mode":"push","rollOverIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60_rollover.png","class":"IconButton","borderSize":0,"data":{"name":"Button1166"},"minWidth":0,"minHeight":0},{"shadow":false,"propagateClick":false,"cursor":"hand","width":40,"transparencyActive":true,"paddingTop":0,"id":"IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65","horizontalAlign":"center","pressedIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65_pressed.png","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","height":40,"backgroundOpacity":0,"borderRadius":0,"iconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65.png","mode":"push","rollOverIconURL":"skin/IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65_rollover.png","class":"IconButton","borderSize":0,"data":{"name":"Button1158"},"minWidth":0,"minHeight":0},{"video":{"height":644,"width":1144,"class":"VideoResource","levels":[{"width":1144,"framerate":23.98,"posterURL":"media/video_12CB59AE_1FA0_28BE_41AD_1CE8723F91ED_poster.jpg","url":"media/video_12CB59AE_1FA0_28BE_41AD_1CE8723F91ED.mp4","height":644,"class":"VideoResourceLevel","type":"video/mp4","bitrate":1325}]},"videoVisibleOnStop":false,"loop":false,"hfov":53.5,"click":"this.overlay_2A195DDE_2503_F183_419D_4F8551B7501D.play()","roll":1,"image":"this.res_2A987AC9_2501_9381_419E_B68F630C0C14","autoplay":false,"pitch":2.94,"id":"overlay_2A195DDE_2503_F183_419D_4F8551B7501D","distance":50,"yaw":-7.58,"enabledInCardboard":true,"rotationY":-17,"class":"VideoPanoramaOverlay","useHandCursor":true,"vfov":36.6,"cues":[],"data":{"label":"Video"}},{"class":"ImageResource","levels":[{"height":720,"width":1280,"class":"ImageResourceLevel","url":"media/res_2A987AC9_2501_9381_419E_B68F630C0C14_0.jpg"}],"id":"res_2A987AC9_2501_9381_419E_B68F630C0C14"}],"scrollBarMargin":2,"mediaActivationMode":"window","overflow":"hidden","vrPolyfillScale":0.75,"layout":"absolute","class":"Player","start":"this.init()","scrollBarOpacity":0.5,"mobileMipmappingEnabled":false,"borderSize":0,"defaultVRPointer":"laser","buttonToggleMute":"this.IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D","minHeight":20,"scrollBarWidth":10};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.15.js.map
//Generated with v2021.2.15, Mon Nov 15 2021