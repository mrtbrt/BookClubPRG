import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, BookHeart, Trophy, Sparkles } from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        title: "Sign Up",
        description: "Tell us about your young reader - their age, interests, and reading level.",
        color: "bg-[#F59A8F]",
        iconColor: "text-[#EB4630]",
        number: "1",
    },
    {
        icon: BookHeart,
        title: "Get Matched",
        description: "We'll recommend perfect books tailored to your child's unique preferences.",
        color: "bg-[#73D4C6]",
        iconColor: "text-[#339989]",
        number: "2",
    },
    {
        icon: Sparkles,
        title: "Read & Earn",
        description: "Complete books to earn XP, unlock badges, and level up your reading journey.",
        color: "bg-[#F9DD8A]",
        iconColor: "text-[#F5C842]",
        number: "3",
    },
    {
        icon: Trophy,
        title: "Celebrate!",
        description: "Share achievements, compete with friends, and become a reading champion!",
        color: "bg-[#B38DD9]",
        iconColor: "text-[#8537d4]",
        number: "4",
    },
];

const HowItWorks = () => {
    return (
        <section className="flex relative py-12 md:py-20 px-4 bg-[#FAF8F5] border">
            <div className="container max-w-5xl mx-auto">

                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-nunito font-black text-foreground mb-3 md:mb-4">
                        How It Works
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground font-nunito max-w-2xl mx-auto px-4">
                        Getting started is as easy as 1-2-3-4! Join thousands of kids on their reading adventure.
                    </p>
                </div>


                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {steps.map((step, index) => (
                        <Card
                            key={step.number}
                            className="border-0 shadow-card bg-card hover:shadow-bounce transition-all duration-300 hover:-translate-y-2 overflow-hidden group font-nunito"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="p-4 sm:p-6 text-center">

                                <div className="relative mb-4 sm:mb-6">
                                    <div className={`w-14 sm:w-20 h-14 sm:h-20 mx-auto rounded-xl sm:rounded-2xl ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon className={`w-7 sm:w-10 h-7 sm:h-10 ${step.iconColor}`} />
                                    </div>
                                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-foreground text-background flex items-center justify-center font-black font-nunito text-xs sm:text-sm">
                                        {step.number}
                                    </div>
                                </div>


                                <h3 className="text-base sm:text-xl font-bold font-nunito text-foreground mb-1 sm:mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-xs sm:text-sm font-nunito leading-relaxed">
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;