import { ErrorTwoTone } from '@mui/icons-material';
import {useEffect, useState } from 'react'
import { RxText } from 'react-icons/rx';

function Clg() {

    const [isData,setData] = useState(false);

    async function fecthdata(){
         setData(true)
         
        await new Promise(resolve => setTimeout(resolve, 5000));
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // await response.json();
    
        setData(false)


    }
   
    if(isData){
        return <div className=' w-full h-screen text-center text-2xl w-32 h-32 border-2 border-blue-500 rounded-full animate-spin mx-auto mt-20 border-t-white'> </div>
    }
    return <div>

        <div className='border-2 bg-blue-500  w-fit shadow-xl p-2 text-white rounded-xl px-4 m-20 hover:scale-105 transition-all ' onClick={fecthdata}>Fetch Data</div>
    </div>

   
}

export default Clg