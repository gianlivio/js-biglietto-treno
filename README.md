# ESERCIZIO
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. :wink:

# SOLUZIONE

### Raccolta dati
- Chiedere all'utente il numero di km
- Chiedere l'età del passeggero

### Esecuzione logica
  - calcolo prezzo base: km * 0.21
  - Definisco lo sconto
    ```
    Se l'èta è minore di 18 anni
      lo sconto è 20
    Altrimenti se l'età è maggiore di 65 anni
      lo sconto è 40
    Altrimenti 
      lo sconto è 0
    ```
  - Calcolo del prezzo scontato
    ```
    prezzoScontato = prezo base - (prezzo base * sconto / 100)
    ```

  ### Output
  - Creare la porzione html con indicazione di prezzo base, dello sconto e di prezzo finale;
  - Inserimento della pozione html in pagina
