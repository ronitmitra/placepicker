import { useEffect, useState} from "react";
import Progressbar from "../Progressbar";
export default function DeleteConfirmation({ onConfirm, onCancel,open}) {
  const [Timer,setTimer] = useState(3000);
  const [confirm,setConfirm] = useState(false)
useEffect(()=>{
const timer = setTimeout(()=>{
  if(!confirm){
    onCancel();
  }
},Timer);

return ()=>{
  clearTimeout(timer)
}
},[onCancel,confirm,Timer]);

function handleConfirm(){
setConfirm(true);
onConfirm();
setConfirm(false)
}
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={handleConfirm} className="button">
          Yes
        </button>
      </div>
      <Progressbar TIMER={Timer} open={open}/>
    </div>
   
  );
  
}
