import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  FileEdit,
  FileIcon as FileSparkles,
  FileSearch,
  Pencil,
  MoveRight,
} from "lucide-react";

interface TData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const data: TData[] = [
  {
    icon: <FileEdit className="w-8 h-8" />,
    title: "Lektorat & Korrektorat",
    description:
      "Sichere dir professionelle Unterstützung bei deiner wissenschaftlichen Arbeit und buche dir Coachingstunden bei wissenschaftlichen Fachautoren.",
  },
  {
    icon: <FileSparkles className="w-8 h-8" />,
    title: "Formatierung",
    description:
      "Sichere dir professionelle Unterstützung bei deiner wissenschaftlichen Arbeit und buche dir Coachingstunden bei wissenschaftlichen Fachautoren.",
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: "Plagiatsprüfung",
    description:
      "Sichere dir professionelle Unterstützung bei deiner wissenschaftlichen Arbeit und buche dir Coachingstunden bei wissenschaftlichen Fachautoren.",
  },
  {
    icon: <Pencil className="w-8 h-8" />,
    title: "Ghostwriting",
    description:
      "Sichere dir professionelle Unterstützung bei deiner wissenschaftlichen Arbeit und buche dir Coachingstunden bei wissenschaftlichen Fachautoren.",
  },
  {
    icon: <Pencil className="w-8 h-8" />,
    title: "Ghostwriting",
    description:
      "Sichere dir professionelle Unterstützung bei deiner wissenschaftlichen Arbeit und buche dir Coachingstunden bei wissenschaftlichen Fachautoren.",
  },
];

export default function Testimonial() {
  return (
    <div className="w-full  mx-auto px-4 py-12 bg-[#F6F4F bg">
      <div className="text-center mb-10">
        <span className="text-[13px] tracking-wide text-[#373737] border font-medium py-1 px-2 rounded-md border-black">
          Produkte
        </span>
        <h2 className="text-[30px] lg:text-[40px] text-[#373737] font-medium mt-2 mb-4 lg:tracking-wider">
          Für Studenten & Berufseinsteiger
        </h2>
        <p className="txt font-medium text-[17px] mt-6">
          Wähle die für dich passende digitale Dienstleistung aus unserem
          Angebot aus.
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {data.map((service, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <Card className="border-none">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#8CD7B0] rounded-full flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-800 font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href="#"
                    className="darkgreen  hover:translate-x-1 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    Mehr erfahren
                    <MoveRight className="pt-1" />
                  </a>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8">
          <CarouselPrevious className="relative mr-  translate-y-0" />
          <CarouselNext className="relative ml2  translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}
