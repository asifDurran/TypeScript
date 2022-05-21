import Profile from "./components/Profile";
import { createContext, useReducer } from "react";
import Todo from "./components/Todo";
import TodoNew from "./components/TodosNew";
import { reducer, initialState, actionType } from "./store/reducer";
import User from "./components/User";

type contextType = {
  state: typeof initialState,
  dispatch: React.Dispatch<actionType>
}
export const UserConext = createContext({} as contextType);
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserConext.Provider value={{ state, dispatch }}>
    <div className="App">
      <User />
      <Profile name="Asif" age={100} status="Engineer" />
      <Profile name="Irfan" age={30} status="Contractor" />
      <Profile name="Naqash" age={25} status="Student"/>
      <Profile name="Naqash" age={25} status="Student">
        <table>
          <tr>
            <td style={{ color:"green" }}>500 K</td>
        
          </tr>
        </table>
      </Profile> 
      <Todo />
      <TodoNew />
 
    </div>
    </UserConext.Provider>
  );
}

export default App;
