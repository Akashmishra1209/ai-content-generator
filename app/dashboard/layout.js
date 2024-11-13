"use client";
import React, { useState } from 'react';
import Sidenav from './_components/Sidenav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditContext } from '../(context)/UpdateCreditContext';

export default function Layout({ children }) {
    const [credits, setCredits] = useState(0);
    const [updateCreditContextValue, setUpdateCreditContext] = useState();

    return (
        <TotalUsageContext.Provider value={{ credits, setCredits }}>
            <UpdateCreditContext.Provider value={{ updateCreditContextValue, setUpdateCreditContext }}>
                <div className='bg-slate-100 h-screen'>
                    <div className='md:w-64 hidden md:block fixed'>
                        <Sidenav />
                    </div>
                    <div className='md:ml-64'>
                        <Header />
                        {children}
                    </div>
                </div>
            </UpdateCreditContext.Provider>
        </TotalUsageContext.Provider>
    );
}