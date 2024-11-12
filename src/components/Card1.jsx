import { Paper } from "@mui/material"

function Card1() {
  return (
    
      
      <Paper className='w-full h-screen'  elevation={2} >
         
          <div className="w-full h-screen flex justify-center items-center bg-gray-100 relative">
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/30 to-yellow-500/10 z-0"></div>
              {/* Decorative Images */}
              <img className="absolute left-80 top-4 w-52 h-52 object-contain opacity-70" src="https://i.postimg.cc/VksB9MLc/ss4.png" alt="" />
              <img className="absolute bottom-4 right-56 w-52 h-52  object-contain opacity-70" src="https://i.postimg.cc/rFNNtgTJ/ss3.png" alt="" />

              {/* Cards Container */}
              <div className="relative flex flex-col gap-12 items-center">
                  {/* Card 1 */}


                  {/* Card 2 */}
                  <div className="flex w-full max-w-4xl h-fit bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 z-10">
                    <div className="w-[30%]  ">
                      <img src="https://images.unsplash.com/photo-1591419478162-a4dd21b7ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mint Mobile" className=" object-cover w-full h-full    " />

                    </div>
                      <div className="p-6 w-[70%]  flex flex-col justify-between">
                          <div>
                              <h2 className="text-6xl font-bold text-gray-800">Professional Truck Driver</h2>
                              <p className="text-gray-600 mt-4 leading-relaxed">
                                  I am a professional truck driver with over two years of experience operating heavy-duty vehicles at JFK Airport in New York. My work involves transporting goods and materials safely and efficiently, adhering to airport and traffic regulations, and ensuring timely deliveries. I am skilled in handling different types of trucks, performing basic maintenance checks, and following safety protocols to ensure a smooth and secure transit. My role requires excellent attention to detail, punctuality, and a strong understanding of logistics, making me a reliable and dedicated member of any transportation team.
                              </p>
                          </div>
                          {/* <button className="self-start mt-4  w-full border border-blue-600 text-blue-500 px-6 py-4 rounded hover:bg-blue-700 transition duration-300">
                              Read More
                          </button> */}
                      </div>
                  </div>
              </div>
          </div>
    </Paper>
  )
}

export default Card1