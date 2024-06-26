"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

interface ChatFormProps {
  onSubmit: () => void;
  value: string;
  onChange: (value: string) => void;
  isHidden: boolean;
  isFollowersOnly: boolean;
  isFollowing: boolean;
  isDelayed: boolean;
}

export const ChatForm = ({
  onSubmit,
  value,
  onChange,
  isHidden,
  isFollowing,
  isFollowersOnly,
  isDelayed,
}: ChatFormProps) => {
  return (
    <form
      onSubmit={() => {}}
      className="flex flex-col items-center gap-y-4 p-3"
    >
      <div className="w-full">
        <Input
          onChange={() => {}}
          value={value}
          disabled={false}
          placeholder="Send a Message"
          className={cn("border-white/10")}
        />
      </div>
      <div className="ml-auto">
        <Button type="submit" variant="primary" size="sm" disabled={false}>
          Chat
        </Button>
      </div>
    </form>
  );
};
