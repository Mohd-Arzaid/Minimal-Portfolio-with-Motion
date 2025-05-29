import { cn } from "@/lib/utils"

const Container = ({ children, className }) => {
    return (
        <div className={cn("w-full max-w-4xl mx-auto bg-white dark:bg-black ", className)}>
            {children}
        </div>
  )
}

export default Container
