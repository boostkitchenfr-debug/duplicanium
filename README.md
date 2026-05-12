# Boost Kitchen

Site statique prêt pour Netlify.

## Déploiement Netlify

1. Dépose ce dossier sur Netlify ou connecte-le à un repo Git.
2. Laisse la commande de build vide.
3. Utilise `.` comme dossier de publication.
4. Après le premier déploiement, va dans `Forms > contact-boost-kitchen > Settings and usage > Form notifications`.
5. Ajoute une notification email vers `boostkitchenfr@gmail.com`.

Le formulaire utilise Netlify Forms et redirige vers `/merci.html` après envoi.

## SEO après mise en ligne

1. Dans Netlify, connecte le domaine `boostkitchen.fr` et active HTTPS.
2. Vérifie que `https://boostkitchen.fr/robots.txt` et `https://boostkitchen.fr/sitemap.xml` répondent bien.
3. Ajoute le domaine dans Google Search Console.
4. Soumets le sitemap `https://boostkitchen.fr/sitemap.xml`.
5. Demande l'indexation de la page d'accueil.
6. Ajoute des liens vers `https://boostkitchen.fr/` depuis Instagram, TikTok, Google Business Profile, annuaires locaux et profils professionnels.

## Local

```powershell
npm run dev
```

Puis ouvre `http://localhost:4173`.
