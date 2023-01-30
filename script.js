function baguette_pressed(){
    if(document.getElementById('baguette').innerHTML == '<h1 onclick="baguette_pressed();" id="baguettetext">La Baguette🥖</h1>'){
        document.getElementById('baguette').innerHTML = '<h1 onclick="baguette_pressed();" id="baguettetext" style="font-size: 12rem;">🥖</h1>';
    }else{
        document.getElementById('baguette').innerHTML = '<h1 onclick="baguette_pressed();" id="baguettetext">La Baguette🥖</h1>';
    }
}

function onstart(){
    document.getElementById('baguette').innerHTML = '<h1 onclick="baguette_pressed();" id="baguettetext">La Baguette🥖</h1>';
}