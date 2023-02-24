



import {logo, nft1, nft2, nft3, nft4, nft5, nft6, source, spray, spray2

} from "./assets"

function App() {
  
  return (
    <div className='flex justify-start '>
    <div className='w-[90%] h-full relative flex justify-center ss:justify-start flex-col ss:flex-row z-20 '>
            <img src={logo} alt="journal" className='z-20 w-[200px] h-[200px] ss:h-full ss:w-[400px] relative ml-[25%] ss:ml-0 mt-[30px] xs:mt-0'/>
            <p className='flex text-black font-Apple text-[28px] lg:text-[50px] pl-[15%] ss:pl-0 md:text-[30px] z-20 text-center sm:text-start items-center pt-10 ss:pt-0'>welcome to b00btopia.</p>
            <div className='xs:flex hidden'>
            <div className='md:flex hidden'>
          
              <img src={spray} alt="spray" className='absolute top-30 left-[600px] z-10 invert'/>
              <img src={spray} alt="spray" className='absolute top-[100px] left-[530px] z-10 invert'/>
              <img src={spray} alt="spray" className='absolute top-[50px] left-[930px] z-10 invert'/>
            </div>
            <div className='ss:flex hidden overflow-hidden'>
              <img src={spray} alt="spray" className='absolute top-[100px] left-[130px] z-10 invert'/>
              <img src={spray} alt="spray" className='absolute top-[1px] left-[130px] z-10 invert'/>
            </div>
            <img src={spray2} alt="spray" className='absolute top-[1px] left-[0px] z-0 scale-125 invert'/>
           
            </div>
            <div className='ss:hidden flex '>
            <img src={spray2} alt="spray" className='absolute top-[1px] left-[-10px] z-0 scale-110 invert'/>
              <img src={spray2} alt="spray" className='absolute top-[200px] left-[0px] z-0 scale-110 invert'/>
            </div>
      </div>
        <div className='w-full h-full overflow-hidden perspective-500 xs:perspective-750 absolute z-0 bg-primary items-center' >
          <div className='grid grid-cols-5 gap-12 w-[60rem] xs:w-[80rem]  md:w-full sm:h-[70rem] md:h-[70rem] lg:h-[70rem] h-[50rem] overflow-hidden origin-[50%_0%] translate-x-[20%] translate-y-[-15%] translate-z-0 rotate-x-[7deg] rotate-y-[-7deg] rotate-z-[28deg] overscroll-none scale3d-150'
          // style={"transform: translate3d(7%, -2%, 0px) scale3d(0.9, 0.8, 1) rotateX(15deg) rotareY(-9deg) rotateZ(32deg)"}
          // style={{transform: translate3d(7% -2% 0+"px"),}}
          >
            <div className='grid gap-9 w-full h-[440px] animate-sliding-img-up-1'>
                <img src={nft1} alt="Image Description" />
                <img src={nft2} alt="Image Description" />
                <img src={nft3} alt="Image Description" />
                <img src={nft4} alt="Image Description" />
                <img src={nft5} alt="Image Description" />
                <img src={nft6} alt="Image Description" />
                
                
            </div>
            <div className='grid gap-9 w-full h-[440px] animate-sliding-img-down-1'>
                <img src={nft1} alt="Image Description" />
                <img src={nft2} alt="Image Description" />
                <img src={nft3} alt="Image Description" />
                <img src={nft4} alt="Image Description" />
                <img src={nft5} alt="Image Description" />
                <img src={nft6} alt="Image Description" />
            </div>
            <div className='grid gap-9 w-full h-[440px] animate-sliding-img-up-2'>
                <img src={nft1} alt="Image Description" />
                <img src={nft2} alt="Image Description" />
                <img src={nft3} alt="Image Description" />
                <img src={nft4} alt="Image Description" />
                <img src={nft5} alt="Image Description" />
                <img src={nft6} alt="Image Description" />
            </div>
            <div className='grid gap-9 w-full h-[440px] animate-sliding-img-up-1'>
                <img src={nft1} alt="Image Description" />
                <img src={nft2} alt="Image Description" />
                <img src={nft3} alt="Image Description" />
                <img src={nft4} alt="Image Description" />
                <img src={nft5} alt="Image Description" />
                <img src={nft6} alt="Image Description" />
                
            </div>
            <div className='grid gap-9 w-full h-[440px] animate-sliding-img-down-1'>
                <img src={nft1} alt="Image Description" />
                <img src={nft2} alt="Image Description" />
                <img src={nft3} alt="Image Description" />
                <img src={nft4} alt="Image Description" />
                <img src={nft5} alt="Image Description" />
                <img src={nft6} alt="Image Description" />
            </div>
            
            



          </div>
        </div>
        {/* <div className='w-full overflow-hidden perspective-750 top-50 absolute z-0' >
          <div className='grid grid-cols-5 gap-12 w-full h-[1440px] overflow-hidden origin-[70%_0%] translate-x-[7%] translate-y-[-2%] translate-z-0 rotate-x-[5deg] rotate-y-[-9deg] rotate-z-[32deg] overscroll-none'
          // style={"transform: translate3d(7%, -2%, 0px) scale3d(0.9, 0.8, 1) rotateX(15deg) rotareY(-9deg) rotateZ(32deg)"}
          // style={{transform: translate3d(7% -2% 0+"px"),}}
          >
            <div className='grid gap-9 w-full h-[440px] animate-sliding-img-up-1'>
                <img src={nft1} alt="Image Description" />
                <img src={nft2} alt="Image Description" />
                <img src={nft3} alt="Image Description" />
                <img src={nft4} alt="Image Description" />
                <img src={nft5} alt="Image Description" />
                <img src={nft6} alt="Image Description" />
            </div>
            <div className='grid gap-9 w-full h-[440px] animate-sliding-img-up-1'>
                <img src={nft1} alt="Image Description" />
                <img src={nft2} alt="Image Description" />
                <img src={nft3} alt="Image Description" />
                <img src={nft4} alt="Image Description" />
                <img src={nft5} alt="Image Description" />
                <img src={nft6} alt="Image Description" />
            </div>
            <div className='grid gap-9 w-full h-[440px] animate-sliding-img-up-1'>
                <img src={nft1} alt="Image Description" />
                <img src={nft2} alt="Image Description" />
                <img src={nft3} alt="Image Description" />
                <img src={nft4} alt="Image Description" />
                <img src={nft5} alt="Image Description" />
                <img src={nft6} alt="Image Description" />
            </div>
            <div className='grid gap-9 w-full h-[440px] animate-sliding-img-up-1'>
                <img src={nft1} alt="Image Description" />
                <img src={nft2} alt="Image Description" />
                <img src={nft3} alt="Image Description" />
                <img src={nft4} alt="Image Description" />
                <img src={nft5} alt="Image Description" />
                <img src={nft6} alt="Image Description" />
            </div>
            <div className='grid gap-9 w-full h-[440px] animate-sliding-img-up-1'>
                <img src={nft1} alt="Image Description" />
                <img src={nft2} alt="Image Description" />
                <img src={nft3} alt="Image Description" />
                <img src={nft4} alt="Image Description" />
                <img src={nft5} alt="Image Description" />
                <img src={nft6} alt="Image Description" />
            </div>
            
            



          </div>
        </div> */}
        
      
      
    
    </div>
  )
}

export default App
