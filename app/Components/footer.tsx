import { BookOpen, Heart } from "lucide-react";
export default function Footer() {



    return (
        <footer className="py-8 md:py-12 px-4 bg-foreground text-background">
            <div className="container max-w-5xl mx-auto">
                <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">

                    <div className="flex items-center gap-3">
                        <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-linear-to-br from-[#F59A8F] to-[#F5C842] flex items-center justify-center">
                            <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 text-primary-foreground" />
                        </div>
                        <span className="text-lg sm:text-xl font-nunito font-black">BookClub</span>
                    </div>


                    <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <a href="#" className="text-sm font-medium font-nunito text-background/70 hover:text-background transition-colors">
                            About
                        </a>
                        <a href="#" className="text-sm font-medium font-nunito text-background/70 hover:text-background transition-colors">
                            Parents
                        </a>
                        <a href="#" className="text-sm font-medium font-nunito text-background/70 hover:text-background transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="text-sm font-medium font-nunito text-background/70 hover:text-background transition-colors">
                            Contact
                        </a>
                    </nav>


                    <p className="flex items-center gap-1 text-sm text-background/70">
                        Made with <Heart className="w-4 h-4 text-[#F07060] fill-[#F59A8F] animate-pulse" /> for young readers
                    </p>
                </div>


                <div className="mt-8 pt-8 border-t border-background/10 text-center font-nunito">
                    <p className="text-sm text-background/50">
                        © 2025 MB - Happy reading! 📚
                    </p>
                </div>
            </div>
        </footer>
    );
};