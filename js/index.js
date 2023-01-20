let cartas = document.getElementById('cartas');

let html = document.getElementById('html');
let css = document.getElementById('css');
let js = document.getElementById('js');
let java = document.getElementById('java');
let node = document.getElementById('node');

let tecno = document.getElementById('tecno');
let aboutme = document.getElementById('aboutme');
let personal = document.getElementById('personal');

let TextHTML = document.getElementById('TextHTML');
let TextCSS = document.getElementById('TextCSS');
let TextJS = document.getElementById('TextJS');
let TextJAVA = document.getElementById('TextJAVA');
let TextNODE = document.getElementById('TextNODE');

let back = document.getElementById('back');

let linha = document.getElementById('linha');

function focar(a){

    let timeoutIdHtml = setTimeout(function(){
        html.style.display = 'none';
    }, 2000);
    let timeoutIdCss = setTimeout(function(){
      css.style.display = 'none';
    }, 2000);
    let timeoutIdJs = setTimeout(function(){
      js.style.display = 'none'; 
    }, 2000);
    let timeoutIdJava = setTimeout(function(){
      java.style.display = 'none';
    }, 2000);
    let timeoutIdNode = setTimeout(function(){
      node.style.display = 'none';
    }, 2000);

    setTimeout(backbutton, 1500);

    personal.style.opacity = '0%';
    aboutme.style.opacity = '0%';
    tecno.style.opacity = '0%';

    setTimeout(function(){
        linha.style.display = 'flex';
        personal.style.display = 'none';
        aboutme.style.display = 'none';
        tecno.innerHTML = 'Tecnologia:';
    }, 2500)

    if (a == java) {
        TextJAVA.style.display = 'block';
        clearTimeout(timeoutIdJava);
        setTimeout(function(){
            java.style.opacity = '100%';
            TextJAVA.style.opacity = '100%';
            window.scrollTo(0, document.body.scrollHeight);
            tecno.style.opacity = '100%';
        }, 2500);
        java.style.cursor = 'auto'; 
        
    } else if (a == html) {
        TextHTML.style.display = 'block';
        clearTimeout(timeoutIdHtml);
        setTimeout(function(){
            html.style.opacity = '100%';
            TextHTML.style.opacity = '100%';
            window.scrollTo(0, document.body.scrollHeight);
            tecno.style.opacity = '100%';
        }, 2500);
        html.style.cursor = 'auto'; 
    } else if (a == css) {
        TextCSS.style.display = 'block';
        clearTimeout(timeoutIdCss);
        setTimeout(function(){
            css.style.opacity = '100%'; 
            TextCSS.style.opacity = '100%';
            window.scrollTo(0, document.body.scrollHeight);
            tecno.style.opacity = '100%';
    }, 2500);
        css.style.cursor = 'auto'; 
    } else if (a == js) {
        TextJS.style.display = 'block';
        clearTimeout(timeoutIdJs);
        setTimeout(function(){
            js.style.opacity = '100%'; 
            TextJS.style.opacity = '100%';
            window.scrollTo(0, document.body.scrollHeight);
            tecno.style.opacity = '100%';
        }, 2500);
        js.style.cursor = 'auto'; 
    } else {
        TextNODE.style.display = 'block';
        clearTimeout(timeoutIdNode);
        setTimeout(function(){
            node.style.opacity = '100%'; 
            TextNODE.style.opacity = '100%';
            window.scrollTo(0, document.body.scrollHeight);
            tecno.style.opacity = '100%';
    }, 2500);
        node.style.cursor = 'auto';
    }

    html.style.transition = '1.5s';
    css.style.transition = '1.5s';
    js.style.transition = '1.5s';
    java.style.transition = '1.5s';
    node.style.transition = '1.5s';

    html.style.opacity = '0%';
    css.style.opacity = '0%';
    js.style.opacity = '0%';
    java.style.opacity = '0%';
    node.style.opacity = '0%';
   }

function backbutton (){
    back.style.display = 'flex';
    setTimeout(function(){
        back.style.opacity = '40%';
    }, 1000);
}

back.addEventListener("mouseover", function(){back.style.opacity = '100%'});
back.addEventListener("mouseleave", function(){back.style.opacity = '40%'});

back.addEventListener("click", function(){
    restart();
})

html.addEventListener("click", function(){
    focar(html);
});
css.addEventListener("click", function(){
    focar(css);
});
js.addEventListener("click", function(){
    focar(js);
});
java.addEventListener("click", function(){
    focar(java);
});
node.addEventListener("click", function(){
    focar(node);
});

function restart(){
    document.location.reload(true);
};

