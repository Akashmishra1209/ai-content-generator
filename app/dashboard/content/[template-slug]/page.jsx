"use client";
import React, { useContext, useEffect, useState } from 'react';
import Formsection from '@/app/dashboard/content/_components/Formsection';
import Outputsection from '@/app/dashboard/content/_components/Outputsection';
import { Templates } from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AIModel';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditContext } from '@/app/(context)/UpdateCreditContext';

export default function CreateNewContent(props) {
    const { updateCreditContextValue, setUpdateCreditContext } = useContext(UpdateCreditContext);
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAIOutput] = useState("");
    const { user } = useUser();
    const { toast } = useToast();
    const { credits, setCredits } = useContext(TotalUsageContext);

    const selectedTemplate = Templates?.find((tool) =>
        tool.slug === props.params["template-slug"]
    );

    useEffect(() => {
        console.log(selectedTemplate);
    }, [selectedTemplate]);

    const generateAIContent = async (formData) => {
        if (credits >= 1000) {
            toast({
                title: "Limit reached",
                description: "You have reached your credit limit.",
            });
            return;
        }

        setLoading(true);
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const finalAIPrompt = JSON.stringify(formData) + "," + selectedPrompt;
        const result = await chatSession.sendMessage(finalAIPrompt);
        const aiResponseText = await result.response.text();

        console.log(aiResponseText);
        setAIOutput(aiResponseText);
        saveInDatabase(formData, aiResponseText, user.primaryEmailAddress.emailAddress);

        // Count words in the new AI output and update credits instantly
        const wordCount = aiResponseText.split(/\s+/).length;
        setCredits((prevCredits) => prevCredits + wordCount);

        // Notify user of success
        toast({
            title: "Success",
            description: "AI content generated successfully",
        });

        setLoading(false);
        setUpdateCreditContext(Date.now()); // Trigger any other component listening to credit updates
    };

    async function saveInDatabase(formData, aiOutput, createdBy) {
        const data = {
            formData: formData,
            aiOutput: aiOutput,
            createdBy: createdBy
        };

        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
            } else {
                console.error("Error saving data:", result);
            }
        } catch (error) {
            console.error("Request failed:", error);
            alert("An error occurred: " + error.message);
        }
    }

    return (
        <div className='p-10'>
            <Link href="/dashboard">
                <Button className=""><ArrowLeft />Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <Formsection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v) => generateAIContent(v)}
                    loading={loading}
                />
                <div className='col-span-2'>
                    <Outputsection aiOutput={aiOutput} />
                </div>
            </div>
            <Toaster />
        </div>
    );
  }