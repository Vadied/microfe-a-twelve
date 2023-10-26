# Microfrontend Angular 7/12

## Scopo
Avere un container con una versione di angular e i microfrontend con angular diversi.

## Premessa
La documentazione ufficiale sconsiglia questa pratica (https://single-spa.js.org/docs/faq/#should-i-have-a-parentroot-app-and-children-apps) in favore di una shell in javascript vanilla.

# Far partire il progetto

1. Aprire un terminale per ogni microfrontend compreso il container
2. Assicurarsi che node sia alal versione corretta per ogni microfrontend, consigliato l'uso di nvm
3. Se si è appena clonato il progetto. lanciare "yarn install".
4. Lanciare nel container "yarn start"
5. Nei figli lanciare "yarn serve:single-spa:nome-figlio"

# Creazione container in angular inferiore a 14
1. Generare l’applicazione
2. Lanciare "ng add single-spa-angular"
3. Lanciare "ng add systemjs"
4. Lanciare "ng add import-map-overrides"
5. In app-routing-module.ts aggiungere le route con il path cui vedere i figli
6. In assets aggiungere il file import-map.json con la mappatura dei figli
7. In index.html aggiungere il tag import-map-overrides-full
8. In index.html aggiungere il meta systemjs-importmap
9. In index.html aggiungere <script type="systemjs-importmap" src="/assets/import-map.json"></script>
10. 

# Creazione di un figlio in angular inferiore a 14
1. Generare l’applicazione
2. Lanciare "ng add single-spa-angular"
3. In app-routing-module.ts aggiungere le route con il path cui vedere il figlio, eventuali pagine figlie e il path ** (tutto quanto non previsto) che porta al componente Empty Route
4. In app-routing-module aggiungere { provide: APP_BASE_HREF, useValue: ‘/path’ } ai providers del modulo
5. In angular.json prefix: nome figlio
6. In package.json assicurarsi che sia corretto il comando "serve:single-spa:nome-figlio”: “ng s --project nome-figlio --disable-host-check --port 4202 --live-reload false" cambiare la porta se occorre
7. In main.single-spa.ts cambiare template secondo tag punto 7
8. In app.component.ts cambiare selector in tag punto 7
9. Nel container aggiungere mapping a import-map.json (Es “figlio1”:”"http://localhost:4202/main.js”)