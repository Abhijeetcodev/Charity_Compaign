import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className="flex-1 w-full flex flex-col ">
      {labelName && (
        <span className="font-epilogue font-medium text-[15px] leading-[22px] text-white mb-[10px]">{labelName}</span>
      )}
      {isTextArea ? (
        <textarea 
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-opacity-30 font-epilogue text-white-300 text-[15px] placeholder:text-black rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <input 
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-opacity-30 font-epilogue text-white-300 text-[15px] placeholder:text-black rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  )
}

export default FormField