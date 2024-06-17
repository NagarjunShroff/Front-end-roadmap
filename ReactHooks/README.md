# React Hooks

1. State Hooks:
    - useState: lets you to declare a state variable and you can update it directly.
    
    - useReducer: lets you to declare a state variable with the update logic inside a reducer function.

2. Context Hook:
    - useContext: lets you to pass the information from a component to its child components(at any level) without using props.

3. Ref Hooks:
    - useRef: This lets you hold the information and it is not used for rendering. Mostly use to hold the DOM node.
    unlike useState, updating the ref does not re-render the component.
    
    - useImperativeHandle: This lets you to customise the ref exposed by your component.

4. Effect Hooks:
    - useEffect: This lets you to connect to and synchronous with external system. This includes dealing with network, browser DOM, animations, Widgets developed using other UI library and any other non-react code.

    Effects are an "escape hatch" from the React paradigm. Dont use effects for orchestrate the data flow in your application. If you are not interacting with external systems, you might need not to use effects.

    - useLayoutEffect: fires before the browser repaints the screen. you can calculate the layout here.
    
    -useInsertionEffect: fires before React does changes to the DOM. Libraries can insert the dynamic CSS here.

5. Performance Hooks:
    A common way to improove the performace of the re-rendering by avoiding the unnecessary work. You can tell react to reuse the cached results of an expensive calculations or skip the re-rendering if the data has not been changed since the last render.

    - useMemo: lets you to cached the results of an expensive calculations.

    - useCallback: lets you to cache the function definaton before passing it to optimized component.

    Sometimes you can avoid re-rendering as the screen needs to be updated. In that case you can improve the preformance by separting out the blocking updates that are synchronous from the non-blocking updates that does not need to block the user interface.

    for better rendering, you can use one of the bleow hooks,

    - useTransistion: lets you to mark the state transition as non-blocking and allow other updates to interrupt it.

    -useDefferedValue: lets you to deffer updating the non-critical part of UI and lets other important part to update first.

6. Resource Hook:
    Resource can be accessed by a component without keeping them in their state.

    - use: lets you to read the value from the resource like a promise or context.

7. Other Hooks:
    These are meant for library authours and not being used in application.

    - useDebugvalue: lets to customize the lable REact devTools display for your custom hook.

    - useId: lets a compoenent to have associated unique ID with itself.

    - useSyncExternalStore: lets a component to subscribe to an external store.


