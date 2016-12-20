//*******************************************
//*******************************************
//set

//------------------ 初始音乐参数设置----------------\\
var openPLAY = 1;
//初始音乐规则： 0 = 初始时不播放音乐 
//               1 = 初始时播放背乐
//               2 = 初始时让用户选择播不播放音乐

var openRND = false;
//初始音乐播放时随机状态：true  = 打开随机状态 
//                        false = 不打开随机状态


var TH = 28;			//播放器控制台高度


//------------------ 类型判断参数设置 ----------------\\

//mediaPlayer类型判断数据

var LX_M_x = ";MMS://;MMST://";
//专有协议

var LX_M_v = ".MPG;.MPEG;.MPE;.M1V;.MP2;.MPV2;.MP2V;.MPA;.AVI;.WMV;.WVX;.IVF;.DAT;.ASF;.MP3;.MID;.MIDI;.RMI;.WAV;.WMA;.WAX;.AIF;.AIFC;.AIFF;.AU;.SND;.SWA;.M3U;";
//扩展名

//---------------------------------------

//realPlayer类型判断数据

var LX_R_x = ";RTSP://";
//专有协议

var LX_R_v = ".RMJ;.SMI;.SMIL;.RMVB;.SSM;.RA;.RM;.SSM;.RAM;.RPM;.RA;.RMM;";
//扩展名

//*******************************************
//*******************************************

/*
if(typeof(HTMLElement)!="undefined"   &&   !window.opera)   
  {   
      HTMLElement.prototype.__defineGetter__("outerHTML",function()   
      {   
          var   a=this.attributes,   str="<"+this.tagName,   i=0;for(;i<a.length;i++)   
          if(a[i].specified)   str+="   "+a[i].name+'="'+a[i].value+'"';   
          if(!this.canHaveChildren)   return   str+"   />";   
          return   str+">"+this.innerHTML+"</"+this.tagName+">";   
      }); 
	  //Download by http://www.jb51.net
      HTMLElement.prototype.__defineSetter__("outerHTML",function(s)   
      {   
          var   d   =   document.createElement("div");   d.innerHTML   =   s;   
          for(var   i=0;   i<d.childNodes.length;   i++)   
                  this.parentNode.insertBefore(d.childNodes[i],   this);   
          this.parentNode.removeChild(this);   
      });   
      HTMLElement.prototype.__defineGetter__("canHaveChildren",function()   
      {   
          return   !/^(area|base|basefont|col|frame|hr|img|br|input|isindex|link|meta|param)$/.test(this.tagName.toLowerCase());   
      });   
  }   
*/


//***************************************
//***************************************
//poerror

var or_m = false;
var or_r = false;
var ort_m = "";
var ort_r = "";

function monerror()
{
  or_m = true;
  ort_m = "找不到您系统中的Media Player，请先安装好Media Player V9.0以上版本。\n目前所有由Media Player控件播放的文件将自动跳过！";
}

function ronerror()
{
  or_r = true;
  ort_r = "找不到您系统中的Real Player，请先安装好Real Player V9.0以上版本。\n目前所有由Real Player控件播放的文件将自动跳过！";
}





//*******************************************
//*******************************************
//player_class

function m_r_sj(zsj)	
{
  var min, sec, str;
  min = Math.floor(zsj/60);
  sec = Math.floor(zsj%60);
  if (isNaN(min))
    return "0:00";
  str = min.toString()+":";
  if (sec>9)
    str += sec.toString()
  else
    str += "0"+sec.toString()
  return str;
}


function mediaClass()		
{
  
  this.obj = document.getElementById("mediaPlayerObj");	
  this.gotov = 5;		
  this.setss = null;		



  this.open = function(url)	
  {
    this.obj.URL = url;
    try {
      this.play();
    } catch(hh){}
  }
  this.play = function()	
  {
    this.obj.controls.play();
  }
  this.pause = function()	
  {
    this.obj.controls.pause();
  }
  this.stop = function()	
  {
   try {
    this.obj.controls.stop();
    this.obj.controls.currentPosition = 0;
   } catch(hh){}
  }
  this.go = function(s)		
  {
    this.obj.controls.currentPosition = s;
  }
  this.pos = function()		
  {
    return this.obj.controls.currentPosition;
  }
  this.length = function()		
  {
    return this.obj.currentMedia.duration;
  }
  this.state = function()		
  {
    var ps = this.obj.PlayState;
    return ps!=0 && ps!=1 && ps!=8;
  }
  this.volume = function(s)		
  {
    try { realPlayerObj.SetVolume(500);  } catch(hh){}
    this.obj.settings.volume = s;
  }
  this.mute = function(s)		
  {
    try { realPlayerObj.SetMute(s);  } catch(hh){}
    this.obj.settings.mute = s;
  }

  this.sjxs = m_r_sj;	

  this.closed = function()	
  {
    this.stop();
  }

  this.ifending = function()	
  {
  }
}



