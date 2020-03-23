let btn = document.querySelector('#enter');
let text = document.querySelector('#text');
let ul = document.querySelector('ol');
let msg = document.querySelector('#msg');
let dlt = document.querySelector('#delete');
let num = document.querySelector('#num');
let numdone = document.querySelector('#num2');
let done = document.querySelector('#done');


text.addEventListener('focus', function(){
    msg.innerHTML= "";
})
num.addEventListener('focus', function(){
    msg.innerHTML= "";
})
numdone.addEventListener('focus', function(){
    msg.innerHTML= "";
})

btn.addEventListener('click', function(){
    if(text.value.length > 0){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(text.value));
        ul.appendChild(li);
        text.value="";
    }else {
        msg.style.color = 'red';
        msg.innerHTML = "Please fill the input field";
    }
});
text.addEventListener('keypress', function(event){
    if(text.value.length > 0 && event.keyCode === 13){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(text.value));
        ul.appendChild(li);
        text.value="";
    }
});

dlt.addEventListener('click', function(){
    if(num.value.length > 0){
        var removeme = document.getElementsByTagName('li')[num.value-1];
        ul.removeChild(removeme);
        num.value = "";
    }else {
        msg.style.color = 'red';
        msg.innerHTML = "Please fill the input field";
    }
})
num.addEventListener('keypress', function(e){
    if(num.value.length > 0 && e.keyCode === 13){
        var removeme = document.getElementsByTagName('li')[num.value-1];
        ul.removeChild(removeme);
        num.value = "";
    }
})

done.addEventListener('click', function(){
    if(numdone.value.length > 0){
        var doneNode = document.getElementsByTagName('li')[numdone.value-1];
        doneNode.style.textDecoration = 'line-through';
        numdone.value = "";
    }else {
        msg.style.color = 'red';
        msg.innerHTML = "Please fill the input field";
    }
})

num2.addEventListener('keypress', function(e){
    if(numdone.value.length > 0 && e.keyCode === 13){
        var doneNode = document.getElementsByTagName('li')[numdone.value-1];
        doneNode.style.textDecoration = 'line-through';
        numdone.value = "";
    }
})