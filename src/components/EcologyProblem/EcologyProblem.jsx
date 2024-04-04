import Card from "../Card/Card"

function EcologyProblem() {
  return (
    <section className="mt-[200px]" id="ecology">
      <h2 className="text-[128px] bebas leading-[128px] text-[#00171F]">ЕКОЛОГІЧНІ ПРОБЛЕМИ</h2>
      <div className="mt-[64px] flex flex-row flex-wrap gap-[20px]">
        <Card text="Забруднення повітря" image="ecology-1.svg"/>
        <Card text="Забруднення води" image="ecology-2.svg"/>
        <Card text="Зміна клімату" image="ecology-3.svg"/>
        <Card text="Вимирання тварин" image="ecology-4.svg"/>
        <Card text="Кислотні дощі" image="ecology-5.svg"/>
        <Card text="Вирубка лісів" image="ecology-6.svg"/>
      </div>
      <p className="text-[28px] mt-[64px] font-[600] raleway leading-[32.87px] w-[996px]">
        Зміна клімату — серйозна та актуальна проблема. 
        Настільки серйозна, що протидія зміні клімату — це одна із Цілей сталого розвитку.</p>
    </section>
  )
}

export default EcologyProblem