function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6eTjbPVZnUG":
        Script1();
        break;
      case "6boPZH5uQwk":
        Script2();
        break;
  }
}

function Script1()
{
  if(void 0===window.stencildatacloud){var player=GetPlayer(),targlink="https://cluelabs.com/stencil/display/widget-data-cloud-init?authtool=sl&v=1597147292&chart=MjM3fDE1MDN8YmE4ZTM4YTQ4ZDBhNjkyZWU3NjY5MzNjZGIyMWM3OGM";xhttp=new XMLHttpRequest,xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){var t=this.responseText,e=document.getElementsByTagName("head")[0],a=document.createElement("script");e.appendChild(a),a.appendChild(document.createTextNode(t)),window.stencildatacloud=!0}},xhttp.open("GET",targlink,!0),xhttp.send()}

}

function Script2()
{
  var player = GetPlayer();
var nombre = player.GetVar("name");
CloudSet('nombre', nombre);
var curso = player.GetVar("curso");
CloudSet('curso', curso);
var calificacion = player.GetVar("calificacion");
CloudSet('calificacion', calificacion);
}

