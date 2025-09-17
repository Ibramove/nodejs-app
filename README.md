git init
git remote add origin https://github.com/Ibramove/nodejs-app.git
git add .
git commit -m "Ajout app Node.js"
git branch -M main
git push -u origin main


# Créer l’app depuis le repo GitHub
oc new-app registry.access.redhat.com/ubi8/nodejs-18~https://github.com/<user>/nodejs-app.git --name=nodejs-app

# Suivre le build et vérifier que le pod démarre
oc get pods
oc get svc

# Exposer une route publique
oc expose service nodejs-app

# Récupérer l’URL publique
oc get route


curl http://<votre_route>


# Deploiment reussie


<img width="3198" height="807" alt="image" src="https://github.com/user-attachments/assets/0555a5f9-88a0-440e-ac20-89f07ae9806c" />

