"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, Wand2 } from "lucide-react";
import { toast } from "sonner";

interface SignUpFormProps {
    onSuccess: (data: { childName: string; age: number; interests: string[] }) => void;
}

const interests = [
    { id: "adventure", label: "Adventure", emoji: "🏴‍☠️" },
    { id: "fantasy", label: "Fantasy & Magic", emoji: "🧙‍♂️" },
    { id: "animals", label: "Animals", emoji: "🐾" },
    { id: "science", label: "Science & Space", emoji: "🚀" },
    { id: "mystery", label: "Mystery", emoji: "🔍" },
    { id: "funny", label: "Funny Stories", emoji: "😂" },
    { id: "sports", label: "Sports", emoji: "⚽" },
    { id: "art", label: "Art & Creativity", emoji: "🎨" },
];

const SignUpForm = ({ onSuccess }: SignUpFormProps) => {
    const [childName, setChildName] = useState("");
    const [age, setAge] = useState("");
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const toggleInterest = (interestId: string) => {
        setSelectedInterests((prev) =>
            prev.includes(interestId)
                ? prev.filter((i) => i !== interestId)
                : [...prev, interestId]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!childName.trim()) {
            toast.error("Please enter your child's name");
            return;
        }

        const ageNum = parseInt(age);
        if (!age || ageNum < 3 || ageNum > 16) {
            toast.error("Please enter a valid age (3-16)");
            return;
        }

        if (selectedInterests.length === 0) {
            toast.error("Please select at least one interest");
            return;
        }

        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast.success("Perfect! We found some amazing books for " + childName + "!");
        onSuccess({ childName, age: ageNum, interests: selectedInterests });
        setIsLoading(false);
    };

    return (
        <section id="signup" className="py-12 md:py-20 px-4 bg-linear-to-b from-[#F2EEE7] to-[#FAF8F5]">
            <div className="container max-w-2xl mx-auto">
                <Card className="shadow-card border-0 overflow-hidden">
                    <div className="gradient-hero h-2" />
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto w-16 h-16 rounded-full bg-[#F59A8F] flex items-center justify-center mb-4 animate-bounce">
                            <Wand2 className="w-8 h-8 text-[#EB4630]" />
                        </div>
                        <CardTitle className="text-3xl font-black font-nunito text-foreground">
                            Find Your Perfect Books!
                        </CardTitle>
                        <CardDescription className="text-base font-nunito">
                            Tell us a bit about your young reader and we'll match them with books they'll love
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-6 pt-4">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="space-y-2">
                                <Label htmlFor="childName" className="text-base font-semibold font-nunito">
                                    Child's Name
                                </Label>
                                <Input
                                    id="childName"
                                    placeholder="Enter your child's name"
                                    value={childName}
                                    onChange={(e) => setChildName(e.target.value)}
                                    className="h-12 rounded-xl border-2 border-muted text-base font-nunito"
                                />
                            </div>


                            <div className="space-y-2">
                                <Label htmlFor="age" className="text-base font-semibold font-nunito">
                                    Age
                                </Label>
                                <Input
                                    id="age"
                                    type="number"
                                    min="3"
                                    max="16"
                                    placeholder="Enter age (3-16)"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="h-12 rounded-xl border-2 border-muted focus:border-coral text-base font-nunito"
                                />
                            </div>

                            <div className="space-y-3">
                                <Label className="text-sm sm:text-base font-semibold font-nunito">
                                    What does your child love? <span className="text-muted-foreground font-normal text-xs sm:text-sm">(select all that apply)</span>
                                </Label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                    {interests.map((interest) => (
                                        <button
                                            key={interest.id}
                                            type="button"
                                            onClick={() => toggleInterest(interest.id)}
                                            className={`
                        flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer
                        ${selectedInterests.includes(interest.id)
                                                    ? "border bg-[#F59A8F] shadow-soft"
                                                    : "border-muted bg-card hover:border-coral/50 hover:bg-coral/5"
                                                }
                      `}
                                        >
                                            <span className="text-xl sm:text-2xl">{interest.emoji}</span>
                                            <span className="font-semibold text-foreground text-sm sm:text-base">{interest.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Submit button */}
                            <Button
                                type="submit"
                                variant="default"
                                size="lg"
                                className="w-full bg-[#F59A8F] hover:bg-[#F07060] cursor-pointer"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 animate-spin" />
                                        Finding Perfect Books...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <BookOpen className="w-5 h-5" />
                                        Discover Books
                                    </span>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default SignUpForm;