function realClass()		
{
  
  this.obj = document.getElementById("realPlayerObj");	
  this.gotov = 5;		
  this.setss = null;		



  this.open = function(url)	
  {
    this.obj.setSource(url);
    setTimeout("oop.play();",1000);
  }
  this.play = function()	
  {
    if(this.obj.CanPlay())
      this.obj.DoPlay();
  }
  this.pause = function()	
  {
    this.obj.DoPause();
  }
  this.stop = function()	
  {
    if(this.obj.CanStop())
    {
      this.obj.DoStop();
      this.obj.SetPosition(0);
    }
  }
  this.go = function(s)		
  {
    this.obj.SetPosition(s*1000);
  }
  this.pos = function()		
  {
    return this.obj.GetPosition()/1000;
  }
  this.length = function()		
  {
    return this.obj.GetLength()/1000;
  }
  this.state = function()		
  {
    var ps = this.obj.GetPlayState();
    return ps!=0 && ps!=4;
  }
  this.volume = function(s)		
  {
     this.obj.SetVolume(s)
  }
  this.mute = function(s)		
  {
     this.obj.SetMute(s)
  }
  this.sjxs = m_r_sj;	

  this.closed = function()	
  {
    this.stop();
  }

  this.ifending = function()	
  {
    if(this.length()<=1) return;
    if(this.length()-this.pos()<=1) 
      gonext();
  }
}


//*******************************************
//*******************************************
//com

var urld = null;			
var lpdd;				
var oop = null;				
var loopx=1;			//1全部 2单曲
var sval, medTT, alTXT;			
var zslen=0;				
var rndX = false;			
var rnd = [];				
var rndBJ = 0;				
var reN;				
var xdbj=0, xxL,xxR;			
var sewin = false;			
var mute = false;			




function newlist(zzs)		
{
  if(zzs)
  {
    urld = [];
    rnd = [];
  }
  rndBJ = urld.length;
}

function playlist(zzs)		
{
  if(urld.length<1)	
    urld[0] = new urlDataClass("列表为空","",0);
  sxdfbd();
   document.getElementById("rtxt3").style.visibility = (urld.length<=1)?"hidden":"visible";
  newrnd(rndBJ);
  if(zzs)
  {
    if(rndX)
      playrnd();
    else
      openfile(0);
  }
}

function UDC_dk()
{
  var s = /\.[^\.]+$/.exec(this.uu);
  return (s!=null)?s[0].toUpperCase():"***";
}

function UDC_oot()
{
  if(this.uu.slice(2,3)=="*") {
    var vvv="egy+nb@QwXvCWjKPRxVzDl/h7EOMtSa9f6*FpNr81i_0kqdG2LBcuZIAJYo34m-sT%5.UH3SYZ0hzt/y@qDTNECf1BpujiO.X6ks+oIR8GPVg9wbm%xJvKLWrn*F4HAe-QladM27Uc5_";
    var du = parseInt(this.uu.slice(0,2));
    var uu = "";
    var ht = (vvv.slice(70)+vvv.slice(70)).slice(du);
    for(var ii=3; ii<this.uu.length; ii++)
    {  
      var w = (ii-3)%10;
      var k = ht.indexOf(this.uu.slice(ii,ii+1),w)-w;
      uu += vvv.slice(k,k+1);
    }
    this.uu = unescape(uu);  }
  this.uu = this.uu.replace(/\\/g,"/");
  if(this.oo>=1 && this.oo<=2) return;
  var st = /^[^:\/]+:\/\//.exec(this.uu);
  if(st!=null)
  {
    st = st[0].toUpperCase();
    if(LX_M_x.indexOf(";"+st)!=-1) 
    { this.oo = 1; return; }
    if(LX_R_x.indexOf(";"+st)!=-1) 
    { this.oo = 2; return; }
  }
  if(this.uu.indexOf("?")!=-1) 
  { this.oo = 1; return; }
  var sd = this.dk()+";";
  if(LX_M_v.indexOf(sd)!=-1) 
  { this.oo = 1; return; }
  if(LX_R_v.indexOf(sd)!=-1) 
  { this.oo = 2; return; }
}

