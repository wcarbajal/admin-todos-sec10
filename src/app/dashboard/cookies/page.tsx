export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { TabBar } from "@/components";
import { cookies } from 'next/headers'

export const metadata = {
  title: 'Cookies page',
  description: 'SEO title'
}

export default function CookiesPage() {

    const cookieStore = cookies();
    const cookieTab = cookieStore.get('selectedTab')?.value ?? '1'; 
    
  return (
    <div className="grid grid-cols-1 sm:grid-col-2 gap-3">

      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={ +cookieTab } />
      </div>


    </div>
  );
}