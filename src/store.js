export const initialStore=()=>{
  return{
    agendas: [],
    message: null,
    agenda: [],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  console.log('-----> type: ' + action.type);
  switch(action.type){
    // case 'loadData':
    //   return fetch('https://playground.4geeks.com/contact/agendas')
    //   .then(resp=>resp.json())
    //   .then(data=> {

    //     return {
    //       ...store,
    //       agendas: data.agendas
    //     };
    //   })
    //    .catch(err=>console.log(err))

    // case 'get_agendas':
      // return {
      //   ...store,
      //   agendas: action.payload
      // }

      case 'get_agenda_by_slug':
      return {
        ...store,
        agenda: action.payload
      }

    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
