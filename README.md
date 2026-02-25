# Tic Tac Toe (React + TypeScript)

Application web de jeu du morpion (Tic Tac Toe) développée avec **React**, **TypeScript** et **Vite**.

## Aperçu

Ce projet propose une interface simple et rapide pour jouer au morpion à 2 joueurs (localement), avec :

- alternance automatique des tours (`X` / `O`)
- détection de victoire
- détection de fin de partie
- bouton de réinitialisation de la partie
- interface stylisée avec Tailwind CSS

## Stack technique

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **ESLint**
- **gh-pages** (déploiement)

## Prérequis

- **Node.js** (version récente recommandée, idéalement `20+`)
- **npm**

## Installation

```bash
npm install
```

## Lancer le projet en local

```bash
npm run dev
```

Puis ouvrir l'URL affichée par Vite (généralement `http://localhost:5173`).

## Scripts disponibles

- `npm run dev` : lance le serveur de développement
- `npm run build` : compile TypeScript et génère le build de production
- `npm run preview` : prévisualise localement le build de production
- `npm run lint` : exécute ESLint
- `npm run deploy` : déploie le dossier `dist` via `gh-pages`

## Déploiement (GitHub Pages)

Le projet inclut un script de déploiement :

```bash
npm run build
npm run deploy
```

Avant le premier déploiement, vérifiez la configuration GitHub Pages du dépôt et, si nécessaire, la configuration `base` dans Vite.

## Structure du projet

```text
tictactoe/
├─ src/
│  ├─ App.tsx        # logique et interface du jeu
│  ├─ main.tsx       # point d'entrée React
│  ├─ index.css      # styles globaux / Tailwind
│  └─ App.css        # styles complémentaires
├─ package.json
└─ README.md
```

## Pistes d'amélioration

- affichage du joueur courant
- blocage des cases déjà jouées
- score cumulatif (X / O)
- mode joueur vs IA
- tests unitaires (logique de victoire)

## Auteur

Projet réalisé par **AssFrdz** 
