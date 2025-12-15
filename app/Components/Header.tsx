import { BookOpen } from "lucide-react";
import { Nunito } from "next/font/google";
import { Button } from "@/components/ui/button";


const nunito = Nunito({
    subsets: ['latin'],
    weight: '400',
})

export default function Header() {

    return (
        <header className="fixed flex justify-between top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">

            <div className="flex flex-row items-center justify-between h-16 p-5">
                <a href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform rounded-full bg-linear-to-br from-[#F59A8F] to-[#F5C842]">
                        <BookOpen className="w-5 h-5 text-primary-foreground " />
                    </div>
                    <span className="text-2xl text-foreground font-nunito font-extrabold"
                    >BookClub</span>
                </a>
            </div>

            <nav className="hidden md:flex flex-row justify-center items-center gap-8 p-6">
                <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                    How It Works
                </a>
                <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                    Books
                </a>
                <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                    For Parents
                </a>
            </nav>
            <div className="hidden md:flex justify-end items-center gap-4 p-6">
                <Button variant="ghost" size="sm" className="cursor-pointer rounded-full">
                    Log In
                </Button>
                <Button variant="default" size="sm" className="cursor-pointer rounded-full bg-[#F07060] hover:scale-110 hover:bg-[#F07060] ">
                    Get Started
                </Button>
            </div>



        </header >
    )

}