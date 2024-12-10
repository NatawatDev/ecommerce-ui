import React from 'react'
import { Skeleton } from "@nextui-org/skeleton"
import { Card } from "@nextui-org/card"

const Loading = () => {
  return (
    <Card className="w-full space-y-6 p-6" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-[300px] rounded-lg bg-default-300" />
      </Skeleton>

      <div className="space-y-6">
        {[...Array(3)].map((item, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-5 w-4/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-full rounded-lg">
              <div className="h-4 w-full rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-1/3 rounded-lg">
              <div className="h-4 w-1/3 rounded-lg bg-default-300" />
            </Skeleton>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default Loading
