/* 
# Initialization:
    1) At this stage component is constructed with a given props and state.

# Mounting:
   1) render the jsx returned by render method.
   2) After completing initialization component is mounted on dom and it render at first time.
 
 ComponentDidMount:
   This method is called right after the component is mounted on dom
   This method called after the render function for first time.
 
# Updating phase
    ComponentDidUpdate:
     This method is called after the component is rerendered.

# Unmounting phase
    In this stage component is unmounted from the page.
    ComponentWillUnmount:
    This method is called just before the component unmounted or destroy.
    used for cleanup, 


*/
/* 
 Why react js run twice in strict mode?
*/

/* 


export default function App() {
  const [state1, set] = useState(true);
  console.log(state1);
  console.log('1');

  useEffect(() => {
    console.log('useEffect');
  }, [state1]);

  useLayoutEffect(() => {
    console.log('useLayout');
  }, [state1]);

  console.log('3');

  return (
    <div>
    <Component/>
      hello{console.log('4')}
      <button onClick={() => set(!state1)}>update</button>
    </div>
  );
}




o/p:

true
1
3
4
component
useEffect components
useEffect



*/