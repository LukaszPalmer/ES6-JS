# JavaScript Zusammenfassung

## Variablen & Scopes
- `let` → Blockscope
- `const` → Konstante Bindung, Blockscope
- `var` → Function Scope (vermeiden)
- Global Scope und Temporal Dead Zone beachten

## Template Literals
- Strings mit Backticks `` ` `` erstellen
- Variablen mit `${}` einfügen
- Mehrzeilige Strings möglich

## Default Parameters
- Funktionen können Standardwerte für Parameter haben
- Nützlich, um undefinierte Werte abzufangen

## Arrow Functions
- Kürzere Syntax für Funktionen
- Implizites `return` möglich
- Lexical `this`

## Destructuring
- Arrays und Objekte einfach aufsplitten
- Variablen direkt aus Strukturen extrahieren
- Unterstützt verschachtelte Arrays und Objekte

## Spread & Rest Operator
- Spread `...` → Kopieren oder zusammenführen von Arrays/Objekten
- Rest `...` → Sammeln von Parametern in Arrays

## Array-Methoden
- Iteration: `forEach`, `map`, `filter`, `reduce`
- Suche: `find`, `findIndex`, `some`, `every`, `includes`
- Transformation: `flat`, `flatMap`

## Object-Methoden
- `Object.keys()`, `Object.values()`, `Object.entries()`
- `Object.assign()` → Objekte zusammenführen
- `Object.freeze()`, `Object.seal()` → Objektschutz
- Dynamisches Hinzufügen/Ändern von Properties
- Optional Chaining `?.`

## Promises
- Asynchrone Operationen abbilden
- `then`, `catch`, `finally`
- Chaining möglich
- Fehlerbehandlung über `.catch()`

## Async / Await
- Asynchrone Funktionen mit `async` definieren
- `await` pausiert bis Promise erfüllt
- Fehlerbehandlung mit `try/catch`

## Fazit
- Modernes JavaScript nutzt Blockscope, Arrow Functions, Destructuring und Spread/Rest intensiv
- Promises und Async/Await erleichtern die Arbeit mit asynchronem Code
- Array- und Object-Methoden vereinfachen Datenmanipulation
- Template Literals und Default Parameters verbessern Lesbarkeit und Flexibilität
