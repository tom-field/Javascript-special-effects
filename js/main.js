window.onload=function ()
{
	var oUl=document.getElementById('ul_container');
	var aLi=oUl.getElementsByTagName('li');
	
	var aLiPosition=[];
	var i=0;
	var oLastPostion={x:0, y:0};
	
	for(i=0;i<aLi.length;i++)
	{
		aLiPosition[i]={x: aLi[i].offsetLeft, y: aLi[i].offsetTop};
	}
	
	new MiaovPerfectDrag
	(
		document.body,
		function ()
		{
			return oLastPostion;
		}
		,
		function (x, y)
		{
			oLastPostion.x=x;
			oLastPostion.y=y;
			
			for(i=0;i<aLi.length;i++)
			{
				aLi[i].style.left=aLiPosition[i].x+x*parseInt(aLi[i].style.zIndex)*0.1+'px';
				aLi[i].style.top=aLiPosition[i].y+y*parseInt(aLi[i].style.zIndex)*0.1+'px';
			}
		},null
	);
};