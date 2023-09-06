import Cursor from '../components/Cursor';

interface IIndex{
}

function Index ( props: IIndex ){

   return (
      <>
         <Cursor/>
         <div className='h-fit w-screen flex flex-col items-center p-6'>

            <div className='select-none'>
               <span className='uppercase tracking-widest text-4xl font-extralight underline underline-offset-[16px]'>Custom Cursor!</span>
            </div>

            <div className='w-[75%] h-fit flex flex-row place-content-center justify-between select-none mt-12'>
               <a href='https://www.instagram.com/tigrush_tigi/' className='uppercase tracking-widest'>My Instagram</a>
               <a href='https://twitter.com/TAgekyan' className='uppercase tracking-widest'>My Twitter</a>
               <a href='https://github.com/TigranAgekyan' className='uppercase tracking-widest'>My Github</a>
            </div>

            <div className='w-screen h-fit flex flex-col items-center'>
               <div className='w-[50%] h-[50%] flex flex-row items-center bg-slate-300 mt-32 p-8 rounded-2xl shadow-2xl '>
                  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum harum consequatur expedita perferendis. Eveniet accusantium cupiditate vitae fugit deleniti omnis doloremque aperiam repellendus aliquam voluptate, error officiis facere natus mollitia!</span>
                  <a className='bg-slate-400 shadow uppercase font-extralight text-white w-[25%] h-[25%] flex text-center p-2 rounded-md'>More Information</a>
               </div>

            </div>
         </div>
      </>
   );
}

export default Index