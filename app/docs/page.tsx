'use client'

import React, { useState } from "react";
import {Input} from "@nextui-org/input";
// import { title } from "@/components/primitives"
import { EyeSlashFilledIcon } from '@/components/EyeSlashFilledIcon'
import { EyeFilledIcon } from '@/components/EyeFilledIcon'

export default function DocsPage() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      className="max-w-xs"
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      label="Password"
      placeholder="Enter your password"
      type={isVisible ? "text" : "password"}
      variant="bordered"
    />
  );
}
