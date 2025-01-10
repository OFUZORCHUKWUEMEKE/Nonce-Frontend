import { AccordionSummary, IconButton } from "@mui/material"

const Sidebar = () => {
    return (
        <div className='h-[100vh] bg-[#F4F4F4] w-[20vw] fixed'>
            <div className="py-10 px-10 grid grid-rows-3 gap-3">
                <div className="col-span-1">
                    <h2 className="text-[40px]">Nonce</h2>
                </div>
                <div className="col-span-1 space-y-12 ">
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
                <div className="col-span-1 place-content-end ">
                    <div className="py-2 mt-3">
                        <hr />
                        <div className="flex space-x-2 items-center">
                            <div className='w-[40px] h-[40px] rounded-full bg-[#E9E5E5]'>
                                <IconButton>
                                    <AccordionSummary />
                                </IconButton>
                            </div>
                            <div className="space-y-1">
                                <h2 className="font-bold text-[#A7A2A2]">Ofuzor</h2>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar