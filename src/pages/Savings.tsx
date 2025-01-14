import DashboardCard from "@/components/DashboardCard";
import DashboardLayout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import React from "react";

const Savings = () => {
    return (
        <DashboardLayout>
            <main className="w-full px-10 py-10">
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-white text-2xl font-bold">Savings</h2>
                        <button className='bg-white py-3 px-6 md:block hidden rounded-lg text-black font-medium'>Create Savings</button>
                    </div>

                    <div className="py-4 grid grid-cols-3 ">
                        <DashboardCard name="Total Savings" description="10.1% since last year" number={2000} />
                    </div>
                    <div className="py-6 grid grid-cols-3 gap-5">
                        <Card className="bg-black border-none">
                            <CardHeader className="text-white">
                                <CardTitle className="text-white">New House</CardTitle>
                                <CardDescription className="text-[#C1C1C1] text-sm">10 months left</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Progress value={33} className="bg-[#FC4B37]" />
                                <div className="flex justify-between items-center py-4">
                                    <h2 className="text-white">$1200</h2>
                                    <h2 className="text-white">$12000</h2>
                                </div>
                                <div className="flex justify-end">
                                    <span className="text-lg font-bold text-[#FC4B37]">TimeLock</span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-black border-none">
                            <CardHeader className="text-white">
                                <CardTitle className="text-white">New House</CardTitle>
                                <CardDescription className="text-[#C1C1C1] text-sm">10 months left</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Progress value={33} className="bg-[#FC4B37]" />
                                <div className="flex justify-between items-center py-4">
                                    <h2 className="text-white">$1200</h2>
                                    <h2 className="text-white">$12000</h2>
                                </div>
                                <div className="flex justify-end">
                                    <span className="text-lg font-bold text-[#FC4B37]">TimeLock</span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-black border-none">
                            <CardHeader className="text-white">
                                <CardTitle className="text-white">New House</CardTitle>
                                <CardDescription className="text-[#C1C1C1] text-sm">10 months left</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Progress value={33} className="bg-[#FC4B37]" />
                                <div className="flex justify-between items-center py-4">
                                    <h2 className="text-white">$1200</h2>
                                    <h2 className="text-white">$12000</h2>
                                </div>
                                <div className="flex justify-end">
                                    <span className="text-lg font-bold text-[#FC4B37]">TimeLock</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    )
}

export default Savings;