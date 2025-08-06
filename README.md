```
PROGRAM NAME : DIPLOMA COMPETENCY IN COMPUTER NETWORKING AND SYSTEM ADMINISTRATION  
NAME : MUHAMMAD AZAHARI SAIFUL BAHRI
MATRIX NO. : DN12 513
CLASS : 

introduction :
this repository on my Final Year Project aka FYP, this site generating basic cmd's for cisco devices
its engine is built with rust 🦀, delivering :
- zero-cost abstraction, safety and performance without runtime overhead
- blazingly fast compile time, near native performance
- high performance meets low-level control

Below is the work breakdown structure of the project
```

```
FLOW :

USER lands on the site
 └─ clicks a button
     ├─ href → /switch or /router
     └─ triggers navigation to the respective page
         └─ on respective page ( switch / router ) :
           <form> (on submit)
            ↓ preventDefault()
            ↓ read form data (input.value, etc.)
            ↓ JS function (handles/validates/prepares)
            ↓ JSON → Rust WASM call
            ↓ result from Rust → back to JS
            ↓ update DOM / UI
```
```
WHY IS THIS PROJECT UNIQUE ? :

the gimmick of this project is that it's unlike any site's system, its utilizing jump table function for the lookup process -mapping command templates directly to tokenized instructions- this further enhance the speed of lookup process for faster output
