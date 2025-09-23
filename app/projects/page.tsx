import Image from "next/image";
import Link from "next/link";
import { arrayPorto } from "../../data/portofolio";
export default function Projects() {
  return (
    <div className=" flex my-8 mx-4 md:mx-8 font-poppins flex-col items-center min-h-screen md:min-h-0">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {arrayPorto.map((porto, index) => (
          <div key={index} className="group relative">
            <Link href={`/portofolio/${porto.id}`}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:transition-all group-hover:opacity-75 lg:h-80">
                <Image
                  alt={porto.name}
                  src={porto.image}
                  width={100}
                  height={100}
                  unoptimized
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md text-blue-400 font-bold">
                    {porto.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {porto.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
