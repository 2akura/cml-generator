```FLOW :

USER lands on the site
 └─ clicks a button
     ├─ href → /switch (or /router)
     └─ triggers navigation to the respective page
         └─<form> (on submit)
            ↓ preventDefault()
            ↓ read form data (input.value, etc.)
            ↓ JS function (handles/validates/prepares)
            ↓ JSON → Rust WASM call
            ↓ result → back to JS
            ↓ update DOM / UI


