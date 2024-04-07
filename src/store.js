
const initialize={
      balance:0,
      loan:0,
      loanPurpose:""
}

function reducer(state=initialize,action){
 switch(action.type){
      case("account/balance"):
      return{...state,balance:state.balance+action.payload}
      case("account/withdraw"):
      return{...state, balance:state.balance-action.payload}
      case("account/requestLoan"):
      if(state.balance>0) return;
      return{...state,loan:action.payload}
      case("account/payLoan"):
      return{
            ...state,
            loan:0,
            loanPurpose:"",
            balance:state.balance-state.loan

      }
      default:
      return {state}
 }

}