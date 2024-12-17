import React from 'react'

function IconSection() {
    const icons =[
        {icon:'/icon1 (1).png', },
        {icon:'/icon1 (11).png', },
        {icon:'/icon1 (10).png', },
        {icon:'/icon1 (9).png', },
        {icon:'/icon1 (8).png', },
        {icon:'/icon1 (7).png', },
        {icon:'/icon1 (6).png', },
        {icon:'/icon1 (5).png', },
        {icon:'/icon1 (4).png', },
        {icon:'/icon1 (2).png', },
    ]
  return (
    <>
    <div className='flex flex-wrap md:gap-[56px] gap-[30px] justify-center items-center container mx-auto mt-[42px]'>
        {icons.map((pic)=>(
            <div className='hover:border-b-3 hover:border-primary pb-[12px]'><img src={pic.icon} alt="" /></div>
        ))}
    </div>
    </>
  )
}

export default IconSection