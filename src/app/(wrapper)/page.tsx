
import { getServerToken } from "@/lib/utils/get-token";
import DiplomaCard from "@/components/diplomas/diploma-card";
import { cookies } from "next/headers";
import HeaderBar from "@/components/header-bar";
import DiplomaCardsList from "@/components/diplomas/diploma-cards-list";


export default async function Home() {

  const token = await getServerToken();
  console.log("token from page.tsx", token);
  
  function slugify(s: string) {
    return s
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "")
      .replace(/\-+/g, "-")
      .replace(/^\-+|\-+$/g, "");
  }




  return (
        

    <div className="grid W-full  min-h-screen  pb-20 ">
      <main className="flex flex-col w-full px-6">
      <HeaderBar title="Diplomas" />
        <div className="mx-auto w-full py-0">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DiplomaCardsList />
          
          </section>
        </div>
      </main>
    </div>
  );
}
          


