



import {logo, nft1, nft2, nft3, nft4, nft5, nft6, source, spray, spray2

} from "./assets"

function App() {
  
  return (
    <div className='flex w-full  flex-col  h-full'>
      <div className="flex h-full flex-row items-center justify-between bg-spray2 bg-center bg-fit z-30 invert p-2 ">
       
          <a className=" font-Apple text-white text-center z-20 sm:text-[2rem] text-sm p-3" href="https://discord.gg/b00bs">Discord</a>
          <a className=" font-Apple text-white text-center z-20 sm:text-[2rem] text-sm p-3" href="https://magiceden.io/marketplace/b00bs">Magic Eden</a>
          <a className=" font-Apple text-white text-center z-20 sm:text-[2rem] text-sm p-3" href="https://twitter.com/b00bsNFT">Twitter</a>
        
        

      </div>
      
    <div className='w-[90%] h-[90vh] sm:h-full relative flex justify-center sm:justify-start flex-col sm:flex-row z-20 items-center '>
            <img src={logo} alt="journal" className='z-20 w-[200px] h-[200px] xs:w-[250px] xs:h-[250px] sm:w-[400px] sm:h-full relative '/>
            <p className='ml:hidden xs:flex text-black font-Apple text-[28px] lg:text-[50px]  md:text-[30px] text-center sm:text-start items-center pt-20 sm:pt-0 z-30'>welcome to b00btopia.</p>
            <p className='ml:flex xs:hidden text-black font-Apple text-[28px] lg:text-[50px]  md:text-[30px] text-center sm:text-start items-center pt-20 sm:pt-0 z-30'>welcome <br /> to b00btopia.</p>

            <div className='xs:flex hidden'>
              <div className='xl:flex hidden'>
            
                <img src={spray} alt="spray" className='absolute top-10 left-[600px] z-10 invert'/>
                <img src={spray} alt="spray" className='absolute top-[100px] left-[530px] z-10 invert'/>
                <img src={spray} alt="spray" className='absolute top-[50px] left-[930px] z-10 invert'/>
              </div>
              <div className='sm:flex hidden overflow-clip '>
                <img src={spray} alt="spray" className='absolute top-[100px] left-[10%] z-10 invert'/>
                <img src={spray} alt="spray" className='absolute top-[1px] left-[10%] z-10 invert'/>
                <img src={spray2} alt="spray2" className='absolute top-[1px] left-[0px] z-0 scale-125 invert'/>
              </div>
              
           
            </div>
            <div className='ml:hidden xs:flex sm:hidden overflow-hidden'>
                <img src={spray2} alt="spray2" className='absolute top-[50%] left-[5%] z-10 scale-110 invert'/>
                <img src={spray2} alt="spray2" className='absolute top-[25%] left-[5%] z-0 scale-110 invert'/>
            </div>
            <div className='ml:flex xs:hidden overflow-hidden'>
                <img src={spray2} alt="spray2" className='absolute top-[50%] left-[5%] z-10 scale-90 invert'/>
                <img src={spray2} alt="spray2" className='absolute top-[20%] left-[5%] z-0 scale-110 invert'/>
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
