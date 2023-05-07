import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
            <p className="font-epilogue font-normal text-[17px] text-black bg-cyan-300 px-3 py-2 w-full rouned-b-[10px] text-center">{title} :</p>
      <h4 className="font-epilogue font-bold text-[30px] text-black p-3 bg-cyan-300 rounded-t-[10px] w-full text-center truncate">{value}</h4>

    </div>
  )
}

export default CountBox