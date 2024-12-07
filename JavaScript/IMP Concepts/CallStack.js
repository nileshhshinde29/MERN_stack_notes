/* 

CallStack:
    Javascript is a synchronous language. It has one call stack.
    It can do only one thing at time.
    the callstack present inside the javascript engin.and all code of js executed inside the callstack.

    .......................................................................................................................
    .                                                                                          Browser                    .
    .                                                                                                                     .     
    .  \\\\\\\\\|///////// <== Js Engine                         web apis                                                 .
    .  \                 /                                       setTimeout                                               .
    .  \                 /                                       Local Storage                                            .  
    .  \ |             | /                                       console.log                                              .
    .  \ |             | /                                       Dom                                                      .
    .  \ |             | /                                       fetch                                                    .
    .  \ |  callstack  | /                                       location                                                 .
    .  \ |             | /                                                                                                .
    .  \ |             | /                                                                                                . 
    .  \ |             | /                ..........................................................                      .
    .  \ |             | /                |      micro task que   (more Priority)                  |                      .     
    .  \ |             | /    (Event)     ..........................................................                      .     
    .  \ |             | /    (loop )                                                                                     .
    .  \ |             | /                ..........................................................                      .
    .  \ |_____________| /                |     Call back Que                                      |                      .
    .  \                 /                ..........................................................                      .
    .  \\\\\\\\\|/////////                                                                                                .
    .......................................................................................................................    

    

    Whenever any javascript code is run it create global execution context.And this execution context put all code into the call stack.
    In global execution context code runs line by line. When running of code is completed then this code id pops out from the callstack and global execution 
    also pops out from the call stack.

 - All javascript code runs inside the callstack. When our code contains promises and callback functions.this functions will not come directly into the call stack.
   this code wait inside the call back queue or microtask queue. If execution of all code inside the callstack is completed then this all code and GEC is pops out from 
   the callstack. Then code which is present inside the microtask and call back queue is pushed in to the callstack and this code will start execution.
   
  -Microtask Queue:
    All kind of promises and mutation observer code comes into this microtask code.
    It has more priority than callback queue.


  -Callback queue:
    in side the callback stack all callback functions are waiting for completion of execution of code of callstack.

  - Event Loop:
     Event loop continuously checks all this stacks to is empty.
     If its not empty then it take code from code from microtask first because it is on priority.
     then takes code from callback queue. and push it into the callstack to execute.

  - Starvation of call back que:   

     
  '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
   
   
   




















   

    

 
    
    



*/