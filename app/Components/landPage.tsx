import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, Star } from "lucide-react";




export default function LandPage() {



    return (
        <section className="flex items-center">
            <div className="w-full inset-0 bg-linear-to-br from-[#FAF8F5] via-[#F2EEE7] to-[#F59A8F]/20 border flex mx-auto">
                <Star className="absolute top-24 md:top-32 right-8 md:right-1/4 w-5 md:w-6 h-5 md:h-6 text-[#F5C842] animate-pulse" />
                <Star className="absolute top-48 left-8 md:left-1/3 w-5 h-5 text-[#F07060] animate-pulse sm:block" />
                <Star className="absolute bottom-40 right-1/3 w-5 h-5 text-[#339989] animate-pulse md:block" />

                <div className="flex mx-auto container relative z-10 px-4 p-3.5 sm:px-6 py-12 md:py-20">
                    <div className="max-w-4xl mx-auto text-center p-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft mb-15">
                            <Sparkles className="w-4 h-4 text-[#F5C842]" />
                            <span className="text-sm font-semibold text-foreground font-nunito">Join 10,000+ young readers!</span>
                        </div>
                        <h1 className="flex justify-evenly text-7xl font-extrabold leading-tight font-nunito p-10 m-5 text-[#F07060] opacity-70" >
                            Find the Perfect Book for Your Little One
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto px-2">
                            Discover personalized book recommendations and watch your child's reading journey come alive with fun challenges and rewards!
                        </p>
                        <div className="flex justify-center mx-auto gap-3 items-center animate-slide-up animation-delay-300 px-4">
                            <Button variant="default" size="lg" className="rounded-full font-nunito font-bold sm:w-auto bg-[#F07060] text-[#FAF8F5] hover:bg-[#EB4630] cursor-pointer md:text-lg">
                                <BookOpen className="w-5 h-5" />
                                Start Reading Adventure
                            </Button>
                            <Button variant="outline" size="default" className="font-nunito rounded-full sm:w-auto">
                                Learn More
                            </Button>
                        </div>
                        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 md:mt-16 max-w-xl mx-auto">
                            <div className="text-center">
                                <p className="text-2xl  sm:text-3xl md:text-4xl font-nunito font-extrabold text-[#F07060]">500+</p>
                                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Curated Books</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl sm:text-3xl md:text-4xl font-black font-nunito text-[#40BFAD]">50+</p>
                                <p className="text-xs sm:text-sm text-muted-foreground font-nunito font-medium">Fun Badges</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl sm:text-3xl md:text-4xl font-nunito font-black text-[#F5C842]">∞</p>
                                <p className="text-xs sm:text-sm text-muted-foreground font-nunito font-medium">Adventures</p>
                            </div>
                        </div>


                    </div>



                </div>
            </div>
        </section>

    )
}