"use client"

import {Plus} from "lucide-react";

import {useNewAccount} from "@/features/accounts/hooks/use-new-account";

import {
    Card,
    CardContent, CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {DataTable} from "@/components/data-table";

import {columns, Payment} from "@/app/(dashboard)/accounts/columns";


const data: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "mar@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "hi@example.com",
    },
];


const AccountsPage = () => {

    const newAccount = useNewAccount();

    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl line-clamp-1">
                        Accounts Page
                    </CardTitle>
                    <Button onClick={newAccount.onOpen} size="sm">
                    <Plus className="size-4 mr-2"/>
                        Add new
                    </Button>
                </CardHeader>
                <CardContent>
                    <DataTable onDelete={() => {}} filterKey="email" columns={columns} data={data} disabled={false}/>
                </CardContent>
            </Card>

        </div>
    )
}

export default AccountsPage;