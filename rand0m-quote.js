function rand()
{
    var a=document.getElementById('image-');
    var random=Math.floor(Math.random()*6+1);
    console.log(random);
    a.src="image-"+random+".PNG";
    var b=document.getElementById('output').innerHTML=a;
}