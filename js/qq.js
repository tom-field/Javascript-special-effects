lastScrollY=0;
function heartBeat(){
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
diffY = document.documentElement.scrollTop;
else if (document.body)
diffY = document.body.scrollTop
else
{/*Netscape stuff*/}

//alert(diffY);
percent=.1*(diffY-lastScrollY);
if(percent>0)percent=Math.ceil(percent);
else percent=Math.floor(percent);
document.getElementById(“lovexin12″).style.top=parseInt(document.getElementById(“lovexin12″).style.top)+percent+”px”;

lastScrollY=lastScrollY+percent;
//alert(lastScrollY);
}
suspendcode12=”<DIV id=\”lovexin12\” style=’right:22px;POSITION:absolute;TOP:100px;z-index:100′>”;
var recontent=’<table width=”100″ border=”0″ cellspacing=”0″ cellpadding=”0″>’+
‘<tr>’+
‘<td colspan=”3″><img src=”/static/image/index/QQ_3.gif” width=”106″ height=”71″ border=”0″ usemap=”#Map”></td>’+
‘</tr>’+
‘<tr>’+
‘<td width=”4″ height=”78″ background=”/static/image/index/QQ_8.gif”></td>’+
‘<td width=”98″ align=”center”><table width=”100%” cellspacing=”0″ cellpadding=”3″>’+
‘<tr>’+
‘<td width=”36%”><div align=”center”><img src=”/static/image/index/QQ.gif” width=”16″ height=”17″></div></td>’+
‘<td width=”64%”><a href=”http://wpa.qq.com/msgrd?V=1&Uin=342042888&Site=www.g101.com.cn &Menu=no” target=”_blank”>业务咨询</a></td>’+
‘</tr>’+
‘<tr>’+
‘<td><div align=”center”><img src=”/static/image/index/QQ.gif” width=”16″ height=”17″></div></td>’+
‘<td><a href=”http://wpa.qq.com/msgrd?V=1&Uin=342042888&Site=www.g101.com.cn &Menu=no” target=”_blank”>业务咨询</a></td>’+
‘</tr>’+
‘<tr>’+
‘<td><div align=”center”><img src=”/static/image/index/QQ.gif” width=”16″ height=”17″></div></td>’+
‘<td><a href=”http://wpa.qq.com/msgrd?V=1&Uin=342042888&Site=www.g101.com.cn &Menu=no” target=”_blank”>技术服务</a></td>’+
‘</tr>’+
‘<tr>’+
‘<td><div align=”center”><img src=”/static/image/index/QQ.gif” width=”16″ height=”17″></div></td>’+
‘<td><a href=”http://wpa.qq.com/msgrd?V=1&Uin=342042888&Site=www.g101.com.cn &Menu=no” target=”_blank”>意见反馈</a></td>’+
‘</tr>’+
‘</table></td>’+
‘<td width=”4″ background=”/static/image/index/QQ_7.gif”></td>’+
‘</tr>’+
‘<tr>’+
‘<td colspan=”3″><img src=”/static/image/index/QQ_12.gif” width=”106″ height=”44″></td>’+
‘</tr>’+
‘</table>’ +
‘<map name=”Map”>’+
‘<area shape=”circle” coords=”89,10,11″ href=”javascript:far_close();”>’+
‘</map>’;

document.write(suspendcode12);
document.write(recontent);
document.write(“</div>”);
window.setInterval(“heartBeat()”,1);

function far_close()
{
document.getElementById(“lovexin12″).innerHTML=”";
}

function setfrme()
{
var tr=document.getElementById(“lovexin12″);
var twidth=tr.clientWidth;
var theight=tr.clientHeight;
var fr=document.getElementById(“frame55la”);
fr.width=twidth-1;
fr.height=theight-30;
}
//setfrme()