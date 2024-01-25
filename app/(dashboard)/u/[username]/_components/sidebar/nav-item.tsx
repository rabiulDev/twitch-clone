"use client";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive: boolean;
};

export const NavItem = (props: Props) => {
  const { label, href, icon: Icon, isActive } = props;
  const { collapsed } = useCreatorSidebar((state) => state);
  return (
    <Button
      asChild
      variant={"ghost"}
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent"
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            "flex items-center w-full gap-x-4",
            collapsed && "justify-center"
          )}
        >
          <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
          {!collapsed && <span>{label}</span>}
        </div>
      </Link>
    </Button>
  );
};

export const NavItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[48px] min-w-[48px] rounded-md" />
      <div className="flex-1 hidden lg:block">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};
