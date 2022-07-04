let lastid = 0;

function reducers(state ={
  wholeAmount : 0,
  expense:0,
  income:0,
  history:[]
}, action) {
  switch (action.type) {
    case "EXPENSE":
     
      return {
        ...state,
        history:[...state.history , { values : action.payLoad , action:"expense"} , ],
        expense:parseInt(state.expense , 10) + parseInt(action.payLoad?.value?.amount , 10),
        wholeAmount:parseInt(state.wholeAmount,10) - parseInt(action.payLoad.value.amount ,10)
      }

    case "INCOME":
   
        return {
          ...state,
          history:[...state.history ,{ values : action.payLoad , action:"income"} ],
          income:parseInt(state.income ,10) + parseInt(action.payLoad.value.amount ,10),
          wholeAmount:parseInt(state.wholeAmount ,10) + parseInt(action.payLoad.value.amount ,10) 
        }
    default:
      return state;
  }
}

export default reducers;
