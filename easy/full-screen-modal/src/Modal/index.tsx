import { useState } from "react";

export default function Modal() {
  // Write your code here
  const [isModal, setIsModal] = useState(false);
  const showModal =()=>{
    setIsModal(true)
  }
  const closeModal = () =>{
    setIsModal(false)
  }
  return <div>
    <div>
      <button className="button-55" onClick={showModal}>Show Modal</button>
    </div>
    <div className="modal-container" style={
    isModal
      ? { opacity: 1, pointerEvents: "all" }
      : { opacity: 0, pointerEvents: "none" }
  }
  onClick={closeModal}>
      <div className="modal-container-size">
      <h1>Modal's Are Cool</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, eaque tenetur, voluptatibus nihil molestiae neque alias non, numquam beatae dolores reiciendis perferendis earum a dolor mollitia tempora! Eaque, ea ducimus.</p>
      <button className="button-55" onClick={closeModal}>Close</button>
      </div>
    </div>
  </div>;
}
