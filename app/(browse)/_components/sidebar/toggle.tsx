"use client";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";

type Props = {};

export const Toggle = (props: Props) => {
  const { collapsed, onExpand, onCollapsed } = useSidebar((state) => state);
  const label = collapsed ? "Expand" : "Collapse";
  return (
    <>
      {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
          <Button onClick={onExpand} variant={"ghost"} className="h-auto p-2">
            <ArrowRightFromLine className="h-4 w-4" />
          </Button>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full">
          <p className="font-semibold text-primary">For you</p>
          <Button
            onClick={onCollapsed}
            className="h-auto p-2 ml-auto"
            variant={"ghost"}
          >
            <ArrowLeftFromLine className="h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  );
};
