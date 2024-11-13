"use client"
import { Button } from "@/components/ui/button"
import { FileCode } from "lucide-react"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"

export default function Component() {
  const { user } = useUser()
  const [historyelems, setHistoryelems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user?.primaryEmailAddress?.emailAddress) {
          console.error("User email is not available")
          return
        }

        const response = await fetch(`/api/history?userEmail=${user.primaryEmailAddress.emailAddress}`)
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        console.log("Formatted Data:", data)

        setHistoryelems(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    if (user) {
      fetchData()
    }
  }, [user])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">History</h1>
            <p className="text-sm text-gray-500">
              Search your previously generated AI content
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-[1fr_2fr_auto_auto] items-center gap-4 p-4 text-sm font-medium bg-gray-100 text-gray-700">
              <div>TEMPLATE</div>
              <div>AI RESP</div>
              <div>WORDS</div>
              <div>COPY</div>
            </div>
            <div className="divide-y divide-gray-200">
              {historyelems.map((elem, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_2fr_auto_auto] items-center gap-4 p-4 text-sm hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="truncate text-gray-600">
                    {elem.aiOutput ? elem.aiOutput.substring(0, 50) + (elem.aiOutput.length > 50 ? '...' : '') : 'No response available'}
                  </div>
                  <div className="truncate text-gray-600">
                    {elem.aiOutput ? elem.aiOutput.substring(0, 50) + (elem.aiOutput.length > 50 ? '...' : '') : 'No response available'}
                  </div>
                  <div className="text-gray-500">
                    {elem.aiOutput ? elem.aiOutput.trim().split(/\s+/).length : 0}
                  </div>

                  <div>
                    <Button
                      variant="ghost"
                      className="h-8 px-3 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                      onClick={() => navigator.clipboard.writeText(elem.aiOutput)}
                    >
                      Copy
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}