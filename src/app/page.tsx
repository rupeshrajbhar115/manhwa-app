// 'use client'

// import { useEffect, useState } from 'react'
// import { supabase } from '@/utils/superbase/client'



// export default function Home() {
//   const [status, setStatus] = useState('Connecting...')

//   useEffect(() => {
//     const checkConnection = async () => {
//       try {
//         // Try a simple call (no tables yet, so just ping the auth API)
//         const { data, error } = await supabase.auth.getSession()

//         if (error) throw error

//         setStatus('✅ Successfully connected to Supabase')
//       } catch (err) {
//         setStatus('❌ Failed to connect to Supabase')
//         console.error(err)
//       }
//     }

//     checkConnection()
//   }, [])

//   return (
//     <main className="p-4">
//       <h1 className="text-2xl font-bold">{status}</h1>
//     </main>
//   )
// }


// app/page.tsx or any React component
'use client'

import { useState } from 'react'

export default function Home() {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    const fileInput = e.currentTarget.querySelector('#image') as HTMLInputElement
    const formData = new FormData()
    if (fileInput.files?.[0]) {
      formData.append('image', fileInput.files[0])
      setLoading(true)
      const res = await fetch('/api/manhwa', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      setImageUrl(data.url)
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <form onSubmit={handleUpload} className="space-y-4">
        <input type="file" name="image" id="image" accept="image/*" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Generate Manhwa Image
        </button>
      </form>

      {loading && <p>Processing image...</p>}
      {imageUrl && (
        <div className="mt-6">
          <p>🎨 Generated Image:</p>
          <img src={imageUrl} alt="Manhwa Style" className="rounded shadow-lg mt-2" />
        </div>
      )}
    </div>
  )
}
