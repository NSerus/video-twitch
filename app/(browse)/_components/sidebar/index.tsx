import { getRecommended } from "@/lib/recommended-service";
import { RecommendedSkeleton, Recommended } from "./recommended";
import { Toggle } from "./toggle";
import { Wrapper } from "./wrapper";

export async function Sidebar() {
  const recommended = await getRecommended();
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
}

export function SidebarSkeleton() {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-e border-[#2D2E35] z-50">
      <RecommendedSkeleton />
    </aside>
  );
}
