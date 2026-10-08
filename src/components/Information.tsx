import { Progress, ProgressLabel } from "./ui/progress";

export default function Information() {
  return (
    <div className="bg-card border p-2 flex flex-col gap-2 rounded-lg">
      <h1>User Information</h1>
      <div className="flex flex-col gap-3">
        <Progress value={56} className="w-full">
          <ProgressLabel className="text-ring text-[11px]">Profile completion</ProgressLabel>
        </Progress>
        <div className="flex gap-1.5">
          <span className="font-bold">Username:</span>
          <span>Mahdi911110</span>
        </div>
        <div className="flex gap-1.5">
          <span className="font-bold">Email:</span>
          <span>Mahdi911110@gmail.com</span>
        </div>
        <div className="flex gap-1.5">
          <span className="font-bold">Phone:</span>
          <span>+1 234 5678</span>
        </div>
        <div className="flex gap-1.5">
          <span className="font-bold">Location:</span>
          <span>New York, NY</span>
        </div>
        <div className="flex gap-1.5">
          <span className="font-bold">Role:</span>
          <span>Mahdi911110</span>
        </div>
      </div>
      <span className="text-ring">
        Joined on 2025.01.01
      </span>
    </div>
  );
}