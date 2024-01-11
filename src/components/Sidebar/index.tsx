import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Menu, Search, SquareStack, Users } from 'lucide-react';
import logo from '../../assets/logo-bosch.png';
import { NavItem } from './NavItem';
import { Profile } from '../Profile';
import * as Input from '../Input';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button } from '../Button';
import { motion } from 'framer-motion';

const buttonVariants = {
    pressed: { scale: 0.9 },
};

export function Sidebar() {
    return (
        <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between">
                <div className='w-full flex justify-between items-center mx-1'>
                    <img width={130} src={logo} alt="Bosch logo" />
                    <Collapsible.Trigger asChild className='lg:hidden'>
                        <motion.div whileTap="pressed" variants={buttonVariants}>
                            <Button variant='ghost'>
                                <Menu className='h-6 w-6' />
                            </Button>
                        </motion.div>
                    </Collapsible.Trigger>
                </div>
            </div>

            <Collapsible.Content
                forceMount
                className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
            >
                <Input.Root>
                    <Input.Prefix>
                        <Search className="h-5 w-5 text-zinc-500" />
                    </Input.Prefix>
                    <Input.Control placeholder="Search" />
                </Input.Root>

                <nav className="space-y-0.5">
                    <NavItem title="Home" icon={Home} />
                    <NavItem title="Dashboard" icon={BarChart} />
                    <NavItem title="Projects" icon={SquareStack} />
                    <NavItem title="Tasks" icon={CheckSquare} />
                    <NavItem title="Reporting" icon={Flag} />
                    <NavItem title="Users" icon={Users} />
                </nav>

                <div className="mt-auto flex flex-col gap-6">
                    <nav className="space-y-0.5">
                        <NavItem title="Support" icon={LifeBuoy} />
                        <NavItem title="Settings" icon={Cog} />
                    </nav>

                    <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

                    <Profile />
                </div>
            </Collapsible.Content>
        </Collapsible.Root>
    );
}
