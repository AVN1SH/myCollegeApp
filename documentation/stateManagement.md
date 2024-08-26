## State Management

### State Management Strategy

- **Redux Toolkit**: The application utilizes Redux Toolkit for efficient state management, offering simplified configuration and improved performance through optimized Redux features such as `createSlice` and `configureStore`.
  
- **Centralized Store**: Redux maintains a centralized store (`store`) where global application state is managed. This allows different components across the application to access and update state without prop drilling.
  
- **Reducer Functions**: Reducer functions within Redux slices (`authSlice`, `stdSlice`) handle state transitions for specific features such as authentication status, student admissions, and loading indicators. These reducers manage state changes based on dispatched actions.
  
- **Immutable Updates**: Redux Toolkit ensures immutability of state updates, preventing direct mutation of state and promoting predictable application behavior through pure functions.

### Hooks

- **useState**: React's `useState` hook is used to manage local component state for simple state transitions and component-level data storage. It facilitates reactive UI updates based on user interactions.
  
- **useEffect**: `useEffect` hook is employed for handling side effects and asynchronous operations such as data fetching, subscription management, and updating the DOM based on state changes.
  
- **useParams**: React Router's `useParams` hook extracts parameters from the URL, allowing dynamic routing and navigation based on URL segments.
  
- **useDispatch**: Redux Toolkit's `useDispatch` hook dispatches actions to Redux store, triggering state updates and side effects across the application.
  
- **useSelector**: `useSelector` hook selects and retrieves specific state slices from the Redux store, enabling components to subscribe to state changes and re-render based on updated data.

### Context API

- **Usage**: React's Context API provides a way to share global state across the component tree without prop drilling. It's used for passing down user authentication status, theme preferences, and other application-wide data to nested components.
  
- **Provider Pattern**: Context providers wrap components that need access to shared state, ensuring data consistency and minimizing re-renders caused by state updates in deeply nested components.
  
- **Consumer Pattern**: Components consume context using the `useContext` hook, accessing shared state and subscribing to updates. This pattern improves code readability and reduces the complexity of passing props manually.

