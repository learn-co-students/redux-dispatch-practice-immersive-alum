export let state;


export function managePets(state={pets: []}, action){
    if (action.type == "ADD_PET") {
        return {pets: [...state.pets, action.pet]}
    } else if (action.type == "REMOVE_PET") {
        return {pets: state.pets.filter(x => x.id != action.id)}
    } else {
        return state
    }
}

export function dispatch(action){
    state = managePets(state, action)
    render()
}

export function render(){
    let container = documentt.getElementById('container');
    let petsList = state.pets.map(pet => {
        return <li>${pet.name}</li>
    }).join(' ');
    container.innerHTML  = <ul>${petsList}</ul>
}
