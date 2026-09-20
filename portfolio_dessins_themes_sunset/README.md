# Portfolio de dessins — version multi-thèmes

Petit site statique sans dépendance externe, prêt pour GitHub Pages.

## Fichiers

- `index.html` : structure du portfolio et boutons de thème
- `theme.css` : feuille de thèmes fournie (light / dark / academic)
- `theme.js` : script fourni pour sélectionner et mémoriser le thème
- `portfolio.css` : mise en page spécifique du portfolio
- `app.js` : carrousels, navigation tactile et affichage plein écran
- `images/` : dessins

## Thèmes

Les trois thèmes disponibles sont :

- `light` : clair / bleu doux
- `dark` : sombre
- `academic` : papier ivoire / bleu bibliothèque

Le choix du visiteur est mémorisé dans `localStorage` par `theme.js`.
`portfolio.css` utilise les variables de `theme.css` sans modifier le fichier de thème d'origine.

## Remplacer les images d'exemple

Les images actuelles sont des SVG de démonstration. Elles peuvent être remplacées par des fichiers JPG, PNG ou WebP.

Exemple :

    images/personnage-01.webp
    images/personnage-02.webp
    images/personnage-03.webp

Puis modifier dans `index.html` :

    <img src="images/personnage-01.webp" alt="Description du dessin">

## Ajouter un dessin dans un carrousel

Dupliquer un bloc :

    <figure class="slide">
      <img src="images/mon-dessin.webp" alt="Description du dessin">
      <figcaption>Titre du dessin</figcaption>
    </figure>

Les points de navigation sont créés automatiquement par `app.js`.

## Tester en local

Ouvrir directement `index.html` dans Firefox, ou lancer :

    python3 -m http.server 8000

puis ouvrir `http://localhost:8000`.

## GitHub Pages

1. Créer un dépôt GitHub.
2. Ajouter les fichiers à la racine du dépôt.
3. Aller dans `Settings > Pages`.
4. Choisir `Deploy from a branch`.
5. Sélectionner `main` et `/root`.

## Vie privée

Pour un portfolio de collégienne, éviter de publier le nom complet, l'adresse, l'établissement scolaire, le téléphone personnel ou des informations précises sur les horaires et déplacements.


## Thème Sunset

Palette utilisée :
- `#FF9A86`
- `#FFB399`
- `#FFD6A6`
- `#FFF0BE`
