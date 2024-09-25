Normally, NodeJS does work with one thread at a time, However, when there’s a lot of work to be done, we use the child_process module to create additional threads. These extra threads can talk to each other using a built-in messaging system.

There are several ways to create child processes in Node.js:

# child_process.exec:
 used to execute shell commands asynchronously.

# child_process.execFile:
 Similar to child_process.exec, but it directly executes a file instead of using a shell.

# child_process.spawn:
This method spawns a new process using the provided command. It allows communication with the child process using standard input/output streams.

# child_process.fork:
child_process.fork() is a variant of child_process.spawn() allowing communication between parent and child via send(). 
It facilitates the isolation of compute-heavy tasks from the main event loop, but numerous child processes can impact performance due to each having its own memory.


These child processes can run JavaScript code or execute shell commands, and they operate independently of each other and the main Node.js process. They are useful for tasks such as parallelizing CPU-intensive operations, offloading blocking I/O operations, or running separate parts of an application in isolation.




# spawn: 
1. general purpose of this child method for launching any new process. It is suitable for executing shell commands and interact with their streams.
2. Running external commands, shell scripts, or any process where you need real-time data streaming.
3. communication is limited to standard input/output streams.
4. Generally better for heavy I/O-bound tasks due to real-time streaming capabilities.
5. e.g  Real-Time Data Processing, Running a Long-Running Command.



# fork:
1. specialized method to creating new Node.js process. It is optimized for communication between parent and child process via inter-process-communication.
2. Running separate Node.js scripts that need to communicate with the parent process, such as forking multiple instances of a Node.js application. 
3. Provides an Inter-Process-Communication channel for message passing between parent and child processes.
4. Better for tasks requiring close coordination between Node.js processes, such as shared state management or complex inter-process communication.
5. eg  CPU-intensive tasks to separate processes to keep the main event loop responsive.


