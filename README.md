# Liste de Cadeaux de Gaëtan 2025

Une liste de souhaits interactive et moderne pour Noël et anniversaire, avec un design futuriste et des animations sympas.

## Fonctionnalités

- Design moderne avec effets visuels cyberpunk
- Icônes de cadeaux flottants en arrière-plan
- Cartes interactives avec effet 3D au survol
- Affichage des prix et descriptions détaillées
- Liens directs vers les produits
- Responsive (mobile, tablette, desktop)

## Technologies utilisées

- **Vue 3** - Framework JavaScript progressif
- **TypeScript** - Typage statique pour JavaScript
- **Vite** - Build tool ultra-rapide
- **CSS3** - Animations et effets visuels avancés

## Installation

```bash
# Cloner le projet
git clone <votre-repo>

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build
```

## Structure du projet

```
src/
├── App.vue              # Composant principal avec la liste des cadeaux
├── main.ts              # Point d'entrée de l'application
├── style.css            # Styles globaux
└── components/
    ├── GiftCard.vue     # Carte individuelle pour chaque cadeau
    └── GiftList.vue     # Grille des cadeaux
```

## Personnalisation

### Modifier les cadeaux

Éditez le fichier `src/App.vue` et modifiez le tableau `gifts` (ligne 5) :

```typescript
const gifts = ref([
  {
    id: 1,
    nom: 'Nom du produit',
    prix: 99.99,
    description: 'Description du produit',
    image: 'https://lien-vers-image.jpg',
    lien: 'https://lien-vers-produit.com'
  }
])
```

### Modifier le titre

Changez le contenu dans `src/App.vue` ligne 55 :

```html
<h1 class="title glitch" data-text="Votre titre">
  Votre titre
</h1>
```

### Personnaliser les couleurs

Les couleurs sont définies dans les animations CSS. Modifiez les gradients dans `src/App.vue` pour changer le thème :

```css
background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
```

## Déploiement

Pour déployer sur Netlify, consultez le fichier [DEPLOY.md](./DEPLOY.md) qui contient toutes les instructions détaillées.

### Méthode rapide

```bash
# Builder le projet
npm run build

# Le dossier dist/ contient votre site prêt à déployer
```

Glissez-déposez simplement le dossier `dist/` sur [Netlify](https://app.netlify.com/).

## Liste des cadeaux actuelle

1. **Elgato Stream Deck** (169,99 €) - Boîtier de contrôle à 15 touches LCD
2. **AOC AM420B** (89,95 €) - Double bras pour écrans jusqu'à 34 pouces
3. **Sac à Dos Élégant Noir** - Pour PC + affaires + livre
4. **DJI Avata 2** (489 €) - Drone FPV (uniquement le drone)
5. **DJI Filtres ND Mini 4 Pro** (47,50 €) - Pack ND16/64/256

## Scripts disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Builder pour la production
npm run preview  # Prévisualiser le build de production
```

## Licence

Projet personnel - Libre d'utilisation

## Support

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou me contacter directement.

---

Fait avec ❤️ et Vue.js
