```
NAME : MUHAMMAD AZAHARI SAIFUL BAHRI
MATRIX NO. : DN12 513
CLASS :

introdution :
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
            ↓ result → back to JS
            ↓ update DOM / UI


