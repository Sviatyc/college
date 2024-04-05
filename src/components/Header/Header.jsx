import EarthPlanet from "../EarthPlanet/EarthPlanet"

function Header() {

  return (
    <header className="flex flex-row relative select-none">
      <img src="./image/undp-logo-blue.svg" alt="logo" className='absolute right-[72px]'/>
      <div className="flex flex-col">
        <h1 className="text-[172px] bebas font-[400] mt-[188px] leading-[171px] inline-block">
          <span className="text-[#04F06A] leading-[1]">ЗЕМЛЯ — </span>
          <span className="leading-[1] text-[#00171F]">МІЙ ДІМ</span>
        </h1>
        <p className="w-[881px] text-[24px] font-[600] mt-[82px] raleway leading-[28.18px]">
          Усі ми живемо на одній планеті, насолоджуємося її красою та споживаємо її ресурси. Ми сприймаємо це так,
          ніби ресурси нашої планети нескінченні. Ніби завжди буде чисте повітря, вода та їжа. 
        </p>
        <p className="w-[721px] raleway text-[24px] font-[600] mt-[36px] leading-[28.18px]">
          Але якщо ми не дбатимемо про свою планету, про довкілля та екологію, 
          ці ресурси зникнуть, а наша планета може стати непридатною для життя.
        </p>
        <a href="#ecology">
          <button className="text-[24px] font-[700] raleway mt-[92px] w-[450px] h-[57px] bg-[#04F06A] leading-[28.18px] hover:opacity-[0.6]">ЧИТАТИ ДАЛІ</button>
        </a>
      </div>
      <div className="absolute top-[200px] right-[100px]">
        <EarthPlanet />
      </div>
      <img src="./image/Planet.gif" alt="giff" className="absolute top-[530px] right-[890px]" />
    </header>
  )
}

export default Header