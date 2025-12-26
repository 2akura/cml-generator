<img width="1946" height="926" alt="Screenshot 2025-08-06 at 4 40 51 PM" src="https://github.com/user-attachments/assets/0a961c04-f35c-4303-973a-0ce053978ad6" />

# PROFILE

PROGRAM NAME : DIPLOMA COMPETENCY IN COMPUTER NETWORKING AND SYSTEM ADMINISTRATION\
PROGRAM CODE : K1217-IT 030-4:2013-2024\
NAME : MUHAMMAD AZAHARI SAIFUL BAHRI\
MATRIX NO. : DN12 513\
CLASS :\
CoCU :\
introduction :\
this repository on my Final Year Project aka FYP, this site generating basic cmd's for cisco devices\
its engine is built with rust 🦀, delivering :
- zero-cost abstraction, safety and performance without runtime overhead
- blazingly fast compile time, near native performance
- high performance meets low-level control

Below is how the site works

# FLOW OF THE DESIGN

flow :
```
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
# PROJECT'S GIMMICK

WHY IS THIS PROJECT UNIQUE ? :

the gimmick is that it's unlike any site's that uses traditional implementations for lookup process,
utilizing matrix-table driven finite state machine algorithm -mapping grid templates directly to the data-
this further reduce engine's complexity and enhance the speed of the lookup process for faster output

# ELABORATION ON THE PROJECT

FSM :
unlike boring plain chain of state checking FSM,
it's included with preload optimization starting indexer, 
and its matrix table driven where each grid contains the pointer of the next state in order to fully optimizing and compensating the speed of JS - WASM and WASM - JS calls

<img width="2348" height="942" alt="Screenshot 2025-08-10 at 9 24 11 PM" src="https://github.com/user-attachments/assets/2f9baec5-07bd-4880-a948-055abb947033" />
<img width="2188" height="1226" alt="Screenshot 2025-09-01 at 9 43 18 PM" src="https://github.com/user-attachments/assets/45bb6156-fc2f-425d-9809-4020a3ae14ed" />

# DATA PARSING ENGINE IN RUST DESIGN
```
Rust engine flow :
raw input
   → tokenizer
     - convert raw input into token sequence
     - attach state-relevant metadata to each token
        → Table-Driven FSM
          - traverse tokens through the state table
          - validate transitions based on grammar-defined states
          - log traversed states for downstream processing
             → assembler
               - assemble tokens using FSM-guided grammar rules
               - produce an ordered, structured collection
                  → translator
                    - interpret assembled collection
                    - map FSM states + state-data as vocabulary
                    - translate into target representation/output
 
```
<img width="1904" height="1060" alt="Screenshot 2025-08-17 at 1 51 47 PM" src="https://github.com/user-attachments/assets/6f39f9cf-603f-490d-9bfb-2cb8b5d120a1" />

# TRIVIA

MORE ABOUT THIS PROJECT:
it's pure frontend, w/o any backend server, regardless of how it may seem
this is mainly beacues of budget
