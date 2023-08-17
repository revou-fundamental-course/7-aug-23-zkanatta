function hitungX() {

let sisia = document.getElementById("segi3a").value;
let sisib = document.getElementById("segi3b").value;   
let sisic = document.getElementById("segi3c").value;
    
let a = parseInt(sisia)
let b = parseInt(sisib)
let c = parseInt(sisic)

        let keliling = (a + b + c);
        document.getElementById("KelH").value = keliling;
    
        var luas;
        luas = (0.5 * sisia * sisib);
        document.getElementById("LuasH").value = luas;
    }

function balik() {
    document.getElementById("segi3a").value=""
    document.getElementById("segi3b").value=""
    document.getElementById("segi3c").value=""
    document.getElementById("KelH").value=""
    document.getElementById("LuasH").value=""
}
