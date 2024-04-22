'use strict';

var tasklist = new Array("tom holiday","play ground","reading book","compelete task","practice coding");

generateList();

function generateList(){


    for(let value of tasklist){
        console.log(value);

        var liTag = document.createElement('li');
        console.log(liTag);

        var span1 = document.createElement('span');
        console.log(span1);
        span1.innerHTML = value;

        var span2 = document.createElement('span');
        console.log(span2);
        span2.innerHTML = 'X';
        span2.addEventListener('click',deleteData)


        liTag.append(span1);
        liTag.append(span2);
        document.querySelector('ul').append(liTag);
    }
}

document.querySelector('.btn1').addEventListener('click', function(){
    // console.log('tested');

    var textdata = document.querySelector('.txt').value

    console.log(textdata);
    console.log(tasklist.indexOf(textdata));

    if(tasklist.indexOf(textdata) == -1){
        tasklist.push(textdata);
        console.log(textdata);
        document.querySelector('ul').innerHTML = '';
        generateList();
        document.querySelector('p').innerHTML = 'Your Message Added'
    }
    else{
        document.querySelector('p').innerHTML = "This Message Already Exists";
    }
    document.querySelector('.txt').value = '';
});


function deleteData(){
    var searchContent = this.previousElementSibling.innerText;
    var indexNo = tasklist.indexOf(searchContent);
    // console.log(indexNo);
    tasklist.splice(indexNo,1);
    console.log(tasklist);
    document.querySelector('ul').innerHTML = '';
    generateList();
}


