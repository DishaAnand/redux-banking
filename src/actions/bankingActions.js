export const deposit=(amount)=>{
    return{
        type:"DEPOSIT",amount:parseInt(amount)
    }
}
export const Withdraw=(amount)=>{
    return{type:"WITHDRAW",amount:parseInt(amount)}
};
export const collectInterest=(amount)=>{
    return{ type:"COLLECT_INTEREST"}
}
export const deleteAccount=(amount)=>{
    return {type:"DELETE_ACCOUNT",}
}

export const toggleAccount=()=>{
    return{
        type:"TOGGLE_ACCOUNT"
    }
}
export const toggleAuth=()=>{
    return{
        type:"TOGGLE_AUTH"
    }
}