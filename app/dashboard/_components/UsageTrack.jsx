"use client";
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditContext } from '@/app/(context)/UpdateCreditContext';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

export default function UsageTrack() {
    const { user } = useUser();
    const [historyelems, setHistoryelems] = useState([]);
    const { credits, setCredits } = useContext(TotalUsageContext);
    const { updateCreditContextValue, setUpdateCreditContext } = useContext(UpdateCreditContext);

    // Define the fetchData function
    const fetchData = async () => {
        try {
            if (!user?.primaryEmailAddress?.emailAddress) {
                console.error("User email is not available");
                return;
            }

            const response = await fetch(`/api/history?userEmail=${user.primaryEmailAddress.emailAddress}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Formatted Data:", data);

            setHistoryelems(data);
            calculateCredits(data); // Calculate credits based on fetched data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Calculate total word count of all aiOutput fields and update credits
    const calculateCredits = (history) => {
        let totalWords = history.reduce((sum, elem) => {
            const wordCount = elem.aiOutput ? elem.aiOutput.trim().split(/\s+/).length : 0;
            return sum + wordCount;
        }, 0);
        setCredits(totalWords);
    };

    useEffect(() => {
        if (user) {
            fetchData();
        }
    }, [user]);

    useEffect(() => {
        if (updateCreditContextValue && user) {
            fetchData();
        }
    }, [updateCreditContextValue, user]);

    return (
        <div className='m-5'>
            <div className='bg-primary text-white rounded-lg p-3'>
                <h2 className='font-medium'>Credits</h2>
                <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
                    <div className="h-2 bg-white rounded-full" style={{ width: `${(credits / 1000) * 100}%` }}></div>
                </div>
                <h2 className='text-sm my-2'>{credits}/1,000 Words Used</h2>
            </div>
            <Link href="/dashboard/billing">
            <Button variant="secondary" className="w-full my-3 text-primary">Upgrade</Button>
            </Link>
        </div>
    );
}