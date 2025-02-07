import PizzaGrafico from './pizzaGrafico'

export default function Graficos() {
  return (
    <div className=" flex flex-col justify-center px-20 pt-8">
      <div
        className="h-48 bg-customColorCard px-3 relative space-y-4 rounded-xl mb-6"
        style={{ width: '450px' }}
      >
        <div className="flex space-x-2.5 justify-start items-center py-4">
          <div className=" bg-customColorRed rounded-full h-2.5 w-2.5 hover:bg-red-500"></div>
          <div className=" bg-customColorYellow rounded-full h-2.5 w-2.5 hover:bg-yellow-400"></div>
          <div className=" bg-customColorDarkGreen rounded-full h-2.5 w-2.5 hover:bg-green-500"></div>
        </div>

        <div className="flex space-x-5 justify-start items-center pl-4">
          <div
            className=" bg-customColorGray rounded-full h-2 hover:bg-gray-300"
            style={{ width: '15%' }}
          ></div>
          <div
            className=" bg-customColorWaterBlue rounded-full h-2 hover:bg-cyan-300"
            style={{ width: '50%' }}
          ></div>
          <p className="text-white text-xs">80%</p>
        </div>

        <div className="flex space-x-5 justify-start items-center pl-4">
          <div
            className=" bg-customColorGray rounded-full h-2 hover:bg-gray-300"
            style={{ width: '15%' }}
          ></div>
          <div
            className=" bg-customColorBlue rounded-full h-2 hover:bg-cyan-400"
            style={{ width: '15%' }}
          ></div>
          <p className="text-white text-xs">30%</p>
        </div>

        <div className="flex space-x-5 justify-start items-center pl-4">
          <div
            className=" bg-customColorGray rounded-full h-2 hover:bg-gray-300"
            style={{ width: '15%' }}
          ></div>
          <div
            className=" bg-white rounded-full h-2 hover:bg-gray-300"
            style={{ width: '65%' }}
          ></div>
          <p className="text-white text-xs">100%</p>
        </div>

        <div className="flex space-x-5 justify-start items-center pl-4">
          <div
            className=" bg-customColorGray rounded-full h-2 hover:bg-gray-300"
            style={{ width: '15%' }}
          ></div>
          <div
            className=" bg-customColorGreen rounded-full h-2 hover:bg-green-400"
            style={{ width: '45%' }}
          ></div>
          <p className="text-white text-xs">75%</p>
        </div>
      </div>
      <div className="flex space-x-6 w-full">
        <div className="w-50 h-50 bg-customColorCard px-3 relative rounded-xl">
          <div className="flex space-x-2.5 justify-start items-center py-3">
            <div className=" bg-customColorRed rounded-full h-2.5 w-2.5 hover:bg-red-500"></div>
            <div className=" bg-customColorYellow rounded-full h-2.5 w-2.5 hover:bg-yellow-400"></div>
            <div className=" bg-customColorDarkGreen rounded-full h-2.5 w-2.5 hover:bg-green-500"></div>
          </div>
          <div className="flex">
            <div
              className="flex space-x-2 justify-start pl-3"
              style={{ marginTop: '95px' }}
            >
              <div
                className=" bg-customColorBlue rounded-full h-6 hover:bg-cyan-400"
                style={{ width: '10px' }}
              ></div>
              <div
                className=" bg-customColorBlue rounded-full h-4 hover:bg-cyan-400"
                style={{ width: '10px' }}
              ></div>
            </div>
            <div className="flex space-x-2 justify-start items-end pl-2.5 pr-3 mb-10">
              <div
                className=" bg-customColorBlue rounded-full h-16 hover:bg-cyan-400"
                style={{ width: '10px' }}
              ></div>
              <div
                className=" bg-customColorBlue rounded-full h-10 hover:bg-cyan-400"
                style={{ width: '10px' }}
              ></div>
              <div
                className=" bg-customColorGray rounded-full h-24 hover:bg-gray-300"
                style={{ width: '10px' }}
              ></div>
              <div
                className=" bg-customColorBlue rounded-full h-14 hover:bg-cyan-400"
                style={{ width: '10px' }}
              ></div>
              <div
                className=" bg-customColorBlue rounded-full h-20 hover:bg-cyan-400"
                style={{ width: '10px' }}
              ></div>
              <div
                className=" bg-customColorBlue rounded-full h-10 hover:bg-cyan-400"
                style={{ width: '10px' }}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-60 h-50 bg-customColorCard px-3 relative rounded-xl">
          <div className="flex space-x-2.5 justify-start items-center py-3">
            <div className=" bg-customColorRed rounded-full h-2.5 w-2.5 hover:bg-red-500"></div>
            <div className=" bg-customColorYellow rounded-full h-2.5 w-2.5 hover:bg-yellow-400"></div>
            <div className=" bg-customColorDarkGreen rounded-full h-2.5 w-2.5 hover:bg-green-500"></div>
          </div>

          <div className="flex space-x-4 items-center pt-2">
            <div className="w-28 h-28">
              <PizzaGrafico></PizzaGrafico>
            </div>
            <div className="space-y-4 justify-start">
              <div className="bg-customColorGray rounded-full h-2 w-16 hover:bg-gray-300"></div>
              <div className="bg-customColorGray rounded-full h-2 w-14 hover:bg-gray-300"></div>
              <div className="bg-customColorGray rounded-full h-2 w-20 hover:bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
