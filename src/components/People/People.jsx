
function People() {
  return (
    <section className="mt-[200px] relative">
      <h2 className="text-[108px] leading-[108px] bebas">як люди впливають на зміну клімату?</h2>
      <h3 className="text-[40px] bebas leading-[46px] mt-[50px]">основні галузі:</h3>
      <div className="flex gap-[100px]">
        <img src="./image/image 4.svg" alt="photo" className="mt-[56px]"/>
        <img src="./image/6907492_39766 1.svg" alt="photo"  className="mt-[-30px]"/>
      </div>
      <h3 className="text-[40px] bebas leading-[46px] mt-[140px]">Що спричиняє викиди парникових газів?</h3>
      <div className="mt-[46px] flex gap-[22px]">
        <div className="flex flex-col gap-[22px]">
          <div className="w-[571px] h-[98px] bg-[#04F06A] rounded-[12px] flex items-center gap-[4px]">
            <img src="./image/mage_electricity.svg" alt="image" className="ml-[36px]"/>
            <p className="text-[28px] font-[600]">Виробництво електроенергії</p>
          </div>
          <div className="w-[571px] h-[98px] bg-[#04F06A] rounded-[12px] flex items-center gap-[4px]">
            <img src="./image/tabler_car.svg" alt="image" className="ml-[36px]"/>
            <p className="text-[28px] font-[600]">Транспорт</p>
          </div>
          <div className="w-[571px] h-[98px] bg-[#04F06A] rounded-[12px] flex items-center gap-[4px]">
            <img src="./image/iconoir_industry.svg" alt="image" className="ml-[36px]"/>
            <p className="text-[28px] font-[600]">Промисловість</p>
          </div>
          <div className="w-[571px] h-[98px] bg-[#04F06A] rounded-[12px] flex items-center gap-[4px]">
            <img src="./image/healthicons_agriculture-outline.svg" alt="image" className="ml-[36px]"/>
            <p className="text-[28px] font-[600]">Сільське господарство</p>
          </div>
          <div className="w-[571px] h-[98px] bg-[#04F06A] rounded-[12px] flex items-center gap-[4px]">
            <img src="./image/tabler_trash.svg" alt="image" className="ml-[36px]"/>
            <p className="text-[28px] font-[600]">Відходи</p>
          </div>
        </div>
        <div className="flex flex-col gap-[22px]">
          <div className="w-[721px] h-[98px] bg-[#04F06A] rounded-[12px] flex items-center gap-[4px]">
              <p className="text-[28px] font-[600] ml-[36px]">Спалювання вугілля на теплоелектростанціях</p>
          </div>
          <div className="w-[721px] h-[98px] bg-[#04F06A] rounded-[12px] flex items-center gap-[4px]">
              <p className="text-[28px] font-[600] ml-[36px]">Спалювання бензину на дизелю</p>
          </div>
          <div className="w-[721px] h-[98px] bg-[#04F06A] rounded-[12px] flex items-center gap-[4px]">
              <p className="text-[28px] font-[600] ml-[36px]">Викиди під час виробництва товарів</p>
          </div>
          <div className="w-[721px] h-[98px] bg-[#04F06A] rounded-[12px] flex items-center gap-[4px]">
              <p className="text-[28px] font-[600] ml-[36px]">Вирубування лісів, тваринництво</p>
          </div>
          <div className="w-[721px] h-[98px] bg-[#04F06A] rounded-[12px] flex items-center gap-[4px]">
              <p className="text-[28px] font-[600] ml-[36px]">Розкладання не утилізованих відходів</p>
          </div>
        </div>
        <div className="flex flex-col gap-[22px]">
          <img src="./image/ВУГІЛЛЯ.svg" alt="photo" className="w-[440px] h-[98px] rounded-[12px]"/>
          <img src="./image/БЕНЗИН.svg" alt="photo" className="w-[440px] h-[98px] rounded-[12px]"/>
          <img src="./image/ВИКИДИ.svg" alt="photo" className="w-[440px] h-[98px] rounded-[12px]"/>
          <img src="./image/ВИРУБУВАННЯ.svg" alt="photo" className="w-[440px] h-[98px] rounded-[12px]"/>
          <img src="./image/НЕ РОЗКЛАДАННЯ.svg" alt="photo" className="w-[440px] h-[98px] rounded-[12px]"/>
        </div>
      </div>
      <img src="./image/medved.svg" alt="photo" className="absolute top-[820px] right-[30px]" />
    </section>
  )
}

export default People