


import { SidebarPage, TopMenu } from '../../components';





export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <SidebarPage />

            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen bg-slate-300">

                <TopMenu />

                <div className="px-6 pt-6 ">
                    {children}

                </div>
            </div>
        </>
    );
}