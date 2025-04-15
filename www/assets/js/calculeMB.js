const boutonCalcul = document.getElementById("calculerMB");

if (boutonCalcul) {
  boutonCalcul.addEventListener("click", () => {
    const sexe = document.getElementById("sexe").value;
    const niveauActivite = parseFloat(document.getElementById("lvlActivite").value);
    const age = parseInt(document.getElementById("age").value);
    const taille = parseFloat(document.getElementById("taille").value); // en cm
    const poids = parseFloat(document.getElementById("poids").value);   // en kg

    // Vérification des champs
    if (isNaN(age) || isNaN(taille) || isNaN(poids)) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }

    // Formule de Mifflin-St Jeor
    let metabolismeBasal;
    if (sexe === "Homme") {
      metabolismeBasal = (10 * poids) + (6.25 * taille) - (5 * age) + 5;
    } else {
      metabolismeBasal = (10 * poids) + (6.25 * taille) - (5 * age) - 161;
    }

    // Appliquer le facteur d'activité
    const totalCalories = metabolismeBasal * niveauActivite;

    // Affichage du résultat
    const resultatDiv = document.querySelector(".resultat");
    resultatDiv.innerHTML = `
      <p>Votre métabolisme basal est d’environ <strong>${Math.round(metabolismeBasal)} kcal/jour</strong>.</p>
      <p>Avec votre niveau d’activité, vos besoins quotidiens sont d’environ <strong>${Math.round(totalCalories)} kcal/jour</strong>.</p>
    `;
  });
}