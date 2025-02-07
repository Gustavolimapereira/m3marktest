import Image from 'next/image'
import Graficos from '../components/graficos'
import Grafico2 from '@/components/grafico2'
import {
  BsChatSquareHeart,
  BsCheckCircleFill,
  BsEye,
  BsLightningCharge,
} from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-customColor px-32 py-10">
        <div className="h-20 flex">
          <div className="w-full grid grid-cols-2">
            <div className="h-full flex justify-start items-center">
              <Image
                src="/LogoM3Mark.svg"
                width={184}
                height={50}
                alt="logo M3 Mark"
              />
            </div>
            <div className="flex justify-center items-center space-x-20">
              <a className="text-white hover:text-CustomColorOrange" href="">
                Serviços
              </a>
              <a className="text-white hover:text-CustomColorOrange" href="">
                Quem Somos
              </a>
              <a className="text-white hover:text-CustomColorOrange" href="">
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
        <div className=" flex mt-14 ">
          <div className="grid grid-cols-2">
            <div className="h-auto space-y-10 p-16">
              <h1 className="text-5xl font-bold tracking-tight text-white max-w-xl">
                Aumente a performance da sua empresa
              </h1>
              <p className="text-white max-w-xl">
                Soluções empresariais para aumento de resultado nas redes
                sociais e na aproximação do seu público alvo.
              </p>
              <div className="space-x-10">
                <button
                  type="button"
                  className="text-black bg-customColorGreen hover:bg-green-500
                focus:ring-4 font-bold
                rounded-full py-4 px-8
                  focus:outline-none "
                >
                  Contrate agora
                </button>

                <button
                  type="button"
                  className="text-white hover:bg-customColorGreen hover:text-customColor hover:border-customColorGreen border-white border
                focus:ring-4 font-bold
                rounded-full py-4 px-8
                  focus:outline-none "
                >
                  Conheça mais
                </button>
              </div>
            </div>

            <div className="grid grid-rows-2">
              <Graficos></Graficos>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 pb-32">
        <div className="flex justify-center items-center pt-20">
          <p>Nossos serviços</p>
        </div>
        <div className="flex justify-center items-center pt-6">
          <h1 className="text-4xl text-center max-w-2xl font-roboto">
            Tudo o que sua empresa precisa para se destacar
          </h1>
        </div>
        <div className="flex pt-12 justify-center ">
          <div className="grid grid-cols-3 h-auto w-screen max-w-6xl gap-28">
            <div>
              <div className="flex justify-center">
                <Image
                  src="/Gestão.svg"
                  width={240}
                  height={50}
                  alt="Imagem Gestão"
                  className="h-80 w-60 object-cover rounded-3xl mb-6"
                />
              </div>
              <div className=" pl-10">
                <p className="text-xl mb-4">Gestão de Tráfego</p>
                <p className="max-w-60 text-gray-500 mb-4">
                  Tudo para o melhor desempenho e captação de leads para sua
                  empresa
                </p>
                <a className="font-bold" href="">
                  Saiba mais
                  <span className="ml-2">&#8594;</span>
                </a>
                <div className="mt-2 border-b border-black w-32"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-center">
                <Image
                  src="/Audiovisual.svg"
                  width={240}
                  height={50}
                  alt="Imagem Audiovisual"
                  className="h-80 w-60 object-cover rounded-3xl mb-6"
                />
              </div>
              <div className="pl-10">
                <p className="text-xl mb-4">Produção Audiovisual</p>
                <p className="max-w-60 text-gray-500 mb-4">
                  Elaboração de vídeos para aproximação B2C e B2B
                </p>
                <a className="font-bold" href="">
                  Saiba mais
                  <span className="ml-2">&#8594;</span>
                </a>
                <div className="mt-2 border-b border-black w-32"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-center">
                <Image
                  src="/Designer.svg"
                  width={240}
                  height={50}
                  alt="Imagem Designer"
                  className="h-80 w-60 object-cover rounded-3xl mb-6"
                />
              </div>
              <div className="pl-10">
                <p className="text-xl mb-4"> Designer Gráfico</p>
                <p className="max-w-60 text-gray-500 mb-4">
                  As melhores artes para publicidade empresarial.
                </p>
                <a className="font-bold" href="">
                  Saiba mais
                  <span className="ml-4">&#8594;</span>
                </a>
                <div className="mt-2 border-b border-black w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 pb-24 ">
        <div className="grid grid-cols-2 ">
          <div className="flex justify-center items-center">
            <div
              className="relative"
              style={{ height: '500px', width: '450px' }}
            >
              <div className="absolute z-index-negative">
                <Image
                  src="/atendente1.jpg"
                  width={1885}
                  height={1257}
                  alt="Imagem Designer"
                  className="h-96 w-96 object-cover rounded-3xl mb-6"
                />
              </div>
              <div className="rounded-xl absolute z-index-positive bottom-0 right-0 shadow-2xl">
                <Grafico2></Grafico2>
              </div>
            </div>
          </div>
          <div className=" m-10">
            <h1 className="text-4xl text-left max-w-2xl font-roboto pb-14">
              Alavanque seu negocio e faça sua sempresa ser reconhecida
            </h1>

            <div className="flex">
              <BsCheckCircleFill className="mr-2 text-3xl" />
              <p className="text-lg pb-5 pl-5">
                Conquiste as melhores avaliações no Google
              </p>
            </div>

            <div className="flex">
              <BsCheckCircleFill className="mr-2 text-3xl" />
              <p className="text-lg pb-5 pl-5">
                Aumento de engajamento nas redes socias
              </p>
            </div>

            <div className="flex">
              <BsCheckCircleFill className="mr-2 text-3xl" />
              <p className="text-lg pb-16 pl-5">
                Melhores resultados nas vendas
              </p>
            </div>

            <button
              type="button"
              className="text-white bg-customColor hover:bg-customColorBlue
                focus:ring-4 font-bold
                rounded-full py-4 px-8
                  focus:outline-none "
            >
              Comece agora!
            </button>
          </div>
        </div>
      </div>
      <div className="px-32 pb-10 ">
        <div className="grid grid-cols-2 ">
          <div className=" m-10">
            <h1 className="text-4xl text-left max-w-2xl font-roboto pb-14">
              Tenha padronização de marca para que seu cliente saiba quem é você
            </h1>

            <div className="flex bg-customColor justify-start rounded-md items-center mb-5 pl-10">
              <BsChatSquareHeart
                className="mr-2 text-2xl"
                style={{ color: 'white' }}
              />
              <p className="text-lg p-4 text-white text-center">
                Mostre ao seu cliente o que há de melhor
              </p>
            </div>

            <div className="flex bg-white justify-start rounded-md items-center mb-5 pl-10 shadow-lg">
              <BsEye className="mr-2 text-2xl" style={{ color: 'black' }} />

              <p className="text-lg p-4 text-black text-center">
                Tenha mais visibilidade da sua marca
              </p>
            </div>

            <div className="flex bg-white justify-start rounded-md items-center pl-10 shadow-lg">
              <BsLightningCharge
                className="mr-2 text-2xl"
                style={{ color: 'black' }}
              />

              <p className="text-lg p-4 text-black text-center">
                Esteja na frente do seu concorrente
              </p>
            </div>
          </div>
          <div className="m-5">
            <Image
              src="/atendente2.jpg "
              width={1885}
              height={1257}
              alt="Imagem Designer"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </>
  )
}
