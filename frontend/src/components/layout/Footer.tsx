export function Footer() {
    return (
        <footer className="border-t bg-white py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-[1200px] mx-auto px-4">
                <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
                    © 2026 DevAI. Todos os direitos reservados.
                </p>
                <nav className="flex items-center space-x-4 text-sm font-medium text-gray-500">
                    <a href="#" className="hover:text-brand-primary">Termos</a>
                    <a href="#" className="hover:text-brand-primary">Privacidade</a>
                    <a href="#" className="hover:text-brand-primary">Contato</a>
                </nav>
            </div>
        </footer>
    );
}
