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
                    <h2 className="text-white text-2xl font-bold">Savings</h2>
                    <div className="py-4 grid grid-cols-3 ">
                        <DashboardCard name="Total Savings" description="10.1% since last year" number={2000} />
                    </div>
                    <div className="py-6 grid grid-cols-3 gap-5">
                        <Card className="bg-black border-none">
                            <CardHeader className="text-white">
                                <CardTitle className="text-white">New House</CardTitle>
                                <CardDescription className="text-[#CDCDCD]">10 months left</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Progress value={33} />
                                <div className="flex justify-between items-center py-4">
                                    <h2>$1200</h2>
                                    <h2>$12000</h2>
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