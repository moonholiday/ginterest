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
        <div className={cn('h-full mx-auto w-full max-w-screen-lg md:px-2')}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper;
