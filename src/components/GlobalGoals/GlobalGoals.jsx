
function GlobalGoals() {
  return (
    <section className="flex flex-col mt-[164px]">
      <h2 className="bebas text-[128px] leading-[128px]">глобальні цілі сталого розвитку</h2>
      <img src="./image/goals-image.svg" alt="goals-image" className="mt-[64px] w-[1750px]" />
      <div className="flex flex-row items-center justify-between mt-[64px]">
        <p className="text-[28px] font-[600] leading-[33px] w-[1097px]"> 
          Цілі сталого розвитку — це цілі людства, спрямовані на те, щоб покінчити з бідністю, захистити планету і забезпечити мир та процвітання для всіх людей у світі.
          Усього цілей 17. Ціль № 13 так і називається — боротьба зі зміною клімату.
        </p>
        <div className="w-[596px] bg-[#04F06A] h-[4px] relative rounded-r-[2px] mr-6">
          <span className="w-[20px] h-[20px] rounded-full bg-[#04F06A] absolute left-[-2px] top-[-7px]"></span>
        </div>
      </div>
    </section>
  )
}

export default GlobalGoals