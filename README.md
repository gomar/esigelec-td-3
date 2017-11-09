# Blockchain lab training


Bienvenue sur le répertoire de blockchain lab training.

L'objectif de ce répertoire est de permettre de rapidement monter en compétences sur le développement d'applications blockchain par le biais de défis progressifs.




## Mode opératoire pour réaliser et valider les défis

- Pour commencer les défis, créé une branche develop-{ton nom} issue de la branche master
- Puis réalise les défis un à un :
    - Dès que tu démarres un défi, commence par créer une issue avec le nom du défi que tu traites. Utilise les commentaires si nécessaire pour demander de l'aide, des précisions ou autre. :warning: comme expliqué dans la [vidéo qui détaille comment Github utilise les issues](https://resources.github.com/webcasts/GitHub-communicating-with-issues/?elqTrackId=39282a41f3954f909d94736291451a20&elq=faafda7435ef41e981e26ff6d84718e8&elqaid=129&elqat=1&elqCampaignId=31), les commentaires doivent être auto-porteurs
    - Dès que tu as fini un défi, ouvre une pull request en mettant ton issue en lien. La pull request doit se merger sur ta branche develop (develop-{ton nom}), pas autre part, sinon elle sera rejetée




## Description des défis

### Défi n°1 :

- **Mission** : Mettre en place une liste déroulante pour choisir les comptes sur lesquels on peut transférer de l'argent
- **Objectif pédagogique** : Être autonome sur l'installation et le lancement de l'application & Commencer à prendre en main l'application


### Défi n°2 :

- **Mission** : Permettre à n'importe qui d'envoyer de l'argent à n'importe qui
- **Objectif pédagogique** : Gérer les contraintes de listes sous Angular, modifier les variables d'entrées sous Solidity. Différencier ce qui peut se faire dans le front par rapport à ce qui doit se faire dans le back pour du prototypage rapide


### Défi n°3 :

- **Mission** : À chaque transaction, faire en sorte que la banque prenne 10% de commission sur la somme versée. La banque correspondra au compte 0
- **Objectif pédagogique** : Mettre en place des règles de gestion sous Solidity. Créer des variables globales sous Solidity


### Défi n°4 :

- **Mission** : Mettre un écran de profil pour chaque utilisateur, que l'on peut compléter en sauvegardant les données dans la blockchain (Nom, Prénom)
- **Objectif pédagogique** : Créer de nouvelles fonctions Solidity. Créer de nouveaux écrans Angular et faire le lien avec les fonctions solidity. Gérer les "paths" Angular


### Défi n°5 :

- **Mission** : Passer à Angular material et rendre l'application responsive
- **Objectif pédagogique** : Prendre en compte le responsive très rapidement dans la conception quitte à revoir certains choix plus tard. Anticiper ces points lors des futurs développements


### Défi n°6 :

- **Mission** : Ajouter un écran de traçabilité des transactions effectuées sur un compte
- **Objectif pédagogique** : Prendre en main les events Ethereum qui permettent de garder de côté certaines actions pour facilement les retourner à l'utilisateur


### Défi n°7 :

- **Mission** : Mettre en place un délai paramétrable de réalisation de la transaction
- **Objectif pédagogique** : Prendre en main les fonctions avancées de Solidity


### Défi n°8 :

- **Mission** : Déployer l'application sur Azure
- **Objectif pédagogique** : Prendre en main la partie technique de déploiement pour pouvoir facilement héberger les applications blockchain




## Pré-requis techniques

### Installer l'application

Normalement, pour installer l'application, tout est relativement simple (prérequis : vous avez `nvm` d'installer et avec `nvm`, vous avez installé `npm` version `6.9.2`). Voici ce qu'il faut faire :
1. Aller dans le dossier du training
2. Taper la commande suivante : `nvm use 6.9.2`
3. Suivi de `npm install`

:thumbsup: C'est tout


### Lancer l'application

Pour lancer l'application, rien de plus simple, il suffit de taper dans votre terminal :
1. `nvm use 6.9.2`
2. Suivi de `npm run training`


### Débugger l'application

Pour débugger l'application, utilisez la console de chrome
