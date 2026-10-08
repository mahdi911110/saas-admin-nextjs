import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function UserDescribe() {
  return (
    <div className="flex flex-col bg-card border rounded-lg p-4 gap-2">
      <div className="flex gap-2 items-center">
        <Avatar className="size-12">
          <AvatarImage src="/images/avatar.jpg" alt="avatar" />
          <AvatarFallback>
            Avatar
          </AvatarFallback>
        </Avatar>
        <h1>
          Mahdi911110
        </h1>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis exercitationem nobis cumque sapiente, amet a error sit totam dolores neque voluptatibus tenetur labore voluptatem enim aliquid, recusandae deserunt harum.
      </div>
    </div>
  );
}