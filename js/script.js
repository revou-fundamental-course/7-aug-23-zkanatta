const cmiring = document.getElementById("segi3c");
const btinggi = document.getElementById("segi3b");
const aalas = document.getElementById("segi3a");

cmiring.addEventListener('input', function(){
    const isic = cmiring.value;
})

btinggi.addEventListener('input', function(){
    const isib = btinggi.value;
})

aalas.addEventListener('input', function(){
    const isia = aalas.value; 
})

function cekvalid(input) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}

 
function hitungX() {
    var sisia=document.getElementById("segi3a").value;
    var sisib=document.getElementById("segi3b").value;   
    var sisic=document.getElementById("segi3c").value;
        
        var keliling = sisia+sisib+sisic;
        document.getElementsByClassName("Hasil") = keliling;
        document.getElementById("KelH").value = keliling;
    
        var luas;
        luas = 1/2*sisia+sisib;
        document.getElementById("LuasH").value = luas;
    }

function balik() {
    document.getElementById("segi3a").value=""
    document.getElementById("segi3b").value=""
    document.getElementById("segi3c").value=""
}
