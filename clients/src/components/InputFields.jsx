import {} from "react";

function InputFields(props) {
  return (
    <div className='container mx-auto'>
      {props.label && <label className="block mb-1">{props.label}</label>}
      <input type="text" {...props} className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"/>
    </div>
  );
}

export default InputFields;
