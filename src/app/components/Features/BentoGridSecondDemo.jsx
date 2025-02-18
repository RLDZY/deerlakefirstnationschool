import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export default function BentoGridSecondDemo() {
  return (
    (<BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon} />
      ))}
    </BentoGrid>)
    ); 
}
const Skeleton = () => (
  <div className=" bg-academic-image bg-cover flex flex-1 w-full h-full min-h-[6rem] rounded-xl   
   bg-[#DADCF6]"></div>
);

const items = [
  {
    title: "Academic Excellence",
    description: "Our school offers a rigorous curriculum designed to challenge and inspire students, preparing them for success in higher education and beyond. With experienced educators and personalized support, students excel in standardized testing, critical thinking, and problem-solving skills.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#737373" viewBox="0 0 256 256"><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path></svg>,
  },
  {
    title: "Sports Programs",
    description: "We provide a wide range of athletic programs to foster teamwork, discipline, and physical fitness. From competitive team sports to recreational activities, students develop leadership and perseverance both on and off the field.",
    header:<Skeleton /> ,
    className: "md:col-span-1",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#737373" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,112h-8a32,32,0,0,1,0-64h8ZM32,96h8a32,32,0,0,1,0,64H32Zm0,80h8a48,48,0,0,0,0-96H32V64h88V192H32Zm192,16H136V64h88V80h-8a48,48,0,0,0,0,96h8v16Z"></path></svg>,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header:<Skeleton /> ,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Extracurricular Activities",
    description:
      "Beyond the classroom, we offer a variety of extracurricular activities including arts, music, clubs, and student organizations. These activities help students discover new passions, build skills, and engage with the community.",
    header:<Skeleton /> ,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

];
