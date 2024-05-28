var form = document.querySelector('form');
var load = document.querySelector('.loading-icon');
var load_text = document.querySelector('.loading-text');
document.onreadystatechange = function(){
    if (document.readyState == "complete"){
        setTimeout(function(){
        form.style.display = 'flex';
        load.style.display = 'none';
        load_text.style.display = 'none';
       },5000)
    }else{
    form.style.display = 'none';
    load.style.display = 'flex';
    load_text.style.display = 'flex';
    }
}
