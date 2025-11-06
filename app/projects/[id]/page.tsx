import Link from "next/link";
import Image from "next/image";
import { arrayPorto } from "@/data/portofolio";

interface PageProps {
    params: { id: string };
}

export default async function ProjectDetail({ params }: PageProps) {
    const { id } = params;
    const porto = arrayPorto.find((p) => p.id === parseInt(id));
  
    if (!porto) {
      return <div className="text-white p-4">Project not found</div>;
    }
  
    return (
      <div className="container mx-auto p-4 bg-gray-950">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <Link
            href="/projects"
            className="inline-block mb-6 text-white hover:underline"
          >
            ← Back to Portfolio
          </Link>
          <p className="font-semibold text-sm text-blue-400 uppercase">{porto.category}</p>
          <h1 className="text-2xl font-bold text-white">{porto.name}</h1>
          <p className="mb-4 text-white">{porto.description}</p>
          <Image
            alt={porto.name}
            src={porto.image}
            width={800}
            height={400}
            unoptimized
            className="rounded-lg"
          />
        </div>
      </div>
    );
  }