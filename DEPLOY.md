# Déploiement sur Netlify

## Méthode 1 : Via l'interface Netlify (Recommandé)

### 1. Préparer le projet

Assurez-vous que votre projet est prêt :
```bash
npm run build
```

### 2. Créer un compte Netlify

- Rendez-vous sur [netlify.com](https://www.netlify.com/)
- Créez un compte gratuit (avec GitHub, GitLab ou email)

### 3. Déployer le site

#### Option A : Drag & Drop (Le plus simple)

1. Allez sur votre dashboard Netlify
2. Faites glisser le dossier `dist/` directement sur la zone de dépôt
3. Votre site sera déployé en quelques secondes !

#### Option B : Via Git (Déploiement continu)

1. Poussez votre code sur GitHub/GitLab
2. Sur Netlify, cliquez sur "Add new site" → "Import an existing project"
3. Connectez votre repository
4. Configurez les paramètres de build :
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Cliquez sur "Deploy site"

### 4. Configuration (optionnelle)

Une fois déployé, vous pouvez :
- Changer le nom de domaine (Site settings → Domain management)
- Ajouter un domaine personnalisé
- Activer HTTPS (automatique)

## Méthode 2 : Via Netlify CLI

### 1. Installer Netlify CLI

```bash
npm install -g netlify-cli
```

### 2. Se connecter

```bash
netlify login
```

### 3. Déployer

```bash
# Build le projet
npm run build

# Déployer
netlify deploy --prod --dir=dist
```

## Configuration recommandée

Créez un fichier `netlify.toml` à la racine du projet (optionnel) :

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Mise à jour du site

### Via Drag & Drop
- Refaites `npm run build`
- Glissez-déposez le nouveau dossier `dist/` sur Netlify

### Via Git
- Poussez vos modifications sur votre repository
- Netlify déploiera automatiquement les changements

## Notes

- Le déploiement est **100% gratuit** pour les sites statiques
- HTTPS est activé automatiquement
- Vous obtenez un domaine gratuit `votresite.netlify.app`
- Déploiement ultra rapide (généralement < 1 minute)

## Personnaliser les cadeaux

Pour modifier la liste des cadeaux, éditez le fichier `src/App.vue` ligne 5 et mettez à jour le tableau `gifts` avec vos propres données.

## Support

En cas de problème, consultez la [documentation Netlify](https://docs.netlify.com/)
