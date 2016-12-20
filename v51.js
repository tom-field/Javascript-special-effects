function random()
{
	random.seed = (random.seed*random.a + random.c) % random.m;
	return random.seed / random.m;
}
window.onerror=_rsEH;

random.m=714025;
random.a=4096;
random.c=150889;
random.seed = (new Date()).getTime()%random.m;

// Error handling
function _rsEH(_rsE,_rsU,_rsL)
{
}

function rsCi()
{
	var _rsUA=navigator.appName+" "+navigator.appVersion;
	var _rsRUA=navigator.userAgent;
	var _rsWS=window.screen;
	var _rsBV=navigator.appVersion.substring(0, 1);
	var _rsNN=(_rsUA.indexOf('Netscape'));
	var _rsMC=(_rsUA.indexOf('Mac'));
	var _rsIE=(_rsUA.indexOf('MSIE'));
	var _rsXP=(_rsUA.indexOf('NT 5.1'));
	var _rsCE=(_rsUA.indexOf('Windows CE'));
	var _rsLX=(_rsUA.indexOf('Linux'));
	var _rsOP=(_rsRUA.indexOf('Opera'));
	var _rsKQ=(_rsUA.indexOf('Konqueror'));
	var _rsIEV=(parseInt(_rsUA.substr(_rsIE+5)));
	var _rsMSIE=false;
	var _rsIE6=false;
	var _rsOSXP=false;
	var _rsIE6XP=false;
	
	var _rsSR="";
	var _rsCD="";
	var _rsLG="";
	var _rsJE="";
	var _rsCK="";
	var _rsTZ="";
	var _rsCT="";
	var _rsHP="";
	var _rsTL="";
	
	var _rsSW="";
	var _rsSH="";
	var _rsEX="";

        if (_rsXP==-1) { _rsXP=(_rsUA.indexOf('NT 5.2')); }	
	_rsJE=(navigator.javaEnabled()==true)?"y":"n";
	if (_rsDT==1)
	{
		_rsTL=escape(document.title);
	}
	if((_rsIE>0)||((_rsNN!=-1)&&(_rsBV >=5)))
	{
		_rsCK=(navigator.cookieEnabled==true)?"y":"n";
	}
	if((_rsIE>=0)&&(_rsIEV>=5)&&(_rsMC==-1)&&(_rsOP==-1))
	{
		document.body.addBehavior("#default#clientCaps");
		_rsCT=document.body.connectionType;
		document.body.addBehavior("#default#homePage");
		_rsHP=(document.body.isHomePage(location.href))?"y":"n";
	}
	var _rsD = new Date();
	_rsTZ = _rsD.getTimezoneOffset()/-60;
	if((typeof(_rsWS)!="undefined")&&(_rsWS!=null))
	{
		_rsSW=_rsWS.width;
		_rsSH=_rsWS.height;
		_rsCD=_rsWS.colorDepth;
		_rsSR=_rsSW+'x'+_rsSH;
		if((_rsNN!=-1)&&(_rsBV >=4))
		{
			_rsCD=_rsWS.pixelDepth;
		}
	}
	if((_rsNN!=-1)&&(_rsBV >=4)||(_rsOP>=0))
	{
		_rsLG=navigator.language;
	}
	if((_rsIE!=-1)&&(_rsBV >=4)&&(_rsOP==-1))
	{
		_rsLG=navigator.userLanguage;
	}
	if(_rsIE>0)
	{
		_rsMSIE=true;
		if(_rsIEV>=6)
		{
			_rsIE6=true;
		}
	}
	if(_rsXP>0)
	{
		_rsOSXP=true;
	}
	//if((_rsOSXP==true)&&(_rsIE6==true))
	if(_rsIE6==true)
	{
		_rsIE6XP=true;
	}
	var _rsPR;
	if ((_rsMC==-1)&&((_rsNN==-1)||((_rsNN!=-1)&&(_rsBV>=4)))&&(_rsCE==-1)&&(_rsLX==-1)&&(_rsOP==-1)&&(navigator.javaEnabled())&&((_rsIE6XP!=true)||(_rsX6==1))&&(_rsDU==1))
	{
		_rsEX='<param name="ci" value="'+_rsCI+'"></param>';
		_rsEX=_rsEX+'<param name="cg" value="'+_rsCG+'"></param>';
		_rsEX=_rsEX+'<param name="rp" value="'+_rsRP+'"></param>';
		_rsEX=_rsEX+'<param name="si" value="'+_rsSI+'"></param>';
		_rsEX=_rsEX+'<param name="lp" value="'+_rsLP+'"></param>';
		if (_rsSW != "" && _rsSH != "")
		{
			_rsEX=_rsEX+'<param name="sr" value="'+_rsSW+'x'+_rsSH+'"></param>';
		}
		else
		{
			_rsEX=_rsEX+'<param name="sr" value="na"></param>';
		}
		_rsEX=_rsEX+'<param name="cd" value="' + _rsCD + '"></param>';
		_rsEX=_rsEX+'<param name="lg" value="' + _rsLG + '"></param>';
		_rsEX=_rsEX+'<param name="je" value="' + _rsJE + '"></param>';
		_rsEX=_rsEX+'<param name="ck" value="' + _rsCK + '"></param>';
		_rsEX=_rsEX+'<param name="tz" value="' + _rsTZ + '"></param>';
		_rsEX=_rsEX+'<param name="ct" value="' + _rsCT + '"></param>';
		_rsEX=_rsEX+'<param name="hp" value="' + _rsHP + '"></param>';
		_rsEX=_rsEX+'<param name="tl" value="' + _rsTL + '"></param>';
		_rsEX=_rsEX+'<param name="do" value="' + _rsDO + '"></param>';
		_rsEX=_rsEX+'<param name="ua" value="' + _rsRUA + '"></param>';
		_rsPR='<applet code="v51.class" codebase="';
		_rsPR=_rsPR+_rsND+'" width="1" height="2">'+_rsEX+'</applet>';
	}
	else
	{
		_rsPR='<img src="';
		_rsPR=_rsPR+_rsND+'cgi-bin/m?rnd='+(new Date()).getTime();
		_rsPR=_rsPR+'&ci='+_rsCI;
		_rsPR=_rsPR+'&cg='+_rsCG;
		_rsPR=_rsPR+'&sr='+_rsSR;
		_rsPR=_rsPR+'&cd='+_rsCD;
		_rsPR=_rsPR+'&lg='+_rsLG;
		_rsPR=_rsPR+'&je='+_rsJE;
		_rsPR=_rsPR+'&ck='+_rsCK;
		_rsPR=_rsPR+'&tz='+_rsTZ;
		_rsPR=_rsPR+'&ct='+_rsCT;
		_rsPR=_rsPR+'&hp='+_rsHP;
		_rsPR=_rsPR+'&tl='+_rsTL;
		_rsPR=_rsPR+'&si='+_rsSI;
		_rsPR=_rsPR+'&rp='+_rsRP;
		_rsPR=_rsPR+'" width="1" height="1" />';
	}
	document.write(_rsPR);
}

if((_rsSE)&&(random() <= _rsSM))
{
	var _rsIM='<scr'+'ipt language="JavaScript" type="text/javascript" src="'+_rsND+'cgi-bin/j?ci='+_rsCI+'&rd='+_rsRD+'&se='+_rsSE+'&sv='+_rsSV+'"><\/scr'+'ipt>';
	document.write(_rsIM);
}
else
{
	rsCi();
}
