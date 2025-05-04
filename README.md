# Compito Intermedio Angular

In questo esercizio è stata applicata la teoria spiegata durante la lezione:

- **Direttive strutturali**: (*ngIf, *ngFor, \*ngSwitch)
- **Direttive attributo**: ([ngClass], [ngStyle])
- **Comunicazione tra componenti**: Relazione padre-figlio
- **Routing classico**: RouterModule, `router.navigate`, `routerLink`
- **Invio di dati alle rotte**: Query params
- **Protezione delle rotte**: Guards e `canActivate`
- **Reactive Forms**: Uso di `FormGroup`, `FormControl`
- **Validazioni sincrone**: `Validators.required`, `minLength`, `pattern`, ecc.
- **Stato del form**: Controlli come `valid`, `invalid`, `touched`
  
## Struttura dell'applicazione

L'applicazione è composta da diversi componenti, ognuno con funzionalità specifiche:

### **HeaderComponent**

- Mostra l'intestazione dell'applicazione.
- Non utilizza direttive specifiche, ma gestisce la visualizzazione dinamica in base allo stato dell'utente (es. login/logout).

### **NavbarComponent**

- Contiene un menu laterale con link per navigare tra le pagine principali.
- Utilizza:
  - `*ngFor` per generare dinamicamente i link del menu.
  - `[routerLink]` per la navigazione tra le pagine.

### **LoginComponent**

- Implementa un form di login con campi per username e password.
- Utilizza:
  - **Two-way data binding** con `[(ngModel)]` per sincronizzare i valori di `username` e `password` con il modello.
  - **Direttiva strutturale** `*ngIf` per mostrare un messaggio di errore in caso di credenziali non valide.
  - Evento `(ngSubmit)` per gestire l'invio del form e chiamare il metodo `onLogin()`.

### **HomepageComponent**

- Mostra un messaggio di benvenuto e una lista di concetti appresi.
- Utilizza:
  - `*ngFor` per elencare i concetti appresi.
  - Query params per visualizzare il nome dell'utente loggato.

### **TodoComponent**

- Permette di aggiungere, rimuovere e completare attività.
- Utilizza:
  - `*ngFor` per iterare sulla lista delle attività.
  - `*ngIf` per mostrare messaggi condizionali (es. "Nessuna attività").
  - Comunicazione padre-figlio con il componente `TodoItemComponent`.

### **TodoItemComponent**

- Rappresenta un singolo elemento della lista Todo.
- Utilizza:
  - Input binding per ricevere i dati dell'attività dal componente padre.
  - Output binding per inviare eventi (es. eliminazione o completamento) al componente padre.

### **WeatherComponent**

- Consente di cercare il meteo di una città.
- Mostra dettagli come temperatura, condizione meteo e umidità.
- Utilizza:
  - `*ngIf` per mostrare messaggi condizionali (es. "Città non trovata").
  - `*ngSwitch` per visualizzare icone/metadati diversi in base alle condizioni meteo.

### **RegistrationComponent**

- Implementa un form reattivo per la registrazione utente.
- Utilizza:
  - Reactive Forms (`FormGroup`, `FormControl`).
  - Validazioni sincrone:
    - `Validators.required` per i campi obbligatori.
    - `Validators.email` per la validità dell'email.
    - `Validators.minLength` per la password.
  - Stato del form (`valid`, `invalid`, `touched`, `dirty`).

### **Routing**

- Gestisce la navigazione tra le pagine.
- Utilizza:
  - `routerLink` per i collegamenti.
  - `router.navigate` per la navigazione programmata.
  - `canActivate` per proteggere l'accesso alle rotte.

### **Guards**

- Proteggono l'accesso alle rotte riservate.
- Implementano la logica di controllo per verificare se l'utente è autenticato.

## Come avviare l'applicazione

1. Installare le dipendenze:
   ```bash
   npm install
   ```
2. Avviare il server di sviluppo:
   ```bash
   ng serve
   ```

3. Aprire il browser e navigare a http://localhost:4200/.

## Credenziali di accesso

Nome utente: **admin**

Password: **password**
