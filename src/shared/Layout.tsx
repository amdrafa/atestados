import { ReactNode } from 'react';
import { Sidebar } from '../components/Sidebar';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    // Pode adicionar estilos globais ou outros elementos do layout aqui
    return (
        <div className='min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app antialiased'>
            <Sidebar />
            <main className='max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8'>{children}</main>
        </div>
    );
}

export default Layout;
