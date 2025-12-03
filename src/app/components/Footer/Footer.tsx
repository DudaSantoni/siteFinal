"use client";

import Link from 'next/link';
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        if (footerRef.current) {
            const observer = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    document.documentElement.style.setProperty(
                        "--footer-height",
                        `${entry.contentRect.height}px`
                    );
                }
            });
            observer.observe(footerRef.current);

            return () => observer.disconnect();
        }
    }, []);

    return (
        <footer
            ref={footerRef}
            // Alterado de md: para lg: para dar mais espaço em telas médias
            className="bg-[#242d10] text-white w-full 
                       flex flex-col items-center gap-4 py-4 px-3 
                       lg:grid lg:grid-cols-3 lg:items-center lg:gap-x-8 lg:py-6 lg:px-6"
        >
            <p 
                // Alterado de md: para lg:
                className='text-sm text-center lg:text-base lg:justify-self-start lg:text-left'>
                nextgen.suporte.digital@gmail.com
            </p>

            <section className='flex flex-col items-center gap-2'>
                <Image
                    src="/nextgen.png"
                    alt="Logo da NextGen"
                    width={150}
                    height={40}
                    // Alterado de md: para lg:
                    className="w-2/3 max-w-[150px] h-auto lg:w-[15dvw] lg:max-w-none"
                    sizes="(max-width: 1024px) 66vw, 15dvw"
                />
                <p className='text-xs text-center lg:text-sm'>
                    Copyright 2025 © Todos os direitos reservados
                </p>
            </section>

            <nav className='flex gap-4 justify-center lg:justify-self-end'>

                <Link href='https://github.com/' target='_blank' aria-label='Link para o GitHub da NextGen' className='text-white hover:text-gray-400 transition-colors'>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 lg:h-8 lg:w-8" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                </Link>

                <Link href='https://instagram.com/' target='_blank' aria-label='Link para o Instagram da NextGen' className='text-white hover:text-gray-400 transition-colors'>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 lg:h-8 lg:w-8" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                </Link>

                <Link href='https://youtube.com/' target='_blank' aria-label='Link para o YouTube da NextGen' className='text-white hover:text-gray-400 transition-colors'>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 lg:h-8 lg:w-8" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                    </svg>
                </Link>
            </nav>
        </footer>
    );
}