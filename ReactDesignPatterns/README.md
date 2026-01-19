# React Design Patterns
 1. Higher Order Components
    Which takes a component as input and returns the New Component with additional features.

    Example:
    ```
    const WithRouter = <P,>(component: React.componentType<P>) => (props: P, isAuthenticated: boolean) => {
        return props.isAuthenticated ? <Component/> : <div>Access Designed.</div>
    }
    ```
 2. Render Props Pattern
    Passing function as props which has the render logic.

    Example:
    ```
    const MouseTracker = (props) => {
        const [mousePosition, stMousePosition] = useState({x: 0, y: 0});

        const handleMouseMove = (event) => {
            setMousePosition({x: event.ClientX, y: event.ClientY })
        };
        
        return (
            <div onMouseMove={handleMouseMove}>
                { props.render(mousePosition)}
            </div>
        );
    }

    const App = () => {
        return <MouseTracker render={(position) => <div>`Positions = x :{position.x} y: {position.y} </div> }>
    }
    ```
 3. State Reducer Pattern
    
    State Reducer Patterns allows the component to own its internal state but gives the component the power to control or override the state changes via reducer.
    ```
    import React, {useReducer} from "react"

    type state = {
        on: boolean;
    }

    type action = {
        type: "TOGGLE"
    }
    
    const defaultReducer = (state: state, action: action) => {
        switch(action.type){
            case "TOGGLE":
                return { on: !state.on };
            default:
                return state;
        }
    };
    type ToggleProps = {
        stateReducer: (state:state, action: action) => state;
    }

    const Toggle = ({stateReducer = defaultReducer} : ToggleProps) => {

        const [state, dispath] = useReducer( stateReducer, { on: false });
        
        return (
            <button onClick={() => dispatch({ type: "TOGGLE" })}>
            {state.on ? "ON" : "OFF" }
            </button>
        )

    }

    Normal usage:
        <Toggle />
    
    o/p: 
     first click : ON
     second click : OFF

    Override via Reducer:

    const noOffReducer = (state: state, action: action) => {
        if( state.on && action.type === "TOGGLE"){
            return state;
        }
        return { on: true }
    }

     <Toggle stateReducer={noOffReducer}>

    o/p:
     first click: ON
     Second click: ON ( forever stays ON)
    ```

 4. Conditional Rendering Pattern
    ```    
    const App = () => {
        const [products, setProducts] = useState([]);

        useEffect(() => {
         //fetch the products and set it to the state
        }, []);

        return (
            <div>
            {products.length > 0 ?
             <ShowList />
             : <div> No products </div>
            }
            </div>

        )
    }
    ```
 5. Compound component pattern
     Grouping the set of elements together that shares the state and the handling logic.

     Example:
     ```
     <Select>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
     </Select>
     ```
    

 6. Presentional and Container component Pattern
    Presentional component  -> how the elements should look like.
    Container Component -> Handle the data

    ```
    const UserItem = ({users}) => {
        return <div>
            {users.map(user => <div>
                 <span>{user.name}</span>
                 <span>{user.email}</span>
            </div>)}
           
            </div>
    }

    usage:
     const users = [
        { name: alice, email: alice@abc.com },
        {name: bob, email: bob@abc.com }
     ];

     <UserItem users={users}>
    ``` 

 7. Provider Pattern
     Provider pattern helps us to share the data across the components in the application.
     Apart for state management tools like Redux, React provides in-built context API for state management.

    ```
    export context = createContext();

    const ContextProvider = ({children}) => {
        const [ number, setNumber ] = useState(0);

        useEffect(() => {
            setNumber(number + 1);
        }, []);

        return
        <context.provider values={{ number }}>
            {children}
        </context.provider>
    }

    const App = () => {
        return <ContextProvider>
            <BaseComponent />
            </ContextProvider>
    }

    const BaseComponent = () => {
        const { number } = useContext(context);
        return <div>{number}</div>
    }
    ```