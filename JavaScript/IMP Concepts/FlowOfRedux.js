/* 



# Flow OF Redux
The flow of data in redux is unidirectional.
Flow of data is start at component when we trigger anything in component. like updating state.
This triggers an action creator to dispatch an action.
when an action is dispatched, It will received by root reducer of application and it pass to all reducers.
By using dispatched action, it checks required action by using simple switch case.
If type of dispatched action matches then it returned fully updated state.

Store:
1) It is an state container which holds application 

Actions:
1) contains type and payload.
2) for update state we need to dispatch an action.

Action creator:
1) used to create an action object.
2) return simple js object,

Reduces:
1) It is an pure function. 
2) It accepts (previous state, and action)
3) only way to change state. only place to write logic. 

*/