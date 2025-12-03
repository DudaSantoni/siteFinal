"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
    </svg>
);


export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    interface NavLinkProps {
        href: string;
        children: React.ReactNode;
    }

    const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
        <Link
            href={href}
            onClick={() => setIsMenuOpen(false)}
            className="relative pb-1 border-b-2 border-transparent hover:border-[#84aa35] transition-colors duration-200"
        >
            {children}
        </Link>
    );

    return (
        <header className="flex items-center justify-between bg-gray-900/50 py-1 px-10 top-0 w-full z-50 absolute">
            <Link href={"/"}>
                <Image
                    src={"/logo1.png"}
                    alt="logo branca da NextGen"
                    width={100}
                    height={100}
                    className="w-20 h-auto md:w-28"
                    sizes="(max-width: 768px) 80px, 112px"
                />
            </Link>

            <nav className="text-white hidden md:flex gap-6 text-[18px] font-medium">
                <NavLink href={"/"}>Início</NavLink>
                <NavLink href={"/Sobre"}>Sobre</NavLink>
                <NavLink href={"/Cultivo"}>Cultivo</NavLink>
                <NavLink href={"/Colaboradores"}>Colaboradores</NavLink>
            </nav>

            <button
                className="text-white md:hidden z-[60]"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Abrir Menu"
            >
                <MenuIcon className="h-7 w-7" />
            </button>

            <aside
                className={`fixed top-0 right-0 h-full w-full max-w-xs bg-[#242d10]/95 
                            transition-transform duration-300 ease-in-out z-[55] p-5 
                            md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <nav className="flex flex-col gap-6 text-white text-xl font-medium pt-8">
                    <NavLink href={"/"}>Início</NavLink>
                    <NavLink href={"/Sobre"}>Sobre</NavLink>
                    <NavLink href={"/Cultivo"}>Cultivo</NavLink>
                    <NavLink href={"/Colaboradores"}>Colaboradores</NavLink>
                </nav>
            </aside>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Fechar Menu Clicando no Fundo"
                />
            )}
        </header>
    );
}