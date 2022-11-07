// JavaScript Document
document.writeln("<div style=\"width:120px;height:245px;float:right; z-index:999;position:fixed !important; top/**/:150px; position:absolute; top:expression(offsetParent.scrollTop+400);right:20px;\">");
document.writeln("<div id=\"swt\"></div>");
document.writeln("<a href=\"javascript:void(0)\" onclick='openZoosUrl()' target=\"_blank\"><img src=\"/js/reponline.gif\" border=\"0\"></a></div>");
document.writeln("<div style=\"position:absolute; display:none; left:0px; top:0px;\" id=\"tranDiv\">");
document.writeln("<div style=\"position:absolute; left:0px; top:0px; width:100%; height:100%; background-color:#000000; filter:alpha(Opacity=50);opacity:0.5\" id=\"tranDivBack\"></div>");
document.writeln("<div style=\"position:absolute; width:422px; height:177px; position:fixed !important; top/**/:200px; position:absolute; top:expression(offsetParent.scrollTop+400); background-color:#e5edf5;\" id=\"infoDiv\"></div>");
document.writeln("</div>");
document.writeln("<style type=\"text/css\">");
document.writeln(".chat_main{ padding:5px 8px 8px 8px; width:404px; height:162px; border:2px solid #8dc4eb; background-color:#e1effc; font-family:Arial, Helvetica, sans-serif; font-size:12px;}");
document.writeln(".chat_main a{ text-decoration:none; color:#ffffff;}");
document.writeln(".chat_main a img{ border:none;}");
document.writeln(".chat_title{ font-weight:bold; height:16px; line-height:16px; float:left;}");
document.writeln(".chat_close{ float:right; width:11px; height:11px;  background-color:#00b0f0; border-radius:2px; text-align:center; font-weight:bold;}");
document.writeln(".chat_close a{ color:#FFF; line-height:10px;}");
document.writeln(".chat_content{ clear:both; height:124px; padding:15px 17px 5px 120px; border:1px solid #a7c5e3; background:url(/js/p.gif) no-repeat 10px center #ffffff;}");
document.writeln(".chat_text{ height:90px;}");
document.writeln(".botton_yes a{ float:right; height:20px; line-height:20px; font-weight:bold; color:#FFF; border:1px solid #65bf26; border-radius:2px; background-color:#98d753; padding:0 8px; margin-right:12px;}");
document.writeln(".botton_no a{ float:right; height:20px; line-height:20px; font-weight:bold; color:#FFF; border:1px solid #ffa050; border-radius:2px; background-color:#ffae69; padding:0 8px;}");
document.writeln("</style>");
document.writeln("<div id=\"popLayer\" style=\"display:none; padding:20px;\">");
document.writeln("<div class=\"chat_main\">");
document.writeln("<div class=\"chat_title\">SBM le está invitando a un chat en vivo.z</div>");
document.writeln("<div class=\"chat_close\"><a href=\"javascript:void(0)\" onclick=\"closeWindow();\">x</a></div>");
document.writeln("<div class=\"chat_content\">");
document.writeln("<div class=\"chat_text\">Hola, Bienvenido a nuestro sitio web. Si usted tiene alguna pregunta, por favor tomar esta petición de diálogo y voy a ayudarle a conseguir a través.</div>");
document.writeln("<div class=\"chat_botton\">");
document.writeln("<div class=\"botton_no\"><a href=\"javascript:void(0)\" onclick=\"closeWindow();\">Chatear tarde</a></div>");
document.writeln("<div class=\"botton_yes\"><a href=\"javascript:void(0)\" onclick='openZoosUrl()' target=\"_blank\">Chatear ahora</a></div>");
document.writeln("</div>");
document.writeln("</div>");
document.writeln("</div>");
document.writeln("</div>");
var div_width = 404;
var div_height = 162;
function showWindow(width,height){ 
	width = div_width;
	height = div_height;
	var windowstr= document.getElementById("popLayer").innerHTML;
	document.getElementById("infoDiv").innerHTML=windowstr; 
	document.getElementById("infoDiv").style.left=((document.body.clientWidth-width)>0?(document.body.clientWidth-width):0)/2+"px"; 
	document.getElementById("infoDiv").style.zIndex=10001;
	document.getElementById("infoDiv").style.width=width; 
	document.getElementById("infoDiv").style.height=height; 
	document.getElementById("tranDiv").style.height=document.body.clientHeight+ "px"; 
	document.getElementById("tranDiv").style.width=document.body.clientWidth+ "px"; 
	document.getElementById("tranDiv").style.display=""; 
	document.getElementById("tranDivBack").style.display=""; 
	document.getElementById("tranDivBack").style.zIndex=10000;
	document.getElementById("infoDiv").style.display=""; 
} 
function closeWindow(){ 
	document.getElementById("tranDiv").style.display="none"; 
	setTimeout('showWindow()', 10000);
} 
function openZoosUrl(){
	window.open('http://www.eastafricacrusher.com/livechat.html');
	document.getElementById("tranDiv").style.display="none"; 
}
window.load = setTimeout('showWindow()', 6000);