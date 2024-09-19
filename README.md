# README - Application Frontend pour ABC Corporation

## Description du Projet

ABC Corporation souhaite développer une application Frontend dynamique avec Vue.js pour gérer des données commerciales via des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer). Sans maquette ni cahier des charges, l'entreprise s'inspire d'une application concurrente et vise à créer une interface ergonomique axée sur l'expérience utilisateur (UX).

## Objectifs du Projet

- Développer une application Vue.js avec des interfaces dynamiques et intuitives.
- Implémenter les fonctionnalités CRUD pour la gestion des données.
- Optimiser l'expérience utilisateur avec une interface ergonomique et réactive.
- S'inspirer de l'application concurrente fournie pour le design et l'architecture fonctionnelle.

## Fonctionnalités Clés

- **Gestion des Produits** : Ajouter, lister, modifier et supprimer des produits commerciaux.
- **Gestion des Clients** : Gestion complète des informations clients (ajout, lecture, modification, suppression).
- **Suivi des Commandes** : Affichage et gestion des commandes passées, modification de leur statut.
- **Tableaux dynamiques et formulaires** : Interfaces utilisateurs interactives permettant de saisir, afficher et mettre à jour les données.

## Technologies Utilisées

- **Vue.js** : Le framework JavaScript principal pour le développement de l'application frontend.
- **Vue Router** : Pour la gestion des différentes vues/pages de l'application.
- **Bootstrap** : Pour une mise en page et un design moderne et réactif (ou autre framework CSS selon les besoins).

## Installation et Lancement

### Prérequis

- **Node.js** : Assurez-vous d'avoir installé [Node.js](https://nodejs.org/) sur votre machine.
- **Vue CLI** : Si vous ne l'avez pas encore installé, vous pouvez le faire via npm :

```bash
  npm install -g @vue/cli
```

### Étapes d'installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/AssaBaradji/gestion-de-commandes-vuejs-app.git
   ```

2. **Accéder au répertoire du projet**

   ```bash
   cd gestion-de-commandes-vuejs-app
   ```

3. **Installer les dépendances**

   ```bash
   npm install
   ```

4. **Lancer l'application**

```bash
   npm run serve
```

L'application sera alors accessible à l'adresse : `http://localhost:5173/orders`.

## Structure du Projet

```bash
├── public
│   └── index.html  # Point d'entrée de l'application
├── src
│   ├── assets      # Fichiers statiques (images, CSS...)
│   ├── components  # Composants Vue.js
│   ├── router      # Configuration du routing
│   └── App.vue     # Composant racine
│   └── main.js
├── package.json    # Dépendances et scripts npm
└── README.md       # Documentation du projet
└── vite.config.js
```

## Fonctionnalités CRUD (Create, Read, Update, Delete)

### Gestion des Produits

-- **Ajouter un produit** : Le formulaire permet d'entrer les informations du produit, telles que le nom, le prix et la quantité en stock.
-- **Lister les produits** : Affichage dynamique de la liste des produits avec une fenetre modal pour faciliter la navigation.
-- **Modifier un produit** : Une vue détaillée permet de modifier les informations d'un produit existant.
-- **Supprimer un produit** : Suppression de produit avec une boîte de confirmation pour éviter les suppressions accidentelles.

### Gestion des Clients

-- **Ajouter un client** : Le formulaire permet d'ajouter un nouveau client en renseignant des informations comme le nom, l'adresse ,l'email et le numéro de téléphone.
-- **Lister les clients** : Affichage d'une liste des clients avec pagination pour une gestion facile.
-- **Modifier un client** : Possibilité de mettre à jour les informations d'un client spécifique via une interface de modification intuitive.
-- **Supprimer un client**: Suppression d'un client après confirmation, avec mise à jour instantanée de la liste.

### Gestion des Commandes

-- **Ajouter une commande** : Enregistrement des nouvelles commandes avec les produits associés.
-- **Lister les commandes** : Affichage de toutes les commandes avec pagination pour une vue claire des transactions.
-- **Modifier une commande** : Mise à jour des détails d'une commande, y compris la commande.
-- **Supprimer une commande** : Fonction de suppression de commande avec confirmation.

## Améliorations Futures

- Intégration d'une API backend pour rendre les opérations CRUD persistantes.
- Implémentation d'un système d'authentification pour gérer les utilisateurs et leurs permissions.
- Ajout de tests unitaires pour assurer la fiabilité.

## Auteur

- [Assa Baradji](https://github.com/AssaBaradji)
