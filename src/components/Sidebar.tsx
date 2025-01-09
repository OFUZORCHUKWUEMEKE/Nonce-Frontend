
const Sidebar = () => {
    return (
        <div className='h-screen bg-[#F4F4F4] w-[20vw] fixed'>
            <div className="py-10 px-10 grid grid-rows-4 gap-6">
                <div className="col-span-1">
                    <h2 className="text-[40px]">Nonce</h2>
                </div>
                <div className="col-span-1 space-y-12 flex-1">
                    <div className="cursor-pointer">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="cursor-pointer">
                        <h2>Transactions</h2>
                    </div>
                    <div className="cursor-pointer">
                        <h2>Savings</h2>
                    </div>
                    <div className="cursor-pointer">
                        <h2>Settings</h2>
                    </div>
                </div>
                <div className="col-span-1">
                    <h2>data</h2>
                </div>
            </div>
        </div>
    )
}

export default Sidebar