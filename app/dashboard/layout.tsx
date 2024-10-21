import DashboradNavigation from "../components/dashboard/DashboradNavigation";

export default function DashboardLayout() {
  return (
    <div className="w-full flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="sticky top-0 flex h-15 items-center justify-center gap-4 border-b ">
                <nav className="hidden">
                    <DashboradNavigation />
                </nav>
            </header>
        </div>
  )
}
