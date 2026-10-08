import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

type Data = {
  src: string;
  title: string;
  username: string;
  follow: string;
}[];

export default function CardList({ title, data }: { title: string, data: Data }) {
  return (
    <ScrollArea className="h-full w-full rounded-lg border p-4">
      <h1 className="mb-2">{title}</h1>
      <div className="flex flex-col gap-2">
        {data.map((item, index) => (
          <Card key={index} size="sm" className="p-0 mx-1">
            <div className="flex flex-row items-center justify-between p-4 gap-4">
              <div className="relative w-12 aspect-square rounded-sm overflow-hidden">
                <Image className="object-cover" src={item.src} alt="avatar" fill />
              </div>
              <CardContent className="flex flex-col justify-center items-start p-0 mr-auto">
                <span className="font-medium text-sm">
                  {item.title}
                </span>
                <Badge variant="outline">{item.username}</Badge>
              </CardContent>
              <CardFooter className="bg-transparent border-none p-0">
                {item.follow}
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}