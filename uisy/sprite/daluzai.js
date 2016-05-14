function MouseHover(hover_obj,show_style,hide_style){$(hover_obj).hover(function(){$(this).attr('className',show_style)},function(){$(this).attr('className',hide_style)});}
function splitRow(get_id,get_explode,dis_type,explode_style){if(dis_type==1){$('#'+get_id).find(get_explode).not(":odd").attr('className',explode_style)}else{$('#'+get_id).find(get_explode+':odd').attr('className',explode_style)}}
function returnDisplay(call_id,dis_style){$('#'+call_id).attr('className',dis_style);}
function CHK_length(mix_length,max_length,str){if(mix_length!=='auto'){if(str.length<mix_length){return false;}else{return true;}}
if(max_length!=='auto'){if(str.length>max_langth){return false;}else{return true;}}}
function checkEmail(email){var emailRegExp=new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");if(!emailRegExp.test(email)||email.indexOf('.')==-1){return false;}else{return true;}}
function selectCheckbox(get_id){var get_obj=$('#'+get_id).find('input');if(get_obj.attr('checked')===true){get_obj.attr('checked',false)}else{get_obj.attr('checked',true);}}
function getCheckbox(get_name,explode){var res='';$("input[name="+get_name+"]").each(function(index){if($(this).attr('checked')===true){res+=$(this).val()+explode;}});return res;}
function getRadio(get_name){return $('input[name$='+get_name+']').filter(':checked').val();}
function select_Sprite(event_id,item_id,item_child_tag,item_child_def_style,item_child_hover_style){$('#'+event_id).click(function(){$('#'+item_id).fadeIn(200,function(){$(this).css('display','block')});})
var item_child_tag_obj=$('#'+item_id).find(item_child_tag);MouseHover(item_child_tag_obj,item_child_hover_style,item_child_def_style);item_child_tag_obj.click(function(){var set_val=$(this).html();$('#'+event_id).find('input').val(set_val);$('#'+item_id).fadeOut(200,function(){$(this).css('display','none');})})}
function def_value(get_id,msg,get_obj){if(typeof(get_obj)=='undefined'){get_obj='input';}
if(get_obj==''){var set_obj=$('#'+get_id);}else{var set_obj=$('#'+get_id).find(get_obj);}
if(set_obj.val()==""){set_obj.val(msg);set_obj.css('color','#949494');}
set_obj.click(function(){if($(this).val()==msg){$(this).val('');set_obj.css('color','');}});set_obj.bind("blur",function(){if($(this).val()==''){$(this).val(msg);set_obj.css('color','#949494');}});}
function copyToClipBoard(get_id){clipBoardContent=document.getElementById(get_id).value;if(window.clipboardData){window.clipboardData.clearData();window.clipboardData.setData("Text",clipBoardContent);}else if(navigator.userAgent.indexOf("Opera")!=-1){window.location=clipBoardContent;}else if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}catch(e){alert("您的当前浏览器设置已关闭此功能！请按以下步骤开启此功能！\n新开一个浏览器，在浏览器地址栏输入'about:config'并回车。\n然后找到'signed.applets.codebase_principal_support'项，双击后设置为'true'。\n声明：本功能不会危极您计算机或数据的安全！");}
var clip=Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);if(!clip)return;var trans=Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);if(!trans)return;trans.addDataFlavor('text/unicode');var str=new Object();var len=new Object();var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);var copytext=clipBoardContent;str.data=copytext;trans.setTransferData("text/unicode",str,copytext.length*2);var clipid=Components.interfaces.nsIClipboard;if(!clip)return false;clip.setData(trans,null,clipid.kGlobalClipboard);}
alert("已成功复制！");return true;}
function getBrowser(get_ver){var get_borwser=navigator.userAgent;var res='unknow';var ver='unknow';var is_ie=get_borwser.indexOf('MSIE');var is_firefox=get_borwser.indexOf('Firefox');var is_opera=get_borwser.indexOf('Opera');var is_chrome=get_borwser.indexOf('Chrome');var is_safari=get_borwser.indexOf('Safari');if(is_ie!==-1){res='ie';}
else if(is_firefox!==-1){res='firefox'}
else if(is_opera!==-1){res='opera'}
else if(is_chrome!==-1){res='chrome'}
else if(is_safari!==-1){res='safari'}
if(get_ver===true){if(res=='ie'){ver=parseFloat(get_borwser.substring(is_ie+5,get_borwser.indexOf(";",is_ie)));}else{var explode=get_borwser.split("/");ver=parseFloat(explode[3]);}
res=res+ver}
return res;}
function dis_guide(guide_arr,def_style,show_style){var count=0;var guide_arr_length=guide_arr.length;var source=window.location;source=source.toString();for(var i=0;i<guide_arr_length;i++){$('#'+guide_arr[i]).attr('className',def_style);if(source.indexOf(guide_arr[i])!==-1){$('#'+guide_arr[i]).attr('className',show_style);}else{count+=1;}
if(count>=guide_arr_length){$('#'+guide_arr[0]).attr('className',show_style);}}}
function getRequest(paras){var url=location.href;var paraString=url.substring(url.indexOf("?")+1,url.length).split("&");var paraObj={}
for(i=0;j=paraString[i];i++){paraObj[j.substring(0,j.indexOf("=")).toLowerCase()]=j.substring(j.indexOf("=")+1,j.length);}
var returnValue=paraObj[paras.toLowerCase()];if(typeof(returnValue)=="undefined"){return"";}else{return returnValue;}}
function Enter_Ctrl(get_id,ent,fun){if(typeof(get_id)=='undefined'||get_id==''){var set_obj=$(document);}else{var set_obj=$('#'+get_id);}
if(ent==13){set_obj.keypress(function(e){if(e.which==13||e.which==10){eval(fun);}})}else{set_obj.keypress(function(e){if(e.ctrlKey&&e.which==13||e.which==10){eval(fun);}})}}
function go_URL(type,url){if(type=='blank'){window.open(url,'');}else{window.location=url;}}
function getRandom(countRandom){var res=Math.round(Math.random()*countRandom);return res;}
var moveAlertBox=function(get_id,obj_expired,timed,type){var set_id=get_id;var e=obj_expired;var t=timed;var k;var c=0;if(type==0){move='width';}else{move='height';}
this.show=function(){$('#'+set_id).css('display','block');k=setInterval(show_event,17);}
this.hide=function(){$('#'+set_id).bind("click",function(){k=setInterval(hide_event,17);})}
function show_event(){c=c+e/t;$('#'+set_id).css(move,c);if(c>e){clearInterval(k);}}
function hide_event(){c=c-t/e;$('#'+set_id).css(move,c);if(c<0){clearInterval(k);$('#'+set_id).css('display','none');}}}
var TAB_Slider=function(guide_id,guide_tag,main_id,main_tag,guide_showStyle,guide_hideStyle,main_showStyle,main_hideStyle){var guide_obj=$('#'+guide_id).find(guide_tag);var main_obj=$('#'+main_id).find(main_tag);if(guide_obj.length!==main_obj.length){alert("guide_id与main_id参数长度不一致");return false;}
this.onClick=function(){guide_obj.each(function(i){$(this).click(function(){guideFun($(this),i);})})}
this.onHover=function(){guide_obj.each(function(i){$(this).hover(function(){guideFun($(this),i);},function(){})})}
function guideFun(get_obj,i){guide_obj.attr('className',guide_hideStyle);get_obj.attr('className',guide_showStyle);main_obj.css('display','none');main_obj.attr('className',main_hideStyle);main_obj.each(function(j){if(j==i){$(this).fadeIn(300,function(){$(this).attr('className',main_showStyle);})}})}}
function moveSlider(get_id,move_case,item_case,setIntervalTime){var scrtime;$("#"+get_id).hover(function(){clearInterval(scrtime);},function(){scrtime=setInterval(function(){var $item=$("#"+get_id+" "+move_case);var liHeight=$item.find(item_case+":last").height();$item.animate({marginTop:liHeight+"px"},1000,function(){$item.find(item_case+":last").prependTo($item)
$item.find(item_case+":first").hide();$item.css({marginTop:0});$item.find(item_case+":first").fadeIn(1000);});},setIntervalTime);}).trigger("mouseleave");}
var outBox=function(box_Id){var rand_num=getRandom(1000);var mask_case='mask_case_for_daluzai'+rand_num;var get_browser=getBrowser(true);this.openBox=function(box_show_style,mask_style,is_center){$('#'+box_Id).fadeIn(600,function(){$(this).attr('className',box_show_style);})
$(document.body).append('<div id="'+mask_case+'"></div>');var ww=$(document).width();var wh=$(document).height();var gw=$(window).width();var gh=$(window).height();$('#'+mask_case).css({'width':'100%','height':wh,'position':'absolute','z-index':999,'top':0,'left':0});$('#'+mask_case).addClass(mask_style);if(is_center===true){var bw=(gw/2)-$('#'+box_Id).width()/2;var bh=(gh/2)-$('#'+box_Id).height()/2;$('#'+box_Id).css({'top':bh,'left':bw});if(get_browser==='ie6'){var is_position='absolute';}else{var is_position='fixed';}}
$('#'+box_Id).css({'position':is_position,'z-index':1000});$('#'+mask_case).click(function(){quitBox_event();})}
this.quitBox=function(){quitBox_event();}
function quitBox_event(){$('#'+box_Id).fadeOut(600,function(){$('#'+mask_case).fadeOut(600,function(){$(this).empty().remove();})})}}
var onEnterFrame=function(){var key;var events;this.startFlash=function(fn){events=fn;key=setInterval(fnFlash,1);}
this.endFlash=function(){stopFlash();}
function stopFlash(){if(typeof(key)=='undefined'){alert('Can not find key!');}else{clearInterval(key);}}
function fnFlash(){eval(events);}}
function ebf_ver(){return"大陆仔JS库"+1.3+"\n 基于jQuery1.32结构\n 感谢您的使用\n daluzai.net";}