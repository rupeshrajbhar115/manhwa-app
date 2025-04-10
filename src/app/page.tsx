'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import FlowManager from '@/app/components/FlowManager';



export default function Home() {

  // const router = useRouter();

  // const handleClick = () => {
  //   router.push('/HomePage'); // or whatever your route is
  // };


  // const [imageUrl, setImageUrl] = useState('')
  // const [loading, setLoading] = useState(false)

  // const handleUpload = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   const fileInput = e.currentTarget.querySelector('#image') as HTMLInputElement
  //   const formData = new FormData()
  //   if (fileInput.files?.[0]) {
  //     formData.append('image', fileInput.files[0])
  //     formData.append('username', 'Manikandan');
  //     formData.append('gender', 'Male');
  //     setLoading(true)
  //     const res = await fetch('/api/manhwa', {
  //       method: 'POST',
  //       body: formData,
  //     })
  //     if (!res.ok) {
  //       const errorData = await res.json().catch(() => ({}))
  //       console.error('Server Error:', res.status, errorData)
  //       alert(`Error ${res.status}: ${errorData.error || 'Unknown error'}`)
  //       setLoading(false)
  //       return
  //     }
  //     const data = await res.json()
  //     setImageUrl(data.url)
  //     setLoading(false)
  //   }
  // }

  return (
    <div>
      <FlowManager ></FlowManager>
    </div>
    
    // <div className="p-6">
    //   <form onSubmit={handleUpload} className="space-y-4">
    //     <input type="file" name="image" id="image" accept="image/*" />
    //     <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
    //       Generate Manhwa Image
    //     </button>
    //     <div>
    //     <button onClick={handleClick}>Go to About Page</button>
    //   </div>
    //   </form>

      

    //   {loading && <p>Processing image...</p>}
    //   {imageUrl && (
    //     <div className="mt-6">
    //       <p>🎨 Generated Image:</p>
    //       <img src={imageUrl} alt="Manhwa Style" className="rounded shadow-lg mt-2" />
    //     </div>
    //   )}
    // </div>
  )
}
