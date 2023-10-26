# Microfrontend Angular 7/12

## Scopo
Avere un container con una versione di angular e i microfrontend con angular diversi.

## Premessa
La documentazione ufficiale sconsiglia questa pratica (https://single-spa.js.org/docs/faq/#should-i-have-a-parentroot-app-and-children-apps) in favore di una shell in javascript vanilla.

# Passaggi per la creazione di un figlio in angular inferiore a 14
1. Generare l’applicazione
2. Ng add single-spa-angular
3. In app-routing-module.ts aggiungere le route con il path cui vedere il figlio e il path ** (tutto quanto non previsto) che porta al componente Empty Route
4. In app-routing-module aggiungere { provide: APP_BASE_HREF, useValue: ‘/path’ } ai providers del modulo
5. In angular.json prefix: nome figlio
6. In package.json assicurarsi che sia corretto il comando "serve:single-spa:nome-figlio”: “ng s --project nome-figlio --disable-host-check --port 4202 --live-reload false" cambiare la porta se occorre
7. Index,html cambiare app-rot in tag univoco (es figlio1-root)
8. In main.single-spa.ts cambiare template secondo tag punto 7
9. In app.component.ts cambiare selector in tag punto 7
10. Nel container aggiungere mapping a import-map.json (Es “figlio1”:”"http://localhost:4202/main.js”)