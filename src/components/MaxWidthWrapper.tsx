import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string,
    children: ReactNode
}) => {
    return (
        <div className={cn('h-full mx-auto w-full md:px-4')}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper;
