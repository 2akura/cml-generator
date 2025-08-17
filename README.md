<img width="1946" height="926" alt="Screenshot 2025-08-06 at 4 40 51 PM" src="https://github.com/user-attachments/assets/0a961c04-f35c-4303-973a-0ce053978ad6" />

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

Below is how the site works
```

```
flow :

USER lands on the site
 └─ clicks a button
     ├─ href → /switch or /router
     └─ triggers navigation to the respective page
         └─ on respective page (switch / router):
            ↓ user interacts with dropdowns / checkboxes / buttons
            ↓ each input is bound to an event listener
               - updates in-memory state object (JS)
            ↓ when user confirms (e.g., clicks "Apply" / "Save")
               ↓ gather state object (JSON)
               ↓ send JSON → WASM call
               ↓ result from Rust → back to JS
               ↓ update DOM / UI

```
```
WHY IS THIS PROJECT UNIQUE ? :

the gimmick is that it's unlike any site's that uses traditional implementations for lookup process,
utilizing matrix-table driven finite state machine algorithm -mapping grid templates directly to the data-
this further reduce engine's complexity and enhance the speed of the lookup process for faster output
```
<img width="2348" height="942" alt="Screenshot 2025-08-10 at 9 24 11 PM" src="https://github.com/user-attachments/assets/2f9baec5-07bd-4880-a948-055abb947033" />

```
Rust engine flow :
raw input 
   → tokenizer with reverse token table
     - change input into token based on the reverse token table
     - log args into side table  
        → Matrix Table-Driven FSM 
          - traverse token sequence on the matrix's grids
          - validate token's state
             → assembler with foward token table
               - constructs token's value with FSM guided token sequence and foward table
               - fill in args by extract repective args from the side table 
```
<img width="1904" height="1060" alt="Screenshot 2025-08-17 at 1 51 47 PM" src="https://github.com/user-attachments/assets/6f39f9cf-603f-490d-9bfb-2cb8b5d120a1" />

```

MORE ABOUT THIS PROJECT:
it's pure frontend, w/o any backend server, regardless of how it may seem
this is mainly beacues of budget
```
