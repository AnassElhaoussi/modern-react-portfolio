import React from "react"

export const SmallCard = (
    {className, children}: 
    {className: string, children: React.ReactNode}
) => {
    return (
        <span className={className}>
            {children}
        </span>
    )
}
