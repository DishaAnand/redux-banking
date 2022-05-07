import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { deposit,Withdraw,collectInterest,deleteAccount,toggleAccount } from '../actions/bankingActions'
const Banking = () => {
    const[amount,setAmount]=useState("")
    const dispatch=useDispatch()
    const handleDeposit=()=>{
        dispatch(deposit(amount))
    }
    const handleWithdraw=()=>{
        dispatch(Withdraw(amount))
    }
    const handleCollectInterest=()=>{
        dispatch(
            collectInterest()
        )
    }
    const handleDeleteAccount=()=>{
        dispatch(
            deleteAccount()
        )
    }
    const handleChangeAccount=()=>{
        dispatch(toggleAccount())
    }
    return (
        <div className="form-group">
            <input value={amount} onChange={(e)=>setAmount(e.target.value)}type="text" className="form-control"/>
            <button onClick={handleDeposit} className="btn btn-success">Deposit</button>
            <button onClick={handleWithdraw} className="btn btn-primary">Withdraw</button>
            <button onClick={handleCollectInterest} className="btn btn-warning">collect interest</button>    
            <button onClick={handleDeleteAccount} className="btn btn-danger">delete account</button>
            <button onClick={handleChangeAccount} className="btn btn-secondary">Change Account</button>
        </div>
    )
}

export default Banking
