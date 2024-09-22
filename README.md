# README - Application Frontend pour ABC Corporation

## Description du Projet

ABC Corporation souhaite développer une application Frontend dynamique avec Vue.js pour gérer des données commerciales via des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer). Sans maquette ni cahier des charges, l'entreprise s'inspire d'une application concurrente et vise à créer une interface ergonomique axée sur l'expérience utilisateur (UX).

## Objectifs du Projet

- Développer une application Vue.js avec des interfaces dynamiques et intuitives.
- Implémenter les fonctionnalités CRUD pour la gestion des données.
- Optimiser l'expérience utilisateur avec une interface ergonomique et réactive.
- S'inspirer de l'application concurrente fournie pour le design et l'architecture fonctionnelle.

## Fonctionnalités Clés

- **Gestion des Produits** : Interface pour ajouter, lister, modifier et supprimer des produits.
- **Gestion des Clients** : Interface pour gérer les informations clients (ajout, liste, modification, suppression).
- **Gestion des Commandes** : Interface pour ajouter, lister, modifier et supprimer des commandes.

## Technologies Utilisées

- **Vue.js** : Le framework JavaScript principal pour le développement de l'application frontend.
- **Vue Router** : Pour la gestion des différentes vues/pages de l'application.
- **Bootstrap** : Pour une mise en page et un design moderne et réactif (ou autre framework CSS selon les besoins).

## Installation et Lancement

### Prérequis

- **Node.js** : Assurez-vous d'avoir installé [Node.js](https://nodejs.org/) sur votre machine.

### Étapes d'installation

1. **Cloner le dépôt**

```bash
   git clone https://github.com/AssaBaradji/gestion-de-commandes-vuejs-app.git
```

2.**Accéder au répertoire du projet**

```bash
cd gestion-de-commandes-vuejs-app
```

3.**Installer les dépendances**

```bash
   npm install
```

4.**Lancer l'application**

```bash
   npm run dev
```

L'application sera alors accessible à l'adresse : `http://localhost:5173/orders`.

## Fonctionnalités CRUD (Create, Read, Update, Delete)

### Gestion des Produits

- **Ajouter un produit** : Interface pour saisir les informations du produit, telles que le nom, le prix et la quantité en stock.
- **Lister les produits** : Interface affichant les produits dans un tableau avec des boutons d'action pour voir les details, modifier et supprimer.
- **Modifier un produit** : Interface permettant de modifier les informations d'un produit existant, affichée dans une fenêtre modale.
- **Supprimer un produit** : Interface pour confirmer la suppression d'un produit, incluant une boîte de confirmation.

### Gestion des Clients

- **Ajouter un client** : Formulaire d'interface pour entrer les informations d'un nouveau client, comme le nom, l'adresse, l'email et le numéro de téléphone.
- **Lister les clients** : Interface affichant la liste des clients, avec des boutons d'action pour voir les details, modifier et supprimer.
- **Modifier un client** : Interface permettant de mettre à jour les informations d'un client spécifique, affichée dans une fenêtre modale.
- **Supprimer un client** : Interface de suppression avec confirmation, qui met à jour la liste après l'action.

### Gestion des Commandes

- **Ajouter une commande** : Interface pour enregistrer de nouvelles commandes avec les produits associés.
- **Lister les commandes** : Interface affichant toutes les commandes, avec des boutons d'action pour voir les details, modifier et supprimer.
- **Modifier une commande** : Interface permettant de mettre à jour une commande les détails d'une commande, affichée dans une fenêtre modale.
- **Supprimer une commande** : Interface de suppression de commande avec confirmation.

## Auteur

- [Assa Baradji](https://github.com/AssaBaradji)
