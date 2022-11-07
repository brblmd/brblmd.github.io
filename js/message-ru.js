// JavaScript Document
document.writeln("<style type=\"text/css\">.message table{ border-collapse: collapse;}");
document.writeln(".message table td{ padding:4px; border:1px solid #cccccc;}");
document.writeln(".message table td input{border:1px solid #999999; padding:2px 5px;}");
document.writeln(".message table td input[type=\"submit\"]{ padding:5px; cursor:pointer;}");
document.writeln(".message table td select{ border:1px solid #999999;}");
document.writeln(".message table td textarea{ border:1px solid #999999;}</style>");
document.writeln("<div class=\"message\">");
document.writeln("<h3>ЗАПРОС</h3>");
document.writeln("<p>Пожалуйста, заполните ваше имя и ваше сообщение, и не забудьте почту и / или телефон, если вы хотите связаться. Пожалуйста, обратите внимание, что вам не нужно иметь почтовую программу, чтобы использовать эту функцию.</p><br />");
document.writeln("<form class=\"form-horizontal\" method=\"post\" name=\"form\" action=\"http://inquiry.sbmchina.com/updata.php\" onsubmit=\"return(CheckfootInput())\">");
document.writeln("<table border=\"1\" cellspacing=\"1\">");
document.writeln("<tr>");
document.writeln("<td><label class=\"control-label\">Продукты:</label></td>");
document.writeln("<td><select name=\"products\" class=\"input-xlarge\">");	
document.writeln("<option selected=\"selected\" value=\"\" style=\"color:#ff0000; font-weight:bold;\">Пожалуйста выберите!</option>");
document.writeln("<option value=\"Mobile crushing plant\">Мобильная Дробильная Установка</option>");
document.writeln("<option value=\"LM Vertical Grinding Mill\">Вертикальная Мельница серии LM</option>");
document.writeln("<option value=\"Jaw Crusher\">Щековая Дробилка серии PEW</option>");
document.writeln("<option value=\"Cone Crusher\">Гидравлическая Конусная Дробилка серии</option>");
document.writeln("<option value=\"MTW European Grinding Machine\">Трапециевидная Мельница серии MTW</option>");
document.writeln("<option value=\"Ultrafine Mill\">Мельница Микропорошка со средней скоростью XZM</option>");
document.writeln("<option value=\"Impact Crusher\">Гидравлическая Роторная Дробилка серии PFW</option>");
document.writeln("<option value=\"VSI Crusher\">Ударная Дробилка Вертикального Вала</option>");
document.writeln("<option value=\"Hydraulic Cylinder Cone Crusher\">Гидравлическая цилиндровая конусная дробилка серии HCS</option>");
document.writeln("<option value=\"Sand Washing Machine\"> машина для промывки песка</option>");
document.writeln("<option value=\"Vibrating Screen\">Вибрационный Грохотn</option>");
document.writeln("<option value=\"Vibrating Feeder\">Вибрационный Питатель</option>");
document.writeln("<option value=\"Belt Conveyor\">Ленточный Конвейер</option>");
document.writeln("<option value=\"Stone processing production line\">Полный Дробильный Комплекс</option>");
document.writeln("<option value=\"Industrial milling production line\">Комплекс для измельчения порошка</option>");
document.writeln("<option value=\"Beneficiation Production Line\">Обогатительное Оборудование</option>");
document.writeln("<option value=\"Not Sure\" style=\"color:#ff0000; font-weight:bold;\">Не уверен  !</option>");
document.writeln("</select></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td valign=\"top\"><label class=\"control-label\">материалы:</label></td>");
document.writeln("<td><!-- Multiple Checkboxes -->");
document.writeln("<label class=\"checkbox inline\">");	
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Dolomite\">");
document.writeln("Доломит</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Calcite\">");
document.writeln("Кальцит</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Quartz\">");
document.writeln("кварцевый</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Basalt\">");
document.writeln("базальт</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Barite\">");
document.writeln("барит</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Feldspar\">");
document.writeln("полевой шпат</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Gravel\">");
document.writeln("гравий</label>");
document.writeln("<br />");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Bentonite\">");
document.writeln("бентонит</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Gypsum\">");
document.writeln("гипс</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]2\" type=\"checkbox\" value=\"Granite\" />");
document.writeln("гранит</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Coal\">");
document.writeln("уголь</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Slag\">");
document.writeln("шлак</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Pebble\">");
document.writeln("галька</label>");
document.writeln("<br />");
document.writeln("<label class=\"checkbox inline\"> другой:");
document.writeln("<input name=\"title\" type=\"text\" value=\"Как: Мрамор\" style=\"color: rgb(153, 153, 153);\" onblur=\"if(value==\'\'){value=\'Как: Мрамор\';this.style.color=\'#999\';};\" onfocus=\"if(value==\'Как: Мрамор\'){value=\'\';this.style.color=\'#000\';};\" size=\"15\" />");
document.writeln("</label></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td valign=\"top\"><label class=\"control-label\">мощность:</label></td>");
document.writeln("<td><!-- Multiple Radios -->");
document.writeln("<label class=\"radio inline\">");
document.writeln("<input type=\"radio\" value=\" > 100 TPH \" name=\"capacity[]\">");
document.writeln("> 100 TPH </label>");
document.writeln("<label class=\"radio inline\">");
document.writeln("<input type=\"radio\" value=\" > 50 TPH \" name=\"capacity[]\">");
document.writeln("> 50 TPH </label>");
document.writeln("<label class=\"radio inline\">");
document.writeln("<input type=\"radio\" value=\" > 30 TPH \" name=\"capacity[]\">");
document.writeln("> 30 TPH </label>");
document.writeln("<br />");
document.writeln("<label class=\"radio inline\">");
document.writeln("<input type=\"radio\" value=\" > 10 TPH \" name=\"capacity[]\">");
document.writeln("> 10 TPH </label>");
document.writeln("<label class=\"radio inline\">");
document.writeln("<input type=\"radio\" value=\" > 1 TPH \" name=\"capacity[]\">");
document.writeln("> 1 TPH </label>");
document.writeln("<label class=\"radio inline\">");
document.writeln("<input type=\"radio\" value=\" < 1 TPH \" name=\"capacity[]\">");
document.writeln("< 1 TPH </label></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><!-- Text input-->");
document.writeln("<label class=\"control-label\" for=\"address\">Используйте место:</label></td>");
document.writeln("<td><input name=\"address\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'As: South Africa\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'As: South Africa\';this.style.color=\'#999\';};\" value=\"As: South Africa\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><!-- Text input-->");
document.writeln("<label class=\"control-label\" for=\"name\">название:<span class=\"red\">*</span></label></td>");
document.writeln("<td><input name=\"name\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'As: Mario\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'As: Mario\';this.style.color=\'#999\';};\" value=\"As: Mario\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><!-- Text input-->");
document.writeln("<label class=\"control-label\" for=\"input01\">Email:<span class=\"red\">*</span></label></td>");
document.writeln("<td><input name=\"email\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'As: sample@isp.com\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'As: sample@isp.com\';this.style.color=\'#999\';};\" value=\"As: sample@isp.com\" size=\"25\" maxlength=\"50\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><!-- Text input-->");
document.writeln("<label class=\"control-label\" for=\"phone\">телефон:</label></td>");
document.writeln("<td><input name=\"phone\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'As: 0086-21-51860251\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'As: 0086-21-51860251\';this.style.color=\'#999\';};\" value=\"As: 0086-21-51860251\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td valign=\"top\"><!-- Textarea -->");
document.writeln("<label class=\"control-label\">сообщение:<span class=\"red\">*</span></label></td>");
document.writeln("<td><textarea name=\"content\" cols=\"45\" rows=\"6\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'As: output size like 0-10,10-15, 15-20 mm for crushing or 75 microns ( 200 meshes) for mill machine and other requirements.\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'As: output size like 0-10,10-15, 15-20 mm for crushing or 75 microns ( 200 meshes) for mill machine and other requirements.\';this.style.color=\'#999\';};\">As: output size like 0-10,10-15, 15-20 mm for crushing or 75 microns ( 200 meshes) for mill machine and other requirements.</textarea></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><!-- Button --></td>");
document.writeln("<td><input type=\"submit\" value=\"Submit\" class=\"btn btn-primary\" /></td>");
document.writeln("</tr>");
document.writeln("</table>");
document.writeln("</form>");
document.writeln("</div>");

function is_number(str) {
exp = /[^0-9 .+()-]/g;
if (str.search(exp) != -1) {
return false;
}
return true;
}
function is_email(str) {
if ((str.indexOf("@") == -1) || (str.indexOf(".") == -1)) {
return false;
}
return true;
}
function CheckfootInput(){
if(document.form.products.value==""){
alert("Please Select A Product !");
document.form.products.focus();
return false;
}



if(document.form.name.value==''||document.form.name.value=='Such as: John'){
alert("Please fill out fields Name !");
document.form.name.focus();
return false;
}

if(document.form.email.value==''||document.form.email.value=='Such as: john@gmail.com'||!is_email(document.form.email.value)){
alert("Please fill out fields Email !");
document.form.email.focus();
return false;
}

if(document.form.phone.value==''||document.form.phone.value=='Such as: 0086-21-58386256'){
alert("Please fill out fields Phone !");
document.form.phone.focus();
return false;
}

if(document.form.content.value==''||document.form.content.value=='Other requirements: output size like 0-10,10-15, 15-20 mm for crushing or 75 microns ( 200 meshes) for mill machine and other requirements.'){
document.form.content.value=document.form.email.value+' '+document.form.name.value;
}
return true;
}