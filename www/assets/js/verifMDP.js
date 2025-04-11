/*  d'abord je verifie si il a saisie moins de 8 caractère 
    fonction pour savoir si il y a des element speciaux dans le mdp
    faire des conditions
*/
var mdpSaisie = document.getElementById("mdp");
let weak = `<div class="weak"></div><span>Faible</span>`;
let medium = `<div class="medium"></div><span>Moyen</span>`;
let strong = `<div class="strong"></div><span>Fort</span>`;
function contientMajuscule (mdpSaisie){
    let regex = /[A-Z]/;
    return regex.test(mdpSaisie);}
function contientChiffre(mdpSaisie){
    let regex = /[0-9]/;
    return regex.test(mdpSaisie);}
function contientCaraSpec(mdpSaisie){
    let regex = /[\W_]/;
    return regex.test(mdpSaisie);}
function resetlvl(){
    let rectangle = document.querySelector('.rectangle');
    rectangle.innerHTML = ``;}
// verif du mot de passe saisie
function verifMDP(mdp){
    let rectangle = document.querySelector('.rectangle');
    let longueur = mdp.length;
    resetlvl();
    if (longueur === 0){ // mdp vide
        return;}
    // mdp faible
    if (longueur < 8 && !contientMajuscule(mdp) && !contientChiffre(mdp) && !contientCaraSpec(mdp)) {
        rectangle.innerHTML += weak;
        return;}   
    //mdp moyen
    if (longueur >= 8 && contientMajuscule(mdp) && contientChiffre(mdp) && !contientCaraSpec(mdp)) {
        rectangle.innerHTML += medium;
        return;}
    //mdp fort
    if (longueur >= 8 && contientMajuscule(mdp) && contientChiffre(mdp) && contientCaraSpec(mdp)) {
        rectangle.innerHTML += strong;
        return;}
    rectangle.innerHTML += weak;    } 
mdpSaisie.addEventListener('keyup', function(event) {
    verifMDP(this.value);});