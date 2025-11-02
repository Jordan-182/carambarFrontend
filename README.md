# Landing Page Carambar & Co - Frontend 🍬

Bienvenue sur la landing page officielle des blagues Carambar & Co ! Cette application web permet d'afficher des blagues aléaoires directement depuis l'API Carambar dans le cadre du projet de sélection CDA.

## 🎯 Objectif du projet

Créer une landing page fidèle à la marque Carambar qui affiche des blagues aléaoires grâce à un bouton interactif. L'application communique avec une API REST pour récupérer les blagues et préparer l'intégration future dans des applications mobiles.

## 🚀 Fonctionnalités

- ✅ Landing page responsive fidèle à la marque Carambar
- ✅ Bouton interactif pour récupérer des blagues aléaoires
- ✅ Affichage progressif des blagues (question puis réponse)
- ✅ Interface moderne avec React + TypeScript
- ✅ Communication avec l'API REST versionnée
- ✅ État de chargement avec loader animé
- ✅ Déployé sur GitHub Pages

## 🌐 Démo

**🔗 Application déployée** : [https://jordan-182.github.io/carambarFrontend/](https://jordan-182.github.io/carambarFrontend/)

## 🛠️ Technologies utilisées

- **Framework** : React 19 avec TypeScript
- **Build Tool** : Vite
- **Styling** : CSS Modules
- **Deployment** : GitHub Pages avec gh-pages
- **API Communication** : Fetch API native
- **Dev Tools** : ESLint, TypeScript

## 📁 Structure du projet

```
src/
├── App.tsx                   # Composant principal
├── main.tsx                  # Point d'entrée React
├── index.css                 # Styles globaux
├── App.css                   # Styles du composant App
├── assets/                   # Ressources statiques
│   └── carambarLogo.png      # Logo de la marque
├── components/               # Composants réutilisables
│   ├── Header.tsx            # En-tête avec logo
│   ├── Header.module.css
│   ├── DisplayedJoke.tsx     # Affichage des blagues
│   ├── DisplayedJoke.module.css
│   ├── RandomJokeButton.tsx  # Bouton de récupération
│   ├── RandomJokeButton.module.css
│   ├── Loader.tsx            # Indicateur de chargement
│   └── Loader.module.css
├── pages/                    # Pages de l'application
│   ├── LandingPage.tsx       # Page d'accueil principale
│   └── LandingPage.module.css
└── services/                 # Services API
    └── api.ts                # Communication avec l'API
```

## 🚀 Installation et démarrage

### Prérequis

- Node.js (version 18+)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/Jordan-182/carambarFrontend
cd carambarFrontend

# Installer les dépendances
npm install
```

### Configuration

Créer un fichier `.env.local` avec l'URL de l'API :

```bash
VITE_API_URL=https://carambarbackend-mfa0.onrender.com/api
```

### Démarrage

#### Mode développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

#### Build de production

```bash
npm run build
```

#### Déploiement sur GitHub Pages

```bash
npm run deploy
```

## 🎨 Interface utilisateur

### Composants principaux

#### `Header`

- Affiche le logo Carambar
- Design fidèle à l'identité visuelle de la marque

#### `LandingPage`

- Page principale avec titre et sous-titre explicatifs
- Gestion de l'état des blagues et de la visibilité des réponses

#### `RandomJokeButton`

- Bouton interactif pour récupérer une blague aléatoire
- État de chargement avec loader animé
- Gestion des erreurs API

#### `DisplayedJoke`

- Affichage progressif : question puis bouton "Voir la réponse"
- Interface utilisateur intuitive

#### `Loader`

- Indicateur de chargement animé pendant les requêtes API

## 🔌 Communication API

L'application communique avec l'API REST Carambar via le service `api.ts` :

```typescript
const API_URL = import.meta.env.VITE_API_URL;

export async function getRandomJoke() {
  const res = await fetch(`${API_URL}/blagues/random`);
  if (!res.ok) throw new Error("Erreur API");
  return res.json();
}
```

### Endpoint utilisé

- `GET /api/blagues/random` : Récupère une blague aléatoire

## 🌐 Déploiement

### GitHub Pages

L'application est automatiquement déployée sur GitHub Pages via GitHub Actions :

1. Le build se fait avec `npm run build`
2. Les fichiers sont déployés dans la branche `gh-pages`
3. L'application est accessible via l'URL GitHub Pages

### Configuration Vite

```typescript
export default defineConfig({
  plugins: [react()],
  base: "/carambarFrontend/", // Nécessaire pour GitHub Pages
});
```

## 🔗 Liens utiles

- **🎯 Application déployée** : [https://jordan-182.github.io/carambarFrontend/](https://jordan-182.github.io/carambarFrontend/)
- **🔧 Repository Backend** : [https://github.com/Jordan-182/carambarBackend](https://github.com/Jordan-182/carambarBackend)
- **📚 Documentation API (Swagger)** : [https://carambarbackend-mfa0.onrender.com/api-docs/](https://carambarbackend-mfa0.onrender.com/api-docs/)
- **🚀 API déployée** : [https://carambarbackend-mfa0.onrender.com/api/blagues/](https://carambarbackend-mfa0.onrender.com/api/blagues/)

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte à tous les types d'écrans :

- Desktop
- Tablette
- Mobile

## 🎭 Expérience utilisateur

1. **Accueil** : L'utilisateur arrive sur une page explicative avec le logo Carambar
2. **Interaction** : Un clic sur le bouton "Blague" déclenche une requête API
3. **Chargement** : Un loader indique que la requête est en cours
4. **Affichage** : La question de la blague s'affiche
5. **Révélation** : Un clic sur "Voir la réponse" révèle la chute
6. **Répétition** : L'utilisateur peut cliquer à nouveau pour une nouvelle blague

## 🤝 Contribution

Ce projet fait partie d'un exercice de sélection CDA. Les contributions ne sont pas ouvertes pour le moment.

## 📄 Licence

ISC

---

**Projet de sélection CDA - Carambar & Co** 🍬  
_Frontend développé avec React + TypeScript + Vite_
