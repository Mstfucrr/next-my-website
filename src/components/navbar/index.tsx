"use client";
import { Link } from "@/navigation";
import navbarData, { MenuPath } from "@/static/navigation/navbar-data";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Navbar = () => {
    const t = useTranslations("navItems");
    const [activePath, setActivePath] = useState<MenuPath>(MenuPath.HOME);
    const handleActivePath = (path: MenuPath) => setActivePath(path);
    
    return (
        <nav className="flex justify-center py-4">
            <ul className="flex space-x-6">
                {/* <div className="text-gray-400 hover:text-primary transition duration-300 ease-in-out">
                    <Link href="/">Home</Link>
                </div>
                <div className="text-gray-400 hover:text-primary transition duration-300 ease-in-out">
                    <Link href="/about">About</Link>
                </div> */}
                {navbarData.map((link, index) => (
                    <button
                        key={index}
                        className="text-gray-400 hover:text-primary transition duration-300 ease-in-out"
                        onClick={() => handleActivePath(link.path)}
                    >
                        <Link href={link.path} className="relative my-1 py-2">
                            {t(link.locale)}
                            {activePath === link.path && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute w-full h-1 bg-primary bottom-0 left-0"
                                    style={{ originY: "0 !important" }}
                                />
                            )}
                        </Link>
                    </button>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
