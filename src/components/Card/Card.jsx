

function Card(props) {
  return (
    <div className="w-[571px] h-[342px] relative">
        <img src={`./image/${props.image}`} alt="bg-image" />
            <div className="w-[386px] h-[53px] absolute top-[261px] opacity-[0.8] rounded-tr-[33px] bg-black flex items-center ">
                <p className="text-[28px] font-[700] text-white leading-[33px] raleway ml-[40px]">{props.text}</p>
            </div>
    </div>
  )
}

export default Card