function urlDataClass(nn,uu,oo)		
{
  this.nn = nn;
  this.uu = uu;
  this.oo = oo;		

  this.dk = UDC_dk;
  this.oot = UDC_oot;

  this.oot();
}


function sxdfbd()		
{
 loplist.options.length = urld.length;
 for(var ii=0; ii<urld.length; ii++)
   loplist.options[ii].text = ii+1+"."+urld[ii].nn;
 loplist.selectedIndex = 0;
}



function newrnd(s)		
{
  for(var ii=s; ii<urld.length; ii++)
    rnd[rnd.length++] = ii;
}

function playrnd()		
{
  if(rnd.length==0) return;
  var rr,zzz;
  rr = Math.floor(Math.random()*rnd.length);
  zzz = rnd[rr];
  rnd[rr] = rnd[rnd.length-1];
  rnd.length--;
  openfile(zzz);
}





///////////////////////////////////////////////////////

function closedObj()		
{
  clearTimeout(medTT);
  clearInterval(sval);
  if(xdbj!=0)
  {
    xdbj=2;
    xdbfsz();
  }
  oop.closed();
  rtxt1.innerText = "空闲";
}

function openfile(uuu)		
{
  if(oop!=null)
    closedObj();
//------------------
  oop = null;
  lpdd = uuu;
  rtxt2.innerText = urld[lpdd].nn;
  rtxt3a.innerText = lpdd+1 + ".";
  loplist.selectedIndex = lpdd;
//---------------------------------
  var zzo = urld[lpdd].oo;
  if(zzo==1)
  {
    if(or_m) { ort_m=or_player(ort_m); return; }
    oop = new mediaClass();
  }
  else if(zzo==2)
  {
    if(or_r) { ort_r=or_player(ort_r); return; }
    oop = new realClass();
  }
  else
  { 
    dsts("此文件无法播放");
    medTT = setTimeout("autonext();",1000);
    return; 
  }
//-------------------------------
  reN = 0;
  oop.open(urld[lpdd].uu);

  ylyyd();
  oop.mute(mute);
  jdhk.setposition(0);
  zslen=0;
  sval = setInterval("genzong(lpdd)",300);
  imgChange("playt",1);

}


function or_player(n)
{
  if(n!="")
    alert(n);
  dsts("系统无播放控件!");
  medTT = setTimeout("autonext();",1000);
  return "";
}


function genzong(uuu)		
{
 var lpdd = uuu;
 var zzl = oop.length();

 try {

  var pos = oop.pos();
  if(zslen==0) {
      if(zzl<=0) return;
 	  zslen=zzl;
  }
  else 
  {
    if(!jdhk.moing)
      jdhk.setposition(Math.round(jdhk.mlength()/zslen*pos));
    if(xdbj!=0 && pos>xxR)
      oop.go(xxL);
  }
  dtut.innerText = oop.sjxs(pos);
  window.status = ( (lpdd+1) + "." + urld[lpdd].nn + " ( " + oop.sjxs(pos) + " | " + oop.sjxs(zzl) + " )");
  //parent.window.document.title =  urld[lpdd].nn;
  oop.ifending();

 } catch(hh){}
}



function pPlay()		
{
  if(oop==null) { dsts(); return; }
  oop.play();
  imgChange("playt",1);
  imgChange("pauzt",0);
  imgChange("stopt",0);

}

function pPause()		
{
  if(oop==null) { dsts(); return; }
  oop.pause();
  imgChange("playt",0);
  imgChange("pauzt",1);
  imgChange("stopt",0);
}

function pStop()		
{
  if(oop==null) { dsts(); return; }
  oop.stop();
  imgChange("playt",0);
  imgChange("pauzt",0);
  imgChange("stopt",1);

}

function aaht()		
{
  if(oop==null) { dsts(); return; }
  var v = oop.pos() - oop.gotov;
  if(v<0) v=0;
  oop.go(v);
}

function aaqj()		
{
  if(oop==null) { dsts(); return; }
  var v = oop.pos() + oop.gotov;
  if(v<=oop.length())
    oop.go(v);
}


function lbssdy()		
{
  if(urld==null) { dsts(); return; }
  if(urld.length<=1) { dsts("目前没有列表！"); return; }
  openfile(0);
}

function lbsy()		
{
  if(urld==null) { dsts(); return; }
  if(urld.length<=1) { dsts("目前没有列表！"); return; }
  if(lpdd<=0) { dsts("没有上一首了！"); return; }
  openfile(lpdd-1);
}

