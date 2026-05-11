# Boost Kitchen

Site statique prêt pour Netlify.

## Déploiement Netlify

1. Dépose ce dossier sur Netlify ou connecte-le à un repo Git.
2. Laisse la commande de build vide.
3. Utilise `.` comme dossier de publication.
4. Après le premier déploiement, va dans `Forms > contact-boost-kitchen > Settings and usage > Form notifications`.
5. Ajoute une notification email vers `boostkitchenfr@gmail.com`.

Le formulaire utilise Netlify Forms et redirige vers `/merci.html` après envoi.

## Local

```powershell
npm run dev
```

Puis ouvre `http://localhost:4173`.
