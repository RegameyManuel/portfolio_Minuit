# Portfolio de dessins

Petit site statique sans dépendance externe.

## Contenu

- `index.html` : structure du site
- `styles.css` : mise en page
- `app.js` : carrousels + affichage plein écran
- `images/` : dessins

## Remplacer les images d'exemple

Les fichiers d'exemple sont des SVG.

Tu peux les remplacer par des fichiers JPG, PNG ou WebP.

Exemple :

    images/personnage-01.webp
    images/personnage-02.webp
    images/personnage-03.webp

Puis modifier dans `index.html` :

    <img src="images/personnage-01.webp" alt="...">

## Ajouter un dessin dans un carrousel

Duplique un bloc :

    <figure class="slide">
      <img src="images/mon-dessin.webp" alt="Description du dessin">
      <figcaption>Titre du dessin</figcaption>
    </figure>

Le JavaScript crée automatiquement les points de navigation.

## Tester en local

On peut simplement ouvrir `index.html` dans Firefox.

Ou lancer un petit serveur :

    python3 -m http.server 8000

puis ouvrir :

    http://localhost:8000

## GitHub Pages

1. Créer un dépôt GitHub.
2. Ajouter tous les fichiers à la racine.
3. Aller dans Settings > Pages.
4. Choisir "Deploy from a branch".
5. Sélectionner la branche `main` et le dossier `/root`.

Le site sera ensuite disponible sur GitHub Pages.

## Vie privée

Pour un portfolio de collégienne, éviter de publier :
- nom complet ;
- adresse ;
- établissement scolaire ;
- téléphone personnel ;
- informations sur les horaires ou déplacements.
# portfolio_Minuit