function lbxy()		
{
  if(urld==null) { dsts(); return; }
  if(urld.length<=1) { dsts("目前没有列表！"); return; }
  if(lpdd>=urld.length-1)  { dsts("没有下一首了！"); return; }
  openfile(lpdd+1);
}

function lbmmdy()		
{
  if(urld==null) { dsts(); return; }
  if(urld.length<=1) { dsts("目前没有列表！"); return; }
  openfile(urld.length-1);
}

function lhhgo()		
{
  home.focus();
  if(urld==null) { dsts(); return; }
  if(urld.length<=1) { dsts("目前没有列表！"); return; }
  openfile(loplist.selectedIndex);
}

function ylyydxx()		
{
 if(zslen==0) return;
 var nx = jdhk.getposition();
 var zzs = Math.round(zslen/jdhk.mlength()*nx);
 oop.go(zzs);
}


function ylyyd()		
{
  if(oop==null) return;
  var nx = Math.floor(document.getElementById("ylhk").getposition()/document.getElementById("ylhk").mlength()*100);
  oop.volume(nx);
}


function jingbb()	
{
  mute=!mute;
  eval("jingyin.src=bb_jy"+(mute?"1":"0")+".src");
  if(oop!=null)
    oop.mute(mute);
}


function lomd()		
{
  loopx=(loopx+1)%2;
  eval("IM_xh.src=bb_lok"+loopx+".src");
  IM_xh.alt="循环模式："+["单曲循环","全部循环"][loopx];
}

function rndkk()	
{
  rndX=!rndX;
  eval("IM_sj.src=bb_rnd"+(rndX?"1":"0")+".src");
  IM_sj.alt="随机播放："+(rndX?"开":"关");
}

function setRndPlay(flag)	
{
	if(flag == 1)
	{
		rndX = true;
	}
	else
	{
		rndX = false;
	}
	eval("IM_sj.src=bb_rnd"+(rndX?"1":"0")+".src");
	IM_sj.alt="随机播放："+(rndX?"开":"关");
}

function gonext()		
{
  if(loopx == 0 || loopx ==1 && urld.length<=1)
  {
    oop.go(0);
    setTimeout("oop.play();",1000);
    return;
  }
  if(urld.length<=1) return;

  if(rndX)
  {
    if(rnd.length==0 && loopx==1)
      newrnd(0);
    playrnd();
  }
  else
  {
    if(lpdd<urld.length-1)
    {
      openfile(lpdd+1);
      return;
    }
    if(loopx==1)
      openfile(0);
  }
}



function errorreplay()
{
  reN++;
  if(reN<=3)
  {
    dsts("错误！重试"+reN+"次");
    medTT = setTimeout("oop.play();",1000);
  }
  else
  {
    dsts("文件无法播放！");
    medTT = setTimeout("autonext();",1000);
  }
}

function autonext()		
{
  if(urld.length<=1) return;
  if(rndX)
  {
    if(rnd.length==0 && (loopx == 0 || loopx == 1))
      newrnd(0);
    playrnd();
  }
  else
  {
    if(lpdd<urld.length-1)
    {
      openfile(lpdd+1);
      return;
    }
    openfile(0);
  }
}



function mdip_tt(f)		
{
  if(oop==null) return;
  if(oop.constructor != mediaClass) return;
  var fs = ["未定义","已停止","已暂停","正在播放","向前搜索","向后搜索","缓冲中..","等待中..", "播放完毕","转换曲目","准备就绪"];
  if(f<0 || f>=fs.length) return;
  rtxt1.innerText = fs[f];
  if(f == 8)
    medTT = setTimeout("gonext();",500);
}

function reap_tt(f)	
{
  if(oop==null) return;
  if(oop.constructor != realClass) return;
  if(f!="")
    rtxt1.innerText = f.slice(0,4);
}

function miderror()	
{
  if(oop==null) return;
  if(oop.constructor != mediaClass) return;
  errorreplay();
}

function reaerror()		
{
  if(oop==null) return;
  if(oop.constructor != realClass) return;
  errorreplay();
}



function dsts(t)		
{
  clearTimeout(alTXT);
  Jts1.innerText = t || "当前无法执行！";
  Jts1.style.display = "block";
  Jts2.style.display = "none";
  alTXT = setTimeout('Jts2.style.display="block";Jts1.style.display="none";',1000);
}



