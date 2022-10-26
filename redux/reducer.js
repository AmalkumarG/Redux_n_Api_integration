const initialState=[]
export const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case "ViewRecipe":return[...state,action.payload]
        case "removeItem":return state.filter((a)=>a.label!=action.payload)
        
    }
    return state

}