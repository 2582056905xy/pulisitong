//Tab切换
window.onload=function(){
	 oLis=document.getElementById('cont_nav').getElementsByTagName('li');
	 oDiv=document.getElementById('cont_infor').getElementsByTagName('div');
	if(oLis.length!=oDiv.length)
    { return;}
	for(var i=0;i<oLis.length;i++)
	{
		oLis[i].id=i;
		oLis[i].onmouseover=function(){
			for(var j=0;j<oLis.length;j++)
			{
				oLis[j].className=' ';
				oDiv[j].style.display='none';
			}
			this.className='nowstate';
			oDiv[this.id].style.display='block';
		};
	}
};
iorhjofkgbojdlkfgjertiogejthjeprtjgergirkdgjioerjhgoeritjgertgmrfjvmokfdbirdngmkoer;jtgywroitgyeorktnh


	
	

	
	