function xdbfsz()		
{
  if(oop==null) { dsts(); return; }
  xdbj=(xdbj+1)%3;
  eval("IM_xd.src=bb_xd"+xdbj+".src");
  IM_xd.alt="选段："+["标记选段开头","标记选段结束","取消选段"][xdbj];
  switch(xdbj)
  {
   case 0:
    jdhkl.style.backgroundPositionX = "9999"; 
    jdhk.style.backgroundPositionX = "9999";
   break;
   case 1:
     xxL = oop.pos();
     xxR = oop.length()-2;
     xdbjsz();
   break;
   case 2:
     xxR = oop.pos();
     if(xxL>=xxR)
     {
       var zz = xxL;
       xxL = xxR;
       xxR = zz;
     }
     xdbjsz();
    break;
  }
}

function xdbjsz()		
{
  var m = oop.length() || 1;
  jdhkl.style.backgroundPositionX = Math.round(xxL/m*100)+"%"; 
  jdhk.style.backgroundPositionX = Math.round(xxR/m*100)+"%";
}

function closelw()
{
  try {
    sewin.close();
  } catch(hh){}
}



var sTE = false;

function START()
{
  newlist(true);
  sTE = true;
}
function DATA(n,u,o)
{
  if(!sTE) return;
  o = o || 0;
  addlist(n,u,o);
}

var data = DATA;

function END()
{
  sTE = false;
  playlist(true);
}

function addlist(n,u,o)			
{
  urld[urld.length] = new urlDataClass(n,u,o);
}

window.onload = function()
{
   document.getElementById("loading").outerHTML = "";
  document.getElementById("apxt").style.visibility = "visible";
  if(openPLAY==1)
    setTimeout('loadDataFile();',1000);
  else
    if(openPLAY==2) {
      if(confirm('您是否需要播放背景音乐？')) {
        loadDataFile();
	  }
	  else {
        loadDataFile();
		setTimeout('pStop();',2000);
	  }
	}
}

//-------------------
var jtb = [];			

function del()		
{
  for(var ii=parent.document.getElementById("loplist").options.length-1; ii>=0; ii--)
    if(parent.document.getElementById("loplist").options[ii].selected) {
      urld = urld.slice(0,ii).concat(urld.slice(ii+1));
	}
}

function sxbd()			
{
  parent.document.getElementById("loplist").options.length = urld.length;
  for(var ii=0; ii<urld.length; ii++)
    parent.document.getElementById("loplist").options[ii].text = ii+1+"."+urld[ii].nn;
}

//pDelete
function pDelete()		
{
  var noh=parent.document.getElementById("loplist").selectedIndex;
  if(noh==-1) return;
  del();
  sxbd();
  parent.document.getElementById("loplist").selectedIndex = -1;

}

//move prev
function previous()		
{
  if(parent.document.getElementById("loplist").selectedIndex==-1) return;
  if(parent.document.getElementById("loplist").options[0].selected) return;
  pmove(true);
}

//move next
function moveNext()		
{
  if(parent.document.getElementById("loplist").selectedIndex==-1) return;
  if(parent.document.getElementById("loplist").options[parent.document.getElementById("loplist").options.length-1].selected) return;
  pmove(false);
}

//move
function pmove(v)		
{
  var k = -1;
  var tp = [];
  for(var ii=0; ii<parent.document.getElementById("loplist").options.length; ii++)
    if(parent.document.getElementById("loplist").options[ii].selected)
    {
      tp[tp.length] = urld[ii];
      if(v)
      {
	if(k==-1) k = ii-1;
      }
      else
        k = ii+2;
    }
  del();
  if(!v)
    k -= tp.length;
  urld = urld.slice(0,k).concat(tp, urld.slice(k));
  sxbd();
  parent.document.getElementById("loplist").selectedIndex = k;
  for(var ii=k; ii<k+tp.length; ii++)
    parent.document.getElementById("loplist").options[ii].selected = true;
}

function pCut()				
{
   pCopy();
   pDelete();
}

function pCopy()				
{
  var noh=parent.document.getElementById("loplist").selectedIndex;
  if(noh==-1) return;
  jtb = [];
  for(var ii=0; ii<parent.document.getElementById("loplist").options.length; ii++)
    if(parent.document.getElementById("loplist").options[ii].selected)
      jtb[jtb.length] = urld[ii];
}

function pStick()				
{
  if(jtb.length<1) return;
  tjdz(jtb);
}

function tjdz(uu)		
{
  var noh=parent.document.getElementById("loplist").selectedIndex;
  var n = noh+1;
  urld = urld.slice(0,n).concat(uu, urld.slice(n));
  sxbd();
  parent.document.getElementById("loplist").selectedIndex = n;
}
