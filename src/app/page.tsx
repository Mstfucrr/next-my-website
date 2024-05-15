import CustomImage from "@/components/image";

const press = [
    "TheNewYorkTimes",
    "TheWashingtonPost",
    "Forbes",
    "Bloomberg",
    "BusinessInsider",
    "TechCrunch",
    "TheGuardian",
    "Wired",
];

export default function Home() {
    return (
        <div className="w-full h-screen flex flex-col gap-y-5 justify-center items-center">
            <h1 className="text-3xl font-bold text-red-400 underline">
                Hello world!
            </h1>
            <div className="relative w-1/2">
                <div className="group flex overflow-hidden p-2 [--gap:3rem] [gap:var(--gap)] flex-row max-w-full [--duration:5s]">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
                            key={i}
                        >
                            {press.map((name) => (
                                <CustomImage
                                    key={name}
                                    src={`https://logo.clearbit.com/${name.toLowerCase()}.com`}
                                    alt={name}
                                    className="w-16 h-16"
                                />
                            ))}
                        </div>
                    ))}
                    <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </div>
    );
}
