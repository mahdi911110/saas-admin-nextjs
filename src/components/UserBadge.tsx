import { Candy, Citrus, Shield, Verified } from "lucide-react";
import { Badge } from "./ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";

export default function UserBadge() {
  const icons = [
    {
      component: (
          <Badge className="w-6 h-6 p-0 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300" color="blue">
            <Verified />
          </Badge>
      )
    },
    {
      component: (
          <Badge className="w-6 h-6 p-0 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300" color="green">
            <Shield />
          </Badge>
      )
    },
    {
      component: (
          <Badge className="w-6 h-6 p-0 bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300" color="yellow">
            <Candy />
          </Badge>
      )
    },
    {
      component: (
          <Badge className="w-6 h-6 p-0 bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300" color="orange">
            <Citrus />
          </Badge>
      )
    }
  ];
  return (
    <div className="bg-card border p-2 flex flex-col gap-2 rounded-lg">
      <h1>User Badges</h1>
      <div className="flex gap-3">
        {icons.map((item, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger delay={10} closeDelay={100} render={
              <Button variant="link" className="p-0">
                {item.component}
              </Button>
            } />
            <HoverCardContent className="flex w-64 flex-col gap-0.5">
              <div className="font-semibold">@nextjs</div>
              <div>The React Framework – created and maintained by @vercel.</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Joined December 2021
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}