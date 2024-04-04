
function Protests() {
  return (
    <section className="flex flex-col mt-[169px] relative">
      <h2 className="text-[128px] bebas leading-[128px]">як люди протестують за збереження клімату</h2>
      <div className="w-[968px] bg-[#04F06A] h-[5px] absolute right-[62px] top-[210px]">
        <span className="w-[20px] h-[20px] rounded-full bg-[#04F06A] absolute top-[-6px] left-[-2px] "></span>
      </div>
      <div className="flex flex-row gap-[8px] mt-[72px]">
        <img src="./image/mark.svg" alt="mark" />
        <p className="text-[40px] raleway font-[600] text-[#04F06A]">Марш в Києві, 2021</p>
      </div>
      <div className="flex flex-wrap flex-row gap-[15px] mt-[64px]">
        <img src="./image/марш_1.svg" alt="image-protest" />
        <img src="./image/марш_2.svg" alt="image-protest" />
        <img src="./image/марш_3.svg" alt="image-protest" />
        <img src="./image/марш_4.svg" alt="image-protest" />
      </div>
    </section>
  )
}

export default Protests